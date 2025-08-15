"use client";

import api from "@/lib/helper/api";
import { useEffect, useState } from "react";

export interface ContactItem {
  id: number;
  type: number;
  status: number;
  label: string;
  link: string;
}

export default function useContactUs() {
  const [contacts, setContacts] = useState<ContactItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        setLoading(true);
        const res = await api.get<{ success: boolean; data: ContactItem[] }>(
          "/contact-us"
        );
        if (res.data.success) {
          setContacts(res.data.data);
        } else {
          setError("Failed to fetch contact data");
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

    fetchContacts();
  }, []);

  return { contacts, loading, error };
}
