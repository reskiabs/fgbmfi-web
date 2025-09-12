import api from "@/lib/helper/api";
import { ActivityDetail, ActivityDetailResponse } from "@/types/activity";
import { useEffect, useState } from "react";

export default function useActivityDetail(slug: string) {
  const [activity, setActivity] = useState<ActivityDetail | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchActivity = async () => {
      try {
        const res = await api.get<ActivityDetailResponse>(
          `/activities/${slug}`
        );
        if (res.data.success) {
          setActivity(res.data.data);
        } else {
          setError("Failed to fetch activity detail");
        }
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchActivity();
  }, [slug]);

  return { activity, loading, error };
}
