import { useState, useEffect, lazy, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { Routes, Route, useLocation } from 'react-router-dom';

// -- ⚡ ANINDA YÜKLENMESİ GEREKENLER (İlk açılışta şart olanlar) --
import Header from './components/Header';
import Hero from './components/Hero';

// -- 🐢 LAZY LOAD (Aşağı kaydırdıkça arka planda yüklenecekler) --
const Problem = lazy(() => import('./components/Problem'));
const Reports = lazy(() => import('./components/Reports'));
const Strategy = lazy(() => import('./components/Strategy'));
const CEEHub = lazy(() => import('./components/CEEHub'));
const LinkedInBlock = lazy(() => import('./components/LinkedInBlock'));
const Footer = lazy(() => import('./components/Footer'));
const CookieBanner = lazy(() => import('./components/CookieBanner'));
const LegalModal = lazy(() => import('./components/LegalModal'));

// Sayfa değişince en üste kaydıran parça
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [modalState, setModalState] = useState({ isOpen: false, type: '' });
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  const openModal = (type) => {
    setModalState({ isOpen: true, type });
  };

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
                {/* Hero anında yüklenir, beklemez */}
                <Hero />
                
                {/* Geri kalanlar arka planda inerken siteyi bloklamaz */}
                <Suspense fallback={<div className="h-32" />}>
                  <Problem />
                  <Reports />
                  <Strategy />
                  <CEEHub />
                  <LinkedInBlock />
                </Suspense>
              </>
            } 
          />
          <Route path="*" element={<Hero />} /> 
        </Routes>
      </main>

      {/* Footer ve diğer parçalar da siteyi yavaşlatmasın */}
      <Suspense fallback={null}>
        <Footer onOpenLegal={openModal} />
        <CookieBanner onOpenLegal={openModal} />
        <LegalModal 
          isOpen={modalState.isOpen} 
          onClose={closeModal} 
          type={modalState.type} 
        />
      </Suspense>
    </div>
  );
}