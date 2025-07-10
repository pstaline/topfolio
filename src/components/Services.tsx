import React from 'react';
import { Shield, Code, Search, Lock, Globe, Server } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Services = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      icon: Shield,
      title: t('services.audit.title'),
      description: t('services.audit.description'),
      features: [
        t('services.audit.features.0'),
        t('services.audit.features.1'),
        t('services.audit.features.2'),
        t('services.audit.features.3')
      ]
    },
    {
      icon: Code,
      title: t('services.webdev.title'),
      description: t('services.webdev.description'),
      features: [
        t('services.webdev.features.0'),
        t('services.webdev.features.1'),
        t('services.webdev.features.2'),
        t('services.webdev.features.3')
      ]
    },
    {
      icon: Search,
      title: t('services.consulting.title'),
      description: t('services.consulting.description'),
      features: [
        t('services.consulting.features.0'),
        t('services.consulting.features.1'),
        t('services.consulting.features.2'),
        t('services.consulting.features.3')
      ]
    },
    {
      icon: Lock,
      title: t('services.securing.title'),
      description: t('services.securing.description'),
      features: [
        t('services.securing.features.0'),
        t('services.securing.features.1'),
        t('services.securing.features.2'),
        t('services.securing.features.3')
      ]
    },
    {
      icon: Server,
      title: t('services.devsecops.title'),
      description: t('services.devsecops.description'),
      features: [
        t('services.devsecops.features.0'),
        t('services.devsecops.features.1'),
        t('services.devsecops.features.2'),
        t('services.devsecops.features.3')
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t('services.title')} <span className="text-cyan-400">{t('services.subtitle')}</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            {t('services.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 mb-4 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-500">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;