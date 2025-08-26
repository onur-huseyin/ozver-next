// Supabase Storage'dan gelen dosya tipi
export interface StorageFile {
  id: string;
  name: string;
  updated_at: string;
  created_at: string;
  last_accessed_at: string;
  metadata: {
    eTag: string;
    size: number;
    mimetype: string;
    cacheControl: string;
    lastModified: string;
    contentLength: number;
    httpStatusCode: number;
  };
}

// Slider görsel tipi
export interface SliderImage {
  id: string;
  name: string;
  url: string;
  alt: string;
  created_at: string;
}

// Supabase API response tipleri
export interface SupabaseResponse<T> {
  data: T | null;
  error: any;
}

// Storage bucket tipi
export interface StorageBucket {
  id: string;
  name: string;
  owner: string;
  created_at: string;
  updated_at: string;
  public: boolean;
}
