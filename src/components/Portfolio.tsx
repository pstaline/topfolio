import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const { t } = useLanguage();

  const projects = [
    {
      title: t('portfolio.project.ecommerce.title'),
      description: t('portfolio.project.ecommerce.description'),
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'web',
      links: {
        live: '#',
        github: '#'
      }
    },
    {
      title: t('portfolio.project.audit.title'),
      description: t('portfolio.project.audit.description'),
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Penetration Testing', 'OWASP', 'Burp Suite', 'Nessus'],
      category: 'security',
      links: {
        live: '#',
        github: '#'
      }
    },
    {
      title: t('portfolio.project.dashboard.title'),
      description: t('portfolio.project.dashboard.description'),
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Vue.js', 'Python','MySQL'],
      category: 'web',
      links: {
        live: '#',
        github: '#'
      }
    },
    {
      title: t('portfolio.project.monitoring.title'),
      description: t('portfolio.project.monitoring.description'),
      image: 'https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Python', 'Docker', 'Kubernetes' ],
      category: 'security',
      links: {
        live: '#',
        github: '#' }
      
    },
    {
      title: t('portfolio.project.training.title'),
      description: t('portfolio.project.training.description'),
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Training', 'OWASP', 'Secure Coding'],
      category: 'training',
      links: {
        live: '#',
        github: '#'
      }
    }
  ];

  const filters = [
    { key: 'all', label: t('portfolio.filter.all') },
    { key: 'web', label: t('portfolio.filter.web') },
    { key: 'security', label: t('portfolio.filter.security') },
    { key: 'training', label: t('portfolio.filter.training') }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-gray-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-circuit-pattern"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t('portfolio.title')} <span className="text-cyan-400">{t('portfolio.subtitle')}</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            {t('portfolio.description')}
          </p>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter.key
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-gray-900/70 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60"></div>
                <div className="absolute top-4 right-4 flex space-x-2">
                  <a
                    href={project.links.live}
                    className="p-2 bg-gray-800/80 backdrop-blur-sm rounded-full text-white hover:bg-cyan-500 transition-colors duration-200"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  <a
                    href={project.links.github}
                    className="p-2 bg-gray-800/80 backdrop-blur-sm rounded-full text-white hover:bg-cyan-500 transition-colors duration-200"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-700 text-cyan-400 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;