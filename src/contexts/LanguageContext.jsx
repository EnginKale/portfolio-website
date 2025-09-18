import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations = {
  tr: {
    // Navigation
    home: 'Ana Sayfa',
    projects: 'Projeler',
    pricing: 'Fiyatlandırma',
    about: 'Hakkımda',
    contact: 'İletişim',
    login: 'Giriş Yap',
    register: 'Üye Ol',
    profile: 'Profil',
    logout: 'Çıkış Yap',
    
    // Hero Section
    heroTitle: 'Profesyonel Yazılım Çözümleri',
    heroSubtitle: 'Modern teknolojilerle geliştirilmiş, kullanıcı dostu ve güvenilir yazılım projeleri',
    heroDescription: 'İş süreçlerinizi optimize eden, verimliliği artıran ve kullanıcı deneyimini ön planda tutan yazılım çözümleri sunuyoruz.',
    viewProjects: 'Projeleri İncele',
    getStarted: 'Hemen Başla',
    
    // Stats
    completedProjects: 'Tamamlanan Proje',
    happyClients: 'Mutlu Müşteri',
    yearsExperience: 'Yıl Deneyim',
    
    // Features
    modernDesign: 'Modern Tasarım',
    modernDesignDesc: 'Güncel tasarım trendleri',
    fastPerformance: 'Hızlı Performans',
    fastPerformanceDesc: 'Optimize edilmiş kod yapısı',
    secureCode: 'Güvenli Kod',
    secureCodeDesc: 'En iyi güvenlik standartları',
    
    // Projects
    projectsTitle: 'Öne Çıkan Projeler',
    projectsSubtitle: 'Farklı sektörlerden başarılı projelerimizi keşfedin',
    viewDetails: 'Detayları Gör',
    downloadNow: 'Şimdi İndir',
    premium: 'Premium',
    free: 'Ücretsiz',
    downloads: 'İndirme',
    rating: 'Puan',
    
    // Pricing
    pricingTitle: 'Fiyatlandırma Planları',
    pricingSubtitle: 'İhtiyaçlarınıza uygun planı seçin',
    monthly: 'Aylık',
    yearly: 'Yıllık',
    mostPopular: 'En Popüler',
    freeStart: 'Ücretsiz Başla',
    upgradeToPro: 'Pro\'ya Geç',
    contactUs: 'İletişime Geç',
    
    // Footer
    quickLinks: 'Hızlı Linkler',
    support: 'Destek',
    company: 'Şirket',
    newsletter: 'Bülten',
    newsletterDesc: 'En son güncellemeler ve haberler için abone olun',
    subscribe: 'Abone Ol',
    allRightsReserved: 'Tüm hakları saklıdır',
    
    // Auth
    email: 'E-posta',
    password: 'Şifre',
    confirmPassword: 'Şifre Tekrar',
    fullName: 'Ad Soyad',
    rememberMe: 'Beni Hatırla',
    forgotPassword: 'Şifremi Unuttum',
    dontHaveAccount: 'Hesabınız yok mu?',
    alreadyHaveAccount: 'Zaten hesabınız var mı?',
    
    // Common
    loading: 'Yükleniyor...',
    error: 'Hata',
    success: 'Başarılı',
    save: 'Kaydet',
    cancel: 'İptal',
    delete: 'Sil',
    edit: 'Düzenle',
    close: 'Kapat'
  },
  en: {
    // Navigation
    home: 'Home',
    projects: 'Projects',
    pricing: 'Pricing',
    about: 'About',
    contact: 'Contact',
    login: 'Login',
    register: 'Sign Up',
    profile: 'Profile',
    logout: 'Logout',
    
    // Hero Section
    heroTitle: 'Professional Software Solutions',
    heroSubtitle: 'User-friendly and reliable software projects developed with modern technologies',
    heroDescription: 'We offer software solutions that optimize your business processes, increase efficiency and prioritize user experience.',
    viewProjects: 'View Projects',
    getStarted: 'Get Started',
    
    // Stats
    completedProjects: 'Completed Projects',
    happyClients: 'Happy Clients',
    yearsExperience: 'Years Experience',
    
    // Features
    modernDesign: 'Modern Design',
    modernDesignDesc: 'Current design trends',
    fastPerformance: 'Fast Performance',
    fastPerformanceDesc: 'Optimized code structure',
    secureCode: 'Secure Code',
    secureCodeDesc: 'Best security standards',
    
    // Projects
    projectsTitle: 'Featured Projects',
    projectsSubtitle: 'Discover our successful projects from different sectors',
    viewDetails: 'View Details',
    downloadNow: 'Download Now',
    premium: 'Premium',
    free: 'Free',
    downloads: 'Downloads',
    rating: 'Rating',
    
    // Pricing
    pricingTitle: 'Pricing Plans',
    pricingSubtitle: 'Choose the plan that suits your needs',
    monthly: 'Monthly',
    yearly: 'Yearly',
    mostPopular: 'Most Popular',
    freeStart: 'Start Free',
    upgradeToPro: 'Upgrade to Pro',
    contactUs: 'Contact Us',
    
    // Footer
    quickLinks: 'Quick Links',
    support: 'Support',
    company: 'Company',
    newsletter: 'Newsletter',
    newsletterDesc: 'Subscribe for latest updates and news',
    subscribe: 'Subscribe',
    allRightsReserved: 'All rights reserved',
    
    // Auth
    email: 'Email',
    password: 'Password',
    confirmPassword: 'Confirm Password',
    fullName: 'Full Name',
    rememberMe: 'Remember Me',
    forgotPassword: 'Forgot Password',
    dontHaveAccount: 'Don\'t have an account?',
    alreadyHaveAccount: 'Already have an account?',
    
    // Common
    loading: 'Loading...',
    error: 'Error',
    success: 'Success',
    save: 'Save',
    cancel: 'Cancel',
    delete: 'Delete',
    edit: 'Edit',
    close: 'Close'
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('language');
    return saved || 'tr';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key) => {
    return translations[language][key] || key;
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'tr' ? 'en' : 'tr');
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};