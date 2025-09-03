import Image from "next/image";

export function Footer() {
  return (
    <footer className="relative min-h-[400px] bg-black lg:py-16 lg:pt-36">
      {/* Gradient Background Overlay */}
     
      {/* Main Footer Content */}
      <div className="container relative z-10 mx-auto px-4">
      <div className="absolute inset-0 z-0 opacity-75" style={{ background: 'radial-gradient(ellipse at center top, #303336 0%, rgba(48, 51, 54, 0.3) 40%, rgba(48, 51, 54, 0) 70%)' }}></div>
        <div style={{borderBottom: 'none'}} className="bg-black z-10 rounded-t-2xl border-t border-[#171717] p-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8 z-10">
            
            {/* Brand/Logo Section */}
            <div className="flex flex-col items-start space-y-4">
              <div className="flex items-center space-x-3">
                <span className="text-white text-xl font-semibold">
                  <Image src="/ozver-mek.png" alt="Özver" width={200} height={200} />
                </span>
              </div>
            </div>

            {/* Product Column */}
            <div className="flex flex-col space-y-4 z-10">
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

            {/* Resources Column */}
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

              </div>
            </div>


            {/* Connect Column */}
            <div className="flex flex-col space-y-4">
              <h3 className="text-white font-semibold text-lg mb-2">Connect</h3>
              <div className="space-y-2">
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm block  items-center">
                  Contact
                  <svg className="w-3 h-3 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7 17l9.2-9.2M17 17V7H7"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm block">
                  Forum
                </a>
              </div>
            </div>
          </div>

          {/* Copyright Section */}
          <div className=" pt-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="text-slate-400 text-sm text-center md:text-left">
                <p>Tüm ürün isimleri, logolar ve markalar ilgili sahiplerinin mülkiyetindedir.</p>
                <p className="mt-1">Copyright © 2025 Özver Mekatronik</p>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-slate-400 text-sm">by</span>
                <div className="bg-white text-black px-3 py-1 rounded text-xs font-semibold">
                  <a href="https://onur-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer">ONURSOFT</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
