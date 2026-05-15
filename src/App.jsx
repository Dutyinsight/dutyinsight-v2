import { useState, useEffect, lazy, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { Routes, Route, useLocation } from 'react-router-dom';
import { SpeedInsights } from "@vercel/speed-insights/react"; // ⚡ Hız radarı eklendi

// -- ⚡ ANINDA YÜKLENMESİ GEREKENLER --
import Header from './components/Header';
import Hero from './components/Hero';

// -- 🐢 LAZY LOAD (Arka planda yüklenecekler) --
const Problem = lazy(() => import('./components/Problem'));
const Reports = lazy(() => import('./components/Reports'));
const Strategy = lazy(() => import('./components/Strategy'));
const CEEHub = lazy(() => import('./components/CEEHub'));
const LinkedInBlock = lazy(() => import('./components/LinkedInBlock'));
const Footer = lazy(() => import('./components/Footer'));
const CookieBanner = lazy(() => import('./components/CookieBanner'));
const LegalModal = lazy(() => import('./components/LegalModal'));

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
                <Hero />
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

      <Suspense fallback={null}>
        <Footer onOpenLegal={openModal} />
        <CookieBanner onOpenLegal={openModal} />
        <LegalModal 
          isOpen={modalState.isOpen} 
          onClose={closeModal} 
          type={modalState.type} 
        />
      </Suspense>

      {/* 📊 Vercel Speed Insights: Sitenin hızını takip eder */}
      <SpeedInsights />
    </div>
  );
}