import { useTranslation } from 'react-i18next';
import { AlertTriangle, Leaf, Target } from 'lucide-react';

export default function Problem() {
  const { t } = useTranslation();

  const cards = [
    {
      icon: AlertTriangle,
      tag: t('problem.card1.tag'),
      title: t('problem.card1.title'),
      body: t('problem.card1.body'),
      accent: 'text-red-600 bg-red-50 border-red-100',
    },
    {
      icon: Leaf,
      tag: t('problem.card2.tag'),
      title: t('problem.card2.title'),
      body: t('problem.card2.body'),
      accent: 'text-emerald-700 bg-emerald-50 border-emerald-100',
    },
    {
      icon: Target,
      tag: t('problem.card3.tag'),
      title: t('problem.card3.title'),
      body: t('problem.card3.body'),
      accent: 'text-primary-500 bg-primary-50 border-primary-100',
    },
  ];

  return (
    <section
      id="problem"
      className="relative py-24 lg:py-32 bg-canvas-subtle scroll-mt-header"
    >
      <div className="container-x">
        <div className="max-w-2xl mb-16">
          
          {/* YENİ TASARIM: Çizgi gitti, standart rozet geldi */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 mb-6 rounded-full bg-primary-50/80 border border-primary-100 shadow-sm">
            <span className="block w-2 h-2 rounded-full bg-accent" aria-hidden="true" />
            <span className="text-xs font-bold tracking-widest uppercase text-primary-600">
              {t('problem.eyebrow')}
            </span>
          </div>

          <h2 className="h-section mb-6 text-balance">{t('problem.title')}</h2>
          <p className="lead">{t('problem.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <article
                key={idx}
                className="card p-8 lift-on-hover relative overflow-hidden"
              >
                {/* YENİ TASARIM: Numaralar silindi. İkon ve Tag yan yana getirildi! */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`inline-flex items-center justify-center w-10 h-10 rounded-lg border ${card.accent}`}
                  >
                    <Icon className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <span className="pill !m-0">{card.tag}</span>
                </div>

                <h3 className="font-display text-2xl font-medium text-primary-500 mb-3 leading-tight">
                  {card.title}
                </h3>

                <p className="text-ink-700 leading-relaxed">{card.body}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}