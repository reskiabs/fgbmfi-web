import api from "@/lib/helper/api";
import { AboutUsItem, AboutUsResponse } from "@/types/about";
import { useEffect, useState } from "react";

export default function useAboutUs() {
  const [aboutItems, setAboutItems] = useState<AboutUsItem[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAboutUs = async () => {
      try {
        const response = await api.get<AboutUsResponse>("/about-us");
        if (response.data.success) {
          setAboutItems(response.data.data);
        } else {
          setError("Gagal memuat data");
        }
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Unknown error");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchAboutUs();
  }, []);

  return { aboutItems, loading, error };
}
