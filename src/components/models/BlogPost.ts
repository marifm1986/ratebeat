export interface Tag {
    id: number | string
    name: string
    slug: string
}
export interface Category {
    id: number | string
    name: string
    slug: string
}

export interface BlogPost {
    id: number;
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    featuredImage: string;
    author: {
        name: string;
        avatar: string;
    };
    publishedDate: string;
    readingTime: number;
    tags: Tag[]
    category: Category;
    isFeatured?: boolean;
    status: 'Published' | 'Draft',
    sharableUrl?: string
}
