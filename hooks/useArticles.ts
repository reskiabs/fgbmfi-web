import api from "@/lib/helper/api";
import { useEffect, useState } from "react";

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

const useArticles = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await api.get("/articles");
        setArticles(response.data.data);
      } catch {
        setError("Failed to fetch articles");
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  return { articles, loading, error };
};

export default useArticles;
