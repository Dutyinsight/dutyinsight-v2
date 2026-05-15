import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, ArrowRight } from 'lucide-react';
import Logo from './Logo'; // Kendi yazdığın profesyonel logo bileşeni
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const { t, i18n } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleContactMail = (type) => {
    const currentLang = i18n.language;
    const isTr = currentLang === 'tr';
    const translateOptions = isTr ? {} : { lng: 'en' };
    
    const subject = t(`common.mail.${type}.subject`, translateOptions);
    const body = t(`common.mail.${type}.body`, translateOptions);

    window.location.href = `mailto:info@dutyinsight.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const navItems = [
    { href: '#problem', label: t('nav.products') },
    { href: '#reports', label: t('nav.reports') },
    { href: '#strategy', label: t('nav.strategy') },
    { href: '#cee-hub', label: t('nav.ceeHub') },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-ink-100 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container-x">
        <nav className="flex items-center justify-between h-16 lg:h-18">
          {/* LOGO ALANI */}
          <a href="#" className="hover:opacity-90 transition-opacity">
            <Logo size={32} showText={true} />
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-ink-700 hover:text-primary-500 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 lg:gap-3">
            <LanguageSwitcher />

            <button
              onClick={() => handleContactMail('getStarted')}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2
                       bg-[#0F2341] text-white text-sm font-medium
                       rounded-lg hover:bg-opacity-90
                       transition-all duration-200
                       focus:outline-none focus:ring-2 focus:ring-[#0F2341]/30 focus:ring-offset-2"
            >
              {t('nav.getStarted')}
              <ArrowRight className="w-3.5 h-3.5" strokeWidth={2} />
            </button>

            <button
              className="lg:hidden p-2 -mr-2 text-ink-700"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={t('common.menu')}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-ink-100 py-4 animate-fade-in bg-white">
            <div className="flex flex-col gap-3 px-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-ink-700 hover:text-primary-500 transition-colors py-2"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <button
                onClick={() => {
                  setMobileOpen(false);
                  handleContactMail('getStarted');
                }}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5
                         bg-[#0F2341] text-white text-sm font-medium rounded-lg"
              >
                {t('nav.getStarted')}
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}