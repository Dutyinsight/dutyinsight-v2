import { useTranslation } from 'react-i18next';
import { Linkedin, Instagram, ArrowUpRight } from 'lucide-react';

export default function LinkedInBlock() {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-canvas border-t border-ink-100/50">
      <div className="container-x">
        
        {/* Başlık Alanı */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 mb-6 rounded-full bg-primary-50/80 border border-primary-100 shadow-sm">
            <span className="block w-2 h-2 rounded-full bg-blue-500" aria-hidden="true" />
            <span className="text-xs font-bold tracking-widest uppercase text-primary-600">
              {t('social.eyebrow', 'DİJİTAL EKOSİSTEM')}
            </span>
          </div>
          
          <h2 className="font-display text-3xl lg:text-4xl font-medium text-primary-600 mb-4">
            {t('social.title', 'Ağımıza Katılın')}
          </h2>
          <p className="text-ink-500 text-lg">
            {t('social.subtitle', 'Global ticaret analizleri, güncel regülasyonlar ve DutyInsight ofislerinden anlık gelişmeler için bizi takip edin.')}
          </p>
        </div>

        {/* Sosyal Medya Kartları (Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* LinkedIn Kartı */}
          <a
            href="https://www.linkedin.com/company/dutyinsight"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-6 p-6 lg:p-8 rounded-2xl bg-white border border-ink-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300"
          >
            <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
              <Linkedin className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-primary-600 mb-1 flex items-center gap-2">
                LinkedIn
                <ArrowUpRight className="w-4 h-4 text-ink-300 group-hover:text-blue-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
              </h3>
              <p className="text-sm text-ink-500 leading-relaxed">
                {t('social.linkedin.desc', 'B2B strateji raporları, Avrupa pazarı analizleri ve makroekonomik güncellemeler.')}
              </p>
            </div>
          </a>

          {/* Instagram Kartı */}
          <a
            href="https://www.instagram.com/dutyinsight/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-6 p-6 lg:p-8 rounded-2xl bg-white border border-ink-100 shadow-sm hover:shadow-md hover:border-pink-200 transition-all duration-300"
          >
            {/* Instagram Hover Rengi (Gradyan) */}
            <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-xl bg-pink-50 text-pink-600 group-hover:bg-gradient-to-tr group-hover:from-yellow-400 group-hover:via-pink-500 group-hover:to-purple-500 group-hover:text-white transition-all duration-300">
              <Instagram className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-primary-600 mb-1 flex items-center gap-2">
                Instagram
                <ArrowUpRight className="w-4 h-4 text-ink-300 group-hover:text-pink-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
              </h3>
              <p className="text-sm text-ink-500 leading-relaxed">
                {t('social.instagram.desc', 'İstanbul ve Prag merkezlerimizden perde arkası, ekip dinamikleri ve günlük operasyonlar.')}
              </p>
            </div>
          </a>

        </div>
      </div>
    </section>
  );
}