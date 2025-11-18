import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('fr');

  const translations = {
    fr: {
      nav: {
        home: 'Accueil',
        about: 'À propos',
        skills: 'Compétences',
        certifications: 'Certifications',
        projects: 'Projets',
        contact: 'Contact'
      },
      home: {
        greeting: 'Bonjour, je suis',
        title: 'Développeur Web & Expert en Cybersécurité',
        description: 'Passionné par les nouvelles technologies et motivé par l\'innovation, je suis un étudiant dynamique constamment à la recherche de défis pour développer mes connaissances en cybersécurité et développement web.',
        cta: 'Me Contacter'
      },
      about: {
        title: 'À Propos de Moi',
        text1: "Honnêtement, je possède toutes les compétences et l'expérience que vous recherchez. Je suis assez confiant que je suis le meilleur candidat pour ce poste. Ce ne sont pas seulement mes antécédents dans les projets passés, mais aussi mes compétences relationnelles, qui seront applicables dans ce poste.",
        text2: "D'un autre côté, je suis une personne motivée et j'essaie de dépasser les attentes de mon supérieur avec un travail de haute qualité. Étant un apprenant rapide, je récupère rapidement des connaissances commerciales liées à mon projet. Enfin, je voudrais ajouter que je travaille aussi bien en tant que contributeur individuel qu'en tant que membre d'une équipe. Collectivement, toutes ces compétences réunies font de moi un ensemble complet pour ce travail.",
        downloadCV: 'Télécharger CV'
      },
      skills: {
        title: 'Compétences',
        webDev: 'Développement Web',
        cybersecurity: 'Cybersécurité',
        programming: 'Programmation',
        network: 'Réseau & Système',
        networkSecurity: 'Sécurité réseau',
        webSecurity: 'Sécurité Web',
        appSecurity: 'Sécurité des applications',
        penTesting: 'Tests de pénétration',
        networkMaintenance: 'Maintenance réseau',
        vpnFirewall: 'Configuration VPN, pare-feu',
        deployment: 'Déploiement d\'applications'
      },
      certifications: {
        title: 'Certifications & Formations',
        cscu: 'Utilisateur Certifié d\'Ordinateurs Sécurisés',
        ceh: 'Certified Ethical Hacker',
        ccna: 'Cisco Certified Network Associate',
        cyberops: 'Cisco CyberOps Associate'
      },
      projects: {
        title: 'Projets',
        viewDemo: 'Voir la Démo',
        ids: {
          title: 'Système de Détection d\'Intrusion Réseau',
          description: 'IDS personnalisé construit avec Python et Scapy pour surveiller le trafic réseau et détecter les activités suspectes en utilisant des méthodes de détection basées sur les signatures et les anomalies.'
        },
        encryption: {
          title: 'Plateforme de Communication Cryptée',
          description: 'Application de messagerie sécurisée implémentant le chiffrement de bout en bout en utilisant les algorithmes RSA et AES pour garantir des communications privées.'
        },
        pentest: {
          title: 'Kit d\'Outils de Test de Pénétration',
          description: 'Collection complète de scripts et d\'outils personnalisés pour le hacking éthique et les engagements de tests de pénétration.'
        },
        ecommerce: {
          title: 'Site E-commerce avec Paiement Intégré',
          description: 'Plateforme e-commerce complète avec intégration de paiement par carte bancaire et mobile money, gestion des produits et tableau de bord vendeur.'
        },
        dashboard: {
          title: 'Dashboard SaaS',
          description: 'Tableau de bord SaaS moderne avec analytiques en temps réel, gestion des utilisateurs et visualisations de données interactives.'
        }
      },
      contact: {
        title: 'Contact',
        description: 'Je suis actuellement à la recherche d\'opportunités professionnelles. N\'hésitez pas à me contacter !',
        name: 'Nom',
        email: 'Email',
        message: 'Message',
        send: 'Envoyer le message'
      }
    },
    en: {
      nav: {
        home: 'Home',
        about: 'About',
        skills: 'Skills',
        certifications: 'Certifications',
        projects: 'Projects',
        contact: 'Contact'
      },
      home: {
        greeting: 'Hi, I\'m',
        title: 'Web Developer & Cybersecurity Expert',
        description: 'Passionate about new technologies and driven by innovation, I am a dynamic student constantly seeking challenges to develop my knowledge in cybersecurity and web development.',
        cta: 'Contact Me'
      },
      about: {
        title: 'About Me',
        text1: "Honestly, I possess all the skills and experience you're looking for. I'm quite confident that I'm the best candidate for this position. It's not just my track record on past projects, but also my interpersonal skills, that will be applicable in this role.",
        text2: "On the other hand, I am a motivated individual and strive to exceed my manager's expectations with high-quality work. As a quick learner, I rapidly acquire business knowledge relevant to my projects. Finally, I would like to add that I work effectively both independently and as part of a team. Together, these skills make me a well-rounded candidate for this role.",
        downloadCV: 'Download CV'
      },
      skills: {
        title: 'Skills',
        webDev: 'Web Development',
        cybersecurity: 'Cybersecurity',
        programming: 'Programming',
        network: 'Network & System',
        networkSecurity: 'Network Security',
        webSecurity: 'Web Security',
        appSecurity: 'Application Security',
        penTesting: 'Penetration Testing',
        networkMaintenance: 'Network Maintenance',
        vpnFirewall: 'VPN, Firewall Configuration',
        deployment: 'Application Deployment'
      },
      certifications: {
        title: 'Certifications & Training',
        cscu: 'Certified Secure Computer User',
        ceh: 'Certified Ethical Hacker',
        ccna: 'Cisco Certified Network Associate',
        cyberops: 'Cisco CyberOps Associate'
      },
      projects: {
        title: 'Projects',
        viewDemo: 'View Demo',
        ids: {
          title: 'Network Intrusion Detection System',
          description: 'Custom IDS built with Python and Scapy to monitor network traffic and detect suspicious activities using signature-based and anomaly-based detection methods.'
        },
        encryption: {
          title: 'Encrypted Communication Platform',
          description: 'Secure messaging application implementing end-to-end encryption using RSA and AES algorithms to ensure private communications.'
        },
        pentest: {
          title: 'Penetration Testing Toolkit',
          description: 'Comprehensive collection of custom scripts and tools for ethical hacking and penetration testing engagements.'
        },
        ecommerce: {
          title: 'E-commerce Site with Integrated Payment',
          description: 'Complete e-commerce platform with credit card and mobile money payment integration, product management and vendor dashboard.'
        },
        dashboard: {
          title: 'SaaS Dashboard',
          description: 'Modern SaaS dashboard with real-time analytics, user management and interactive data visualizations.'
        }
      },
      contact: {
        title: 'Contact',
        description: 'I am currently looking for professional opportunities. Feel free to contact me!',
        name: 'Name',
        email: 'Email',
        message: 'Message',
        send: 'Send Message'
      }
    },
    tr: {
      nav: {
        home: 'Ana Sayfa',
        about: 'Hakkında',
        skills: 'Yetenekler',
        certifications: 'Sertifikalar',
        projects: 'Projeler',
        contact: 'İletişim'
      },
      home: {
        greeting: 'Merhaba, ben',
        title: 'Web Geliştirici & Siber Güvenlik Uzmanı',
        description: 'Yeni teknolojilere tutkulu ve yenilikle motive olmuş, siber güvenlik ve web geliştirme bilgimi geliştirmek için sürekli zorluklar arayan dinamik bir öğrenciyim.',
        cta: 'Bana Ulaşın'
      },
      about: {
        title: 'Hakkımda',
        text1: "Dürüst olmak gerekirse, aradığınız tüm beceri ve deneyime sahibim. Bu pozisyon için en iyi aday olduğuma oldukça eminim. Sadece geçmiş projelerdeki başarılarım değil, aynı zamanda kişilerarası becerilerim de bu rolde geçerli olacak.",
        text2: 'Öte yandan, motive bir bireyim ve yöneticimin beklentilerini yüksek kaliteli işlerle aşmaya çalışıyorum. Çabuk öğrenen biri olarak, projelerimle ilgili iş bilgisini hızla ediniyorum. Son olarak, hem bağımsız olarak hem de bir ekibin parçası olarak etkili bir şekilde çalıştığımı eklemek isterim. Bu beceriler bir araya geldiğinde, bu rol için çok yönlü bir aday oluyorum.',
        downloadCV: 'CV İndir'
      },
      skills: {
        title: 'Yetenekler',
        webDev: 'Web Geliştirme',
        cybersecurity: 'Siber Güvenlik',
        programming: 'Programlama',
        network: 'Ağ ve Sistem',
        networkSecurity: 'Ağ Güvenliği',
        webSecurity: 'Web Güvenliği',
        appSecurity: 'Uygulama Güvenliği',
        penTesting: 'Sızma Testleri',
        networkMaintenance: 'Ağ Bakımı',
        vpnFirewall: 'VPN, Firewall Yapılandırması',
        deployment: 'Uygulama Dağıtımı'
      },
      certifications: {
        title: 'Sertifikalar & Eğitimler',
        cscu: 'Sertifikalı Güvenli Bilgisayar Kullanıcısı',
        ceh: 'Sertifikalı Etik Hacker',
        ccna: 'Cisco Sertifikalı Ağ Uzmanı',
        cyberops: 'Cisco CyberOps Uzmanı'
      },
      projects: {
        title: 'Projeler',
        viewDemo: 'Demoyu Görüntüle',
        ids: {
          title: 'Ağ İzinsiz Giriş Tespit Sistemi',
          description: 'Ağ trafiğini izlemek ve imza tabanlı ve anomali tabanlı tespit yöntemlerini kullanarak şüpheli etkinlikleri tespit etmek için Python ve Scapy ile oluşturulmuş özel IDS.'
        },
        encryption: {
          title: 'Şifreli İletişim Platformu',
          description: 'Özel iletişimleri sağlamak için RSA ve AES algoritmalarını kullanarak uçtan uca şifreleme uygulayan güvenli mesajlaşma uygulaması.'
        },
        pentest: {
          title: 'Sızma Testi Araç Seti',
          description: 'Etik hackleme ve sızma testi görevleri için özel komut dosyaları ve araçların kapsamlı koleksiyonu.'
        },
        ecommerce: {
          title: 'Entegre Ödemeli E-ticaret Sitesi',
          description: 'Kredi kartı ve mobil para ödeme entegrasyonu, ürün yönetimi ve satıcı panosu ile eksiksiz e-ticaret platformu.'
        },
        dashboard: {
          title: 'SaaS Kontrol Paneli',
          description: 'Gerçek zamanlı analizler, kullanıcı yönetimi ve etkileşimli veri görselleştirmeleri ile modern SaaS kontrol paneli.'
        }
      },
      contact: {
        title: 'İletişim',
        description: 'Şu anda profesyonel fırsatlar arıyorum. Benimle iletişime geçmekten çekinmeyin!',
        name: 'İsim',
        email: 'E-posta',
        message: 'Mesaj',
        send: 'Mesaj Gönder'
      }
    }
  };

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    for (const k of keys) {
      value = value[k];
    }
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
