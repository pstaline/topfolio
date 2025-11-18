import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Home.css';

const Home = () => {
  const { t } = useLanguage();

  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="home-section">
      <div className="container home-content">
        <p className="subtitle">{t('home.greeting')}</p>
        <h1>Momo Prince <span className="accent">Junior</span></h1>
        <h2 className="job-title">{t('home.title')}</h2>
        <p className="description">{t('home.description')}</p>
        <button className="cta-button" onClick={scrollToContact}>
          {t('home.cta')}
        </button>
      </div>
    </section>
  );
};

export default Home;
