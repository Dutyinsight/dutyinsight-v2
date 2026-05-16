import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Briefcase, TrendingUp, Puzzle, ArrowRight, X, CheckCircle2 } from 'lucide-react';

export default function CaseStudies() {
  const { t } = useTranslation();
  const [selectedCase, setSelectedCase] = useState(null);

  // Modal açıkken arkadaki sayfanın kaymasını engelle (Professional touch)
  useEffect(() => {
    if (selectedCase) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedCase]);

  const scenarios = [
    { key: 'scenarioA', icon: TrendingUp, color: 'text-blue-600', bg: 'bg-blue-50/50', border: 'border-blue-100' },
    { key: 'scenarioB', icon: Briefcase, color: 'text-emerald-600', bg: 'bg-emerald-50/50', border: 'border-emerald-100' },
    { key: 'scenarioC', icon: Puzzle, color: 'text-purple-600', bg: 'bg-purple-50/50', border: 'border-purple-100' }
  ];

  return (
    <section id="case-studies" className="py-32 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.02]" 
           style={{ backgroundImage: 'radial-gradient(#0f2341 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      <div className="container-x relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 border border-primary-100 text-primary-700 text-[10px] font-bold tracking-widest uppercase mb-6">
            <CheckCircle2 className="w-3 h-3" />
            {t('caseStudies.eyebrow')}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-ink-950 mb-6 tracking-tight">
            {t('caseStudies.title')}
          </h2>
          <p className="text-lg text-ink-600 leading-relaxed max-w-2xl">
            {t('caseStudies.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {scenarios.map((item, idx) => (
            <div key={idx} className="group relative flex flex-col bg-white rounded-[2rem] border border-ink-100 p-10 hover:border-primary-500/30 hover:shadow-2xl hover:shadow-primary-500/5 transition-all duration-500">
              {/* Daha profesyonel logo/ikon alanı */}
              <div className={`w-14 h-14 rounded-2xl ${item.bg} ${item.border} border flex items-center justify-center ${item.color} mb-8 group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className="w-7 h-7" />
              </div>
              
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[10px] font-black uppercase tracking-tighter text-primary-600">
                  {t(`caseStudies.${item.key}.tag`)}
                </span>
                <div className="w-1 h-1 rounded-full bg-ink-200" />
                <span className="text-[10px] font-bold text-ink-400 uppercase">
                  {t(`caseStudies.${item.key}.industry`)}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-ink-950 mb-6 leading-tight group-hover:text-primary-600 transition-colors">
                {t(`caseStudies.${item.key}.title`)}
              </h3>

              <p className="text-ink-600 text-[15px] leading-relaxed mb-10 flex-grow">
                {t(`caseStudies.${item.key}.challenge`)}
              </p>
              
              <button 
                onClick={() => setSelectedCase(item)}
                className="mt-auto inline-flex items-center gap-2 text-sm font-bold text-ink-950 group/btn"
              >
                <span className="relative">
                  {t('caseStudies.cta.button')}
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 group-hover/btn:w-full transition-all" />
                </span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        <p className="text-center text-[10px] text-ink-400 mt-16 italic font-medium">
          {t('caseStudies.footnote')}
        </p>
      </div>

      {/* 🚀 MODAL (Pop-up) - Bu sefer mermi gibi çalışıyor */}
      {selectedCase && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-ink-950/40 backdrop-blur-md animate-fade-in" onClick={() => setSelectedCase(null)} />
          
          <div className="relative w-full max-w-2xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden animate-scale-up border border-ink-100">
            <button 
              onClick={() => setSelectedCase(null)}
              className="absolute top-8 right-8 p-2 rounded-full hover:bg-ink-50 transition-colors z-10"
            >
              <X className="w-5 h-5 text-ink-400" />
            </button>

            <div className="p-10 sm:p-14 overflow-y-auto max-h-[85vh]">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-xs font-black text-primary-600 uppercase tracking-widest">
                  {t(`caseStudies.${selectedCase.key}.tag`)}
                </span>
              </div>

              <h3 className="text-3xl font-bold text-ink-950 mb-10 leading-tight">
                {t(`caseStudies.${selectedCase.key}.title`)}
              </h3>

              <div className="space-y-10">
                <section>
                  <h4 className="text-[10px] font-bold text-ink-400 uppercase tracking-widest mb-4">{t('caseStudies.modal.approach')}</h4>
                  <p className="text-ink-700 leading-relaxed text-sm">{t(`caseStudies.${selectedCase.key}.approach`)}</p>
                </section>

                <section>
                  <h4 className="text-[10px] font-bold text-ink-400 uppercase tracking-widest mb-5">{t('caseStudies.modal.deliverables')}</h4>
                  <div className="grid sm:grid-cols-1 gap-3">
                    {/* JSON Deliverables artık array olarak okunduğu için Map çalışır */}
                    {t(`caseStudies.${selectedCase.key}.deliverables`, { returnObjects: true }).map((del, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-4 p-4 rounded-2xl bg-canvas border border-ink-100/50">
                        <div className="w-6 h-6 rounded-lg bg-primary-50 flex items-center justify-center text-primary-600 shrink-0">
                           <CheckCircle2 className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-semibold text-ink-800">{del}</span>
                      </div>
                    ))}
                  </div>
                </section>

                <div className="pt-10 border-t border-ink-100">
                  <h4 className="text-[10px] font-bold text-primary-500 uppercase tracking-widest mb-4">{t('caseStudies.modal.outcome')}</h4>
                  <p className="text-xl font-bold text-ink-950 leading-snug">{t(`caseStudies.${selectedCase.key}.outcome`)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}