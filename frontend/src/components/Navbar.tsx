'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { ShoppingBag, Menu, X, LogOut, PlusCircle } from 'lucide-react';
import Cookies from 'js-cookie';
import toast from 'react-hot-toast';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Detect if we are on the Home page (where the Hero is dark)
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsAuthenticated(Cookies.get('auth-token') === 'authenticated');
  }, [pathname]);

  const handleLogout = () => {
    Cookies.remove('auth-token');
    setIsAuthenticated(false);
    toast.success('Signed out safely');
    router.push('/');
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Items', href: '/items' },
  ];

  // Dynamic Styles based on scroll and page
  // On Home (dark hero), we want white text initially. On other pages, we want dark text.
  const isDarkBg = isHomePage && !isScrolled;
  const textColor = isDarkBg ? 'text-white' : 'text-slate-900';
  const subTextColor = isDarkBg ? 'text-slate-300' : 'text-slate-600';

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/80 backdrop-blur-md border-b border-slate-200 py-3 shadow-sm' 
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="bg-blue-600 p-1.5 rounded-xl group-hover:rotate-6 transition-transform shadow-lg shadow-blue-600/20">
              <ShoppingBag className="h-5 w-5 text-white" />
            </div>
            <span className={`ml-3 text-xl font-black tracking-tighter transition-colors duration-300 ${textColor}`}>
              ShopHub<span className="text-blue-600">.</span>
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href} 
                className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                  pathname === link.href 
                    ? (isDarkBg ? 'bg-white/10 text-white' : 'bg-blue-50 text-blue-600') 
                    : `${subTextColor} hover:bg-white/10 hover:text-blue-500`
                }`}
              >
                {link.name}
              </Link>
            ))}

            <div className={`h-4 w-[1px] mx-4 transition-colors ${isDarkBg ? 'bg-white/20' : 'bg-slate-200'}`} />

            {isAuthenticated ? (
              <div className="flex items-center gap-3">
                <Link 
                  href="/items/add" 
                  className={`flex items-center gap-2 px-4 py-2 text-sm font-bold transition-colors ${subTextColor} hover:text-blue-500`}
                >
                  <PlusCircle size={18} />
                  Post Item
                </Link>
                <button 
                  onClick={handleLogout} 
                  className="flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-slate-800 transition shadow-lg active:scale-95"
                >
                  <LogOut size={16} />
                  Logout
                </button>
              </div>
            ) : (
              <Link 
                href="/login" 
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg active:scale-95 ${
                  isDarkBg 
                  ? 'bg-white text-slate-900 hover:bg-slate-100 shadow-white/10' 
                  : 'bg-blue-600 text-white hover:bg-blue-700 shadow-blue-200'
                }`}
              >
                Sign In
              </Link>
            )}
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-xl transition-colors ${isDarkBg ? 'text-white hover:bg-white/10' : 'text-slate-900 hover:bg-slate-100'}`}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-xl md:hidden overflow-hidden"
          >
            <div className="px-6 py-8 space-y-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  href={link.href} 
                  className="block text-3xl font-black tracking-tighter text-slate-900"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <hr className="border-slate-100" />
              <div className="flex flex-col gap-4">
                {isAuthenticated ? (
                   <button onClick={handleLogout} className="w-full py-4 bg-red-50 text-red-600 font-bold rounded-2xl">Logout</button>
                ) : (
                  <Link href="/login" onClick={() => setMobileMenuOpen(false)} className="w-full py-4 bg-blue-600 text-white font-bold rounded-2xl text-center">Sign In</Link>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}