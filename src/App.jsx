import { useState, useEffect, lazy, Suspense } from 'react'; // lazy ve Suspense eklendi
import { useTranslation } from 'react-i18next';
import { Routes, Route, useLocation } from 'react-router-dom';

// -- BİLEŞENLER (STATİK - HIZLI YÜKLENENLER) --
import Header from './components/Header';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Reports from './components/Reports';
import Strategy from './components/Strategy';
import CEEHub from './components/CEEHub';
import LinkedInBlock from './components/LinkedInBlock';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';

// -- LAZY LOAD (AĞIR METİNLER - İHTİYAÇ ANINDA YÜKLENENLER) --
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
                <Hero />
                <Problem />
                <Reports />
                <Strategy />
                <CEEHub />
                <LinkedInBlock />
              </>
            } 
          />
          <Route path="*" element={<Hero />} /> 
        </Routes>
      </main>

      <Footer onOpenLegal={openModal} />

      {/* Suspense ile sarıyoruz: Modal yüklenene kadar siteyi bloke etmez. 
        İçindeki ağır metinler sadece kullanıcı tıkladığında indirilir. 
      */}
      <Suspense fallback={null}>
        <LegalModal 
          isOpen={modalState.isOpen} 
          onClose={closeModal} 
          type={modalState.type} 
        />
      </Suspense>

      <CookieBanner onOpenLegal={openModal} />
    </div>
  );
}