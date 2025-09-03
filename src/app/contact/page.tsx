"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, Building2, Navigation } from "lucide-react";
import {
  Navbar,
  NavBody,
  NavItems,
  NavbarLogo,
} from "@/components/ui/resizable-navbar";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import MobileMenu from "@/components/ui/mobile-menu";
import { Footer } from "@/components/ui/footer";
import { getContactInfo, submitContactForm } from "@/lib/supabaseClient";
import { Comments } from "@/components/ui/comments";

interface ContactInfo {
  id: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  map_url: string;
}

export default function ContactPage() {
  const [contactInfo, setContactInfo] = useState<ContactInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Fetch contact info from Supabase
  useEffect(() => {
    const fetchContactInfo = async () => {
      try {
        const data = await getContactInfo();
        setContactInfo(data);
      } catch (error) {
        console.error('Error fetching contact info:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchContactInfo();
  }, []);

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
    
    try {
      // Supabase'e contact form verilerini gönder
      const result = await submitContactForm(formData);
      
      if (result.success) {
        setShowSuccess(true);
        // Reset form
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
        
        // Hide success message after 5 seconds
        setTimeout(() => setShowSuccess(false), 5000);
      }
    } catch (error) {
      console.error('Form gönderim hatası:', error);
      alert('Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const openDirections = () => {
    if (contactInfo?.map_url) {
      window.open(contactInfo.map_url, '_blank');
    }
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
                  Telefon
                </label>
                                 <input
                   type="tel"
                   name="phone"
                   value={formData.phone}
                   onChange={handleInputChange}
                   className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-300"
                   placeholder="05XX XXX XXXX"
                 />
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
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white">Adres</h3>
                    <p className="text-gray-300">
                      {loading ? "Yükleniyor..." : contactInfo?.address || "Adres bilgisi bulunamadı"}
                    </p>
                  </div>
                  <button
                    onClick={openDirections}
                    disabled={!contactInfo?.map_url}
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Navigation className="w-4 h-4" />
                    Yol Tarifi
                  </button>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-gray-500/50 transition-all duration-300 group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Telefon</h3>
                    <p className="text-gray-300">
                      {loading ? "Yükleniyor..." : contactInfo?.phone || "Telefon bilgisi bulunamadı"}
                    </p>
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
                    <p className="text-gray-300">
                      {loading ? "Yükleniyor..." : contactInfo?.email || "E-posta bilgisi bulunamadı"}
                    </p>
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
                    <p className="text-gray-300">
                      {loading ? "Yükleniyor..." : contactInfo?.hours || "08:00 - 17:00"}
                    </p>
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
                  <Comments />
      </div>

      {/* Footer */}
      <Footer />
          <div className="fixed bottom-10 right-10 z-999">
        <button className="cursor-pointer bg-[#0F0F0F] shadow-2xl backdrop-blur-md rounded-full px-3 py-2 gap-2 flex items-center justify-center  border">
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
