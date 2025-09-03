"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Navbar,
  NavBody,
  NavItems,
  NavbarLogo,
} from "@/components/ui/resizable-navbar";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import MobileMenu from "@/components/ui/mobile-menu";
import { Footer } from "@/components/ui/footer";
import { getCategories } from "@/lib/supabaseClient";
import { Comments } from "@/components/ui/comments";

interface Category {
  id: string;
  name: string;
  image_url: string;
  image_filename: string;
  created_at: string;
  updated_at: string;
  model_url: string;
  model_filename: string;
}

export default function ProductsPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch categories from Supabase
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getCategories();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  // Navigation items
  const navItems = [
    { name: "Ana Sayfa", link: "/" },
    { name: "Hakkımızda", link: "/about" },
    { name: "Ürünler", link: "/products" },
    { name: "İletişim", link: "/contact" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-slate-950">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Lines */}
        <div className="absolute top-20 left-10 w-72 h-72 border border-gray-600/30 rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-96 h-96 border border-gray-700/30 rounded-full animate-pulse delay-1000" />
        <div className="absolute bottom-20 left-1/4 w-64 h-64 border border-gray-800/30 rounded-full animate-pulse delay-500" />

        {/* Floating Dots */}
        <div className="absolute top-32 right-1/3 w-2 h-2 bg-gray-500 rounded-full animate-bounce" />
        <div className="absolute top-64 left-1/3 w-1 h-1 bg-gray-600 rounded-full animate-bounce delay-300" />
        <div className="absolute bottom-32 right-1/4 w-1.5 h-1.5 bg-gray-700 rounded-full animate-bounce delay-700" />
      </div>

      {/* Desktop Navbar */}
      <Navbar>
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center space-x-2">
            <ShimmerButton className="shadow-2xl">
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-md">
                Kalite ve Güven
              </span>
            </ShimmerButton>
          </div>
        </NavBody>
      </Navbar>

      {/* Mobile Menu */}
      <MobileMenu />

      <div className="relative z-10 container mx-auto px-4 py-16 pt-32 md:pt-16">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white via-gray-300 to-gray-400 bg-clip-text text-transparent mt-6">
            Ürün Kategorileri
          </h1>
          <p className=" text-xs mt-6 pt-4 lg:mt-0 lg:text-md text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Endüstriyel çözümlerimizi keşfedin. Her kategori için özel olarak <br /> tasarlanmış ürünlerimizi inceleyin.
          </p>

        </motion.div>

        {/* Categories Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 animate-pulse">
                <div className="w-full h-48 bg-gray-700 rounded-xl mb-6"></div>
                <div className="h-6 bg-gray-700 rounded mb-4"></div>
                <div className="h-4 bg-gray-700 rounded w-3/4"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 container mx-auto md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Link href={`/products/${category.id}`}>
                  <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-gray-500/50 transition-all duration-300 cursor-pointer h-full">
                    {/* Category Image */}
                    <div className="relative w-full h-48 mb-6 rounded-xl overflow-hidden">
                      <Image
                        src={category.image_url}
                        alt={category.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    
                    {/* Category Name */}
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-gray-300 transition-colors">
                      {category.name}
                    </h3>
                    
                    {/* Category Description */}
                    <p className="text-gray-400 text-sm">
                      Bu kategoriye ait ürünleri görüntülemek için tıklayın
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && categories.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center py-16"
          >
            <div className="w-24 h-24 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Henüz kategori bulunmuyor</h3>
            <p className="text-gray-400">Yakında yeni kategoriler eklenecek.</p>
          </motion.div>
        )}
      </div>
      <Comments />
      {/* Footer */}
      <Footer />
      <div className="fixed bottom-10 right-10 z-999">
        <button className="cursor-pointer bg-[#0F0F0F] shadow-2xl backdrop-blur-md rounded-full px-3 py-2 gap-2 flex items-center justify-center border">
          <svg
            width="32px"
            height="32px"
            viewBox="0 0 48 48"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <defs></defs>
            <g
              id="Icons"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <g
                id="Color-"
                transform="translate(-700.000000, -360.000000)"
                fill="#67C15E"
              >
                <path
                  d="M723.993033,360 C710.762252,360 700,370.765287 700,383.999801 C700,389.248451 701.692661,394.116025 704.570026,398.066947 L701.579605,406.983798 L710.804449,404.035539 C714.598605,406.546975 719.126434,408 724.006967,408 C737.237748,408 748,397.234315 748,384.000199 C748,370.765685 737.237748,360.000398 724.006967,360.000398 L723.993033,360.000398 L723.993033,360 Z M717.29285,372.190836 C716.827488,371.07628 716.474784,371.034071 715.769774,371.005401 C715.529728,370.991464 715.262214,370.977527 714.96564,370.977527 C714.04845,370.977527 713.089462,371.245514 712.511043,371.838033 C711.806033,372.557577 710.056843,374.23638 710.056843,377.679202 C710.056843,381.122023 712.567571,384.451756 712.905944,384.917648 C713.258648,385.382743 717.800808,392.55031 724.853297,395.471492 C730.368379,397.757149 732.00491,397.545307 733.260074,397.27732 C735.093658,396.882308 737.393002,395.527239 737.971421,393.891043 C738.54984,392.25405 738.54984,390.857171 738.380255,390.560912 C738.211068,390.264652 737.745308,390.095816 737.040298,389.742615 C736.335288,389.389811 732.90737,387.696673 732.25849,387.470894 C731.623543,387.231179 731.017259,387.315995 730.537963,387.99333 C729.860819,388.938653 729.198006,389.89831 728.661785,390.476494 C728.238619,390.928051 727.547144,390.984595 726.969123,390.744481 C726.193254,390.420348 724.021298,389.657798 721.340985,387.273388 C719.267356,385.42535 717.856938,383.125756 717.448104,382.434484 C717.038871,381.729275 717.405907,381.319529 717.729948,380.938852 C718.082653,380.501232 718.421026,380.191036 718.77373,379.781688 C719.126434,379.372738 719.323884,379.160897 719.549599,378.681068 C719.789645,378.215575 719.62006,377.735746 719.450874,377.382942 C719.281687,377.030139 717.871269,373.587317 717.29285,372.190836 Z"
                  id="Whatsapp"
                ></path>
              </g>
            </g>
          </svg>
          <span className="text-white text-md">Bize ulaşın</span>
        </button>
      </div>
    </div>
  );
}