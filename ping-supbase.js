const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

async function pingSupabase() {
    try {
        const { data, error } = await supabase.from('products').select('id');
        if (error) {
            console.error('Error pinging Supabase:', error);
        } else {
            console.log('Supabase ping successful!');
        }
    } catch (error) {
        console.error('Error pinging Supabase:', error);
    }
}

pingSupabase();