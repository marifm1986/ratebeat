import { useEffect, useMemo, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, Share2, Twitter, Facebook, Linkedin, ArrowRight } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import type { BlogPost } from '../components/models/BlogPost';
import {
  collection, query, where, orderBy, limit,
  getDocs, getDoc, doc, Timestamp,
} from 'firebase/firestore';
import { db } from '../firebase/config';

/** ---------- helpers ---------- */
const toISO = (val: any): string | undefined => {
  if (!val) return undefined;
  if (val instanceof Timestamp) return val.toDate().toISOString();
  if (typeof val === 'string') return val;
  const d = new Date(val);
  return isNaN(d.getTime()) ? undefined : d.toISOString();
};

const normalizeTags = (raw: any): string[] =>
  Array.isArray(raw)
    ? raw
        .map((t) => (typeof t === 'string' ? t : t?.name ?? t?.slug ?? ''))
        .filter(Boolean)
    : [];

const mapDocToPost = (d: any): BlogPost => {
  const data = d.data?.() ?? d;
  return {
    id: d.id ?? data.id ?? '',
    slug: data.slug ?? d.id ?? '',
    title: data.title ?? '',
    content: data.content ?? '',
    featuredImage: data.featuredImage ?? '',
    tags: normalizeTags(data.tags),
    author: {
      name: data.author?.name ?? 'Unknown',
      avatar: data.author?.avatar ?? '/placeholder-avatar.png',
    },
    publishedDate: toISO(data.publishedDate) ?? toISO(data.createdAt) ?? new Date().toISOString(),
    readingTime: typeof data.readingTime === 'number' ? data.readingTime : 5,
    excerpt: data.excerpt ?? '',
  } as any;
};

const formatDate = (iso?: string) =>
  iso ? new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : '';

/** ---------- Firestore ---------- */
// FAST PATH: posts doc id == slug
const getPostBySlugFast = async (slug: string) => {
  const snap = await getDoc(doc(db, 'posts', slug));
  return snap.exists() ? mapDocToPost(snap) : null;
};

// FALLBACK: slugs/{slug} -> {postId}
const getPostBySlugViaMapping = async (slug: string) => {
  const mapSnap = await getDoc(doc(db, 'slugs', slug));
  if (!mapSnap.exists()) return null;
  const postId = mapSnap.data()?.postId;
  if (!postId) return null;
  const postSnap = await getDoc(doc(db, 'posts', postId));
  return postSnap.exists() ? mapDocToPost(postSnap) : null;
};

// LAST RESORT (current way)
const getPostBySlugQuery = async (slug: string) => {
  const postsRef = collection(db, 'posts');
  const q = query(postsRef, where('slug', '==', slug), limit(1));
  const snap = await getDocs(q);
  return snap.empty ? null : mapDocToPost(snap.docs[0]);
};

const fetchRecent = async (excludeSlug?: string, take = 4) => {
  const postsRef = collection(db, 'posts');
  const q = query(postsRef, orderBy('publishedDate', 'desc'), limit(take + 2));
  const snap = await getDocs(q);
  let list = snap.docs.map(mapDocToPost);
  if (excludeSlug) list = list.filter((p) => p.slug !== excludeSlug);
  return list.slice(0, take);
};

const fetchRelated = async (tags: string[], excludeSlug?: string, take = 3) => {
  if (!tags?.length) return [];
  const postsRef = collection(db, 'posts');
  try {
    const q = query(
      postsRef,
      where('tags', 'array-contains-any', tags.slice(0, 10)),
      orderBy('publishedDate', 'desc'),
      limit(take + 4)
    );
    const snap = await getDocs(q);
    let list = snap.docs.map(mapDocToPost);
    if (excludeSlug) list = list.filter((p) => p.slug !== excludeSlug);
    return list.slice(0, take);
  } catch {
    // If index missing or tags not string[], just return empty quickly
    return [];
  }
};

