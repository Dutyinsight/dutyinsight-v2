import { useTranslation } from 'react-i18next';
import { Layers, Target, ShieldCheck, BarChart3 } from 'lucide-react';

export default function Methodology() {
  const { t } = useTranslation();
  
  const steps = [
    { icon: Target, key: 'step1' },
    { icon: BarChart3, key: 'step2' },
    { icon: ShieldCheck, key: 'step3' },
    { icon: Layers, key: 'step4' }
  ];

  return (
    <section id="methodology" className="py-24 bg-white">
      <div className="container-x">
        <div className="max-w-3xl mb-16">
          <span className="text-primary-600 font-semibold tracking-wider uppercase text-sm">{t('methodology.eyebrow')}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-ink-950 mt-4 mb-6 leading-tight tracking-tight">
            {t('methodology.title')}
          </h2>
          <p className="text-lg text-ink-600 leading-relaxed">{t('methodology.subtitle')}</p>
        </div>

        {/* items-stretch: Kart boylarını eşitler */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {steps.map((step, idx) => (
            <div key={idx} className="group p-8 rounded-2xl border border-ink-100 hover:border-primary-500 transition-all duration-300 bg-canvas flex flex-col h-full">
              <div className="mb-6 inline-flex p-3 rounded-xl bg-primary-50 text-primary-600 group-hover:bg-primary-500 group-hover:text-white transition-colors shrink-0">
                <step.icon className="w-6 h-6" />
              </div>
              <span className="block text-xs font-bold text-primary-500 mb-2 uppercase tracking-widest">{t(`methodology.${step.key}.tag`)}</span>
              
              {/* break-words ve [hyphens:auto]: Almanca uzun kelimeler için kritik fix */}
              <h3 className="text-xl font-bold text-ink-900 mb-3 leading-tight break-words [hyphens:auto]">
                {t(`methodology.${step.key}.title`)}
              </h3>
              
              <p className="text-sm text-ink-600 mb-4 flex-grow">
                {t(`methodology.${step.key}.body`)}
              </p>
              
              {/* mt-auto: Output kısmını her zaman en alta iter */}
              <div className="pt-4 border-t border-ink-100 mt-auto">
                <span className="text-[10px] uppercase font-bold text-ink-400 tracking-wider">Output:</span>
                <p className="text-xs font-medium text-ink-800 mt-1 break-words">
                  {t(`methodology.${step.key}.deliverable`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}