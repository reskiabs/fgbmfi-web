interface ArticleMeta {
  title: string;
  description: string;
  tags: string;
}

export interface Article {
  id: number;
  title: string;
  slug: string;
  status: number;
  content: string;
  image_url: string;
  image_name: string;
  meta: ArticleMeta;
  created_at: string;
  updated_at: string;
  full_image_url: string;
}

export interface ArticleTag {
  id: number;
  name: string;
  slug: string;
}

export interface ArticleDetail {
  id: number;
  title: string;
  slug: string;
  status: number;
  content: string;
  image_url: string;
  image_name: string;
  meta: {
    title: string;
    description: string;
    tags: string;
  };
  created_at: string;
  updated_at: string;
  full_image_url: string;
  tags: ArticleTag[];
  recommendations: ArticleDetail[];
}
