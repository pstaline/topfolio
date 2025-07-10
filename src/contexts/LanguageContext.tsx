import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'tr' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.portfolio': 'Portfolio',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.greeting': 'Hello, I am',
    'hero.name': 'Momo Prince',
    'hero.roles.0': 'Cybersecurity Expert',
    'hero.roles.1': 'Full-Stack Developer',
    'hero.roles.2': 'Security Consultant',
    'hero.roles.3': 'Web Architect',
    'hero.description': 'Passionate about system protection and creating robust web applications, I combine technical expertise and innovation to secure your digital presence.',
    'hero.cta.projects': 'View My Projects',
    'hero.cta.contact': 'Contact Me',
    
    // About Section
    'about.title': 'About',
    'about.subtitle': 'Me',
    'about.description': 'Discover my journey and passion for cybersecurity and web development',
    'about.content.1': 'With over 5 years of experience in cybersecurity and web development, I specialize in creating secure and high-performance digital solutions.',
    'about.content.2': 'My dual expertise allows me to approach each project with a holistic approach, integrating security best practices from the design phase while maintaining optimal user experience.',
    'about.content.3': 'Passionate about new technologies and technical challenges, I constantly stay up-to-date with the latest threats and industry innovations.',
    'about.stats.projects': 'Projects Completed',
    'about.stats.experience': 'Years of Experience',
    'about.stats.clients': 'Satisfied Clients',
    
    // Services Section
    'services.title': 'My',
    'services.subtitle': 'Services',
    'services.description': 'A complete range of services to secure and develop your digital presence',
    'services.audit.title': 'Security Audit',
    'services.audit.description': 'Complete evaluation of your infrastructure to identify vulnerabilities and recommend solutions.',
    'services.audit.features.0': 'Penetration testing',
    'services.audit.features.1': 'Vulnerability analysis',
    'services.audit.features.2': 'Detailed report',
    'services.audit.features.3': 'Action plan',
    'services.webdev.title': 'Secure Web Development',
    'services.webdev.description': 'Creation of robust web applications with integrated security from conception.',
    'services.webdev.features.0': 'Secure architecture',
    'services.webdev.features.1': 'Code review',
    'services.webdev.features.2': 'Automated testing',
    'services.webdev.features.3': 'Complete documentation',
    'services.consulting.title': 'Cybersecurity Consulting',
    'services.consulting.description': 'Strategic support to strengthen your security posture.',
    'services.consulting.features.0': 'Risk analysis',
    'services.consulting.features.1': 'Security strategy',
    'services.consulting.features.2': 'Team training',
    'services.consulting.features.3': 'Technology watch',
    'services.securing.title': 'Application Security',
    'services.securing.description': 'Strengthening the security of your existing applications.',
    'services.securing.features.0': 'Strong authentication',
    'services.securing.features.1': 'Data encryption',
    'services.securing.features.2': 'OWASP protection',
    'services.securing.features.3': 'Secure monitoring',
    'services.devsecops.title': 'DevSecOps',
    'services.devsecops.description': 'Integration of security into your development pipelines.',
    'services.devsecops.features.0': 'Secure CI/CD',
    'services.devsecops.features.1': 'Automated testing',
    'services.devsecops.features.2': 'Continuous monitoring',
    'services.devsecops.features.3': 'Real-time alerts',
    
    // Portfolio Section
    'portfolio.title': 'My',
    'portfolio.subtitle': 'Portfolio',
    'portfolio.description': 'Discover my recent projects combining web development and cybersecurity',
    'portfolio.filter.all': 'All',
    'portfolio.filter.web': 'Web Development',
    'portfolio.filter.security': 'Cybersecurity',
    'portfolio.filter.training': 'Training',
    'portfolio.project.ecommerce.title': 'Secure E-commerce',
    'portfolio.project.ecommerce.description': 'E-commerce platform with multi-factor authentication and end-to-end encryption.',
    'portfolio.project.audit.title': 'Security Audit - FinTech',
    'portfolio.project.audit.description': 'Complete security audit for a fintech startup, identification of 15 critical vulnerabilities.',
    'portfolio.project.dashboard.title': 'Analytics Dashboard',
    'portfolio.project.dashboard.description': 'Real-time analysis interface with interactive visualizations and secure alerts.',
    'portfolio.project.monitoring.title': 'Monitoring System',
    'portfolio.project.monitoring.description': 'Secure monitoring solution to detect intrusions and anomalies in real time.',
    'portfolio.project.training.title': 'Cybersecurity Training',
    'portfolio.project.training.description': 'Complete training program on security best practices for developers.',
    
    // Skills Section
    'skills.title': 'My',
    'skills.subtitle': 'Skills',
    'skills.description': 'An overview of my technical skills and expertise',
    'skills.webdev.title': 'Web Development',
    'skills.security.title': 'Cybersecurity',
    'skills.database.title': 'Databases',
    'skills.cloud.title': 'Cloud & DevOps',
    'skills.tools.title': 'Security Tools',
    
    // Contact Section
    'contact.title': 'Contact',
    'contact.subtitle': 'Me',
    'contact.description': 'Ready to secure your project? Let\'s discuss your needs',
    'contact.info.title': 'Let\'s stay in touch',
    'contact.info.description': 'Whether you need a security audit, application development or simply advice, I\'m here to support you in your projects.',
    'contact.info.email': 'Email',
    'contact.info.phone': 'Phone',
    'contact.info.location': 'Location',
    'contact.form.name': 'Full Name',
    'contact.form.name.placeholder': 'Your name',
    'contact.form.email': 'Email',
    'contact.form.email.placeholder': 'your@email.com',
    'contact.form.subject': 'Subject',
    'contact.form.subject.placeholder': 'Subject of your message',
    'contact.form.message': 'Message',
    'contact.form.message.placeholder': 'Describe your project or needs...',
    'contact.form.sending': 'Sending...',
    'contact.form.sent': 'Message sent!',
    'contact.form.send': 'Send Message',
    
    // Footer
    'footer.description': 'Cybersecurity and web development expert, I combine security and innovation to create robust digital solutions.',
    'footer.navigation': 'Navigation',
    'footer.followme': 'Follow Me',
    'footer.available': 'Available for new projects',
    'footer.rights': 'All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.legal': 'Legal Notice',
  },
  
  tr: {
    // Navigation
    'nav.home': 'Ana Sayfa',
    'nav.about': 'Hakkımda',
    'nav.services': 'Hizmetler',
    'nav.portfolio': 'Portföy',
    'nav.skills': 'Yetenekler',
    'nav.contact': 'İletişim',
    
    // Hero Section
    'hero.greeting': 'Merhaba, ben',
    'hero.name': 'Momo Prince',
    'hero.roles.0': 'Siber Güvenlik Uzmanı',
    'hero.roles.1': 'Full-Stack Geliştirici',
    'hero.roles.2': 'Güvenlik Danışmanı',
    'hero.roles.3': 'Web Mimarı',
    'hero.description': 'Sistem koruması ve sağlam web uygulamaları oluşturma konusunda tutkulu, dijital varlığınızı güvence altına almak için teknik uzmanlık ve inovasyonu birleştiriyorum.',
    'hero.cta.projects': 'Projelerimi Görüntüle',
    'hero.cta.contact': 'Benimle İletişime Geç',
    
    // About Section
    'about.title': 'Hakkımda',
    'about.subtitle': '',
    'about.description': 'Siber güvenlik ve web geliştirme konusundaki yolculuğumu ve tutkumu keşfedin',
    'about.content.1': '5 yılı aşkın siber güvenlik ve web geliştirme deneyimi ile güvenli ve yüksek performanslı dijital çözümler oluşturma konusunda uzmanlaştım.',
    'about.content.2': 'İkili uzmanlığım, her projeye bütünsel bir yaklaşımla yaklaşmamı, tasarım aşamasından itibaren güvenlik en iyi uygulamalarını entegre ederken optimal kullanıcı deneyimini korumamı sağlar.',
    'about.content.3': 'Yeni teknolojiler ve teknik zorluklara tutkulu, sürekli olarak en son tehditler ve sektör yenilikleri ile güncel kalıyorum.',
    'about.stats.projects': 'Tamamlanan Proje',
    'about.stats.experience': 'Yıl Deneyim',
    'about.stats.clients': 'Memnun Müşteri',
    
    // Services Section
    'services.title': 'Benim',
    'services.subtitle': 'Hizmetlerim',
    'services.description': 'Dijital varlığınızı güvence altına almak ve geliştirmek için eksiksiz hizmet yelpazesi',
    'services.audit.title': 'Güvenlik Denetimi',
    'services.audit.description': 'Güvenlik açıklarını belirlemek ve çözümler önermek için altyapınızın kapsamlı değerlendirmesi.',
    'services.audit.features.0': 'Penetrasyon testi',
    'services.audit.features.1': 'Güvenlik açığı analizi',
    'services.audit.features.2': 'Detaylı rapor',
    'services.audit.features.3': 'Eylem planı',
    'services.webdev.title': 'Güvenli Web Geliştirme',
    'services.webdev.description': 'Tasarımdan itibaren entegre güvenlik ile sağlam web uygulamaları oluşturma.',
    'services.webdev.features.0': 'Güvenli mimari',
    'services.webdev.features.1': 'Kod incelemesi',
    'services.webdev.features.2': 'Otomatik test',
    'services.webdev.features.3': 'Kapsamlı dokümantasyon',
    'services.consulting.title': 'Siber Güvenlik Danışmanlığı',
    'services.consulting.description': 'Güvenlik duruşunuzu güçlendirmek için stratejik destek.',
    'services.consulting.features.0': 'Risk analizi',
    'services.consulting.features.1': 'Güvenlik stratejisi',
    'services.consulting.features.2': 'Takım eğitimi',
    'services.consulting.features.3': 'Teknoloji takibi',
    'services.securing.title': 'Uygulama Güvenliği',
    'services.securing.description': 'Mevcut uygulamalarınızın güvenliğini güçlendirme.',
    'services.securing.features.0': 'Güçlü kimlik doğrulama',
    'services.securing.features.1': 'Veri şifreleme',
    'services.securing.features.2': 'OWASP koruması',
    'services.securing.features.3': 'Güvenli izleme',
    'services.devsecops.title': 'DevSecOps',
    'services.devsecops.description': 'Geliştirme süreçlerinize güvenlik entegrasyonu.',
    'services.devsecops.features.0': 'Güvenli CI/CD',
    'services.devsecops.features.1': 'Otomatik test',
    'services.devsecops.features.2': 'Sürekli izleme',
    'services.devsecops.features.3': 'Gerçek zamanlı uyarılar',
    
    // Portfolio Section
    'portfolio.title': 'Benim',
    'portfolio.subtitle': 'Portföyüm',
    'portfolio.description': 'Web geliştirme ve siber güvenliği birleştiren son projelerimi keşfedin',
    'portfolio.filter.all': 'Tümü',
    'portfolio.filter.web': 'Web Geliştirme',
    'portfolio.filter.security': 'Siber Güvenlik',
    'portfolio.filter.training': 'Eğitim',
    'portfolio.project.ecommerce.title': 'Güvenli E-ticaret',
    'portfolio.project.ecommerce.description': 'Çok faktörlü kimlik doğrulama ve uçtan uca şifreleme ile e-ticaret platformu.',
    'portfolio.project.audit.title': 'Güvenlik Denetimi - FinTech',
    'portfolio.project.audit.description': 'Bir fintech startup için kapsamlı güvenlik denetimi, 15 kritik güvenlik açığının belirlenmesi.',
    'portfolio.project.dashboard.title': 'Analitik Panosu',
    'portfolio.project.dashboard.description': 'Etkileşimli görselleştirmeler ve güvenli uyarılar ile gerçek zamanlı analiz arayüzü.',
    'portfolio.project.monitoring.title': 'İzleme Sistemi',
    'portfolio.project.monitoring.description': 'Gerçek zamanlı saldırı ve anomali tespiti için güvenli izleme çözümü.',
    'portfolio.project.training.title': 'Siber Güvenlik Eğitimi',
    'portfolio.project.training.description': 'Geliştiriciler için güvenlik en iyi uygulamaları üzerine kapsamlı eğitim programı.',
    
    // Skills Section
    'skills.title': 'Benim',
    'skills.subtitle': 'Yeteneklerim',
    'skills.description': 'Teknik becerilerim ve uzmanlığımın genel görünümü',
    'skills.webdev.title': 'Web Geliştirme',
    'skills.security.title': 'Siber Güvenlik',
    'skills.database.title': 'Veritabanları',
    'skills.cloud.title': 'Bulut & DevOps',
    'skills.tools.title': 'Güvenlik Araçları',
    
    // Contact Section
    'contact.title': 'Benimle',
    'contact.subtitle': 'İletişime Geçin',
    'contact.description': 'Projenizi güvence altına almaya hazır mısınız? İhtiyaçlarınızı konuşalım',
    'contact.info.title': 'İletişimde kalalım',
    'contact.info.description': 'Güvenlik denetimi, uygulama geliştirme veya sadece tavsiye ihtiyacınız olsun, projelerinizde size destek olmak için buradayım.',
    'contact.info.email': 'E-posta',
    'contact.info.phone': 'Telefon',
    'contact.info.location': 'Konum',
    'contact.form.name': 'Ad Soyad',
    'contact.form.name.placeholder': 'Adınız',
    'contact.form.email': 'E-posta',
    'contact.form.email.placeholder': 'sizin@email.com',
    'contact.form.subject': 'Konu',
    'contact.form.subject.placeholder': 'Mesajınızın konusu',
    'contact.form.message': 'Mesaj',
    'contact.form.message.placeholder': 'Projenizi veya ihtiyaçlarınızı açıklayın...',
    'contact.form.sending': 'Gönderiliyor...',
    'contact.form.sent': 'Mesaj gönderildi!',
    'contact.form.send': 'Mesaj Gönder',
    
    // Footer
    'footer.description': 'Siber güvenlik ve web geliştirme uzmanı, sağlam dijital çözümler oluşturmak için güvenlik ve inovasyonu birleştiriyorum.',
    'footer.navigation': 'Navigasyon',
    'footer.followme': 'Beni Takip Et',
    'footer.available': 'Yeni projeler için müsait',
    'footer.rights': 'Tüm hakları saklıdır.',
    'footer.privacy': 'Gizlilik Politikası',
    'footer.legal': 'Yasal Uyarı',
  },
  
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.services': 'Services',
    'nav.portfolio': 'Portfolio',
    'nav.skills': 'Compétences',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.greeting': 'Bonjour, je suis',
    'hero.name': 'Momo Prince',
    'hero.roles.0': 'Expert en Cybersécurité',
    'hero.roles.1': 'Développeur Full-Stack',
    'hero.roles.2': 'Consultant en Sécurité',
    'hero.roles.3': 'Architecte Web',
    'hero.description': 'Passionné par la protection des systèmes et la création d\'applications web robustes, je combine expertise technique et innovation pour sécuriser votre présence numérique.',
    'hero.cta.projects': 'Voir mes projets',
    'hero.cta.contact': 'Me contacter',
    
    // About Section
    'about.title': 'À Propos de',
    'about.subtitle': 'Moi',
    'about.description': 'Découvrez mon parcours et ma passion pour la cybersécurité et le développement web',
    'about.content.1': 'Avec plus de 5 ans d\'expérience dans le domaine de la cybersécurité et du développement web, je me spécialise dans la création de solutions numériques sécurisées et performantes.',
    'about.content.2': 'Ma double expertise me permet d\'aborder chaque projet avec une approche holistique, intégrant dès la conception les meilleures pratiques de sécurité tout en maintenant une expérience utilisateur optimale.',
    'about.content.3': 'Passionné par les nouvelles technologies et les défis techniques, je reste constamment à jour avec les dernières menaces et les innovations du secteur.',
    'about.stats.projects': 'Projets Réalisés',
    'about.stats.experience': 'Années d\'Expérience',
    'about.stats.clients': 'Clients Satisfaits',
    
    // Services Section
    'services.title': 'Mes',
    'services.subtitle': 'Services',
    'services.description': 'Une gamme complète de services pour sécuriser et développer votre présence numérique',
    'services.audit.title': 'Audit de Sécurité',
    'services.audit.description': 'Évaluation complète de votre infrastructure pour identifier les vulnérabilités et recommander des solutions.',
    'services.audit.features.0': 'Tests de pénétration',
    'services.audit.features.1': 'Analyse des vulnérabilités',
    'services.audit.features.2': 'Rapport détaillé',
    'services.audit.features.3': 'Plan d\'action',
    'services.webdev.title': 'Développement Web Sécurisé',
    'services.webdev.description': 'Création d\'applications web robustes avec sécurité intégrée dès la conception.',
    'services.webdev.features.0': 'Architecture sécurisée',
    'services.webdev.features.1': 'Code review',
    'services.webdev.features.2': 'Tests automatisés',
    'services.webdev.features.3': 'Documentation complète',
    'services.consulting.title': 'Consulting en Cybersécurité',
    'services.consulting.description': 'Accompagnement stratégique pour renforcer votre posture de sécurité.',
    'services.consulting.features.0': 'Analyse des risques',
    'services.consulting.features.1': 'Stratégie de sécurité',
    'services.consulting.features.2': 'Formation équipes',
    'services.consulting.features.3': 'Veille technologique',
    'services.securing.title': 'Sécurisation d\'Applications',
    'services.securing.description': 'Renforcement de la sécurité de vos applications existantes.',
    'services.securing.features.0': 'Authentification forte',
    'services.securing.features.1': 'Chiffrement des données',
    'services.securing.features.2': 'Protection OWASP',
    'services.securing.features.3': 'Monitoring sécurisé',
    'services.devsecops.title': 'DevSecOps',
    'services.devsecops.description': 'Intégration de la sécurité dans vos pipelines de développement.',
    'services.devsecops.features.0': 'CI/CD sécurisé',
    'services.devsecops.features.1': 'Tests automatisés',
    'services.devsecops.features.2': 'Monitoring continu',
    'services.devsecops.features.3': 'Alertes en temps réel',
    
    // Portfolio Section
    'portfolio.title': 'Mon',
    'portfolio.subtitle': 'Portfolio',
    'portfolio.description': 'Découvrez mes projets récents alliant développement web et cybersécurité',
    'portfolio.filter.all': 'Tous',
    'portfolio.filter.web': 'Développement Web',
    'portfolio.filter.security': 'Cybersécurité',
    'portfolio.filter.training': 'Formation',
    'portfolio.project.ecommerce.title': 'E-commerce Sécurisé',
    'portfolio.project.ecommerce.description': 'Plateforme e-commerce avec authentification multi-facteurs et chiffrement end-to-end.',
    'portfolio.project.audit.title': 'Audit de Sécurité - FinTech',
    'portfolio.project.audit.description': 'Audit complet de sécurité pour une startup fintech, identification de 15 vulnérabilités critiques.',
    'portfolio.project.dashboard.title': 'Dashboard Analytics',
    'portfolio.project.dashboard.description': 'Interface d\'analyse en temps réel avec visualisations interactives et alertes sécurisées.',
    'portfolio.project.monitoring.title': 'Système de Monitoring',
    'portfolio.project.monitoring.description': 'Solution de monitoring sécurisé pour détecter les intrusions et anomalies en temps réel.',
    'portfolio.project.training.title': 'Formation Cybersécurité',
    'portfolio.project.training.description': 'Programme de formation complet sur les bonnes pratiques de sécurité pour développeurs.',
    
    // Skills Section
    'skills.title': 'Mes',
    'skills.subtitle': 'Compétences',
    'skills.description': 'Un aperçu de mes compétences techniques et de mon expertise',
    'skills.webdev.title': 'Développement Web',
    'skills.security.title': 'Cybersécurité',
    'skills.database.title': 'Base de Données',
    'skills.cloud.title': 'Cloud & DevOps',
    'skills.tools.title': 'Outils Sécurité',
    
    // Contact Section
    'contact.title': 'Contactez-',
    'contact.subtitle': 'moi',
    'contact.description': 'Prêt à sécuriser votre projet ? Discutons de vos besoins',
    'contact.info.title': 'Restons en contact',
    'contact.info.description': 'Que vous ayez besoin d\'un audit de sécurité, du développement d\'une application ou simplement d\'un conseil, je suis là pour vous accompagner dans vos projets.',
    'contact.info.email': 'Email',
    'contact.info.phone': 'Téléphone',
    'contact.info.location': 'Localisation',
    'contact.form.name': 'Nom complet',
    'contact.form.name.placeholder': 'Votre nom',
    'contact.form.email': 'Email',
    'contact.form.email.placeholder': 'votre@email.com',
    'contact.form.subject': 'Sujet',
    'contact.form.subject.placeholder': 'Sujet de votre message',
    'contact.form.message': 'Message',
    'contact.form.message.placeholder': 'Décrivez votre projet ou vos besoins...',
    'contact.form.sending': 'Envoi en cours...',
    'contact.form.sent': 'Message envoyé !',
    'contact.form.send': 'Envoyer le message',
    
    // Footer
    'footer.description': 'Expert en cybersécurité et développement web, je combine sécurité et innovation pour créer des solutions numériques robustes.',
    'footer.navigation': 'Navigation',
    'footer.followme': 'Suivez-moi',
    'footer.available': 'Disponible pour de nouveaux projets',
    'footer.rights': 'Tous droits réservés.',
    'footer.privacy': 'Politique de confidentialité',
    'footer.legal': 'Mentions légales',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};