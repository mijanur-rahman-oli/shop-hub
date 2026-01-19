// frontend/app/items/[id]/page.tsx - FIXED FOR NEXT.JS 15+

import { getItem } from '../../../lib/api';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, Star, Check, ShoppingCart, Heart, Share2, Truck, Shield, RotateCcw } from 'lucide-react';

export const dynamic = 'force-dynamic';

// ✅ FIXED: Added async and await for params
export default async function ItemDetailPage({ 
  params 
}: { 
  params: Promise<{ id: string }> // ← Changed to Promise
}) {
  // ✅ MUST await params in Next.js 15+
  const { id } = await params;
  
  const item = await getItem(id);

  if (!item) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link 
          href="/items" 
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6 font-medium transition-colors"
        >
          <ChevronLeft className="h-5 w-5 mr-1" />
          Back to Products
        </Link>
        
        {/* Main Product Container */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 p-6 lg:p-10">
            {/* Left Column - Image */}
            <div className="space-y-4">
              <div className="relative h-96 lg:h-[500px] w-full bg-gray-100 rounded-xl overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  priority
                />
              </div>
              
              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-4 gap-3">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i} 
                    className="relative h-20 bg-gray-100 rounded-lg overflow-hidden cursor-pointer border-2 border-transparent hover:border-blue-500 transition"
                  >
                    <Image
                      src={item.image}
                      alt={`${item.name} view ${i}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right Column - Product Info */}
            <div className="flex flex-col">
              {/* Product Title & Category */}
              <div className="mb-4">
                <p className="text-sm text-blue-600 font-semibold mb-2 uppercase tracking-wide">
                  Electronics
                </p>
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                  {item.name}
                </h1>
                
                {/* Rating */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, idx) => (
                      <Star 
                        key={idx} 
                        className="h-5 w-5 text-yellow-400 fill-current" 
                      />
                    ))}
                  </div>
                  <span className="text-gray-600 text-sm">(4.8 / 127 reviews)</span>
                </div>
              </div>
              
              {/* Price */}
              <div className="mb-6 pb-6 border-b border-gray-200">
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl font-bold text-blue-600">
                    ${item.price}
                  </span>
                  <span className="text-xl text-gray-400 line-through">
                    ${(item.price * 1.3).toFixed(2)}
                  </span>
                  <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-semibold">
                    Save 30%
                  </span>
                </div>
              </div>
              
              {/* Description */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Product Description
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
                <p className="text-gray-600 leading-relaxed mt-3">
                  Experience premium quality and cutting-edge technology with this exceptional product. 
                  Designed for performance and built to last, it combines style with functionality 
                  to deliver an unmatched user experience.
                </p>
              </div>
              
              {/* Key Features */}
              <div className="mb-6 pb-6 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Key Features
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    'Premium Quality Materials',
                    'Advanced Technology',
                    'Ergonomic Design',
                    'Energy Efficient',
                    'Easy to Use',
                    '2-Year Warranty'
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Quantity Selector */}
              <div className="mb-6">
                <label className="text-sm font-semibold text-gray-700 mb-2 block">
                  Quantity
                </label>
                <div className="flex items-center gap-3">
                  <button className="w-10 h-10 rounded-lg border-2 border-gray-300 flex items-center justify-center hover:bg-gray-100 transition">
                    -
                  </button>
                  <span className="w-12 text-center font-semibold">1</span>
                  <button className="w-10 h-10 rounded-lg border-2 border-gray-300 flex items-center justify-center hover:bg-gray-100 transition">
                    +
                  </button>
                  <span className="text-sm text-gray-500 ml-2">
                    (23 available)
                  </span>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="space-y-3 mb-6">
                <button className="w-full bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700 transition font-semibold text-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
                  <ShoppingCart className="h-5 w-5" />
                  Add to Cart
                </button>
                
                <div className="grid grid-cols-2 gap-3">
                  <button className="py-3 rounded-xl border-2 border-gray-300 hover:border-blue-500 transition font-semibold flex items-center justify-center gap-2">
                    <Heart className="h-5 w-5" />
                    Wishlist
                  </button>
                  <button className="py-3 rounded-xl border-2 border-gray-300 hover:border-blue-500 transition font-semibold flex items-center justify-center gap-2">
                    <Share2 className="h-5 w-5" />
                    Share
                  </button>
                </div>
              </div>
              
              {/* Additional Info */}
              <div className="space-y-4 bg-gray-50 p-5 rounded-xl">
                <div className="flex items-start gap-3">
                  <Truck className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Free Shipping</p>
                    <p className="text-sm text-gray-600">On orders over $50. Delivery in 2-3 business days.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Shield className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Secure Payment</p>
                    <p className="text-sm text-gray-600">Your transaction is protected with industry-standard encryption.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <RotateCcw className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">30-Day Returns</p>
                    <p className="text-sm text-gray-600">Not satisfied? Return it within 30 days for a full refund.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Product Specifications */}
        <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-10 mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Product Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
            {[
              { label: 'Brand', value: 'ShopHub Premium' },
              { label: 'Model', value: 'SH-2024-' + item.id },
              { label: 'Color', value: 'Space Gray' },
              { label: 'Weight', value: '1.2 kg' },
              { label: 'Dimensions', value: '25 x 15 x 8 cm' },
              { label: 'Material', value: 'Aluminum & Plastic' },
              { label: 'Warranty', value: '2 Years' },
              { label: 'SKU', value: 'SHP' + item.id.toString().padStart(6, '0') },
            ].map((spec, idx) => (
              <div key={idx} className="flex justify-between py-3 border-b border-gray-200">
                <span className="font-semibold text-gray-700">{spec.label}:</span>
                <span className="text-gray-600">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Customer Reviews Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-10 mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Customer Reviews</h2>
          
          <div className="space-y-6">
            {[
              { name: 'Sarah Johnson', rating: 5, date: 'Jan 10, 2026', review: 'Absolutely love this product! Exceeded my expectations in every way.' },
              { name: 'Michael Chen', rating: 5, date: 'Jan 8, 2026', review: 'Great quality and fast shipping. Highly recommend!' },
              { name: 'Emily Rodriguez', rating: 4, date: 'Jan 5, 2026', review: 'Good product overall. Would have given 5 stars if it came in more color options.' },
            ].map((review, idx) => (
              <div key={idx} className="border-b border-gray-200 pb-6 last:border-0">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="font-semibold text-gray-900">{review.name}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-500">{review.date}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">{review.review}</p>
              </div>
            ))}
          </div>
          
          <button className="mt-6 text-blue-600 font-semibold hover:text-blue-700 transition">
            View All Reviews →
          </button>
        </div>
      </div>
    </div>
  );
}