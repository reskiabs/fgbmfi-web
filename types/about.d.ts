export interface AboutUsItem {
  id: number;
  title: string;
  status: number;
  content: string;
  created_at: string;
  updated_at: string;
}

export interface AboutUsResponse {
  success: boolean;
  data: AboutUsItem[];
  message: string | null;
}
