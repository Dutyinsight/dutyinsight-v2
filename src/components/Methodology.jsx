import { useTranslation } from 'react-i18next';
import { Layers, Target, ShieldCheck, BarChart3 } from 'lucide-react';

export default function Methodology() {
  const { t } = useTranslation();
  
  const steps = [
    { icon: Target, key: 'step1', color: 'text-blue-600', bg: 'bg-blue-50' },
    { icon: BarChart3, key: 'step2', color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { icon: ShieldCheck, key: 'step3', color: 'text-purple-600', bg: 'bg-purple-50' },
    { icon: Layers, key: 'step4', color: 'text-orange-600', bg: 'bg-orange-50' }
  ];

  return (
    <section id="methodology" className="py-32 bg-white relative overflow-hidden">
      {/* Arka plan nokta deseni */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#0f2341 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      <div className="container-x relative z-10">
        <div className="max-w-3xl mb-20">
          <span className="text-primary-600 font-bold tracking-[0.2em] uppercase text-xs">{t('methodology.eyebrow')}</span>
          <h2 className="text-4xl md:text-5xl font-bold text-ink-950 mt-4 mb-6 tracking-tight">{t('methodology.title')}</h2>
          <p className="text-xl text-ink-600 leading-relaxed font-medium">{t('methodology.subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {steps.map((step, idx) => (
            <div key={idx} className="group p-8 rounded-[2rem] border border-ink-100 hover:border-primary-500/30 hover:shadow-2xl hover:shadow-primary-500/5 transition-all duration-500 bg-canvas flex flex-col h-full relative overflow-hidden">
              
              {/* Üst Kısım: İkon + Büyük Numara */}
              <div className="relative mb-10 flex items-center justify-between">
                <div className={`p-3 rounded-2xl ${step.bg} ${step.color} shadow-sm z-10 group-hover:scale-110 transition-transform duration-500`}>
                  <step.icon className="w-7 h-7" />
                </div>
                <span className="absolute right-0 top-1/2 -translate-y-1/2 text-7xl font-black text-ink-100/50 group-hover:text-primary-100/40 transition-colors select-none">
                  0{idx + 1}
                </span>
              </div>

              <div className="relative z-10 flex-grow">
                <span className="block text-[10px] font-black text-primary-500 mb-3 uppercase tracking-[0.15em]">{t(`methodology.${step.key}.tag`)}</span>
                <h3 className="text-xl font-bold text-ink-950 mb-4 leading-tight break-words [hyphens:auto]">
                  {t(`methodology.${step.key}.title`)}
                </h3>
                <p className="text-ink-600 text-sm leading-relaxed mb-6 font-medium opacity-80">{t(`methodology.${step.key}.body`)}</p>
              </div>
              
              <div className="pt-6 border-t border-ink-100/50 mt-auto relative z-10">
                <span className="text-[10px] uppercase font-black text-ink-400 tracking-widest block mb-2">Deliverable:</span>
                <p className="text-[11px] font-bold text-ink-900 leading-snug break-words">{t(`methodology.${step.key}.deliverable`)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}