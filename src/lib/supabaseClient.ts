import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import type { SliderImage } from "./types";

let cachedClient: SupabaseClient | null = null;

export function getSupabaseClient(): SupabaseClient {
	if (cachedClient) return cachedClient;
	const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string | undefined;
	const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string | undefined;
	if (!supabaseUrl || !supabaseAnonKey) {
		throw new Error(
			"Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY. Set them in .env.local"
		);
	}
	cachedClient = createClient(supabaseUrl, supabaseAnonKey);
	return cachedClient;
}

// Slider görsellerini Supabase Storage'dan çeken fonksiyon
export async function getSliderImages(): Promise<SliderImage[]> {
	const supabase = getSupabaseClient();
	
	try {
		const { data, error } = await supabase.storage
			.from('slider')
			.list('', {
				limit: 100,
				offset: 0,
				sortBy: { column: 'name', order: 'asc' }
			});

		if (error) {
			console.error('Slider görselleri çekilirken hata:', error);
			return [];
		}

		// Sadece resim dosyalarını filtrele
		const imageFiles = data?.filter(file => 
			file.name.match(/\.(jpg|jpeg|png|webp|gif)$/i)
		) || [];

		// Her dosya için public URL oluştur
		const sliderImages: SliderImage[] = imageFiles.map(file => ({
			id: file.id,
			name: file.name,
			url: supabase.storage
				.from('slider')
				.getPublicUrl(file.name).data.publicUrl,
			alt: file.name.replace(/\.[^/.]+$/, ''), // Dosya uzantısını kaldır
			created_at: file.created_at
		}));

		return sliderImages;
	} catch (error) {
		console.error('Slider görselleri çekilirken beklenmeyen hata:', error);
		return [];
	}
}


