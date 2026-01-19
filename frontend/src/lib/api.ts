// frontend/lib/api.ts

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

export interface Item {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category?: string;
  brand?: string;
  stock?: number;
  rating?: number;
  createdAt?: string;
}

/**
 * Fetch all items from the API
 */
export async function getItems(): Promise<Item[]> {
  try {
    const res = await fetch(`${API_BASE}/items`, { 
      cache: 'no-store',
      next: { revalidate: 0 } 
    });
    
    if (!res.ok) {
      console.error('Failed to fetch items:', res.status, res.statusText);
      throw new Error('Failed to fetch items');
    }
    
    return res.json();
  } catch (error) {
    console.error('Error fetching items:', error);
    return [];
  }
}

/**
 * Fetch a single item by ID
 */
export async function getItem(id: string): Promise<Item | null> {
  try {
    const res = await fetch(`${API_BASE}/items/${id}`, { 
      cache: 'no-store',
      next: { revalidate: 0 }
    });
    
    if (!res.ok) {
      if (res.status === 404) {
        console.log(`Item with id ${id} not found`);
        return null;
      }
      console.error('Failed to fetch item:', res.status, res.statusText);
      return null;
    }
    
    return res.json();
  } catch (error) {
    console.error('Error fetching item:', error);
    return null;
  }
}

/**
 * Create a new item
 */
export async function createItem(item: Omit<Item, 'id'>): Promise<Item> {
  try {
    const res = await fetch(`${API_BASE}/items`, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify(item)
    });
    
    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      console.error('Failed to create item:', res.status, errorData);
      throw new Error(errorData.error || 'Failed to create item');
    }
    
    return res.json();
  } catch (error) {
    console.error('Error creating item:', error);
    throw error;
  }
}

/**
 * Check API health
 */
export async function checkHealth(): Promise<{ status: string; timestamp: string } | null> {
  try {
    const res = await fetch(`${API_BASE.replace('/api', '')}/health`, {
      cache: 'no-store'
    });
    
    if (!res.ok) {
      return null;
    }
    
    return res.json();
  } catch (error) {
    console.error('Health check failed:', error);
    return null;
  }
}