// config.js
const SUPABASE_CONFIG = {
    URL: "https://mehycwkqiwaeumauaanh.supabase.co",
    ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1laHljd2txaXdhZXVtYXVhYW5oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMxMTQ5NTIsImV4cCI6MjA3ODY5MDk1Mn0.IJTtLNRhXsasaw-d8j_kIjKbZRTcvlM5f8zCzDEXGUA"
};

// دالة للحصول على إعدادات Supabase
function getSupabaseConfig() {
    return {
        supabaseUrl: SUPABASE_CONFIG.URL,
        supabaseKey: SUPABASE_CONFIG.ANON_KEY
    };
}
