import React from 'react';
import { User, Award, Clock, Target } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  
  const stats = [
    { icon: Award, label: t('about.stats.projects'), value: '5+' },
    { icon: Clock, label: t('about.stats.experience'), value: '5+' },
    { icon: Target, label: t('about.stats.clients'), value: '30+' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-grid-pattern"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t('about.title')} <span className="text-cyan-400">{t('about.subtitle')}</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            {t('about.description')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="prose prose-lg prose-invert">
              <p className="text-gray-300 leading-relaxed">
                {t('about.content.1')}
              </p>
              
              <p className="text-gray-300 leading-relaxed">
                {t('about.content.2')}
              </p>

              <p className="text-gray-300 leading-relaxed">
                {t('about.content.3')}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {['React', 'Node.js', 'Python', 'Cybersecurity', 'Penetration Testing', 'DevSecOps'].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-gray-700 text-cyan-400 rounded-full text-sm font-medium hover:bg-gray-600 transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gray-700/50 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-gray-700/70 transition-all duration-300 hover:scale-105"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg mb-4">
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{stat.value}</h3>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;