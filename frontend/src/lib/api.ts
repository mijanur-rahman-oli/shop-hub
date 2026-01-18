const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

export interface Item {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

export async function getItems(): Promise<Item[]> {
  const res = await fetch(`${API_BASE}/items`, { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch items');
  return res.json();
}

export async function getItem(id: string): Promise<Item | null> {
  const res = await fetch(`${API_BASE}/items/${id}`, { cache: 'no-store' });
  if (!res.ok) return null;
  return res.json();
}

export async function createItem(item: Omit<Item, 'id'>): Promise<Item> {
  const res = await fetch(`${API_BASE}/items`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(item)
  });
  if (!res.ok) throw new Error('Failed to create item');
  return res.json();
}