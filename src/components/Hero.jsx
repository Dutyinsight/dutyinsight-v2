import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const { t, i18n } = useTranslation();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    const isMouseDevice = window.matchMedia('(pointer: fine)').matches;
    if (!isMouseDevice) return;

    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      setMousePos({ 
        x: (clientX / innerWidth - 0.5) * 2, 
        y: (clientY / innerHeight - 0.5) * 2 
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleContactMail = (type) => {
    const currentLang = i18n.language;
    const isTr = currentLang === 'tr';
    const translateOptions = isTr ? {} : { lng: 'en' };
    const subject = t(`common.mail.${type}.subject`, translateOptions);
    const body = t(`common.mail.${type}.body`, translateOptions);
    window.location.href = `mailto:info@dutyinsight.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const renderTitle = () => {
    const title = t('hero.title');
    // Yeni dillerdeki parlama kelimelerini de ekledim
    const wordsToHighlight = ["sürpriz", "Certainty", "Sicherheit", "pewności", "jistotou", "sorunsuz", "flawlessly", "makellos", "bezchybně"];
    const regex = new RegExp(`(${wordsToHighlight.join('|')})`, 'gi');
    const parts = title.split(regex);

    return parts.map((part, i) => {
      const isMatch = wordsToHighlight.some(word => word.toLowerCase() === part.toLowerCase());
      return isMatch ? (
        <span key={i} className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent drop-shadow-sm font-semibold">
          {part}
        </span>
      ) : part;
    });
  };

  return (
    <section ref={containerRef} className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-white selection:bg-accent/20">
      
      {/* 1. LAYER: Arka Plan Derinliği */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div 
          className="absolute -top-[10%] -right-[10%] w-[70%] h-[70%] rounded-full bg-primary-500/10 blur-[120px] transition-transform duration-1000 ease-out"
          style={{ transform: `translate(${mousePos.x * 40}px, ${mousePos.y * 40}px)` }}
        />
        <div className="absolute inset-0 bg-grid-slate-100/[0.5] [mask-image:linear-gradient(to_bottom,white,transparent)]" />
      </div>

      <div className="container-x relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          <div className="lg:col-span-7 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-primary-50 border border-primary-100 shadow-sm animate-fade-in">
              <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse" />
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary-600">
                {t('hero.eyebrow')}
              </span>
            </div>

            <h1 className="font-display text-5xl lg:text-7xl font-medium tracking-tight text-primary-600 mb-8 leading-[1.05]">
              {renderTitle()}
            </h1>

            <p className="text-lg lg:text-xl text-ink-600 leading-relaxed mb-10 max-w-xl opacity-90">
              {t('hero.subtitle')}
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <a href="#reports" className="group flex items-center gap-2 px-8 py-4 bg-primary-500 text-white rounded-xl font-bold hover:bg-primary-600 hover:shadow-xl hover:shadow-primary-500/20 transition-all duration-300 transform hover:-translate-y-1">
                {t('hero.ctaPrimary')}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <button 
                onClick={() => handleContactMail('strategy')}
                className="px-8 py-4 bg-white text-primary-600 border border-ink-100 rounded-xl font-bold hover:bg-canvas-subtle transition-all duration-300 shadow-sm hover:shadow-md"
              >
                {t('hero.ctaSecondary')}
              </button>
            </div>

            <p className="text-sm font-medium text-ink-400 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-ink-200" />
              {t('hero.trustline')}
            </p>
          </div>

          {/* SAĞ TARAF: The Sovereign Core (Tüm efektler geri geldi) */}
          <div className="lg:col-span-5 relative lg:mt-0 mt-12 opacity-80 lg:opacity-100 animate-none lg:animate-float">
            <div 
              className="relative z-10 w-full aspect-square max-w-[550px] mx-auto flex items-center justify-center transition-transform duration-300 ease-out"
              style={{ transform: `perspective(1200px) rotateY(${mousePos.x * 12}deg) rotateX(${mousePos.y * -12}deg)` }}
            >
              <div className="absolute w-[110%] h-[110%] border border-dashed border-primary-200/40 rounded-full animate-spin-slow" />
              <div className="absolute w-[90%] h-[90%] border border-primary-100/20 rounded-full animate-[spin_20s_linear_infinite_reverse]" />
              
              <div className="relative w-80 h-80 lg:w-[440px] lg:h-[440px] rounded-full border border-white/60 bg-gradient-to-br from-white/40 to-primary-500/5 backdrop-blur-3xl shadow-[0_48px_96px_-16px_rgba(15,35,65,0.2)] flex items-center justify-center overflow-hidden">
                  <div className="relative z-10 w-52 h-52 lg:w-64 lg:h-64">
                    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-2xl">
                      <circle cx="50" cy="50" r="45" stroke="url(#lineGrad)" strokeWidth="0.5" fill="none" strokeDasharray="15 10" className="animate-spin-slow" />
                      <circle cx="50" cy="50" r="30" fill="#0F2341" className="shadow-lg" />
                      <circle cx="50" cy="50" r="12" fill="url(#coreGrad)" className="animate-pulse" />
                      <defs>
                        <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#0F2341" />
                          <stop offset="100%" stopColor="#D4AF37" />
                        </linearGradient>
                        <radialGradient id="coreGrad">
                          <stop offset="0%" stopColor="#D4AF37" />
                          <stop offset="100%" stopColor="#D4AF37" opacity="0" />
                        </radialGradient>
                      </defs>
                    </svg>
                  </div>
                  {/* Hareketli gradyan ışığı */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent transition-transform duration-500"
                    style={{ transform: `translateX(${mousePos.x * 60}px) translateY(${mousePos.y * 60}px)` }}
                  />
              </div>
              {/* Uçuşan Balonlar */}
              <div className="absolute top-10 right-20 w-3 h-3 bg-accent rounded-full shadow-[0_0_15px_#D4AF37] animate-bounce" />
              <div className="absolute bottom-20 left-10 w-2 h-2 bg-primary-600 rounded-full animate-ping" />
            </div>
          </div>
        </div>

        {/* ⚡ STATS BÖLÜMÜ: İnce, zarif ve sarı parlama animasyonu eklendi */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-24 pt-12 border-t border-slate-100">
          {[1, 2, 3].map((num) => (
            <div key={num} className="flex flex-col items-center md:items-start space-y-2 group cursor-default">
              <div className="relative">
                <div className="text-3xl lg:text-4xl font-display font-medium text-slate-900 tracking-tight transition-all duration-500 group-hover:text-accent group-hover:drop-shadow-[0_0_10px_rgba(212,175,55,0.4)] group-hover:scale-105 transform origin-left">
                  {t(`hero.stat${num}Number`)}
                </div>
                {/* Alt Glow Çizgisi */}
                <div className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent transition-all duration-500 group-hover:w-full opacity-50" />
              </div>
              <div className="text-[10px] lg:text-[11px] uppercase tracking-[0.2em] font-bold text-slate-400 leading-tight transition-colors duration-500 group-hover:text-slate-600">
                {t(`hero.stat${num}Label`)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}