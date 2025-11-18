import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import IDSDemo from '../demos/IDSDemo';
import EncryptionDemo from '../demos/EncryptionDemo';
import EcommerceDemo from '../demos/EcommerceDemo';
import DashboardDemo from '../demos/DashboardDemo';
import './Projects.css';

const Projects = () => {
  const { t } = useLanguage();
  const [activeDemo, setActiveDemo] = useState(null);

  const projects = [
    {
      id: 'ids',
      title: t('projects.ids.title'),
      description: t('projects.ids.description'),
      category: 'Network Security',
      tags: ['Python', 'Scapy', 'Machine Learning', 'Wireshark'],
      demo: <IDSDemo />
    },
    {
      id: 'encryption',
      title: t('projects.encryption.title'),
      description: t('projects.encryption.description'),
      category: 'Cryptography',
      tags: ['Node.js', 'React', 'RSA', 'AES256', 'WebSocket'],
      demo: <EncryptionDemo />
    },
    {
      id: 'ecommerce',
      title: t('projects.ecommerce.title'),
      description: t('projects.ecommerce.description'),
      category: 'Full Stack',
      tags: ['React', 'Node.js', 'Stripe', 'Mobile Money', 'MongoDB'],
      demo: <EcommerceDemo />
    },
    {
      id: 'dashboard',
      title: t('projects.dashboard.title'),
      description: t('projects.dashboard.description'),
      category: 'SaaS',
      tags: ['React', 'Chart.js', 'WebSocket', 'Analytics', 'Dashboard'],
      demo: <DashboardDemo />
    }
  ];

  return (
    <section id="projects">
      <div className="container">
        <h2>{t('projects.title')}</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <div>
                  <span className="project-category">{project.category}</span>
                  <h3>{project.title}</h3>
                </div>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tags.map((tag, i) => (
                  <span key={i} className="tech-tag">{tag}</span>
                ))}
              </div>
              <button 
                className="demo-btn"
                onClick={() => setActiveDemo(activeDemo === project.id ? null : project.id)}
              >
                {activeDemo === project.id ? '✕ Fermer' : `🚀 ${t('projects.viewDemo')}`}
              </button>
              {activeDemo === project.id && (
                <div className="demo-container">
                  {project.demo}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
