import React from 'react'
import { ArrowRight, Code, Zap, Shield, Star } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

const Hero = () => {
  const { t } = useLanguage();
  
  return (
    <section className="gradient-bg min-h-screen flex items-center relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce-slow animation-delay-400"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                {t('heroTitle').split(' ').slice(0, 1).join(' ')}
                <br />
                <span className="text-gradient">{t('heroTitle').split(' ').slice(1).join(' ')}</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 max-w-2xl">
                {t('heroSubtitle')}
              </p>
              
              <p className="text-lg text-gray-600 mb-12 max-w-3xl">
                {t('heroDescription')}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                <button className="btn-primary flex items-center justify-center space-x-2 group">
                  <span>{t('viewProjects')}</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
                </button>
                <button className="btn-secondary flex items-center justify-center space-x-2">
                  <span>{t('getStarted')}</span>
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 text-center lg:text-left">
                <div className="animate-slide-up">
                  <div className="text-3xl font-bold text-primary-600">6</div>
                  <div className="text-gray-600">{t('completedProjects')}</div>
                </div>
                <div className="animate-slide-up animation-delay-200">
                  <div className="text-3xl font-bold text-primary-600">25+</div>
                  <div className="text-gray-600">{t('happyClients')}</div>
                </div>
                <div className="animate-slide-up animation-delay-400">
                  <div className="text-3xl font-bold text-primary-600">2+</div>
                  <div className="text-gray-600">{t('yearsExperience')}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="relative">
            <div className="grid gap-6">
              <div className="card p-6 animate-slide-up">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Code className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{t('modernDesign')}</h3>
                    <p className="text-gray-600">{t('modernDesignDesc')}</p>
                  </div>
                </div>
              </div>

              <div className="card p-6 animate-slide-up animation-delay-200">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Zap className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{t('fastPerformance')}</h3>
                    <p className="text-gray-600">{t('fastPerformanceDesc')}</p>
                  </div>
                </div>
              </div>

              <div className="card p-6 animate-slide-up animation-delay-400">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Shield className="text-purple-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{t('secureCode')}</h3>
                    <p className="text-gray-600">{t('secureCodeDesc')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero