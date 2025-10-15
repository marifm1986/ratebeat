import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Footer } from '../components/Footer';

import {
  collection,
  DocumentData,
  getCountFromServer,
  getDocs,
  limit,
  orderBy,
  query,
  QueryDocumentSnapshot,
  startAfter,
  Timestamp,
  where,
} from 'firebase/firestore';
import { db } from '../firebase/config';

// If you already have this type elsewhere, use yours and remove this.
export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt?: string;
  content?: string;
  featuredImage?: string;
  tags: string[]; // normalized
  author?: { name?: string; avatar?: string };
  publishedDate?: string; // ISO string
  createdAt?: string;     // ISO string
  readingTime?: number;
};

interface BlogPageData {
  posts: BlogPost[];
  totalPosts: number;
  totalPages: number;
  currentPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

const PAGE_SIZE = 6;
// change to 'publishedDate' if that's your field:
const ORDER_FIELD = 'createdAt';
const STATUS_FILTER = 'Published';

export const AllBlogsPage = () => {
  const [blogData, setBlogData] = useState<BlogPageData>({
    posts: [],
    totalPosts: 0,
    totalPages: 0,
    currentPage: 1,
    hasNextPage: false,
    hasPreviousPage: false,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  // We store the last doc (cursor) per page for reliable back/forward navigation.
  // cursorsRef.current[1] === last doc of page 1, etc. Page 1 uses no startAfter.
  const cursorsRef = useRef<Record<number, QueryDocumentSnapshot<DocumentData> | null>>({});

  const postsCol = useMemo(() => collection(db, 'posts'), []);

  // --- utils ---
  const normalizeTags = (raw: any): string[] => {
    if (!Array.isArray(raw)) return [];
    return raw
      .map((t) => {
        if (typeof t === 'string') return t;
        if (t && typeof t === 'object') return t.name ?? t.slug ?? '';
        return '';
      })
      .filter(Boolean);
  };

  const toISO = (val: any): string | undefined => {
    if (!val) return undefined;
    if (val instanceof Timestamp) return val.toDate().toISOString();
    if (typeof val === 'string') return val;
    // Date or number fallback:
    try {
      const d = new Date(val);
      if (!isNaN(d.getTime())) return d.toISOString();
    } catch { }
    return undefined;
  };

  const mapDocToPost = (d: QueryDocumentSnapshot<DocumentData>): BlogPost => {
    const data = d.data();
    return {
      id: d.id,
      slug: data.slug ?? '',
      title: data.title ?? '',
      excerpt: data.excerpt ?? '',
      content: data.content ?? '',
      featuredImage: data.featuredImage ?? '',
      tags: normalizeTags(data.tags),
      author: {
        name: data.author?.name ?? 'Unknown',
        avatar: data.author?.avatar ?? '/placeholder-avatar.png',
      },
      publishedDate: toISO(data.publishedDate),
      createdAt: toISO(data.createdAt),
      readingTime: typeof data.readingTime === 'number' ? data.readingTime : 5,
    };
  };

  const formatDate = (maybeISO?: string) => {
    const d = maybeISO ? new Date(maybeISO) : undefined;
    const valid = d && !isNaN(d.getTime());
    const date = valid ? d! : new Date();
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  // --- load total count (for totalPages and numbered pagination) ---
  useEffect(() => {
    const loadCount = async () => {
      try {
        const countSnap = await getCountFromServer(
          query(postsCol, where('status', '==', STATUS_FILTER))
        );
        const total = countSnap.data().count ?? 0;
        setBlogData((prev) => {
          const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));
          return {
            ...prev,
            totalPosts: total,
            totalPages,
            hasNextPage: currentPage < totalPages,
            hasPreviousPage: currentPage > 1,
          };
        });
      } catch (err) {
        console.error('Count error:', err);
      }
    };
    loadCount();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postsCol]);

  // Build/ensure cursor for a target page (when user jumps directly to page 3, etc.)
  // We iteratively walk pages from the nearest known cursor.
  const ensureCursorForPage = async (targetPage: number) => {
    if (targetPage <= 1) return null; // first page uses no cursor

    // if we already have the cursor for page-1, done
    if (cursorsRef.current[targetPage - 1] !== undefined) {
      return cursorsRef.current[targetPage - 1] ?? null;
    }

    // find the highest page < targetPage for which we have a cursor
    let startPage = 1;
    for (const k of Object.keys(cursorsRef.current)) {
      const n = Number(k);
      if (n >= 1 && n < targetPage && cursorsRef.current[n] !== undefined) {
        startPage = Math.max(startPage, n + 1);
      }
    }

    // walk from startPage to targetPage-1
    let cursor: QueryDocumentSnapshot<DocumentData> | null =
      startPage === 1 ? null : cursorsRef.current[startPage - 1] ?? null;

    for (let p = startPage; p < targetPage; p++) {
      let qBase = query(
        postsCol,
        where('status', '==', STATUS_FILTER),
        orderBy(ORDER_FIELD, 'desc'),
        limit(PAGE_SIZE)
      );
      if (cursor) {
        qBase = query(
          postsCol,
          where('status', '==', STATUS_FILTER),
          orderBy(ORDER_FIELD, 'desc'),
          startAfter(cursor),
          limit(PAGE_SIZE)
        );
      }

      const snap = await getDocs(qBase);
      const docs = snap.docs;
      const lastDoc = docs.length ? docs[docs.length - 1] : null;
      cursorsRef.current[p] = lastDoc;
      cursor = lastDoc;

      // If we ran out of docs early, break
      if (!lastDoc) break;
    }
    return cursorsRef.current[targetPage - 1] ?? null;
  };

  const loadPage = async (page: number) => {
    setLoading(true);
    setError(null);
    try {
      // prepare cursor
      const startCursor = await ensureCursorForPage(page);

      let qBase = query(
        postsCol,
        where('status', '==', STATUS_FILTER),
        orderBy(ORDER_FIELD, 'desc'),
        limit(PAGE_SIZE)
      );

      if (page > 1 && startCursor) {
        qBase = query(
          postsCol,
          where('status', '==', STATUS_FILTER),
          orderBy(ORDER_FIELD, 'desc'),
          startAfter(startCursor),
          limit(PAGE_SIZE)
        );
      }

      const snap = await getDocs(qBase);
      const docs = snap.docs;
      const posts = docs.map(mapDocToPost);

      // store page cursor (last doc of this page)
      const lastDoc = docs.length ? docs[docs.length - 1] : null;
      cursorsRef.current[page] = lastDoc;

      setBlogData((prev) => {
        const totalPages =
          prev.totalPages || Math.max(1, Math.ceil((prev.totalPosts || 0) / PAGE_SIZE));
        return {
          posts,
          totalPosts: prev.totalPosts,
          totalPages,
          currentPage: page,
          hasNextPage: page < totalPages,
          hasPreviousPage: page > 1,
        };
      });
    } catch (err: any) {
      console.error('Error fetching page:', err);
      setError('Failed to load posts. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPage(currentPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    // guard
    if (page < 1 || page > blogData.totalPages) return;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">

      <main>
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Our Blog
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">Insights & Updates</p>
              <p className="text-lg text-gray-500 mt-4 max-w-2xl mx-auto">
                Stay informed with expert insights, market updates, and practical tips for your home financing journey.
              </p>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="py-16 lg:py-20">
          <div className="container mx-auto px-4">

            {error && (
              <div className="mb-6 rounded-lg border border-red-200 bg-red-50 p-4 text-red-700">
                {error}
              </div>
            )}

            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[...Array(PAGE_SIZE)].map((_, index) => (
                  <div key={index} className="animate-pulse">
                    <div className="bg-gray-200 aspect-[16/10] rounded-2xl mb-4"></div>
                    <div className="h-4 bg-gray-200 rounded mb-2"></div>
                    <div className="h-6 bg-gray-200 rounded mb-4"></div>
                    <div className="h-4 bg-gray-200 rounded mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  </div>
                ))}
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                  {blogData.posts.map((post) => (
                    <article
                      key={post.id}
                      className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group border border-gray-100"
                    >
                      {/* Featured Image */}
                      <div className="aspect-[16/10] overflow-hidden">
                        <img
                          src={post.featuredImage || '/placeholder.jpg'}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        {/* Meta */}
                        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2" />
                            {formatDate(post.publishedDate || post.createdAt)}
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-2" />
                            {post.readingTime ?? 5} min read
                          </div>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {(post.tags ?? []).slice(0, 3).map((tag, i) => (
                            <span
                              key={`${tag}-${i}`}
                              className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Title */}
                        <h2 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-gray-700 transition-colors">
                          {post.title}
                        </h2>

                        {/* Excerpt */}
                        <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                          {post.excerpt}
                        </p>

                        {/* Read More */}
                        <a
                          href={`/blog/${post.slug}`}
                          className="inline-flex items-center text-gray-900 font-medium hover:text-gray-700 transition-colors group/link"
                        >
                          Read More
                          <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                        </a>
                      </div>
                    </article>
                  ))}
                </div>

                {/* Pagination */}
                {blogData.totalPages > 1 && (
                  <div className="flex justify-center items-center space-x-2">
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={!blogData.hasPreviousPage}
                      className="px-4 py-2 text-gray-600 hover:text-gray-900 disabled:text-gray-400 disabled:cursor-not-allowed"
                    >
                      Previous
                    </button>

                    {[...Array(blogData.totalPages)].map((_, index) => {
                      const pageNumber = index + 1;
                      return (
                        <button
                          key={pageNumber}
                          onClick={() => handlePageChange(pageNumber)}
                          className={`px-4 py-2 rounded-lg font-medium transition-colors ${currentPage === pageNumber
                              ? 'bg-gray-900 text-white'
                              : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                            }`}
                        >
                          {pageNumber}
                        </button>
                      );
                    })}

                    <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={!blogData.hasNextPage}
                      className="px-4 py-2 text-gray-600 hover:text-gray-900 disabled:text-gray-400 disabled:cursor-not-allowed"
                    >
                      Next
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </main>

    </div>
  );
};
