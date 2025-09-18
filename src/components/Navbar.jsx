import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, User, LogIn, Globe } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-primary-600 to-primary-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">EK</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Engin Kale</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary-600 transition-colors duration-200">
              {t('home')}
            </Link>
            <Link to="/#projects" className="text-gray-700 hover:text-primary-600 transition-colors duration-200">
              {t('projects')}
            </Link>
            <Link to="/pricing" className="text-gray-700 hover:text-primary-600 transition-colors duration-200">
              {t('pricing')}
            </Link>
            <div className="flex items-center space-x-3">
              <button 
                onClick={toggleLanguage}
                className="flex items-center space-x-2 text-gray-700 hover:text-primary-600 transition-colors duration-200"
              >
                <Globe size={18} />
                <span>{language === 'tr' ? 'EN' : 'TR'}</span>
              </button>
              <Link to="/login" className="flex items-center space-x-2 text-gray-700 hover:text-primary-600 transition-colors duration-200">
                <LogIn size={18} />
                <span>{t('login')}</span>
              </Link>
              <Link to="/register" className="btn-primary flex items-center space-x-2">
                <User size={18} />
                <span>{t('register')}</span>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary-600 transition-colors duration-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
              <Link
                to="/"
                className="block px-3 py-2 text-gray-700 hover:text-primary-600 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {t('home')}
              </Link>
              <Link
                to="/#projects"
                className="block px-3 py-2 text-gray-700 hover:text-primary-600 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {t('projects')}
              </Link>
              <Link
                to="/pricing"
                className="block px-3 py-2 text-gray-700 hover:text-primary-600 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {t('pricing')}
              </Link>
              <div className="px-3 py-2 space-y-2">
                <button 
                  onClick={toggleLanguage}
                  className="flex items-center space-x-2 w-full text-left text-gray-700 hover:text-primary-600 transition-colors duration-200"
                >
                  <Globe size={18} />
                  <span>{language === 'tr' ? 'English' : 'Türkçe'}</span>
                </button>
                <Link 
                  to="/login" 
                  className="flex items-center space-x-2 w-full text-left text-gray-700 hover:text-primary-600 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  <LogIn size={18} />
                  <span>{t('login')}</span>
                </Link>
                <Link 
                  to="/register" 
                  className="w-full btn-primary justify-center flex items-center space-x-2"
                  onClick={() => setIsOpen(false)}
                >
                  <User size={18} />
                  <span>{t('register')}</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar