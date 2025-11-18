import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Skills.css';

const Skills = () => {
  const { t } = useLanguage();

  const skillsData = [
    {
      title: t('skills.webDev'),
      skills: ['React', 'Laravel', 'JavaScript', 'PHP', 'HTML/CSS']
    },
    {
      title: t('skills.cybersecurity'),
      skills: [
        t('skills.networkSecurity'),
        t('skills.webSecurity'),
        t('skills.appSecurity'),
        t('skills.penTesting'),
        'Linux Security'
      ]
    },
    {
      title: t('skills.programming'),
      skills: ['Python', 'JavaScript', 'PHP', 'C#']
    },
    {
      title: t('skills.network'),
      skills: [
        t('skills.networkMaintenance'),
        t('skills.vpnFirewall'),
        'Linux Administration',
        t('skills.deployment')
      ]
    }
  ];

  return (
    <section id="skills">
      <div className="container">
        <h2>{t('skills.title')}</h2>
        <div className="skills-grid">
          {skillsData.map((category, index) => (
            <div key={index} className="skill-card">
              <h3>{category.title}</h3>
              <ul className="skill-list">
                {category.skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
