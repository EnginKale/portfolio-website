import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram, Heart } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-primary-600 to-primary-700 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">PW</span>
                </div>
                <span className="text-xl font-bold">Portfolio Website</span>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Modern teknolojilerle yenilikçi programlar geliştiren, 
                kaliteli yazılım çözümleri sunan bir geliştirici.
              </p>
              
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                  <Github size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                  <Instagram size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Hızlı Linkler</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                    Ana Sayfa
                  </Link>
                </li>
                <li>
                  <Link to="/#projects" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                    Programlarım
                  </Link>
                </li>
                <li>
                  <Link to="/pricing" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                    Fiyatlandırma
                  </Link>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                    Hakkımda
                  </a>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Destek</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                    Dokümantasyon
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                    API Referansı
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                    Topluluk Forumu
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                    SSS
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                    İletişim
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-6">İletişim</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail size={18} className="text-primary-400 flex-shrink-0" />
                  <span className="text-gray-300">engin@example.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone size={18} className="text-primary-400 flex-shrink-0" />
                  <span className="text-gray-300">+90 555 123 45 67</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin size={18} className="text-primary-400 flex-shrink-0" />
                  <span className="text-gray-300">İstanbul, Türkiye</span>
                </div>
              </div>

              {/* Newsletter */}
              <div className="mt-8">
                <h4 className="text-md font-semibold mb-3">Bülten</h4>
                <p className="text-gray-400 text-sm mb-4">
                  Yeni projeler ve güncellemeler hakkında bilgi alın.
                </p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Email adresiniz"
                    className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-primary-500 text-white placeholder-gray-400"
                  />
                  <button className="bg-primary-600 hover:bg-primary-700 px-4 py-2 rounded-r-lg transition-colors duration-200">
                    <Mail size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-gray-400 text-sm">
                © 2024 Portfolio Website. Tüm hakları saklıdır.
              </p>
              <div className="flex items-center space-x-1 text-gray-400 text-sm">
                <span>Made with</span>
                <Heart size={14} className="text-red-500 fill-current" />
                <span>in Turkey</span>
              </div>
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                Gizlilik Politikası
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                Kullanım Şartları
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                Çerezler
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer