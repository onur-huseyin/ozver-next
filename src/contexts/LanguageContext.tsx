"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'tr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Çeviri verileri
const translations = {
  tr: {
    // Navbar
    'nav.home': 'Ana Sayfa',
    'nav.about': 'Hakkımızda',
    'nav.products': 'Ürünler',
    'nav.contact': 'İletişim',
    'nav.quality': 'Kalite ve Güven',
    
    // Home Page
    'home.hero.title': 'Özver Tekstil',
    'home.hero.subtitle': 'Kaliteli Tekstil Çözümleri',
    'home.hero.description': 'Yılların deneyimi ile tekstil sektöründe güvenilir çözümler sunuyoruz.',
    'home.ripple1': 'Doğru renk',
    'home.ripple2': 'Fark yaratır',
    'home.hero.title': 'Tekstil makinalarında kalite adresi',
    'home.hero.titleEn': 'Quality address in textile machinery',
    'home.hero.subtitle': 'Bobin Boyama, Numune Bobin Boyama, Elyaf Kurutma, Rota-Dye Kumaş Boyama, Santrifüj',
    'home.hero.button': '%100 Garanti, %100 Kalite',
    'home.comments.title': 'ÖZVER\'İ TERCİH EDENLER',
    'home.world.title': '24 ülke için ÖZVER MEKATRONİK',
    'home.world.description': 'Uzman kadromuzla uzun ömürlü makineler imal edip, global pazarlarımızda hizmet vermekteyiz.',
    'footer.products.title': 'Ürünler',
    'footer.products.pumps': 'Pompalar',
    'footer.products.motors': 'Motorlar',
    'footer.products.control': 'Kontrol Sistemleri',
    'footer.products.sensors': 'Sensörler',
    'footer.products.automation': 'Otomasyon',
    'footer.services.title': 'Hizmetler',
    'footer.services.support': 'Teknik Destek',
    'footer.services.maintenance': 'Bakım & Onarım',
    'footer.services.training': 'Eğitim',
    'footer.services.consulting': 'Danışmanlık',
    'footer.connect.title': 'İletişim',
    'footer.connect.contact': 'İletişim',
    'footer.connect.forum': 'Forum',
    'footer.copyright.text': 'Tüm ürün isimleri, logolar ve markalar ilgili sahiplerinin mülkiyetindedir.',
    'footer.copyright.rights': 'Copyright © 2025 Özver Mekatronik',
    'home.about.title': 'Özver Mekatronik',
    'home.about.description': 'Özver Mekatronik 1980\'li yıllardan günümüze gelen tecrübesine ve yapmış olduğu arge çalışmalarına dayanarak Tekstil Boya ve Terbiye sektörü için HT Kumaş Boyama, Atmosferik Boyama, İplik Boyama Makineleri ve İplik Boya ekipmanları imalatının ( Kilit, Taşıyıcı, Perfore) yanı sıra gıda, kimya, ilaç sanayi ve diğer sektörlerde de ihtiyaç duyulan paslanmaz ünitelerin proje, imalat ve montaj taleplerine de yanıt vermektedir.',
    'home.whatsapp': 'Bize ulaşın',
    
    // Products Page
    'products.title': 'Ürünlerimiz',
    'products.subtitle': 'Kategorilerimizi keşfedin',
    'products.loading': 'Yükleniyor...',
    'products.empty': 'Henüz kategori bulunmamaktadır.',
    'products.viewProducts': 'Ürünleri Görüntüle',
    
    // Product Detail Page
    'product.title': 'Ürünler',
    'product.technicalSpecs': 'Teknik Özellikler',
    'product.view3DModel': '3D Modeli Görüntüle',
    'product.loading': 'Yükleniyor...',
    'product.empty': 'Bu kategoride henüz ürün bulunmamaktadır.',
    'product.error': 'Ürünler yüklenirken bir hata oluştu.',
    
    // Contact Page
    'contact.title': 'İletişim',
    'contact.subtitle': 'Bizimle iletişime geçin',
    'contact.form.name': 'Ad Soyad',
    'contact.form.email': 'E-posta',
    'contact.form.phone': 'Telefon',
    'contact.form.subject': 'Konu',
    'contact.form.message': 'Mesaj',
    'contact.form.submit': 'Gönder',
    'contact.form.success': 'Mesajınız başarıyla gönderildi!',
    'contact.form.error': 'Mesaj gönderilirken bir hata oluştu.',
    'contact.form.loading': 'Gönderiliyor...',
    'contact.directions': 'Yol Tarifi',
    'contact.address': 'Adres',
    'contact.phone': 'Telefon',
    'contact.email': 'E-posta',
    'contact.hours': 'Çalışma Saatleri',
    
    // Blog Page
    'blog.title': 'Blog',
    'blog.subtitle': 'Son yazılarımızı keşfedin',
    'blog.readMore': 'Devamını Oku',
    'blog.loading': 'Yükleniyor...',
    'blog.empty': 'Henüz blog yazısı bulunmamaktadır.',
    'blog.back': 'Geri Dön',
    'blog.backToHome': 'Ana Sayfaya Dön',
    'blog.detail.title': 'Blog Detayı',
    'blog.detail.backToTop': 'Başa Dön',
    
    // Footer
    'footer.description': 'Özver Tekstil olarak, kaliteli ürünler ve güvenilir hizmet anlayışımızla sektörde öncü konumdayız.',
    'footer.quickLinks': 'Hızlı Linkler',
    'footer.contact': 'İletişim',
    'footer.followUs': 'Bizi Takip Edin',
    'footer.rights': 'Tüm hakları saklıdır.',
    
    // Common
    'common.loading': 'Yükleniyor...',
    'common.error': 'Bir hata oluştu',
    'common.retry': 'Tekrar Dene',
    'common.close': 'Kapat',
    'common.save': 'Kaydet',
    'common.cancel': 'İptal',
    'common.confirm': 'Onayla',
    'common.yes': 'Evet',
    'common.no': 'Hayır',
  },
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.products': 'Products',
    'nav.contact': 'Contact',
    'nav.quality': 'Quality & Trust',
    
    // Home Page
    'home.hero.title': 'Özver Textile',
    'home.hero.subtitle': 'Quality Textile Solutions',
    'home.hero.description': 'With years of experience, we provide reliable solutions in the textile industry.',
    'home.ripple1': 'Right color',
    'home.ripple2': 'Makes the difference',
    'home.hero.title': 'Quality address in textile machinery',
    'home.hero.titleEn': 'Quality address in textile machinery',
    'home.hero.subtitle': 'Bobbin Dyeing, Sample Bobbin Dyeing, Fiber Drying, Rota-Dye Fabric Dyeing, Centrifuge',
    'home.hero.button': '100% Guarantee, 100% Quality',
    'home.comments.title': 'THOSE WHO CHOOSE ÖZVER',
    'home.world.title': 'ÖZVER MECHATRONICS FOR 24 COUNTRIES',
    'home.world.description': 'We manufacture long-lasting machines with our expert team and serve in our global markets.',
    'footer.products.title': 'Products',
    'footer.products.pumps': 'Pumps',
    'footer.products.motors': 'Motors',
    'footer.products.control': 'Control Systems',
    'footer.products.sensors': 'Sensors',
    'footer.products.automation': 'Automation',
    'footer.services.title': 'Services',
    'footer.services.support': 'Technical Support',
    'footer.services.maintenance': 'Maintenance & Repair',
    'footer.services.training': 'Training',
    'footer.services.consulting': 'Consulting',
    'footer.connect.title': 'Connect',
    'footer.connect.contact': 'Contact',
    'footer.connect.forum': 'Forum',
    'footer.copyright.text': 'All product names, logos and brands are property of their respective owners.',
    'footer.copyright.rights': 'Copyright © 2025 Özver Mechatronics',
    'home.about.title': 'Özver Mechatronics',
    'home.about.description': 'Based on its experience since the 1980s and its R&D studies, Özver Mechatronics responds to project, manufacturing and assembly demands for HT Fabric Dyeing, Atmospheric Dyeing, Yarn Dyeing Machines and Yarn Dyeing equipment manufacturing (Lock, Carrier, Perforated) as well as stainless steel units needed in food, chemical, pharmaceutical industry and other sectors.',
    'home.whatsapp': 'Contact us',
    
    // Products Page
    'products.title': 'Our Products',
    'products.subtitle': 'Discover our categories',
    'products.loading': 'Loading...',
    'products.empty': 'No categories available yet.',
    'products.viewProducts': 'View Products',
    
    // Product Detail Page
    'product.title': 'Products',
    'product.technicalSpecs': 'Technical Specifications',
    'product.view3DModel': 'View 3D Model',
    'product.loading': 'Loading...',
    'product.empty': 'No products available in this category yet.',
    'product.error': 'An error occurred while loading products.',
    
    // Contact Page
    'contact.title': 'Contact',
    'contact.subtitle': 'Get in touch with us',
    'contact.form.name': 'Full Name',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Phone',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send',
    'contact.form.success': 'Your message has been sent successfully!',
    'contact.form.error': 'An error occurred while sending the message.',
    'contact.form.loading': 'Sending...',
    'contact.directions': 'Get Directions',
    'contact.address': 'Address',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.hours': 'Working Hours',
    
    // Blog Page
    'blog.title': 'Blog',
    'blog.subtitle': 'Discover our latest posts',
    'blog.readMore': 'Read More',
    'blog.loading': 'Loading...',
    'blog.empty': 'No blog posts available yet.',
    'blog.back': 'Go Back',
    'blog.backToHome': 'Back to Home',
    'blog.detail.title': 'Blog Detail',
    'blog.detail.backToTop': 'Back to Top',
    
    // Footer
    'footer.description': 'As Özver Textile, we are a leading company in the industry with our quality products and reliable service approach.',
    'footer.quickLinks': 'Quick Links',
    'footer.contact': 'Contact',
    'footer.followUs': 'Follow Us',
    'footer.rights': 'All rights reserved.',
    
    // Common
    'common.loading': 'Loading...',
    'common.error': 'An error occurred',
    'common.retry': 'Retry',
    'common.close': 'Close',
    'common.save': 'Save',
    'common.cancel': 'Cancel',
    'common.confirm': 'Confirm',
    'common.yes': 'Yes',
    'common.no': 'No',
  }
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('tr');

  // Local storage'dan dil tercihini yükle
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'tr' || savedLanguage === 'en')) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Dil değiştiğinde local storage'a kaydet
  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  // Çeviri fonksiyonu
  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  const value = {
    language,
    setLanguage: handleSetLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
