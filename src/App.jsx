import { useState, useEffect, lazy, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { Routes, Route, useLocation, useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async'; // ⚡ SEO etiketleri için eklendi
import { SpeedInsights } from "@vercel/speed-insights/react";

// -- ⚡ ANINDA YÜKLENMESİ GEREKENLER --
import Header from './components/Header';
import Hero from './components/Hero';

// -- 🐢 LAZY LOAD (Arka planda yüklenecekler) --
const Methodology = lazy(() => import('./components/Methodology'));
const CaseStudies = lazy(() => import('./components/CaseStudies'));
const Problem = lazy(() => import('./components/Problem'));
const Reports = lazy(() => import('./components/Reports'));
const Strategy = lazy(() => import('./components/Strategy'));
const CEEHub = lazy(() => import('./components/CEEHub'));
const LinkedInBlock = lazy(() => import('./components/LinkedInBlock'));
const Footer = lazy(() => import('./components/Footer'));
const CookieBanner = lazy(() => import('./components/CookieBanner'));
const LegalModal = lazy(() => import('./components/LegalModal'));
const About = lazy(() => import('./components/About'));

const SUPPORTED_LANGS = ['tr', 'en', 'de', 'cs', 'pl'];

// 🎯 TEK kanonik origin. GSC'de tıklama alan sürüm www'siz olduğu için non-www seçildi.
//    Vercel'de www -> non-www 301 redirect'i de eklemen şart (aşağıdaki nota bak).
const SITE_URL = 'https://dutyinsight.com';
const DEFAULT_LANG = 'tr';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function PageContent() {
  const { lang } = useParams();
  const { i18n, t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    if (lang && SUPPORTED_LANGS.includes(lang)) {
      if (i18n.language !== lang) {
        i18n.changeLanguage(lang);
      }
    } else if (lang && !SUPPORTED_LANGS.includes(lang)) {
      navigate('/', { replace: true });
    }
  }, [lang, i18n, navigate]);

  // Aktif dili güvenli şekilde çöz (desteklenmeyen/boşsa default)
  const currentLang =
    lang && SUPPORTED_LANGS.includes(lang) ? lang : DEFAULT_LANG;
  const canonicalUrl = `${SITE_URL}/${currentLang}`;

  // FAQ verisini JSON'daki seo.faq dizisinden al (react-i18next returnObjects)
  const faqItemsRaw = t('seo.faq', { returnObjects: true });
  const faqItems = Array.isArray(faqItemsRaw) ? faqItemsRaw : [];

  // --- JSON-LD: Organization ---
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'DutyInsight',
    url: SITE_URL,
    description: t('seo.ogDescription'),
    knowsAbout: [
      'pre-customs trade intelligence',
      'export feasibility',
      'import feasibility',
      'HS code classification',
      'export readiness',
      'certification gap analysis',
    ],
  };

  // --- JSON-LD: FAQPage (AI motorlarının doğrudan alıntıladığı format) ---
  const faqSchema =
    faqItems.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqItems.map((f) => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a },
          })),
        }
      : null;

  return (
    <>
      <Helmet>
        <html lang={currentLang} />

        {/* 🎯 Başlık ve açıklama artık hero.* yerine dedicated seo.* bloğundan geliyor */}
        <title>{t('seo.title')}</title>
        <meta name="description" content={t('seo.description')} />
        <meta name="keywords" content={t('seo.keywords')} />
        <meta name="robots" content="index, follow" />

        {/* Canonical */}
        <link rel="canonical" href={canonicalUrl} />

        {/* 🌍 hreflang — dil sürümlerinin birbirinin alternatifi olduğunu Google'a söyler */}
        {SUPPORTED_LANGS.map((l) => (
          <link
            key={l}
            rel="alternate"
            hrefLang={l}
            href={`${SITE_URL}/${l}`}
          />
        ))}
        <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}/en`} />

        {/* Open Graph (LinkedIn/Facebook önizleme kartı) */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="DutyInsight" />
        <meta property="og:title" content={t('seo.ogTitle')} />
        <meta property="og:description" content={t('seo.ogDescription')} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={`${SITE_URL}/og-image.png`} />
        <meta property="og:locale" content={currentLang} />

        {/* Twitter/X card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('seo.ogTitle')} />
        <meta name="twitter:description" content={t('seo.ogDescription')} />
        <meta name="twitter:image" content={`${SITE_URL}/og-image.png`} />

        {/* Yapısal veri */}
        <script type="application/ld+json">
          {JSON.stringify(orgSchema)}
        </script>
        {faqSchema && (
          <script type="application/ld+json">
            {JSON.stringify(faqSchema)}
          </script>
        )}
      </Helmet>

      <Hero />
      <Suspense fallback={<div className="h-32" />}>
        <Methodology />
        <CaseStudies />
        <Problem />
        <Reports />
        <Strategy />
        <CEEHub />
        <About /> {/* Hakkımızda bölümü buraya geliyor */}
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
