import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://kjvywpcvisxkiqltklni.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtqdnl3cGN2aXN4a2lxbHRrbG5pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI3ODU3ODEsImV4cCI6MjA2ODM2MTc4MX0.k2932aWxXGIEFGdaR-iZydNEIqXaPZcTlBpUd-qAhpk"
);
