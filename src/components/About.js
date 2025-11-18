import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './About.css';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about">
      <div className="container">
        <h2>{t('about.title')}</h2>
        <div className="about-content">
          <div className="about-text">
            <p>{t('about.text1')}</p>
            <br />
            <p>{t('about.text2')}</p>
            <div className="cv-downloads">
              <a href="/cv-fr.pdf" download className="cv-btn">
                📄 {t('about.downloadCV')} (FR)
              </a>
              <a href="/cv-en.pdf" download className="cv-btn">
                📄 {t('about.downloadCV')} (EN)
              </a>
              <a href="/cv-tr.pdf" download className="cv-btn">
                📄 {t('about.downloadCV')} (TR)
              </a>
            </div>
          </div>
          <div className="about-image">
            <div className="profile-img-wrapper">
              <img src="/profile.jpg" alt="Momo Prince Junior" className="profile-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
