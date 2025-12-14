import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://uigwbeaxpsonnoohlpjb.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVpZ3diZWF4cHNvbm5vb2hscGpiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM1OTg2ODksImV4cCI6MjA2OTE3NDY4OX0.WlZ-jK4CSG5Um_AdE644cYmY8M_61Bio6WXXhnafzyo'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)