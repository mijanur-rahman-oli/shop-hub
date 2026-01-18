// frontend/app/items/[id]/not-found.tsx
import Link from 'next/link';
import { ShoppingBag, Home, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <ShoppingBag className="h-24 w-24 text-gray-300 mx-auto mb-4" />
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Product Not Found
          </h2>
          <p className="text-gray-600">
            Sorry, we couldn't find the product you're looking for. It may have been removed or doesn't exist.
          </p>
        </div>
        
        <div className="space-y-3">
          <Link 
            href="/items"
            className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
          >
            <Search className="h-5 w-5" />
            Browse All Products
          </Link>
          
          <Link 
            href="/"
            className="w-full inline-flex items-center justify-center gap-2 bg-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-300 transition font-semibold"
          >
            <Home className="h-5 w-5" />
            Go to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}