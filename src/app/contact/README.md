# İletişim Sayfası

Bu sayfa, Özver Mekatronik web sitesinin iletişim bölümünü içerir.

## Özellikler

### 🎨 Modern Estetik Tasarım
- Gradient arka plan (slate-900 → purple-900 → slate-900)
- Glassmorphism efektleri (backdrop-blur-xl)
- Animasyonlu arka plan elementleri
- Responsive tasarım

### 📱 Responsive Tasarım
- Mobile-first yaklaşım
- Grid layout ile esnek düzen
- Mobil ve desktop için optimize edilmiş navigation
- Touch-friendly form elemanları

### 🗺️ Dark Harita
- İstanbul koordinatları (41.0082° N, 28.9784° E)
- Grid çizgileri ile modern görünüm
- Gradient arka plan
- Konum ikonu ve bilgileri

### 📝 İletişim Formu
- Ad Soyad, E-posta, Konu, Mesaj alanları
- Form validasyonu
- Loading state'leri
- Success message
- Modern input tasarımı

### 📞 İletişim Bilgileri
- Adres (İstanbul, Türkiye)
- Telefon numarası
- E-posta adresi
- Çalışma saatleri
- Hover efektleri

### 🚀 Animasyonlar
- Framer Motion ile smooth animasyonlar
- Staggered entrance effects
- Hover transitions
- Loading states

## Teknik Detaylar

### Kullanılan Teknolojiler
- **Next.js 15** - React framework
- **TypeScript** - Tip güvenliği
- **Tailwind CSS** - Styling
- **Framer Motion** - Animasyonlar
- **Lucide React** - İkonlar

### Component Yapısı
- `Navbar` - Navigation bar
- `ContactForm` - İletişim formu
- `ContactInfo` - İletişim bilgileri
- `DarkMap` - Harita bileşeni
- `Footer` - Alt bilgi

### State Management
- Form verileri için local state
- Loading ve success state'leri
- Mobile menu state

## Kullanım

1. `/contact` route'una gidin
2. Form alanlarını doldurun
3. "Mesaj Gönder" butonuna tıklayın
4. Success message'ı görün
5. Navigation ile diğer sayfalara geçin

## Özelleştirme

### Renkler
- Ana renk: `purple-500` → `blue-600`
- Arka plan: `slate-900` → `purple-900` → `slate-900`
- Accent: `purple-400`, `blue-400`, `pink-400`

### Animasyonlar
- Entrance: 0.6s duration
- Staggered delays: 0.2s, 0.4s, 0.6s
- Hover effects: scale, border color changes

### Responsive Breakpoints
- Mobile: `< 768px`
- Tablet: `768px - 1024px`
- Desktop: `> 1024px`

## Gelecek Geliştirmeler

- [ ] Gerçek harita entegrasyonu (Google Maps, Mapbox)
- [ ] Form backend entegrasyonu
- [ ] File upload desteği
- [ ] Chat bot entegrasyonu
- [ ] Multi-language desteği
- [ ] Dark/Light mode toggle
