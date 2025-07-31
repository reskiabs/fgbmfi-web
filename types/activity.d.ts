export interface ActivityMeta {
  title: string;
  description: string;
  tags: string;
}

export interface Activity {
  id: number;
  title: string;
  slug: string;
  status: number;
  content: string;
  image_url: string;
  image_names: string;
  meta: ActivityMeta;
  created_at: string;
  updated_at: string;
  full_images_url: string[];
}

export interface ActivitiesResponse {
  success: boolean;
  data: Activity[];
  message: string | null;
}

export interface ActivityDetailResponse {
  success: boolean;
  data: Activity;
  message: string | null;
}
