import api from "@/lib/helper/api";
import { useEffect, useState } from "react";

export interface OrganisationItem {
  id: number;
  image_url: string;
  image_name: string;
  status: number;
  created_at: string;
  updated_at: string;
  full_image_url: string;
}

interface OrganisationResponse {
  success: boolean;
  data: OrganisationItem[];
  message: string | null;
}

const useOrganisation = () => {
  const [organisation, setOrganisation] = useState<OrganisationItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOrganisation = async () => {
      try {
        const response = await api.get<OrganisationResponse>("/organisation");
        setOrganisation(response.data.data);
      } catch {
        setError("Gagal memuat struktur organisasi.");
      } finally {
        setLoading(false);
      }
    };

    fetchOrganisation();
  }, []);

  return { organisation, loading, error };
};

export default useOrganisation;
