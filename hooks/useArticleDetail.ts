import axios from "axios";
import { useEffect, useState } from "react";

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
  recommendations: ArticleDetail[]; // if needed
}

const useArticleDetail = (slug: string) => {
  const [article, setArticle] = useState<ArticleDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(
          `https://fgbmfi.tiofelix.dev/api/articles/${slug}`
        );
        setArticle(response.data.data);
      } catch {
        setError("Gagal memuat detail artikel.");
      } finally {
        setLoading(false);
      }
    };

    if (slug) fetchArticle();
  }, [slug]);

  return { article, loading, error };
};

export default useArticleDetail;
