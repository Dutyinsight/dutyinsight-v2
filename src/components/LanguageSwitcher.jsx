import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown, Globe } from 'lucide-react';
import { LANGUAGES } from '../i18n';

export default function LanguageSwitcher({ variant = 'default' }) {
  const { i18n, t } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const current = LANGUAGES.find((l) => l.code === i18n.language) || LANGUAGES[0];

  useEffect(() => {
    const onClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

  const handleChange = (code) => {
    i18n.changeLanguage(code);
    setOpen(false);
  };

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center gap-1.5 px-2.5 py-1.5
                 text-sm font-medium text-ink-700
                 hover:text-primary-500 transition-colors
                 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500/20"
        aria-label={t('common.language')}
        aria-expanded={open}
      >
        <Globe className="w-4 h-4" strokeWidth={1.5} />
        <span className="font-mono text-xs">{current.short}</span>
        <ChevronDown
          className={`w-3 h-3 transition-transform ${open ? 'rotate-180' : ''}`}
          strokeWidth={2}
        />
      </button>

      {open && (
        <div
          className="absolute right-0 mt-2 w-44
                   bg-white border border-ink-100 rounded-lg shadow-lg
                   py-1 z-50
                   animate-fade-in origin-top-right"
        >
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleChange(lang.code)}
              className={`w-full px-3 py-2 text-sm text-left
                       flex items-center gap-2.5
                       hover:bg-canvas-muted transition-colors
                       ${lang.code === i18n.language ? 'text-primary-500 font-medium' : 'text-ink-700'}`}
            >
              <span className="text-base leading-none">{lang.flag}</span>
              <span className="flex-1">{lang.label}</span>
              <span className="font-mono text-xs text-ink-300">{lang.short}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
