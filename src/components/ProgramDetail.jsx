import React from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft, Star, Download, Shield, Code, Zap, Users, CheckCircle } from 'lucide-react'
import { projects } from '../data/projects'

const ProgramDetail = () => {
  const { id } = useParams()
  
  // Find the program by ID
  const program = projects.find(p => p.id === parseInt(id))
  
  // If program not found, redirect to home
  if (!program) {
    return <Navigate to="/" replace />
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link 
          to="/"
          className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 mb-8 transition-colors duration-200"
        >
          <ArrowLeft size={20} />
          <span>Geri Dön</span>
        </Link>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Header */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">
                    {program.category}
                  </span>
                  <h1 className="text-3xl font-bold text-gray-900 mt-4 mb-2">
                    {program.title}
                  </h1>
                  <p className="text-gray-600 text-lg">
                    {program.description}
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap items-center gap-6 mb-6">
                <div className="flex items-center space-x-1">
                  <Star className="text-yellow-400 fill-current" size={20} />
                  <span className="font-semibold">{program.rating}</span>
                  <span className="text-gray-500">({program.reviews} değerlendirme)</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Download className="text-gray-400" size={20} />
                  <span className="text-gray-600">{program.downloads.toLocaleString()} indirme</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="text-gray-400" size={20} />
                  <span className="text-gray-600">Aktif kullanıcılar</span>
                </div>
              </div>

              {/* Main Image */}
              <img 
                src={program.image} 
                alt={program.title}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />

              {/* Technologies */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Kullanılan Teknolojiler</h3>
                <div className="flex flex-wrap gap-2">
                  {program.technologies.map((tech) => (
                    <span key={tech} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Detaylı Açıklama</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {program.longDescription}
              </p>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Özellikler</h3>
              <div className="grid md:grid-cols-2 gap-3">
                {program.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="text-green-500 flex-shrink-0" size={16} />
                    <span className="text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Screenshots */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Ekran Görüntüleri</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {program.screenshots.map((screenshot, index) => (
                  <img 
                    key={index}
                    src={screenshot} 
                    alt={`Screenshot ${index + 1}`}
                    className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
                  />
                ))}
              </div>
            </div>

            {/* Requirements */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Sistem Gereksinimleri</h2>
              <ul className="space-y-2">
                {program.requirements.map((requirement, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <Shield className="text-blue-500 flex-shrink-0" size={16} />
                    <span className="text-gray-600">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              {/* Purchase Card */}
              <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-primary-600 mb-2">
                    {program.price}
                  </div>
                  <p className="text-gray-500">Tek seferlik ödeme</p>
                </div>

                <div className="space-y-4 mb-6">
                  <button className="w-full btn-primary">
                    Satın Al
                  </button>
                  <button className="w-full btn-secondary">
                    Demo İzle
                  </button>
                </div>

                <div className="border-t pt-4">
                  <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Shield size={16} />
                      <span>Güvenli Ödeme</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <CheckCircle size={16} />
                      <span>30 Gün Garanti</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Info Card */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Program Bilgileri</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Versiyon:</span>
                    <span className="font-medium">{program.version}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Son Güncelleme:</span>
                    <span className="font-medium">{program.lastUpdate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Kategori:</span>
                    <span className="font-medium">{program.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Lisans:</span>
                    <span className="font-medium">Ticari</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t">
                  <h4 className="font-semibold text-gray-900 mb-2">Dahil Olanlar:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Kaynak kodları</li>
                    <li>• Dokümantasyon</li>
                    <li>• Video eğitimler</li>
                    <li>• 1 yıl destek</li>
                    <li>• Ücretsiz güncellemeler</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProgramDetail