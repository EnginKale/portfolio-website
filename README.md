# Portfolio Website

Modern ve responsive tasarıma sahip portfolio websitesi. React, Tailwind CSS ve modern web teknolojileri kullanılarak geliştirilmiştir.

# Ön İzleme

https://enginkale.github.io/portfolio-website

## 🚀 Özellikler

- **Modern Tasarım**: Gradient arka planlar, animasyonlar ve responsive tasarım
- **Proje Vitrini**: Programların detaylı tanıtımı ve showcase
- **Fiyatlandırma Sistemi**: Ücretsiz, Pro ve Enterprise planları
- **Üyelik Sistemi**: Kullanıcı kayıt ve giriş altyapısı
- **Çok Dilli Destek**: Türkçe ve İngilizce dil seçenekleri
- **Responsive**: Tüm cihazlarda mükemmel görünüm
- **SEO Optimized**: Arama motorları için optimize edilmiş

## 🛠️ Teknolojiler

- **Frontend**: React 18, Tailwind CSS
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Deployment**: GitHub Pages

## 📦 Kurulum

1. **Projeyi klonlayın:**
```bash
git clone https://github.com/yourusername/portfolio-website.git
cd portfolio-website
```

2. **Bağımlılıkları yükleyin:**
```bash
npm install
```

3. **Geliştirme sunucusunu başlatın:**
```bash
npm run dev
```

4. **Tarayıcınızda açın:**
```
http://localhost:5173
```

## 🚀 Production Build

```bash
npm run build
```

Build edilen dosyalar `dist` klasöründe oluşturulur.

## 📁 Proje Yapısı

```
src/
├── components/
│   ├── Navbar.jsx          # Navigation bileşeni
│   ├── Hero.jsx            # Ana hero section
│   ├── Projects.jsx        # Proje showcase
│   ├── Pricing.jsx         # Fiyatlandırma planları
│   ├── Footer.jsx          # Footer bileşeni
│   ├── Login.jsx           # Giriş sayfası
│   ├── Register.jsx        # Kayıt sayfası
│   ├── Profile.jsx         # Profil sayfası
│   └── ProgramDetail.jsx   # Program detay sayfası
├── contexts/
│   └── LanguageContext.jsx # Dil yönetimi
├── data/
│   └── projects.js         # Proje verileri
├── App.jsx                 # Ana uygulama bileşeni
├── main.jsx               # React entry point
└── index.css              # Global stiller
```

## 🎨 Tasarım Özellikleri

- **Gradient Backgrounds**: Modern gradient arka planlar
- **Smooth Animations**: CSS ve Tailwind animasyonları
- **Card Hover Effects**: Interaktif kart tasarımları
- **Responsive Grid**: Mobil-first yaklaşım
- **Custom Colors**: Özel renk paleti

## 📱 Responsive Tasarım

- **Mobile First**: Mobil cihazlar öncelikli tasarım
- **Tablet Optimized**: Tablet görünümü için optimize edilmiş
- **Desktop Enhanced**: Masaüstü için gelişmiş özellikler

## 🔧 Konfigürasyon

### Vite Config
- GitHub Pages için base path ayarı
- React plugin konfigürasyonu

### Tailwind Config
- Özel renk paleti
- Custom animasyonlar
- Responsive breakpoints

## 🌐 Deployment

Bu proje GitHub Pages kullanılarak otomatik deploy edilir. Her `main` branch'e push işleminde GitHub Actions workflow'u çalışır ve site güncellenir.

### Manuel Deployment
```bash
npm run build
# Build edilen dosyaları hosting servisinize yükleyin
```

## 🤝 Katkıda Bulunma

1. Fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit edin (`git commit -m 'Add amazing feature'`)
4. Push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## 🔒 Güvenlik

Bu projede kişisel bilgiler (email, isim vb.) placeholder değerlerle değiştirilmiştir. Gerçek kullanımda bu değerleri kendi bilgilerinizle güncelleyin.

---

⭐ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın!