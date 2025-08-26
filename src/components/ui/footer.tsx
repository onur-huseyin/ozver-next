import Image from "next/image";

export function Footer() {
  return (
    <footer className="relative min-h-[400px] bg-gradient-to-br from-black via-slate-900 to-blue-900 py-16">
      {/* Gradient Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-slate-900/90 to-blue-900/80"></div>
      
      {/* Main Footer Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="bg-slate-800/90 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            
            {/* Brand/Logo Section */}
            <div className="flex flex-col items-start space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-white rounded-full"></div>
                </div>
                <span className="text-white text-xl font-semibold">Özver</span>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                1980'den beri mekatronik çözümlerde öncü, kaliteli hizmet ve yenilikçi teknolojilerle sektörde güvenilir partneriniz.
              </p>
            </div>

            {/* Ürünler Column */}
            <div className="flex flex-col space-y-4">
              <h3 className="text-white font-semibold text-lg mb-2">Ürünler</h3>
              <div className="space-y-2">
                <a href="/products" className="text-slate-300 hover:text-white transition-colors text-sm block">
                  Pompalar
                </a>
                <a href="/products" className="text-slate-300 hover:text-white transition-colors text-sm block">
                  Motorlar
                </a>
                <a href="/products" className="text-slate-300 hover:text-white transition-colors text-sm block">
                  Kontrol Sistemleri
                </a>
                <a href="/products" className="text-slate-300 hover:text-white transition-colors text-sm block">
                  Sensörler
                </a>
                <a href="/products" className="text-slate-300 hover:text-white transition-colors text-sm block">
                  Otomasyon
                </a>
              </div>
            </div>

            {/* Hizmetler Column */}
            <div className="flex flex-col space-y-4">
              <h3 className="text-white font-semibold text-lg mb-2">Hizmetler</h3>
              <div className="space-y-2">
                <a href="/about" className="text-slate-300 hover:text-white transition-colors text-sm block">
                  Teknik Destek
                </a>
                <a href="/about" className="text-slate-300 hover:text-white transition-colors text-sm block">
                  Bakım & Onarım
                </a>
                <a href="/about" className="text-slate-300 hover:text-white transition-colors text-sm block">
                  Eğitim
                </a>
                <a href="/about" className="text-slate-300 hover:text-white transition-colors text-sm block">
                  Danışmanlık
                </a>
                <a href="/about" className="text-slate-300 hover:text-white transition-colors text-sm block">
                  Proje Yönetimi
                </a>
              </div>
            </div>

            {/* İletişim Column */}
            <div className="flex flex-col space-y-4">
              <h3 className="text-white font-semibold text-lg mb-2">İletişim</h3>
              <div className="space-y-2">
                <a href="/contact" className="text-slate-300 hover:text-white transition-colors text-sm block">
                  İletişim
                </a>
                <a href="/about" className="text-slate-300 hover:text-white transition-colors text-sm block">
                  Hakkımızda
                </a>
                <a href="/contact" className="text-slate-300 hover:text-white transition-colors text-sm block">
                  Teklif Al
                </a>
                <a href="/contact" className="text-slate-300 hover:text-white transition-colors text-sm block">
                  Destek
                </a>
                <a href="/contact" className="text-slate-300 hover:text-white transition-colors text-sm block">
                  Fuar Takvimi
                </a>
              </div>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="border-t border-slate-700/50 pt-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="text-slate-400 text-sm text-center md:text-left">
                <p>Tüm ürün isimleri, logolar ve markalar ilgili sahiplerinin mülkiyetindedir.</p>
                <p className="mt-1">Copyright © 2025 Özver Mekatronik</p>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-slate-400 text-sm">by</span>
                <div className="bg-white text-black px-3 py-1 rounded text-xs font-semibold">
                  NO LIMITS & WEB
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
