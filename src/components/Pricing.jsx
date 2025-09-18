import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Check, Star, Zap, Crown, Shield } from 'lucide-react'

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false)

  const plans = [
    {
      name: "Ücretsiz",
      icon: Shield,
      price: { monthly: 0, annual: 0 },
      description: "Başlamak için mükemmel",
      features: [
        "3 programa erişim",
        "Temel destek",
        "Topluluk forumu",
        "Temel dokümantasyon",
        "Email desteği"
      ],
      limitations: [
        "Premium projeler hariç",
        "Sınırlı indirme",
        "Reklam içerir"
      ],
      buttonText: "Ücretsiz Başla",
      buttonStyle: "btn-secondary",
      popular: false
    },
    {
      name: "Pro",
      icon: Zap,
      price: { monthly: 2499, annual: 1999 },
      description: "Profesyoneller için ideal",
      features: [
        "Tüm programlara erişim",
        "Öncelikli destek",
        "Özel projeler",
        "Kaynak kodları",
        "Video eğitimler",
        "API erişimi",
        "Özel entegrasyonlar",
        "Aylık webinarlar",
        "1-1 danışmanlık (2 saat/ay)",
        "Özel modül geliştirme"
      ],
      limitations: [],
      buttonText: "Pro'ya Geç",
      buttonStyle: "btn-primary",
      popular: true,
      savings: isAnnual ? "5 ay ücretsiz!" : null
    },
    {
      name: "Enterprise",
      icon: Crown,
      price: { monthly: 7999, annual: 6399 },
      description: "Büyük ekipler için",
      features: [
        "Pro'daki her şey",
        "Sınırsız kullanıcı",
        "Özel geliştirme",
        "24/7 destek",
        "SLA garantisi",
        "Özel eğitim",
        "Danışmanlık hizmeti",
        "Beyaz etiket çözümler",
        "Özel hosting",
        "Gelişmiş analitik",
        "Özel yazılım geliştirme",
        "Sistem entegrasyonu",
        "Teknik ekip desteği",
        "Proje yönetimi"
      ],
      limitations: [],
      buttonText: "İletişime Geç",
      buttonStyle: "bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl",
      popular: false,
      savings: isAnnual ? "6 ay ücretsiz!" : null
    }
  ]

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            <span className="text-gradient">Fiyatlandırma</span> Planları
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            İhtiyacınıza uygun planı seçin ve programlarıma erişim sağlayın. 
            Tüm planlar 30 gün para iade garantisi ile birlikte gelir.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Aylık
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ${
                isAnnual ? 'bg-primary-600' : 'bg-gray-300'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                  isAnnual ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Yıllık
            </span>
            {isAnnual && (
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                %20 İndirim
              </span>
            )}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon
            const currentPrice = isAnnual ? plan.price.annual : plan.price.monthly
            
            return (
              <div
                key={plan.name}
                className={`relative card p-8 ${
                  plan.popular 
                    ? 'ring-2 ring-primary-500 shadow-2xl scale-105' 
                    : ''
                } animate-slide-up`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                      <Star size={14} className="fill-current" />
                      <span>En Popüler</span>
                    </div>
                  </div>
                )}

                {/* Plan Header */}
                <div className="text-center mb-8">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                    plan.name === 'Ücretsiz' ? 'bg-gray-100' :
                    plan.name === 'Pro' ? 'bg-primary-100' : 'bg-purple-100'
                  }`}>
                    <IconComponent className={`w-8 h-8 ${
                      plan.name === 'Ücretsiz' ? 'text-gray-600' :
                      plan.name === 'Pro' ? 'text-primary-600' : 'text-purple-600'
                    }`} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-gray-900">₺{currentPrice}</span>
                    {currentPrice > 0 && (
                      <span className="text-gray-500">/{isAnnual ? 'yıl' : 'ay'}</span>
                    )}
                  </div>
                  
                  {plan.savings && (
                    <div className="text-green-600 text-sm font-medium">{plan.savings}</div>
                  )}
                </div>

                {/* Features */}
                <div className="mb-8">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {plan.limitations.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <p className="text-sm text-gray-500 mb-2">Sınırlamalar:</p>
                      <ul className="space-y-1">
                        {plan.limitations.map((limitation, limitIndex) => (
                          <li key={limitIndex} className="text-sm text-gray-500">
                            • {limitation}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* CTA Button */}
                {plan.name === 'Ücretsiz' ? (
                  <Link to="/register" className={`w-full ${plan.buttonStyle} inline-block text-center`}>
                    {plan.buttonText}
                  </Link>
                ) : plan.name === 'Pro' ? (
                  <Link to="/register" className={`w-full ${plan.buttonStyle} inline-block text-center`}>
                    {plan.buttonText}
                  </Link>
                ) : (
                  <a 
                    href="mailto:contact@example.com?subject=Enterprise Plan İletişim&body=Merhaba, Enterprise plan hakkında bilgi almak istiyorum."
                    className={`w-full ${plan.buttonStyle} inline-block text-center`}
                  >
                    {plan.buttonText}
                  </a>
                )}
              </div>
            )
          })}
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">
            Sıkça Sorulan Sorular
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Para iade garantisi var mı?
                </h4>
                <p className="text-gray-600">
                  Evet, tüm ücretli planlar 30 gün para iade garantisi ile birlikte gelir. 
                  Memnun kalmazsanız tam iade alabilirsiniz.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Planımı istediğim zaman değiştirebilir miyim?
                </h4>
                <p className="text-gray-600">
                  Tabii ki! Planınızı istediğiniz zaman yükseltebilir veya düşürebilirsiniz. 
                  Değişiklikler anında geçerli olur.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Hangi ödeme yöntemlerini kabul ediyorsunuz?
                </h4>
                <p className="text-gray-600">
                  Kredi kartı, banka kartı ve PayPal ile ödeme yapabilirsiniz. 
                  Tüm ödemeler SSL ile güvence altındadır.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Destek nasıl alabilirim?
                </h4>
                <p className="text-gray-600">
                  Email, canlı chat ve topluluk forumu üzerinden destek alabilirsiniz. 
                  Pro ve Enterprise kullanıcılar öncelikli destek alır.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="flex flex-wrap justify-center items-center space-x-8 opacity-60">
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="w-5 h-5 text-green-500" />
              <span className="text-sm text-gray-600">SSL Güvenlik</span>
            </div>
            <div className="flex items-center space-x-2 mb-4">
              <Check className="w-5 h-5 text-green-500" />
              <span className="text-sm text-gray-600">30 Gün Garanti</span>
            </div>
            <div className="flex items-center space-x-2 mb-4">
              <Star className="w-5 h-5 text-yellow-500" />
              <span className="text-sm text-gray-600">25+ Mutlu Müşteri</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing