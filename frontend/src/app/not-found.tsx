'use client'; 

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <h1 className="text-8xl md:text-9xl font-bold text-gray-800 mb-4">404</h1>
      <h2 className="text-3xl md:text-4xl font-semibold mb-6">Page Not Found</h2>
      <p className="text-lg text-gray-600 mb-8 text-center max-w-md">
        Sorry, the page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition font-medium text-lg shadow-md"
      >
        Return to Home
      </Link>
    </div>
  );
}