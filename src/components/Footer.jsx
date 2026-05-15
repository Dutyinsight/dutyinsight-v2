import { useTranslation } from 'react-i18next';
import { MapPin, Mail, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

// onOpenLegal prop'unu kullanarak modal sistemini devam ettiriyoruz
export default function Footer({ onOpenLegal }) {
  const { t } = useTranslation();

  return (
    <footer className="bg-primary-500 text-primary-100 border-t border-primary-400/30">
      <div className="container-x py-16 lg:py-24">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Sol Kısım: Marka ve Adres */}
          <div className="md:col-span-12 lg:col-span-5">
            <Logo size={36} light={true} />
            <p className="mt-6 text-sm text-primary-100/80 max-w-sm leading-relaxed">
              {t('footer.tagline')}
            </p>
            <div className="mt-8 flex items-center gap-3 text-sm text-primary-100/90">
              <MapPin className="w-4 h-4 text-accent" strokeWidth={2} />
              <span>{t('footer.location')}</span>
            </div>
          </div>

          {/* Orta Kısım: Hizmetler (Sadece Operasyon ve Strateji kaldı) */}
          <div className="md:col-span-6 lg:col-span-3 lg:col-start-7">
            <h4 className="text-xs uppercase tracking-widest font-bold text-white mb-6">
              {t('footer.navProducts')}
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="/#reports" className="text-sm text-primary-100/70 hover:text-accent transition-colors duration-300">
                  {t('nav.reports')}
                </a>
              </li>
              <li>
                <a href="/#strategy" className="text-sm text-primary-100/70 hover:text-accent transition-colors duration-300">
                  {t('nav.strategy')}
                </a>
              </li>
            </ul>
          </div>

          {/* Sağ Kısım: Yasal (Modal açan butonlar) */}
          <div className="md:col-span-6 lg:col-span-3">
            <h4 className="text-xs uppercase tracking-widest font-bold text-white mb-6">
              {t('footer.navLegal')}
            </h4>
            <ul className="space-y-4">
              <li>
                <button 
                  onClick={() => onOpenLegal('privacy')}
                  className="text-sm text-primary-100/70 hover:text-accent transition-colors duration-300 text-left w-full"
                >
                  {t('footer.linkPrivacy')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onOpenLegal('terms')}
                  className="text-sm text-primary-100/70 hover:text-accent transition-colors duration-300 text-left w-full"
                >
                  {t('footer.linkTerms')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onOpenLegal('cookies')}
                  className="text-sm text-primary-100/70 hover:text-accent transition-colors duration-300 text-left w-full"
                >
                  {t('footer.linkCookies')}
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* ALT SATIR: Telif Hakkı ve İletişim */}
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-primary-100/60">{t('footer.copyright')}</p>
          
          <div className="flex items-center gap-6">
            <a 
              href="mailto:info@dutyinsight.com" 
              className="flex items-center gap-2 text-sm text-primary-100/80 hover:text-white transition-colors group"
            >
              <Mail className="w-4 h-4 text-accent group-hover:scale-110 transition-transform" />
              <span className="font-mono">info@dutyinsight.com</span>
            </a>
            
            <div className="w-px h-4 bg-white/20 hidden md:block"></div>
            
            <div className="flex items-center gap-4">
              <a href="#" className="text-primary-100/50 hover:text-accent transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="text-primary-100/50 hover:text-accent transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}