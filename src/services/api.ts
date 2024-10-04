import { createClient } from '@supabase/supabase-js'
import { AppSettings } from '../config/settings'

// Create a single supabase client for interacting with your database
export const supabase = createClient(
    AppSettings.url, 
    AppSettings.key
)
