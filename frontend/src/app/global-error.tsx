// app/global-error.tsx
'use client'; // ← Required! This must be a Client Component

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  // You can log the error to an error reporting service here
  console.error('Global error:', error);

  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Something went seriously wrong!
          </h2>

          <p className="text-lg text-gray-600 mb-8">
            {process.env.NODE_ENV === 'development'
              ? error.message
              : "We've been notified and are working on it."}
          </p>

          <button
            onClick={() => reset()}
            className="px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition font-medium text-lg shadow-md"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}