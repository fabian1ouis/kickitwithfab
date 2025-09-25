export interface AdminUser {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'editor';
  createdAt: string;
}

export interface BlogPostForm {
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  tags: string[];
  authorId: string;
  featured: boolean;
  trending: boolean;
  status: 'draft' | 'published' | 'archived';
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
    slug: string;
  };
}

export interface SEOData {
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  slug: string;
  ogImage?: string;
  canonicalUrl?: string;
}

export interface AdminStats {
  totalPosts: number;
  publishedPosts: number;
  draftPosts: number;
  totalViews: number;
  totalComments: number;
  monthlyViews: number;
}