/** ---------- Component ---------- */
export const SingleBlogPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const [post, setPost] = useState<any | null>(null);
  const [recentPosts, setRecentPosts] = useState<BlogPost[]>([]);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [loadingPost, setLoadingPost] = useState(true);
  const [loadingSidebars, setLoadingSidebars] = useState(true);

  // Stage 1: fetch ONLY the post, render hero ASAP.
  useEffect(() => {
    let alive = true;
    (async () => {
      if (!slug) return;
      setLoadingPost(true);
      setLoadingSidebars(true);

      // Try fastest strategies first
      const loaded =
        (await getPostBySlugFast(slug)) ??
        (await getPostBySlugViaMapping(slug)) ??
        (await getPostBySlugQuery(slug)) as any;

      if (!alive) return;

      if (!loaded) {
        setLoadingPost(false);
        navigate('/blog');
        return;
      }

      setPost(loaded);
      setLoadingPost(false);

      // Stage 2: fire-and-forget sidebars
      (async () => {
        const [recent, relatedRaw] = await Promise.all([
          fetchRecent(loaded.slug, 4),
          fetchRelated(loaded.tags ?? [], loaded.slug, 3),
        ]);
        const related = relatedRaw?.length ? relatedRaw : recent.slice(0, 3); // cheap backfill
        if (!alive) return;
        setRecentPosts(recent.slice(0, 3));
        setRelatedPosts(related.slice(0, 3));
        setLoadingSidebars(false);
      })();
    })();
    return () => {
      alive = false;
    };
  }, [slug, navigate]);

  const shareUrl = useMemo(() => (typeof window !== 'undefined' ? window.location.href : ''), []);
  const shareTitle = post?.title || '';

  const socialShares = [
    {
      name: 'Twitter',
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`,
      color: 'hover:bg-blue-500 hover:text-white',
      bgColor: 'bg-blue-500',
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      color: 'hover:bg-blue-700 hover:text-white',
      bgColor: 'bg-blue-700',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      color: 'hover:bg-blue-800 hover:text-white',
      bgColor: 'bg-blue-800',
    },
  ];

  if (loadingPost) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto animate-pulse">
              <div className="h-96 bg-gray-200 rounded-3xl mb-8" />
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 space-y-4">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="h-4 bg-gray-200 rounded" />
                  ))}
                </div>
                <div className="space-y-6">
                  <div className="h-32 bg-gray-200 rounded-2xl" />
                  <div className="h-48 bg-gray-200 rounded-2xl" />
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!post) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        {/* HERO: eager image for LCP */}
        <div className="relative h-[70vh] min-h-[500px] overflow-hidden">
          <img
            src={post.featuredImage}
            alt={post.title}
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <div className="container mx-auto px-4 pb-16">
              <div className="max-w-4xl mx-auto text-center text-white">
                <Link
                  to="/blog"
                  className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors group"
                >
                  <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                  Back to All Blogs
                </Link>

                <div className="flex justify-center flex-wrap gap-2 mb-6">
                  {(post.tags ?? []).slice(0, 3).map((tag:any, i:any) => (
                    <span
                      key={`${tag}-${i}`}
                      className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full border border-white/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight drop-shadow-lg">
                  {post.title}
                </h1>

                <div className="flex items-center justify-center space-x-8 text-white/90">
                  <div className="flex items-center space-x-3">
                    <img
                      src={post.author?.avatar}
                      alt={post.author?.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-white/30"
                      width={48}
                      height={48}
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="font-medium">{post.author?.name}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(post.publishedDate)}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{post.readingTime} min read</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CONTENT + SIDEBARS */}
        <div className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
                {/* Main */}
                <div className="lg:col-span-2">
                  <article className="bg-white rounded-3xl shadow-lg p-8 lg:p-12">
                    <div className="flex items-center justify-between mb-8 pb-8 border-b border-gray-100">
                      <div className="flex items-center space-x-4">
                        <Share2 className="w-5 h-5 text-gray-400" />
                        <span className="text-gray-600 font-medium">Share this article:</span>
                        <div className="flex items-center space-x-3">
                          {socialShares.map((s) => {
                            const Icon = s.icon;
                            return (
                              <a
                                key={s.name}
                                href={s.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`p-3 rounded-full bg-gray-100 text-gray-600 transition-all duration-300 ${s.color}`}
                                aria-label={`Share on ${s.name}`}
                              >
                                <Icon className="w-4 h-4" />
                              </a>
                            );
                          })}
                        </div>
                      </div>
                    </div>

                    <div
                      className="prose prose-lg max-w-none
                      prose-headings:text-gray-900 prose-headings:font-bold
                      prose-h2:text-3xl prose-h3:text-2xl
                      prose-p:text-gray-700 prose-p:leading-relaxed
                      prose-a:text-blue-600 hover:prose-a:text-blue-800
                      prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-blue-50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-lg"
                      dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    <div className="my-12 text-center">
                      <div className="inline-flex items-center space-x-4">
                        <div className="w-16 h-px bg-gradient-to-r from-transparent to-gray-300" />
                        <div className="w-2 h-2 bg-gray-400 rounded-full" />
                        <div className="w-2 h-2 bg-gray-300 rounded-full" />
                        <div className="w-2 h-2 bg-gray-200 rounded-full" />
                        <div className="w-16 h-px bg-gradient-to-l from-transparent to-gray-300" />
                      </div>
                    </div>

                    <div className="pt-8 border-t border-gray-100">
                      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <span className="text-gray-600 font-medium">Enjoyed this article? Share it:</span>
                          <div className="flex items-center gap-3">
                            {socialShares.map((s) => {
                              const Icon = s.icon;
                              return (
                                <a
                                  key={s.name}
                                  href={s.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={`p-3 rounded-full ${s.bgColor} text-white hover:scale-110 transition-all duration-300 shadow-lg`}
                                  aria-label={`Share on ${s.name}`}
                                >
                                  <Icon className="w-4 h-4" />
                                </a>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>

                {/* Sidebar */}
                <div className="space-y-8">
                  {/* Recent */}
                  <div className="bg-white rounded-2xl shadow-lg p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Recent Posts</h3>
                    <div className="space-y-4">
                      {loadingSidebars
                        ? Array.from({ length: 3 }).map((_, i) => (
                            <div key={i} className="flex gap-4 animate-pulse">
                              <div className="w-16 h-16 bg-gray-200 rounded-lg" />
                              <div className="flex-1 space-y-2">
                                <div className="h-4 bg-gray-200 rounded" />
                                <div className="h-3 bg-gray-100 rounded w-1/2" />
                              </div>
                            </div>
                          ))
                        : recentPosts.map((rp) => (
                            <Link key={rp.id} to={`/blog/${rp.slug}`} className="block group">
                              <div className="flex gap-4">
                                <img
                                  src={rp.featuredImage}
                                  alt={rp.title}
                                  className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                                  width={64}
                                  height={64}
                                  loading="lazy"
                                  decoding="async"
                                />
                                <div className="flex-1 min-w-0">
                                  <h4 className="text-sm font-semibold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
                                    {rp.title}
                                  </h4>
                                  <p className="text-xs text-gray-500 mt-1">{formatDate(rp.publishedDate!)}</p>
                                </div>
                              </div>
                            </Link>
                          ))}
                    </div>
                  </div>

                  {/* Tags (static) */}
                  <div className="bg-white rounded-2xl shadow-lg p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Popular Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {['Mortgage Rates', 'Home Buying', 'Refinancing', 'First-Time Buyers', 'Market Trends', 'Credit Score'].map(
                        (tag, i) => (
                          <span
                            key={i}
                            className="px-3 py-2 bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-700 text-sm font-medium rounded-full cursor-pointer transition-colors"
                          >
                            #{tag.replace(/\s+/g, '')}
                          </span>
                        )
                      )}
                    </div>
                  </div>

                  {/* Newsletter (demo) */}
                  <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl shadow-lg p-6 text-white">
                    <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
                    <p className="text-blue-100 mb-4 text-sm leading-relaxed">
                      Get the latest mortgage insights and market updates delivered to your inbox.
                    </p>
                    <div className="space-y-3">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                      />
                      <button className="w-full bg-white text-blue-600 font-semibold py-3 rounded-lg hover:bg-blue-50 transition-colors">
                        Subscribe
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* You May Also Like */}
              <div className="bg-white py-16 lg:py-20 border-t border-gray-100 mt-16 rounded-2xl">
                <div className="text-center mb-12">
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">You May Also Like</h2>
                  <p className="text-gray-600 text-lg">Discover more insights and tips for your home financing journey</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {(loadingSidebars ? Array.from({ length: 3 }) : relatedPosts).map((item:any, idx) =>
                    loadingSidebars ? (
                      <div key={idx} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden animate-pulse">
                        <div className="aspect-[16/10] bg-gray-200" />
                        <div className="p-6 space-y-3">
                          <div className="h-4 bg-gray-200 rounded w-1/3" />
                          <div className="h-5 bg-gray-200 rounded w-2/3" />
                          <div className="h-4 bg-gray-100 rounded w-full" />
                        </div>
                      </div>
                    ) : (
                      <article
                        key={item.id}
                        className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100"
                      >
                        <div className="aspect-[16/10] overflow-hidden">
                          <img
                            src={item.featuredImage}
                            alt={item.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                        <div className="p-6">
                          <div className="flex items-center text-sm text-gray-500 mb-3">
                            <Calendar className="w-4 h-4 mr-2" />
                            {formatDate(item.publishedDate!)}
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">{item.excerpt}</p>
                          <Link
                            to={`/blog/${item.slug}`}
                            className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors group/link"
                          >
                            Read More
                            <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                      </article>
                    )
                  )}
                </div>

                <div className="text-center mt-12">
                  <Link
                    to="/blog"
                    className="inline-flex items-center bg-gray-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 shadow-lg group"
                  >
                    <ArrowLeft className="w-5 h-5 mr-3 group-hover:-translate-x-1 transition-transform" />
                    Back to All Blogs
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
