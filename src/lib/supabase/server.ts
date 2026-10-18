import { createClient } from "@supabase/supabase-js";

// Szerver oldali (API route / Server Component) Supabase kliens.
// A service role key SOHA nem kerülhet a böngészőbe / NEXT_PUBLIC_ változóba!
const supabaseUrl = process.env.SUPABASE_URL ?? "";
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY ?? "";

export function getSupabaseServerClient() {
  if (!supabaseUrl || !supabaseServiceRoleKey) {
    throw new Error(
      "Supabase nincs konfigurálva: hiányzik a SUPABASE_URL vagy SUPABASE_SERVICE_ROLE_KEY env változó (lásd .env.example)."
    );
  }

  return createClient(supabaseUrl, supabaseServiceRoleKey, {
    auth: { persistSession: false },
  });
}
