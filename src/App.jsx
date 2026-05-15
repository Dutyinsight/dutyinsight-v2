import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Routes, Route, useLocation } from 'react-router-dom';

// -- BİLEŞENLER (COMPONENTS) --
import Header from './components/Header';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Reports from './components/Reports';
import Strategy from './components/Strategy';
import CEEHub from './components/CEEHub';
import LinkedInBlock from './components/LinkedInBlock';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import LegalModal from './components/LegalModal'; // BU DOSYANIN VARLIĞINDAN EMİN OL

// Sayfa değişince en üste kaydıran parça
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  // Modal durumu (Kapalı mı? Tipi ne?)
  const [modalState, setModalState] = useState({ isOpen: false, type: '' });
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  // Modalı açan fonksiyon
  const openModal = (type) => {
    setModalState({ isOpen: true, type });
  };

  // Modalı kapatan fonksiyon
  const closeModal = () => {
    setModalState({ isOpen: false, type: '' });
  };

  return (
    <div className="min-h-screen bg-canvas flex flex-col overflow-x-hidden">
      <ScrollToTop />
      
      <Header />

      <main className="flex-grow">
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <Hero />
                <Problem />
                <Reports />
                <Strategy />
                <CEEHub />
                <LinkedInBlock />
              </>
            } 
          />
          {/* Eğer eski sayfalara giden olursa ana sayfaya atsın */}
          <Route path="*" element={<Hero />} /> 
        </Routes>
      </main>

      {/* Footer'a modal açma yetkisini veriyoruz */}
      <Footer onOpenLegal={openModal} />

      {/* MERKEZİ POP-UP (MODAL) */}
      <LegalModal 
        isOpen={modalState.isOpen} 
        onClose={closeModal} 
        type={modalState.type} 
      />

      {/* Çerez Banner'ı */}
      <CookieBanner onOpenLegal={openModal} />
    </div>
  );
}