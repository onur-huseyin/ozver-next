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

// İletişim bilgilerini Supabase'den çeken fonksiyon
export async function getContactInfo() {
	const supabase = getSupabaseClient();
	
	try {
		const { data, error } = await supabase
			.from('contact')
			.select('*')
			.single();

		if (error) {
			console.error('İletişim bilgileri çekilirken hata:', error);
			return null;
		}

		return data;
	} catch (error) {
		console.error('İletişim bilgileri çekilirken beklenmeyen hata:', error);
		return null;
	}
}

// Contact form verilerini Supabase'e gönderen fonksiyon
export async function submitContactForm(formData: {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}) {
	const supabase = getSupabaseClient();
	
	try {
		const { data, error } = await supabase
			.from('contact_submissions')
			.insert([formData])
			.select()
			.single();

		if (error) {
			console.error('Contact form gönderilirken hata:', error);
			throw error;
		}

		return { success: true, data };
	} catch (error) {
		console.error('Contact form gönderilirken beklenmeyen hata:', error);
		throw error;
	}
}

// Kategorileri Supabase'den çeken fonksiyon
export async function getCategories() {
	const supabase = getSupabaseClient();
	
	try {
		const { data, error } = await supabase
			.from('categories')
			.select('*')
			.order('created_at', { ascending: true });

		if (error) {
			console.error('Kategoriler çekilirken hata:', error);
			return [];
		}

		return data || [];
	} catch (error) {
		console.error('Kategoriler çekilirken beklenmeyen hata:', error);
		return [];
	}
}

// Belirli bir kategoriye ait ürünleri çeken fonksiyon
export async function getProductsByCategory(categoryId: string) {
	const supabase = getSupabaseClient();
	
	try {
		const { data, error } = await supabase
			.from('products')
			.select('*')
			.eq('category_id', categoryId)
			.order('created_at', { ascending: true });

		if (error) {
			console.error('Ürünler çekilirken hata:', error);
			return [];
		}

		return data || [];
	} catch (error) {
		console.error('Ürünler çekilirken beklenmeyen hata:', error);
		return [];
	}
}

// Kategori bilgisini ID ile çeken fonksiyon
export async function getCategoryById(categoryId: string) {
	const supabase = getSupabaseClient();
	
	try {
		const { data, error } = await supabase
			.from('categories')
			.select('*')
			.eq('id', categoryId)
			.single();

		if (error) {
			console.error('Kategori çekilirken hata:', error);
			return null;
		}

		return data;
	} catch (error) {
		console.error('Kategori çekilirken beklenmeyen hata:', error);
		return null;
	}
}

// Reference logolarını Supabase tablosundan çeken fonksiyon
export async function getReferenceLogos() {
	const supabase = getSupabaseClient();
	
	try {
		const { data, error } = await supabase
			.from('reference_logos')
			.select('*')
			.order('created_at', { ascending: true });

		if (error) {
			console.error('Reference logoları çekilirken hata:', error);
			return [];
		}

		return data || [];
	} catch (error) {
		console.error('Reference logoları çekilirken beklenmeyen hata:', error);
		return [];
	}
}

// Blog yazılarını Supabase'den çeken fonksiyon
export async function getBlogs() {
	const supabase = getSupabaseClient();
	
	try {
		const { data, error } = await supabase
			.from('blogs')
			.select('*')
			.order('published_at', { ascending: false });

		if (error) {
			console.error('Blog yazıları çekilirken hata:', error);
			return [];
		}

		return data || [];
	} catch (error) {
		console.error('Blog yazıları çekilirken beklenmeyen hata:', error);
		return [];
	}
}


