# Portfolio Momo Prince Junior - React

Portfolio professionnel avec démos interactives pour projets de cybersécurité et développement web.

## 🚀 Fonctionnalités

- ✨ Design moderne et responsive
- 🌐 Multilingue (Français, Anglais, Turc)
- 🎯 Navigation fluide entre sections
- 🔥 Démos interactives en direct pour chaque projet :
  - **IDS (Intrusion Detection System)** : Surveillance réseau en temps réel
  - **Plateforme de communication cryptée** : Messagerie E2E
  - **Pentest Toolkit** : Outils de test de pénétration
  - **E-commerce** : Boutique avec paiement carte/mobile money
  - **Dashboard SaaS** : Analytics et visualisations

## 📦 Installation

```bash
# Installer les dépendances
npm install

# Lancer en mode développement
npm start

# Builder pour la production
npm run build
```

## 🌐 Déploiement

### Netlify
1. Connectez votre repository GitHub
2. Build command: `npm run build`
3. Publish directory: `build`

### Vercel
```bash
npm install -g vercel
vercel
```

### GitHub Pages
```bash
npm install --save gh-pages
# Ajouter dans package.json: "homepage": "https://votre-username.github.io/portfolio"
npm run deploy
```

## 🛠️ Technologies

- React 18
- CSS3 (Variables CSS)
- Context API (gestion d'état)
- Responsive Design

## 📁 Structure du projet

```
portfolio-react/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Home.js
│   │   ├── About.js
│   │   ├── Skills.js
│   │   ├── Certifications.js
│   │   ├── Projects.js
│   │   └── Contact.js
│   ├── demos/
│   │   ├── IDSDemo.js
│   │   ├── EncryptionDemo.js
│   │   ├── PentestDemo.js
│   │   ├── EcommerceDemo.js
│   │   ├── DashboardDemo.js
│   │   └── DemoStyles.css
│   ├── context/
│   │   └── LanguageContext.js
│   ├── App.js
│   └── App.css
└── package.json
```

## ✨ Personnalisation

### Changer les informations de contact
Modifiez dans `src/components/Contact.js`:
- Email
- Téléphone
- Localisation

### Ajouter/Modifier des projets
Éditez le tableau `projects` dans `src/components/Projects.js`

### Changer les couleurs
Modifiez les variables CSS dans `src/App.css`:
```css
:root {
  --primary-color: #0a192f;
  --secondary-color: #112240;
  --accent-color: #64ffda;
  --text-color: #8892b0;
  --light-text: #ccd6f6;
  --white: #e6f1ff;
}
```

## 📧 Contact

Momo Prince Junior
- Email: momoprince2022@gmail.com
- Téléphone: +90 551 523 05 06
- Localisation: Istanbul, Turquie

## 📄 Licence

Ce projet est open source et disponible sous la licence MIT.
