import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export function Footer() {
  const { t } = useLanguage();
  
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
              <h3 className="text-white font-semibold text-lg mb-2">{t('footer.products.title')}</h3>
              <div className="space-y-2">
                <Link href="/products" className="text-slate-300 hover:text-white transition-colors text-sm block">
                  {t('footer.products.pumps')}
                </Link>
                <Link href="/products" className="text-slate-300 hover:text-white transition-colors text-sm block">
                  {t('footer.products.motors')}
                </Link>
                <Link href="/products" className="text-slate-300 hover:text-white transition-colors text-sm block">
                  {t('footer.products.control')}
                </Link>
                <Link href="/products" className="text-slate-300 hover:text-white transition-colors text-sm block">
                  {t('footer.products.sensors')}
                </Link>
                <Link href="/products" className="text-slate-300 hover:text-white transition-colors text-sm block">
                  {t('footer.products.automation')}
                </Link>
              </div>
            </div>

            {/* Resources Column */}
            <div className="flex flex-col space-y-4">
              <h3 className="text-white font-semibold text-lg mb-2">{t('footer.services.title')}</h3>
              <div className="space-y-2">
                <Link href="/about" className="text-slate-300 hover:text-white transition-colors text-sm block">
                  {t('footer.services.support')}
                </Link>
                <Link href="/about" className="text-slate-300 hover:text-white transition-colors text-sm block">
                  {t('footer.services.maintenance')}
                </Link>
                <Link href="/about" className="text-slate-300 hover:text-white transition-colors text-sm block">
                  {t('footer.services.training')}
                </Link>
                <Link href="/about" className="text-slate-300 hover:text-white transition-colors text-sm block">
                  {t('footer.services.consulting')}
                </Link>

              </div>
            </div>


            {/* Connect Column */}
            <div className="flex flex-col space-y-4">
              <h3 className="text-white font-semibold text-lg mb-2">{t('footer.connect.title')}</h3>
              <div className="space-y-2">
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm block  items-center">
                  {t('footer.connect.contact')}
                  <svg className="w-3 h-3 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7 17l9.2-9.2M17 17V7H7"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm block">
                  {t('footer.connect.forum')}
                </a>
              </div>
            </div>
          </div>

          {/* Copyright Section */}
          <div className=" pt-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="text-slate-400 text-sm text-center md:text-left">
                <p>{t('footer.copyright.text')}</p>
                <p className="mt-1">{t('footer.copyright.rights')}</p>
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
