import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hkcmoxatstskaymnrbeh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhrY21veGF0c3Rza2F5bW5yYmVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY4MDc1ODksImV4cCI6MjAzMjM4MzU4OX0.4OIbmvMmeBcOIFm3Bh57A-eiY2n0aIlo4VIGLaqwphc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
