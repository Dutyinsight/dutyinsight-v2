import { useTranslation } from 'react-i18next';
import { Briefcase, TrendingUp, Puzzle, ArrowRight } from 'lucide-react';

export default function CaseStudies() {
  const { t } = useTranslation();

  const scenarios = [
    { key: 'scenarioA', icon: TrendingUp, color: 'text-blue-600', bg: 'bg-blue-50' },
    { key: 'scenarioB', icon: Briefcase, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { key: 'scenarioC', icon: Puzzle, color: 'text-purple-600', bg: 'bg-purple-50' }
  ];

  return (
    <section id="case-studies" className="py-24 bg-canvas-muted/30">
      <div className="container-x">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary-600 font-semibold tracking-wider uppercase text-sm">
            {t('caseStudies.eyebrow')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-ink-950 mt-4 mb-6">
            {t('caseStudies.title')}
          </h2>
          <p className="text-lg text-ink-600">
            {t('caseStudies.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {scenarios.map((item, idx) => (
            <div key={idx} className="flex flex-col bg-white rounded-2xl border border-ink-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-8 flex-grow">
                <div className={`inline-flex p-2 rounded-lg ${item.bg} ${item.color} mb-6`}>
                  <item.icon className="w-5 h-5" />
                </div>
                
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary-500 bg-primary-50 px-2 py-0.5 rounded">
                    {t(`caseStudies.${item.key}.tag`)}
                  </span>
                  <span className="text-[10px] font-medium text-ink-400 uppercase">
                    {t(`caseStudies.${item.key}.industry`)}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-ink-900 mb-4 leading-snug">
                  {t(`caseStudies.${item.key}.title`) }
                </h3>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-xs font-bold text-ink-400 uppercase tracking-tight mb-1">Challenge</h4>
                    <p className="text-sm text-ink-600 leading-relaxed italic">"{t(`caseStudies.${item.key}.challenge`)}"</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-ink-400 uppercase tracking-tight mb-1">Outcome</h4>
                    <p className="text-sm text-ink-700 font-medium">{t(`caseStudies.${item.key}.outcome`)}</p>
                  </div>
                </div>
              </div>
              
              <div className="px-8 py-4 bg-ink-50/50 border-t border-ink-100">
                <button className="text-xs font-bold text-primary-600 hover:text-primary-700 inline-flex items-center gap-1 group">
                  {t('caseStudies.cta.button')}
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-ink-400 mt-12 max-w-2xl mx-auto">
          {t('caseStudies.footnote')}
        </p>
      </div>
    </section>
  );
}