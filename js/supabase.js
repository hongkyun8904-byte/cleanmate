// js/supabase.js

const SUPABASE_URL = "https://YOUR-PROJECT.supabase.co";
const SUPABASE_ANON_KEY = "YOUR-ANON-KEY";

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function saveOrderToSupabase(payload) {
  try {
    const { error } = await supabaseClient
      .from("orders")
      .insert([payload]);

    if (error) {
      console.error("Supabase 저장 실패:", error.message);
    } else {
      console.log("Supabase 저장 성공");
    }
  } catch (e) {
    console.error("Supabase 저장 중 예외:", e);
  }
}
