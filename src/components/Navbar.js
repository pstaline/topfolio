import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Navbar.css';

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo">MP</div>
      <ul className="nav-links">
        <li onClick={() => scrollToSection('home')}>{t('nav.home')}</li>
        <li onClick={() => scrollToSection('about')}>{t('nav.about')}</li>
        <li onClick={() => scrollToSection('skills')}>{t('nav.skills')}</li>
        <li onClick={() => scrollToSection('certifications')}>{t('nav.certifications')}</li>
        <li onClick={() => scrollToSection('projects')}>{t('nav.projects')}</li>
        <li onClick={() => scrollToSection('contact')}>{t('nav.contact')}</li>
      </ul>
      <div className="lang-switcher">
        <button 
          className={`lang-btn ${language === 'fr' ? 'active' : ''}`}
          onClick={() => setLanguage('fr')}
        >
          FR
        </button>
        <button 
          className={`lang-btn ${language === 'en' ? 'active' : ''}`}
          onClick={() => setLanguage('en')}
        >
          EN
        </button>
        <button 
          className={`lang-btn ${language === 'tr' ? 'active' : ''}`}
          onClick={() => setLanguage('tr')}
        >
          TR
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
