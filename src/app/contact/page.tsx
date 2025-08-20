"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, Building2 } from "lucide-react";
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

export default function ContactPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Navigation items
  const navItems = [
    { name: "Ana Sayfa", link: "/" },
    { name: "Hakkımızda", link: "/about" },
    { name: "Ürünler", link: "/products" },
    { name: "İletişim", link: "/contact" },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setShowSuccess(true);
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
    
    // Hide success message after 5 seconds
    setTimeout(() => setShowSuccess(false), 5000);
  };

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
                     <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-gray-300 to-gray-400 bg-clip-text text-transparent mt-6">
            İletişim
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Bizimle iletişime geçin. Projeleriniz için en iyi çözümleri sunmaya hazırız.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl"
          >
                         <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
               <Send className="w-8 h-8 text-gray-400" />
               Mesaj Gönderin
             </h2>
            
            {/* Success Message */}
            {showSuccess && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-xl text-green-400 text-center"
              >
                <div className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.
                </div>
              </motion.div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Ad Soyad
                  </label>
                                     <input
                     type="text"
                     name="name"
                     value={formData.name}
                     onChange={handleInputChange}
                     required
                     className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-300"
                     placeholder="Adınız ve soyadınız"
                   />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    E-posta
                  </label>
                                     <input
                     type="email"
                     name="email"
                     value={formData.email}
                     onChange={handleInputChange}
                     required
                     className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-300"
                     placeholder="ornek@email.com"
                   />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Konu
                </label>
                                 <input
                   type="text"
                   name="subject"
                   value={formData.subject}
                   onChange={handleInputChange}
                   required
                   className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-300"
                   placeholder="Mesajınızın konusu"
                 />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Mesaj
                </label>
                                 <textarea
                   name="message"
                   value={formData.message}
                   onChange={handleInputChange}
                   required
                   rows={5}
                   className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-300 resize-none"
                   placeholder="Mesajınızı buraya yazın..."
                 />
              </div>
              
                             <button
                 type="submit"
                 disabled={isSubmitting}
                 className="w-full bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
               >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Gönderiliyor...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Mesaj Gönder
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Info Cards */}
            <div className="space-y-4">
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-gray-500/50 transition-all duration-300 group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Adres</h3>
                    <p className="text-gray-300">İstanbul, Türkiye</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-gray-500/50 transition-all duration-300 group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Telefon</h3>
                    <p className="text-gray-300">+90 (212) XXX XX XX</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-gray-500/50 transition-all duration-300 group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">E-posta</h3>
                    <p className="text-gray-300">info@ozver.com</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Çalışma Saatleri</h3>
                    <p className="text-gray-300">Pazartesi - Cuma: 09:00 - 18:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Dark Map */}
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-[#2C308D]" />
                Konum
              </h3>
              <div className="relative h-64 rounded-xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10">
                {/* Map Placeholder - İstanbul coordinates */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MapPin className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-white font-medium">İstanbul, Türkiye</p>
                    <p className="text-gray-400 text-sm">41.0082° N, 28.9784° E</p>
                  </div>
                </div>
                
                {/* Map Grid Lines */}
                <div className="absolute inset-0 opacity-20">
                  <div className="w-full h-full" style={{
                    backgroundImage: `
                      linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '20px 20px'
                  }} />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
