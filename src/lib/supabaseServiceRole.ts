import { createClient, type SupabaseClient } from "@supabase/supabase-js";

let cachedServiceClient: SupabaseClient | null = null;

export function getServiceRoleClient(): SupabaseClient {
	if (cachedServiceClient) return cachedServiceClient;
	const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string | undefined;
	const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY as string | undefined;
	if (!supabaseUrl || !serviceRoleKey) {
		throw new Error("Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY on server");
	}
	cachedServiceClient = createClient(supabaseUrl, serviceRoleKey);
	return cachedServiceClient;
}


