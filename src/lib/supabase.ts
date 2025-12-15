import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://fewtkjrytyiujirwbnyj.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZld3RranJ5dHlpdWppcndibnlqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU3OTQxMzEsImV4cCI6MjA4MTM3MDEzMX0.R0VeAa15FjI2n6wsaTAg3XpBPqdj0NanuVoYS4YFYqU'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)