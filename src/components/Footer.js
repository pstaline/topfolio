import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Footer.css';

const Footer = () => {
  const { language } = useLanguage();

  const socialLinks = [
    { 
      name: 'GitHub', 
      icon: (
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
        </svg>
      ),
      url: 'https://github.com/pstaline' 
    },
    { 
      name: 'LinkedIn', 
      icon: (
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      url: 'https://linkedin.com' 
    },
    { 
      name: 'Twitter', 
      icon: (
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      url: 'https://twitter.com' 
    },
    { 
      name: 'Email', 
      icon: (
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      ),
      url: 'mailto:momoprince2022@gmail.com' 
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">Momo Prince <span className="accent">Junior</span></h3>
            <p className="footer-tagline">
              {language === 'fr' && 'Développeur Web & Expert en Cybersécurité'}
              {language === 'en' && 'Web Developer & Cybersecurity Expert'}
              {language === 'tr' && 'Web Geliştirici & Siber Güvenlik Uzmanı'}
            </p>
            <p className="footer-description">
              {language === 'fr' && 'Passionné par la sécurité informatique et le développement de solutions innovantes.'}
              {language === 'en' && 'Passionate about IT security and developing innovative solutions.'}
              {language === 'tr' && 'BT güvenliği ve yenilikçi çözümler geliştirme konusunda tutkulu.'}
            </p>
          </div>

          <div className="footer-section">
            <h4>
              {language === 'fr' && 'Navigation'}
              {language === 'en' && 'Navigation'}
              {language === 'tr' && 'Navigasyon'}
            </h4>
            <ul className="footer-links">
              <li onClick={() => scrollToSection('home')}>
                {language === 'fr' && 'Accueil'}
                {language === 'en' && 'Home'}
                {language === 'tr' && 'Ana Sayfa'}
              </li>
              <li onClick={() => scrollToSection('about')}>
                {language === 'fr' && 'À propos'}
                {language === 'en' && 'About'}
                {language === 'tr' && 'Hakkında'}
              </li>
              <li onClick={() => scrollToSection('skills')}>
                {language === 'fr' && 'Compétences'}
                {language === 'en' && 'Skills'}
                {language === 'tr' && 'Yetenekler'}
              </li>
              <li onClick={() => scrollToSection('projects')}>
                {language === 'fr' && 'Projets'}
                {language === 'en' && 'Projects'}
                {language === 'tr' && 'Projeler'}
              </li>
              <li onClick={() => scrollToSection('contact')}>
                {language === 'fr' && 'Contact'}
                {language === 'en' && 'Contact'}
                {language === 'tr' && 'İletişim'}
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>
              {language === 'fr' && 'Contact'}
              {language === 'en' && 'Contact'}
              {language === 'tr' && 'İletişim'}
            </h4>
            <ul className="footer-contact">
              <li>
                <span className="footer-icon">📧</span>
                <a href="mailto:momoprince2022@gmail.com">momoprince2022@gmail.com</a>
              </li>
              <li>
                <span className="footer-icon">📱</span>
                <a href="tel:+905515230506">+90 551 523 05 06</a>
              </li>
              <li>
                <span className="footer-icon">📍</span>
                <span>Istanbul, Turquie</span>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>
              {language === 'fr' && 'Suivez-moi'}
              {language === 'en' && 'Follow Me'}
              {language === 'tr' && 'Beni Takip Edin'}
            </h4>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  title={social.name}
                >
                  <span className="social-icon">{social.icon}</span>
                </a>
              ))}
            </div>
            <button className="scroll-to-top" onClick={scrollToTop}>
              ↑ {language === 'fr' && 'Haut de page'}
              {language === 'en' && 'Back to top'}
              {language === 'tr' && 'Yukarı'}
            </button>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>
              © {new Date().getFullYear()} Momo Prince Junior. 
              {language === 'fr' && ' Tous droits réservés.'}
              {language === 'en' && ' All rights reserved.'}
              {language === 'tr' && ' Tüm hakları saklıdır.'}
            </p>
            <p className="footer-made-with">
              {language === 'fr' && 'Fait avec'}
              {language === 'en' && 'Made with'}
              {language === 'tr' && 'ile yapıldı'}
              {' '}❤️{' '}
              {language === 'fr' && 'et'}
              {language === 'en' && 'and'}
              {language === 'tr' && 've'}
              {' '}React
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;