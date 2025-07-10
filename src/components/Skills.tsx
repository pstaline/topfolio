import React from 'react';
import { Code, Shield, Database, Cloud, PenTool as Tool, Zap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Skills = () => {
  const { t } = useLanguage();
  
  const skillCategories = [
    {
      icon: Code,
      title: t('skills.webdev.title'),
      skills: [
        { name: 'React', level: 80 },
        { name: 'Node.js', level: 80 },
        { name: 'Laravel', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'Next.js', level: 82 }
      ]
    },
    {
      icon: Shield,
      title: t('skills.security.title'),
      skills: [
        { name: 'Penetration Testing', level: 92 },
        { name: 'OWASP', level: 90 },
        { name: 'Cryptography', level: 85 },
        { name: 'Forensics', level: 78 },
        { name: 'Reverse Engineering', level: 75 },
        { name: 'Threat Intelligence', level: 80 }
      ]
    },
    {
      icon: Database,
      title: t('skills.database.title'),
      skills: [
        { name: 'MongoDB', level: 88 },
        { name: 'MySQL', level: 80 }
      ]
    },
    {
      icon: Cloud,
      title: t('skills.cloud.title'),
      skills: [
        { name: 'AWS', level: 85 },
        { name: 'Docker', level: 90 },
        { name: 'Kubernetes', level: 80 }
      ]
    },
    {
      icon: Tool,
      title: t('skills.tools.title'),
      skills: [
        { name: 'Burp Suite', level: 90 },
        { name: 'Nessus', level: 85 },
        { name: 'Metasploit', level: 82 },
        { name: 'Wireshark', level: 88 },
        { name: 'Nmap', level: 90 },
        { name: 'SIEM', level: 78 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t('skills.title')} <span className="text-cyan-400">{t('skills.subtitle')}</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            {t('skills.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg mr-4">
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
                      <span className="text-cyan-400 text-sm font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-cyan-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;