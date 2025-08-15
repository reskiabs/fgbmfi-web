"use client";

import api from "@/lib/helper/api";
import { useEffect, useState } from "react";

export interface GoogleTagManagerConfig {
  id: number;
  label: string;
  key: string;
  created_at: string;
  updated_at: string;
}

export default function useGoogleTagManager() {
  const [gtmConfig, setGtmConfig] = useState<GoogleTagManagerConfig | null>(
    null
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        setLoading(true);
        const res = await api.get<{
          success: boolean;
          data: GoogleTagManagerConfig;
        }>("/configs/google_tag_manager");

        if (res.data.success) {
          setGtmConfig(res.data.data);
        } else {
          setError("Failed to fetch Google Tag Manager config");
        }
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Something went wrong");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchConfig();
  }, []);

  return { gtmConfig, loading, error };
}
