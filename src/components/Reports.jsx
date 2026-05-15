import { useTranslation } from 'react-i18next';
import { Check, ArrowRight, Sparkles } from 'lucide-react';

function PlanCard({ plan, highlighted = false }) {
  const { t, i18n } = useTranslation();

  // Özellikleri dinamik olarak çek (Örn: reports.starter.feature1)
  const features = [];
  for (let i = 1; i <= 6; i++) {
    const key = `feature${i}`;
    const value = t(`reports.${plan}.${key}`, { defaultValue: '' });
    // Eğer çeviri anahtarı değilse ve boş değilse listeye ekle
    if (value && !value.startsWith('reports.')) {
      features.push(value);
    }
  }

  // AKILLI MAİL YÖNLENDİRMESİ: TR ise Türkçe, değilse İngilizce taslak açar
  const handleMailClick = () => {
    const currentLang = i18n.language;
    const isTr = currentLang === 'tr';
    
    // Dil TR değilse 'en' (İngilizce) anahtarlarını zorla çekiyoruz
    const translateOptions = isTr ? {} : { lng: 'en' };
    
    // Paket ismini de o dildeki karşılığından alıyoruz (Örn: Export Intelligence)
    const planName = t(`reports.${plan}.name`, translateOptions);

    const subject = t('reports.mail.subject', { ...translateOptions, plan: planName });
    const body = t('reports.mail.body', { ...translateOptions, plan: planName });

    window.location.href = `mailto:info@dutyinsight.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <article
      className={`group relative rounded-2xl p-8 lg:p-10 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl
                ${
                  highlighted
                    ? 'bg-primary-500 text-white shadow-xl shadow-primary-500/20 ring-1 ring-primary-500'
                    : 'bg-white border border-ink-100 hover:border-primary-200'
                }`}
    >
      {/* Üst Etiket (Tag) */}
      <div className={highlighted ? "absolute -top-3 left-1/2 -translate-x-1/2" : "mb-5"}>
        <span
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold shadow-sm
                    ${highlighted ? 'bg-accent text-primary-700' : 'bg-primary-50 text-primary-600 group-hover:bg-primary-100'}`}
        >
          {highlighted && <Sparkles className="w-3 h-3" strokeWidth={2.5} />}
          {t(`reports.${plan}.tag`)}
        </span>
      </div>
      {highlighted && <div className="mb-5" />}

      {/* PAKET İSMİ - Burası reports.starter.name vb. çeker */}
      <h3
        className={`font-display text-3xl font-medium tracking-tight mb-2 transition-colors
                  ${highlighted ? 'text-white' : 'text-primary-500 group-hover:text-primary-600'}`}
      >
        {t(`reports.${plan}.name`)}
      </h3>

      <p className={`text-sm leading-relaxed mb-6 opacity-90 ${highlighted ? 'text-primary-100' : 'text-ink-700'}`}>
        {t(`reports.${plan}.description`)}
      </p>

      {/* Özellik Listesi */}
      <ul className="space-y-3 mb-8">
        {features.map((feature, idx) => (
          <li key={idx} className="flex gap-3 text-sm leading-relaxed">
            <Check
              className={`w-4 h-4 flex-shrink-0 mt-0.5 transition-transform group-hover:scale-110
                       ${highlighted ? 'text-accent' : 'text-primary-500'}`}
              strokeWidth={2.5}
            />
            <span className={highlighted ? 'text-primary-100' : 'text-ink-700'}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      {/* Profesyonel CTA Butonu */}
      <button
        onClick={handleMailClick}
        className={`inline-flex items-center justify-center gap-2 w-full
                 px-5 py-3 text-sm font-medium rounded-lg
                 transition-all duration-300 ease-out
                 ${
                   highlighted
                     ? 'bg-white text-primary-500 hover:bg-canvas-subtle hover:shadow-lg'
                     : 'bg-primary-500 text-white hover:bg-primary-600 hover:shadow-lg'
                 }`}
      >
        {t(`reports.${plan}.cta`)}
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" strokeWidth={2} />
      </button>
    </article>
  );
}

export default function Reports() {
  const { t } = useTranslation();

  return (
    <section id="reports" className="relative py-24 lg:py-32 scroll-mt-header">
      <div className="container-x">
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 mb-6 rounded-full bg-primary-50/80 border border-primary-100 shadow-sm">
            <span className="block w-2 h-2 rounded-full bg-accent" aria-hidden="true" />
            <span className="text-xs font-bold tracking-widest uppercase text-primary-600">
              {t('reports.eyebrow')}
            </span>
          </div>

          <h2 className="h-section mb-6 text-balance">{t('reports.title')}</h2>
          <p className="lead">{t('reports.subtitle')}</p>
        </div>

        {/* Paket Kartları Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 lg:items-stretch">
          <PlanCard plan="starter" />
          <PlanCard plan="business" />
          <PlanCard plan="enterprise" highlighted />
        </div>

        {/* Dipnot */}
        <p className="mt-10 text-sm text-ink-500 max-w-2xl">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent mr-2 align-middle" />
          {t('reports.footnote')}
        </p>
      </div>
    </section>
  );
}