import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <div className="bg-gray-900 text-white">
        <Header />
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;