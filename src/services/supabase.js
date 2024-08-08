
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://sanqokbijqxjjesiutkl.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNhbnFva2JpanF4amplc2l1dGtsIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyMjY3NDk3OCwiZXhwIjoyMDM4MjUwOTc4fQ.SRzWH40a3IKH9OqXgzREmkF7Sy6Jt0-f6u8T06WCsdg"
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;