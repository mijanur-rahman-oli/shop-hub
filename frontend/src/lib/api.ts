// lib/api.ts
const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

export async function getItems() {
  const res = await fetch(`${API_BASE}/api/items`, {
    cache: 'no-store',
    credentials: 'include', // if you use cookies/auth later
  });
  
  if (!res.ok) throw new Error('Failed to fetch products');
  return res.json();
}