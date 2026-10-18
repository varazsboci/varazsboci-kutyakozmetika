"use client";

import { createClient } from "@supabase/supabase-js";

// Böngészőben (kliens oldalon) használható Supabase kliens – pl. az admin
// bejelentkező formhoz. A NEXT_PUBLIC_ előtagú env változóknak léteznie kell
// build időben; amíg nincs valós Supabase projekt, ezek üresen maradhatnak,
// és az auth funkciók egyszerűen nem fognak működni (de az oldal elindul).
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

export const supabaseBrowserClient = createClient(
  supabaseUrl || "https://placeholder.supabase.co",
  supabaseAnonKey || "placeholder-anon-key"
);

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);
