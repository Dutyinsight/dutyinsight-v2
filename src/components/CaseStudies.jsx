import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Briefcase, TrendingUp, Puzzle, ArrowRight, X, CheckCircle2, Globe2 } from 'lucide-react';

export default function CaseStudies() {
  const { t } = useTranslation();
  const [selectedCase, setSelectedCase] = useState(null);

  // Pop-up açıkken scroll'u kilitle
  useEffect(() => {
    if (selectedCase) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedCase]);

  const scenarios = [
    { key: 'scenarioA', icon: TrendingUp, color: 'text-blue-600', bg: 'bg-blue-50/50', border: 'border-blue-100/50' },
    { key: 'scenarioB', icon: Briefcase, color: 'text-emerald-600', bg: 'bg-emerald-50/50', border: 'border-emerald-100/50' },
    { key: 'scenarioC', icon: Puzzle, color: 'text-purple-600', bg: 'bg-purple-50/50', border: 'border-purple-100/50' }
  ];

  return (
    <section id="case-studies" className="py-32 bg-[#F8FAFC] relative overflow-hidden">
      {/* Premium Arka Plan Dokusu */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#0f2341 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />

      <div className="container-x relative z-10">
        {/* Header: Daha Ferah ve Otoriter */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-primary-700 text-[10px] font-extrabold tracking-[0.2em] uppercase mb-8">
            <Globe2 className="w-3.5 h-3.5" />
            {t('caseStudies.eyebrow')}
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 tracking-tight">
            {t('caseStudies.title')}
          </h2>
          <p className="text-xl text-slate-500 leading-relaxed max-w-2xl font-medium">
            {t('caseStudies.subtitle')}
          </p>
        </div>

        {/* Kartlar: Stripe-Style Tasarım */}
        <div className="grid lg:grid-cols-3 gap-12">
          {scenarios.map((item, idx) => (
            <div key={idx} 
                 className="group relative bg-white rounded-[2rem] border border-slate-200/60 p-10 hover:border-primary-500/20 hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] transition-all duration-500 cursor-pointer"
                 onClick={() => setSelectedCase(item)}>
              
              {/* Modern İkon Alanı */}
              <div className={`w-16 h-16 rounded-[1.25rem] ${item.bg} ${item.border} border flex items-center justify-center ${item.color} mb-12 group-hover:scale-110 transition-transform duration-500 shadow-inner`}>
                <item.icon className="w-8 h-8" />
              </div>
              
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[11px] font-black uppercase tracking-widest text-primary-600">
                  {t(`caseStudies.${item.key}.tag`)}
                </span>
                <span className="w-1 h-1 rounded-full bg-slate-300" />
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  {t(`caseStudies.${item.key}.industry`)}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-6 leading-[1.2] group-hover:text-primary-600 transition-colors">
                {t(`caseStudies.${item.key}.title`)}
              </h3>

              <div className="relative pt-6 border-t border-slate-50">
                <p className="text-slate-500 text-[15px] leading-relaxed line-clamp-3 mb-8">
                  {t(`caseStudies.${item.key}.challenge`)}
                </p>
                
                <div className="flex items-center gap-2 text-sm font-bold text-slate-900 group-hover:text-primary-600 transition-colors">
                  {t('caseStudies.cta.button')}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-[11px] text-slate-400 mt-20 italic font-semibold tracking-wide uppercase opacity-60">
          {t('caseStudies.footnote')}
        </p>
      </div>

      {/* 🚀 MODAL: Pop-up Fix */}
      {selectedCase && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-8">
          {/* Overlay */}
          <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-md animate-fade-in" 
               onClick={() => setSelectedCase(null)} />
          
          {/* Content */}
          <div className="relative w-full max-w-3xl bg-white rounded-[3rem] shadow-2xl overflow-hidden animate-modal-up border border-slate-100">
            <button 
              onClick={() => setSelectedCase(null)}
              className="absolute top-10 right-10 p-3 rounded-full hover:bg-slate-50 text-slate-400 hover:text-slate-900 transition-all z-10 border border-transparent hover:border-slate-100"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="p-10 md:p-16 overflow-y-auto max-h-[90vh]">
              <span className="inline-block text-xs font-black text-primary-600 uppercase tracking-[0.2em] mb-4">
                {t(`caseStudies.${selectedCase.key}.tag`)}
              </span>

              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 leading-tight">
                {t(`caseStudies.${selectedCase.key}.title`)}
              </h3>

              <div className="grid gap-12">
                <section>
                  <h4 className="text-[10px] font-extrabold text-slate-400 uppercase tracking-[0.2em] mb-5">{t('caseStudies.modal.approach')}</h4>
                  <p className="text-slate-600 leading-relaxed text-lg font-medium">{t(`caseStudies.${selectedCase.key}.approach`)}</p>
                </section>

                <section>
                  <h4 className="text-[10px] font-extrabold text-slate-400 uppercase tracking-[0.2em] mb-6">{t('caseStudies.modal.deliverables')}</h4>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {t(`caseStudies.${selectedCase.key}.deliverables`, { returnObjects: true }).map((del, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-4 p-5 rounded-[1.5rem] bg-slate-50 border border-slate-100 group hover:bg-white hover:border-primary-200 transition-all">
                        <div className="w-6 h-6 rounded-lg bg-primary-100 flex items-center justify-center text-primary-600 shrink-0 mt-0.5">
                           <CheckCircle2 className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-bold text-slate-800 leading-tight">{del}</span>
                      </div>
                    ))}
                  </div>
                </section>

                <div className="pt-12 border-t border-slate-100">
                  <h4 className="text-[10px] font-extrabold text-primary-500 uppercase tracking-[0.2em] mb-4">{t('caseStudies.modal.outcome')}</h4>
                  <p className="text-2xl font-bold text-slate-900 leading-snug">{t(`caseStudies.${selectedCase.key}.outcome`)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}