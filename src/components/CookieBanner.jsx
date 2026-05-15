import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Cookie, X } from 'lucide-react';

export default function CookieBanner({ onOpenLegal }) { // onOpenLegal prop'unu ekledik
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('dutyinsight_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('dutyinsight_cookie_consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('dutyinsight_cookie_consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[110] p-4 sm:p-6 pointer-events-none">
      <div className="container-x mx-auto flex justify-center">
        <div className="bg-primary-600 text-white p-5 md:p-6 rounded-2xl shadow-2xl border border-white/10 flex flex-col md:flex-row items-center gap-6 max-w-4xl pointer-events-auto w-full animate-in fade-in slide-in-from-bottom-10 duration-500">
          
          <div className="flex items-start md:items-center gap-4 flex-1">
            <div className="hidden sm:flex bg-white/10 p-2.5 rounded-full shrink-0">
              <Cookie className="w-5 h-5 text-accent" />
            </div>
            <p className="text-sm text-primary-50 leading-relaxed text-center md:text-left">
              {t('cookieBanner.message')}
              {/* Pop-up açan buton */}
              <button 
                onClick={() => onOpenLegal('cookies')} 
                className="ml-2 text-accent hover:text-white underline underline-offset-2 transition-colors font-medium"
              >
                {t('cookieBanner.learnMore')}
              </button>
            </p>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto shrink-0">
            <button onClick={handleDecline} className="flex-1 md:flex-none px-4 py-2.5 text-sm font-medium text-primary-100 hover:text-white rounded-lg transition-colors">
              {t('cookieBanner.essentialOnly')}
            </button>
            <button onClick={handleAccept} className="flex-1 md:flex-none px-5 py-2.5 text-sm font-medium bg-accent text-primary-700 hover:bg-white rounded-lg shadow-sm transition-all">
              {t('cookieBanner.acceptAll')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}