"use client";

import api from "@/lib/helper/api";
import { useEffect, useState } from "react";
import { ActivitiesResponse, Activity } from "../types/activity";

export default function useActivities() {
  const [activities, setActivities] = useState<Activity[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await api.get<ActivitiesResponse>("/activities");
        if (response.data.success) {
          setActivities(response.data.data);
        } else {
          setError("Failed to fetch activity data");
        }
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchActivities();
  }, []);

  return { activities, loading, error };
}
