// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://xfaavavnvxychetdnpdc.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhmYWF2YXZudnh5Y2hldGRucGRjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU3MTgyNDIsImV4cCI6MjA1MTI5NDI0Mn0.kAxSTNb1ZkI0RnPI9cnk36vPeKrdeX14Q2BjQSiKHQE";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);