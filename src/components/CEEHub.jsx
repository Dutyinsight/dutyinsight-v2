import { useTranslation } from 'react-i18next';
import { ShieldCheck, LineChart, CheckCircle2 } from 'lucide-react';

// CEEHub.jsx dosyasının başı şöyle olmalı:
export default function CEEHub() {
  const { t } = useTranslation();

  return (
    // Buraya id="cee-hub" ekliyoruz
    <section id="cee-hub" className="py-24 lg:py-32 bg-canvas-subtle scroll-mt-header">
      <div className="container-x">

        {/* Başlık Alanı */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 mb-6 rounded-full bg-primary-50/80 border border-primary-100 shadow-sm">
            <span className="block w-2 h-2 rounded-full bg-accent" aria-hidden="true" />
            <span className="text-xs font-bold tracking-widest uppercase text-primary-600">
              {t('hub.eyebrow', 'GLOBAL NETWORK')}
            </span>
          </div>

          <h2 className="h-display text-4xl lg:text-5xl font-medium tracking-tight text-primary-600 mb-6">
            {t('hub.title', 'İki Merkez. Sınırsız Ticaret.')}
          </h2>
          <p className="lead text-ink-600 max-w-2xl">
            {t('hub.subtitle', "İstanbul'dan operasyonel kusursuzluğu, Prag'dan ise Avrupa vizyonunuzu yönetiyoruz. Fiziksel ve dijital ürünleriniz için uçtan uca ticaret zekası.")}
          </p>
        </div>

        {/* 2'li Kurumsal Hub Grid Sistemi */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">

          {/* ISTANBUL HUB - Light Theme */}
          <div className="group relative flex flex-col p-8 lg:p-12 rounded-2xl bg-white border border-ink-100 shadow-sm hover:shadow-md transition-all duration-300">
            
            {/* Üst Etiket: Şehir ve Statüs */}
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-3 text-sm font-bold tracking-widest uppercase text-primary-500">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                ISTANBUL, TR
              </div>
              <span className="text-xs font-semibold px-3 py-1 bg-primary-50 text-primary-600 rounded-full">
                {t('hub.istanbul.badge', 'Operasyon Merkezi')}
              </span>
            </div>

            <div className="mb-6">
              <ShieldCheck className="w-10 h-10 text-primary-500 mb-6" strokeWidth={1.5} />
              <h3 className="font-display text-3xl font-medium text-primary-600 mb-4">
                {t('hub.istanbul.title', 'Gümrük ve Uyumluluk')}
              </h3>
              <p className="text-ink-600 leading-relaxed min-h-[80px]">
                {t('hub.istanbul.description', 'İhracat ve ithalat süreçlerinizde ETGB hatalarını önler, GTİP tespiti ve yerel mevzuat risklerini veriye dayalı analizlerle sıfıra indiririz.')}
              </p>
            </div>

            {/* Alt Çizgili Odak Alanları Listesi */}
            <div className="mt-auto pt-8 border-t border-ink-100">
              <h4 className="text-xs font-bold uppercase tracking-widest text-ink-400 mb-5">
                {t('hub.istanbul.focus', 'Temel Odak Alanları')}
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" strokeWidth={2} />
                  <span className="text-sm text-ink-700 font-medium">{t('hub.istanbul.feature1', 'Gümrük Müşavirliği ve Risk Önleme')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" strokeWidth={2} />
                  <span className="text-sm text-ink-700 font-medium">{t('hub.istanbul.feature2', 'Ticaret Bakanlığı Teşvik Yönetimi')}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* PRAGUE HUB - Dark Theme */}
          <div className="group relative flex flex-col p-8 lg:p-12 rounded-2xl bg-primary-600 text-white shadow-xl">
            
            {/* Üst Etiket: Şehir ve Statüs */}
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-3 text-sm font-bold tracking-widest uppercase text-accent">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
                </span>
                PRAGUE, CZ
              </div>
              <span className="text-xs font-semibold px-3 py-1 bg-white/10 text-accent border border-white/10 rounded-full">
                {t('hub.prague.badge', 'Strateji Merkezi')}
              </span>
            </div>

            <div className="mb-6">
              <LineChart className="w-10 h-10 text-accent mb-6" strokeWidth={1.5} />
              <h3 className="font-display text-3xl font-medium text-white mb-4">
                {t('hub.prague.title', 'Avrupa Pazar Girişi')}
              </h3>
              <p className="text-primary-100 leading-relaxed min-h-[80px]">
                {t('hub.prague.description', 'SaaS platformlarınız veya fiziksel ürünleriniz için Avrupa pazar hacmini ölçer, ESG/CBAM uyumunuzu sağlar ve yatırım stratejinizi çizeriz.')}
              </p>
            </div>

            {/* Alt Çizgili Odak Alanları Listesi */}
            <div className="mt-auto pt-8 border-t border-white/10">
              <h4 className="text-xs font-bold uppercase tracking-widest text-primary-300 mb-5">
                {t('hub.prague.focus', 'Temel Odak Alanları')}
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0" strokeWidth={2} />
                  <span className="text-sm text-primary-50 font-medium">{t('hub.prague.feature1', 'Orta ve Doğu Avrupa (CEE) Fizibilitesi')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0" strokeWidth={2} />
                  <span className="text-sm text-primary-50 font-medium">{t('hub.prague.feature2', 'Dijital ve Fiziksel Ürün Büyüme Stratejisi')}</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}