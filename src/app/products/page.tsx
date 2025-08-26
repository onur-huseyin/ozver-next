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
    {
      icon: Zap,
      title: "Performans",
      items: [
        "Yüksek verimlilik: %85+",
        "Düşük gürültü seviyesi",
        "Uzun ömürlü tasarım",
        "Kolay bakım",
        "Hızlı kurulum",
      ],
    },
    {
      icon: Shield,
      title: "Güvenlik",
      items: [
        "IP65 koruma sınıfı",
        "Aşırı yük koruması",
        "Kuru çalışma koruması",
        "Termal koruma",
        "CE sertifikası",
      ],
    },
    {
      icon: TrendingUp,
      title: "Avantajlar",
      items: [
        "Enerji tasarrufu",
        "Çevre dostu",
        "Düşük bakım maliyeti",
        "Geniş uygulama alanı",
        "Teknik destek",
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
                Ürünleri incele
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
          <h1 className="text-xl md:text-5xl font-bold bg-gradient-to-r from-white via-gray-300 to-gray-400 bg-clip-text text-transparent mt-6">
            Ürünlerimiz
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
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
            <div className="bg-[#18181B] border border-[#464646] rounded-2xl p-6 h-[600px] relative overflow-hidden">
              <BabylonViewer
                modelUrl="/models/ozverpompa.gltf"
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
                  <div className="w-12 h-12 bg-gradient-to-br from-[#464646] to-[#18181B] rounded-xl flex items-center justify-center">
                    <Star className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      Ozver Pompa
                    </h3>
                    <p className="text-gray-400 text-sm">Premium Kalite</p>
                  </div>
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
                    <h4 className="text-lg font-semibold text-white">
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
              Neden Ozver Pompa?
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
    </div>
  );
}
