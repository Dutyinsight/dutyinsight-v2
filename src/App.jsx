import { useState, useEffect, lazy, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
// BÜYÜ BURADA: useParams ve useNavigate eklendi
import { Routes, Route, useLocation, useParams, useNavigate } from 'react-router-dom';
import { SpeedInsights } from "@vercel/speed-insights/react"; // ⚡ Hız radarı eklendi

// -- ⚡ ANINDA YÜKLENMESİ GEREKENLER --
import Header from './components/Header';
import Hero from './components/Hero';

// -- 🐢 LAZY LOAD (Arka planda yüklenecekler) --
const Methodology = lazy(() => import('./components/Methodology'));
const CaseStudies = lazy(() => import('./components/CaseStudies')); // ⚡ YENİ BÖLÜM
const Problem = lazy(() => import('./components/Problem'));
const Reports = lazy(() => import('./components/Reports'));
const Strategy = lazy(() => import('./components/Strategy'));
const CEEHub = lazy(() => import('./components/CEEHub'));
const LinkedInBlock = lazy(() => import('./components/LinkedInBlock'));
const Footer = lazy(() => import('./components/Footer'));
const CookieBanner = lazy(() => import('./components/CookieBanner'));
const LegalModal = lazy(() => import('./components/LegalModal'));

const SUPPORTED_LANGS = ['tr', 'en', 'de', 'cs', 'pl'];

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// 🎯 YENİ: URL'i okuyup dili ayarlayan ve ana içeriği basan bileşen
function PageContent() {
  const { lang } = useParams();
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    // Eğer URL'de desteklediğimiz bir dil varsa i18n'i o dile çevir
    if (lang && SUPPORTED_LANGS.includes(lang)) {
      if (i18n.language !== lang) {
        i18n.changeLanguage(lang);
      }
    } else if (lang && !SUPPORTED_LANGS.includes(lang)) {
      // Geçersiz bir dil gelirse ana sayfaya at
      navigate('/', { replace: true });
    }
  }, [lang, i18n, navigate]);

  return (
    <>
      <Hero />
      <Suspense fallback={<div className="h-32" />}>
        {/* 🛠️ YENİ EKLEDİĞİMİZ KURUMSAL BÖLÜMLER */}
        <Methodology />
        <CaseStudies />
        
        {/* MEVCUT BÖLÜMLER */}
        <Problem />
        <Reports />
        <Strategy />
        <CEEHub />
        <LinkedInBlock />
      </Suspense>
    </>
  );
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
          <Route path="/:lang?" element={<PageContent />} />
          <Route path="*" element={<PageContent />} /> 
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

      <SpeedInsights />
    </div>
  );
}