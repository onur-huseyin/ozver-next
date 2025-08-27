"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Settings,
  Zap,
  Shield,
  TrendingUp,
  CheckCircle,
  Star,
} from "lucide-react";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarLogo,
  NavbarButton,
} from "@/components/ui/resizable-navbar";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { Footer } from "@/components/ui/footer";
import BabylonViewer from "@/components/ui/adobe-pdf-viewer";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

export default function ProductsPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Navigation items
  const navItems = [
    { name: "Ana Sayfa", link: "/" },
    { name: "Hakkımızda", link: "/about" },
    { name: "Ürünler", link: "/products" },
    { name: "İletişim", link: "/contact" },
  ];

  // Product specifications
  const productSpecs = [
    {
      icon: Settings,
      title: "Teknik Özellikler",
      items: [
        "Güç: 5.5 kW",
        "Basınç: 8-10 bar",
        "Debi: 50-100 L/min",
        "Sıcaklık: -10°C ile +90°C",
        "Malzeme: Paslanmaz Çelik",
      ],
    },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0A0A0A" }}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Lines */}
        <div className="absolute top-20 left-10 w-72 h-72 border border-[#464646]/30 rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-96 h-96 border border-[#464646]/30 rounded-full animate-pulse delay-1000" />
        <div className="absolute bottom-20 left-1/4 w-64 h-64 border border-[#464646]/30 rounded-full animate-pulse delay-500" />

        {/* Floating Dots */}
        <div className="absolute top-32 right-1/3 w-2 h-2 bg-[#464646] rounded-full animate-bounce" />
        <div className="absolute top-64 left-1/3 w-1 h-1 bg-[#464646] rounded-full animate-bounce delay-300" />
        <div className="absolute bottom-32 right-1/4 w-1.5 h-1.5 bg-[#464646] rounded-full animate-bounce delay-700" />
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

        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            />
          </MobileNavHeader>
          <MobileNavMenu
            isOpen={mobileMenuOpen}
            onClose={() => setMobileMenuOpen(false)}
          >
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-800 dark:hover:text-neutral-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="flex flex-col space-y-2 pt-4">
              <NavbarButton variant="secondary" href="#login">
                Giriş Yap
              </NavbarButton>
              <NavbarButton href="#signup">Kayıt Ol</NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <TextHoverEffect text="ÖZVER" />
          <p className="text-xl lg:text-5xl text-[#969696]  mx-auto leading-relaxed">
            Yüksek kaliteli pompa sistemleri ve endüstriyel çözümler
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* PDF Viewer - Takes 75% of the space */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <div className="bg-[#0A0A0A] border border-[#464646] rounded-2xl h-[600px] relative overflow-hidden">
              <BabylonViewer
                modelUrl="/ozver3d.glb"
                width="100%"
                height="600px"
              />
            </div>
          </motion.div>

          {/* Product Specifications - Takes 25% of the space */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="space-y-6">
              {/* Product Info Card */}
              <div className="bg-[#18181B] border border-[#464646] rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <p className="text-[#969696] text-lg lg:text-2xl">
                    Parça adı: <b>Pro Vana</b>
                  </p>
                  <div></div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-gray-300 text-sm">
                      Endüstriyel Standart
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-gray-300 text-sm">
                      Garantili Ürün
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-gray-300 text-sm">Teknik Destek</span>
                  </div>
                </div>
              </div>

              {/* Specifications */}
              {productSpecs.map((spec, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="bg-[#18181B] border border-[#464646] rounded-2xl p-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#464646] to-[#18181B] rounded-xl flex items-center justify-center">
                      <spec.icon className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-[#969696]">
                      {spec.title}
                    </h4>
                  </div>
                  <ul className="space-y-2">
                    {spec.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-[#464646] rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Additional Product Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-16"
        >
          <div className="bg-[#18181B] border border-[#464646] rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Neden biz?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#464646] to-[#18181B] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Yüksek Performans
                </h3>
                <p className="text-gray-400">
                  En son teknoloji ile üretilen pompalarımız maksimum verimlilik
                  sağlar
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#464646] to-[#18181B] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Güvenilir Kalite
                </h3>
                <p className="text-gray-400">
                  Kalite kontrol süreçlerimiz ile her ürün mükemmellik
                  standartlarında
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#464646] to-[#18181B] rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Sürekli İyileştirme
                </h3>
                <p className="text-gray-400">
                  Müşteri geri bildirimleri ile sürekli gelişen ürün portföyümüz
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <Footer />
      <div className="fixed bottom-10 right-10 z-999">
        <button className="cursor-pointer bg-[#0F0F0F] shadow-2xl backdrop-blur-md rounded-full px-3 py-2 gap-2 flex items-center justify-center  border">
          <svg
            className="w-8 h-8 lg:w-12 lg:h-12"
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
          <span className="text-white text-md lg:text-xl">Bize ulaşın</span>
        </button>
      </div>
    </div>
  );
}
