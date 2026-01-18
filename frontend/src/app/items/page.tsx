
import { getItems } from '../../lib/api';
import Link from 'next/link';
import Image from 'next/image';
import { ShoppingCart, Eye } from 'lucide-react';

export const dynamic = 'force-dynamic'; // Ensures fresh data on each request

export default async function ItemsPage() {
  const items = await getItems();

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Products
          </h1>
          <p className="text-lg text-gray-600">
            Discover our collection of premium products at unbeatable prices
          </p>
        </div>
        
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {items.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Image Container */}
              <div className="relative h-56 w-full bg-gray-100 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100">
                  <Link 
                    href={`/items/${item.id}`}
                    className="bg-white text-gray-900 p-3 rounded-full hover:bg-blue-600 hover:text-white transition-colors shadow-lg"
                  >
                    <Eye className="h-5 w-5" />
                  </Link>
                  <button className="bg-white text-gray-900 p-3 rounded-full hover:bg-blue-600 hover:text-white transition-colors shadow-lg">
                    <ShoppingCart className="h-5 w-5" />
                  </button>
                </div>
                
                {/* Badge */}
                <div className="absolute top-3 left-3">
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    -30%
                  </span>
                </div>
              </div>
              
              {/* Product Info */}
              <div className="p-5">
                <p className="text-xs text-blue-600 font-semibold mb-2 uppercase tracking-wide">
                  Electronics
                </p>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-1">
                  {item.name}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {item.description}
                </p>
                
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, idx) => (
                      <svg 
                        key={idx} 
                        className="h-4 w-4 text-yellow-400 fill-current" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-xs text-gray-500 ml-1">(4.8)</span>
                </div>
                
                {/* Price & Button */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-blue-600">
                      ${item.price}
                    </span>
                    <span className="text-sm text-gray-400 line-through ml-2">
                      ${(item.price * 1.3).toFixed(2)}
                    </span>
                  </div>
                </div>
                
                <Link 
                  href={`/items/${item.id}`}
                  className="mt-4 w-full bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 transition font-semibold text-center block"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {/* Empty State */}
        {items.length === 0 && (
          <div className="text-center py-20">
            <ShoppingCart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              No products found
            </h3>
            <p className="text-gray-500">
              Check back later for new arrivals!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}