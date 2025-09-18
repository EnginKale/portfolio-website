import React from 'react'
import { Link } from 'react-router-dom'
import { ExternalLink, Star, Download, Lock } from 'lucide-react'
import { projects } from '../data/projects'

const Projects = () => {

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            <span className="text-gradient">Programlarım</span> & Projelerim
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Modern teknolojilerle geliştirdiğim özel programları keşfedin. 
            Her biri farklı ihtiyaçlara yönelik tasarlanmış, kaliteli çözümler.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`card p-0 overflow-hidden group animate-slide-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                    {project.category}
                  </span>
                </div>
                {project.isPremium && (
                  <div className="absolute top-4 right-4">
                    <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 p-2 rounded-full">
                      <Lock size={16} className="text-white" />
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span key={tech} className="bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <div className="flex items-center space-x-1">
                    <Star size={16} className="text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-gray-600">{project.rating}</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.features.slice(0, 2).map((feature) => (
                      <span key={feature} className="bg-primary-50 text-primary-700 px-2 py-1 rounded text-xs font-medium">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Download size={14} />
                    <span>{project.downloads.toLocaleString()} indirme</span>
                  </div>
                  <div className="text-2xl font-bold text-primary-600">
                    {project.price}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex space-x-3">
                  <Link 
                    to={`/program/${project.id}`}
                    className="flex-1 bg-primary-600 hover:bg-primary-700 text-white text-center py-2 px-4 rounded-lg transition-colors duration-200 font-medium"
                  >
                    Detayları Gör
                  </Link>
                  <button className="p-2 border border-gray-300 hover:border-primary-600 hover:text-primary-600 rounded-lg transition-colors duration-200">
                    <ExternalLink size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Daha Fazla Proje Görmek İster misiniz?</h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Premium üyelikle tüm projelerime erişim sağlayın ve özel indirimlerden yararlanın.
            </p>
            <Link to="/pricing" className="btn-secondary bg-white text-primary-600 hover:bg-gray-50">
              Premium'a Geç
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects