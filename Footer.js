import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Footer.css';

const Footer = () => {
  const { t } = useLanguage();

  const socialLinks = [
    { name: 'GitHub', icon: '💻', url: 'https://github.com/pstaline' },
    { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com' },
    { name: 'Twitter', icon: '🐦', url: 'https://twitter.com' },
    { name: 'Email', icon: '📧', url: 'mailto:momoprince2022@gmail.com' }
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
              {t('language') === 'fr' && 'Développeur Web & Expert en Cybersécurité'}
              {t('language') === 'en' && 'Web Developer & Cybersecurity Expert'}
              {t('language') === 'tr' && 'Web Geliştirici & Siber Güvenlik Uzmanı'}
            </p>
            <p className="footer-description">
              {t('language') === 'fr' && 'Passionné par la sécurité informatique et le développement de solutions innovantes.'}
              {t('language') === 'en' && 'Passionate about IT security and developing innovative solutions.'}
              {t('language') === 'tr' && 'BT güvenliği ve yenilikçi çözümler geliştirme konusunda tutkulu.'}
            </p>
          </div>

          <div className="footer-section">
            <h4>
              {t('language') === 'fr' && 'Navigation'}
              {t('language') === 'en' && 'Navigation'}
              {t('language') === 'tr' && 'Navigasyon'}
            </h4>
            <ul className="footer-links">
              <li onClick={() => scrollToSection('home')}>
                {t('language') === 'fr' && 'Accueil'}
                {t('language') === 'en' && 'Home'}
                {t('language') === 'tr' && 'Ana Sayfa'}
              </li>
              <li onClick={() => scrollToSection('about')}>
                {t('language') === 'fr' && 'À propos'}
                {t('language') === 'en' && 'About'}
                {t('language') === 'tr' && 'Hakkında'}
              </li>
              <li onClick={() => scrollToSection('skills')}>
                {t('language') === 'fr' && 'Compétences'}
                {t('language') === 'en' && 'Skills'}
                {t('language') === 'tr' && 'Yetenekler'}
              </li>
              <li onClick={() => scrollToSection('projects')}>
                {t('language') === 'fr' && 'Projets'}
                {t('language') === 'en' && 'Projects'}
                {t('language') === 'tr' && 'Projeler'}
              </li>
              <li onClick={() => scrollToSection('contact')}>
                {t('language') === 'fr' && 'Contact'}
                {t('language') === 'en' && 'Contact'}
                {t('language') === 'tr' && 'İletişim'}
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>
              {t('language') === 'fr' && 'Contact'}
              {t('language') === 'en' && 'Contact'}
              {t('language') === 'tr' && 'İletişim'}
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
              {t('language') === 'fr' && 'Suivez-moi'}
              {t('language') === 'en' && 'Follow Me'}
              {t('language') === 'tr' && 'Beni Takip Edin'}
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
              ↑ {t('language') === 'fr' && 'Haut de page'}
              {t('language') === 'en' && 'Back to top'}
              {t('language') === 'tr' && 'Yukarı'}
            </button>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>
              © {new Date().getFullYear()} Momo Prince Junior. 
              {t('language') === 'fr' && ' Tous droits réservés.'}
              {t('language') === 'en' && ' All rights reserved.'}
              {t('language') === 'tr' && ' Tüm hakları saklıdır.'}
            </p>
            <p className="footer-made-with">
              {t('language') === 'fr' && 'Fait avec'}
              {t('language') === 'en' && 'Made with'}
              {t('language') === 'tr' && 'ile yapıldı'}
              {' '}❤️{' '}
              {t('language') === 'fr' && 'et'}
              {t('language') === 'en' && 'and'}
              {t('language') === 'tr' && 've'}
              {' '}React
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
