import api from "@/lib/helper/api";
import { Testimony } from "@/types/testimony";
import { useEffect, useState } from "react";

const useTestimonies = () => {
  const [testimonies, setTestimonies] = useState<Testimony[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTestimonies = async () => {
      try {
        const response = await api.get<{ success: boolean; data: Testimony[] }>(
          "/testimonies"
        );
        setTestimonies(response.data.data);
      } catch {
        setError("Failed to fetch testimonies");
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonies();
  }, []);

  return { testimonies, loading, error };
};

export default useTestimonies;
