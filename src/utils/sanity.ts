import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: 'en9mykk7', // Your Sanity project ID
  dataset: 'production', // Your Sanity dataset (e.g., production)
  apiVersion: '2022-03-07', // Use current date (or date of your choice)
  useCdn: true, // `false` if you want to ensure fresh data (recommended for dev)
});
