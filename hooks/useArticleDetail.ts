import { ArticleDetail } from "@/types/article";
import axios from "axios";
import { useEffect, useState } from "react";

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
