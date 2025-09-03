"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, Info, Package, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface MobileMenuProps {
  className?: string;
}

interface MenuItem {
  name: string;
  link: string;
  icon: React.ReactNode;
}

const menuItems: MenuItem[] = [
  {
    name: "Ana Sayfa",
    link: "/",
    icon: <Home className="w-5 h-5" />
  },
  {
    name: "Hakkımızda",
    link: "/about",
    icon: <Info className="w-5 h-5" />
  },
  {
    name: "Ürünler",
    link: "/products",
    icon: <Package className="w-5 h-5" />
  },
  {
    name: "İletişim",
    link: "/contact",
    icon: <Phone className="w-5 h-5" />
  }
];

export default function MobileMenu({ className = "" }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Header - Always visible on mobile */}
      <div className={`md:hidden fixed top-0 left-0 right-0 z-50 ${className}`}>
        <div className="flex items-center justify-between p-4 bg-black/20 backdrop-blur-md border-b border-white/10">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/ozver-mek.png"
              alt="Özver Mekatronik Logo"
              width={120}
              height={40}
              className="object-contain"
            />
          </Link>
          
          {/* Menu Button */}
          <button
            onClick={toggleMenu}
            className="relative p-3 rounded-xl bg-gradient-to-r from-blue-600/20 to-blue-700/20 backdrop-blur-sm border border-blue-500/30 hover:from-blue-600/30 hover:to-blue-700/30 transition-all duration-300 shadow-lg"
            aria-label="Menüyü aç"
          >
            <motion.div
              animate={{ 
                rotate: isOpen ? 180 : 0,
                scale: isOpen ? 1.1 : 1
              }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
              
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-xl bg-blue-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          </button>
        </div>
      </div>

      {/* Full Screen Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 md:hidden"
              onClick={closeMenu}
            />

                         {/* Menu Content */}
             <motion.div
               initial={{ opacity: 0, y: -20 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -20 }}
               transition={{ 
                 type: "spring",
                 stiffness: 300,
                 damping: 30,
                 duration: 0.4
               }}
               className="fixed inset-0 z-40 md:hidden pt-20"
             >
               {/* Background with gradient */}
               <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800">
                 {/* Animated background elements */}
                 <div className="absolute inset-0 overflow-hidden">
                   <div className="absolute top-20 left-10 w-72 h-72 border border-gray-600/20 rounded-full animate-pulse" />
                   <div className="absolute top-40 right-20 w-96 h-96 border border-gray-700/20 rounded-full animate-pulse delay-1000" />
                   <div className="absolute bottom-20 left-1/4 w-64 h-64 border border-gray-800/20 rounded-full animate-pulse delay-500" />
                   
                   {/* Floating dots */}
                   <div className="absolute top-32 right-1/3 w-2 h-2 bg-gray-500/50 rounded-full animate-bounce" />
                   <div className="absolute top-64 left-1/3 w-1 h-1 bg-gray-600/50 rounded-full animate-bounce delay-300" />
                   <div className="absolute bottom-32 right-1/4 w-1.5 h-1.5 bg-gray-700/50 rounded-full animate-bounce delay-700" />
                 </div>
               </div>

               {/* Menu Items */}
               <div className="relative overflow-y-auto mt-4 z-50 flex flex-col items-center justify-center h-full px-6">
                <div className="space-y-8 w-full max-w-sm">
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ 
                        delay: index * 0.1 + 0.2,
                        duration: 0.5,
                        type: "spring",
                        stiffness: 100
                      }}
                    >
                                             <Link
                         href={item.link}
                         onClick={closeMenu}
                         className="group flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border border-white/20 hover:from-blue-600/20 hover:to-blue-700/20 hover:border-blue-500/30 transition-all duration-300 shadow-lg hover:shadow-xl"
                       >
                         <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 group-hover:from-blue-500 group-hover:to-blue-600 transition-all duration-300 shadow-lg">
                           {item.icon}
                         </div>
                         <div className="flex-1">
                           <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors mb-1">
                             {item.name}
                           </h3>
                           <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                             {item.link === "/" && "Ana sayfaya dön"}
                             {item.link === "/about" && "Şirket hakkında bilgi"}
                             {item.link === "/products" && "Ürün kataloğumuz"}
                             {item.link === "/contact" && "İletişim bilgileri"}
                           </p>
                         </div>
                         <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                           <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                           </svg>
                         </div>
                       </Link>
                    </motion.div>
                  ))}
                </div>

                                 {/* Contact Info */}
                 <motion.div
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.8, duration: 0.5 }}
                   className="mt-8 text-center"
                 >
                   <div className="p-8 rounded-3xl bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm border border-white/20 shadow-2xl">
                     <h4 className="text-xl font-bold text-white mb-2">
                       Özver Mekatronik
                     </h4>
                     <p className="text-gray-300 text-sm mb-6">
                       Kaliteli hizmet, güvenilir çözümler
                     </p>
                     <div className="flex justify-center gap-6">
                       <a
                         href="tel:+905558596555"
                         className="group p-4 rounded-2xl bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                         aria-label="Telefon"
                       >
                         <Phone className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
                       </a>
                       <a
                         href="mailto:ozver@ozver.com"
                         className="group p-4 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                         aria-label="E-posta"
                       >
                         <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                           <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                           <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                         </svg>
                       </a>
                     </div>
                   </div>
                 </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
