"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, Eye, Settings, CheckCircle } from "lucide-react";
import {
  Navbar,
  NavBody,
  NavItems,
  NavbarLogo,
} from "@/components/ui/resizable-navbar";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import MobileMenu from "@/components/ui/mobile-menu";
import { Footer } from "@/components/ui/footer";
import { getCategoryById, getProductsByCategory } from "@/lib/supabaseClient";
import ModelViewerModal from "@/components/ui/model-viewer-modal";

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

interface Product {
  id: string;
  name: string;
  category_id: string;
  technical_specs: Record<string, string>;
  created_at: string;
  updated_at: string;
}

export default function CategoryDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [category, setCategory] = useState<Category | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModelModal, setShowModelModal] = useState(false);

  const categoryId = params.id as string;

  // Fetch category and products data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [categoryData, productsData] = await Promise.all([
          getCategoryById(categoryId),
          getProductsByCategory(categoryId)
        ]);
        
        setCategory(categoryData);
        setProducts(productsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    if (categoryId) {
      fetchData();
    }
  }, [categoryId]);

  // Navigation items
  const navItems = [
    { name: "Ana Sayfa", link: "/" },
    { name: "Hakkımızda", link: "/about" },
    { name: "Ürünler", link: "/products" },
    { name: "İletişim", link: "/contact" },
  ];

  const handleBackClick = () => {
    router.push('/products');
  };

  const handleViewModel = () => {
    setShowModelModal(true);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-slate-950">
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-gray-600 border-t-white rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-400">Yükleniyor...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!category) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-slate-950">
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-white mb-4">Kategori bulunamadı</h1>
            <button
              onClick={handleBackClick}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
            >
              Geri Dön
            </button>
          </div>
        </div>
      </div>
    );
  }

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

      {/* Resizable Navbar */}
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
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          onClick={handleBackClick}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Kategorilere Geri Dön
        </motion.button>

        {/* Category Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-gray-300 to-gray-400 bg-clip-text text-transparent mb-6">
            {category.name}
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Bu kategoriye ait ürünlerimizi inceleyin ve teknik özelliklerini keşfedin.
          </p>
        </motion.div>

        {/* 3D Model Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-12"
        >
          <button
            onClick={handleViewModel}
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl transition-all duration-300 flex items-center gap-3 mx-auto transform hover:scale-105"
          >
            <Eye className="w-5 h-5" />
            3D Modeli Görüntüle
          </button>
        </motion.div>

        {/* Products Grid */}
        {products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-gray-500/50 transition-all duration-300"
              >
                {/* Product Name */}
                <h3 className="text-xl font-semibold text-white mb-6">
                  {product.name}
                </h3>

                {/* Technical Specifications */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-gray-600 to-gray-700 rounded-xl flex items-center justify-center">
                      <Settings className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-300">
                      Teknik Özellikler
                    </h4>
                  </div>
                  
                  <div className="space-y-3">
                    {Object.entries(product.technical_specs).map(([key, value], specIndex) => (
                      <div key={specIndex} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">
                          <span className="font-medium">{key}:</span> {value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center py-16"
          >
            <div className="w-24 h-24 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-6">
              <Settings className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Henüz ürün bulunmuyor</h3>
            <p className="text-gray-400">Bu kategoriye ait ürünler yakında eklenecek.</p>
          </motion.div>
        )}
      </div>

      {/* Footer */}
      <Footer />

      {/* 3D Model Modal */}
      {showModelModal && category.model_url && (
        <ModelViewerModal
          modelUrl={category.model_url}
          modelName={category.name}
          onClose={() => setShowModelModal(false)}
        />
      )}

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
