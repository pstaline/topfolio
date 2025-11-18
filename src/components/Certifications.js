import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Certifications.css';

const Certifications = () => {
  const { t } = useLanguage();

  const certs = [
    {
      name: 'CSCU',
      title: t('certifications.cscu'),
      issuer: 'EC-Council',
      id: 'EECC6201379845'
    },
    {
      name: 'CEH',
      title: t('certifications.ceh'),
      issuer: 'EC-Council'
    },
    {
      name: 'CCNA',
      title: t('certifications.ccna'),
      issuer: 'Cisco'
    },
    {
      name: 'CyberOps',
      title: t('certifications.cyberops'),
      issuer: 'Cisco'
    }
  ];

  return (
    <section id="certifications">
      <div className="container">
        <h2>{t('certifications.title')}</h2>
        <div className="cert-grid">
          {certs.map((cert, index) => (
            <div key={index} className="cert-card">
              <h3>{cert.name}</h3>
              <p className="cert-title">{cert.title}</p>
              <p className="cert-issuer">{cert.issuer}</p>
              {cert.id && <p className="cert-id">ID: {cert.id}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
