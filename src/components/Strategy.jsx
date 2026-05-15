import { useTranslation } from 'react-i18next';
import { Compass, GitBranch, Map, FileText, ArrowRight } from 'lucide-react';

export default function Strategy() {
  const { t } = useTranslation();

  return (
    <section id="strategy" className="relative py-24 lg:py-32 bg-[#0A1A2F] text-white overflow-hidden scroll-mt-header">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" aria-hidden="true" 
           style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(212,175,55,0.1) 0%, transparent 50%)' }} />

      <div className="container-x relative z-10">
        
        {/* Header Area */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 mb-6 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <span className="block w-2 h-2 rounded-full bg-accent shadow-[0_0_8px_rgba(212,175,55,0.8)]" />
            <span className="text-xs font-bold tracking-widest uppercase text-white">
              {t('strategy.eyebrow', 'Strategy Engine')}
            </span>
          </div>

          <h2 className="font-display text-4xl md:text-5xl font-medium mb-6 text-balance">
            {t('strategy.title', 'Master the Hidden Dynamics of Global Trade.')}
          </h2>
          <p className="text-lg lg:text-xl text-primary-100 opacity-80 max-w-2xl leading-relaxed">
            {t('strategy.subtitle', 'Strategy Intelligence is a bespoke market analysis and investment consultancy.')}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 mb-20">
          {/* Feature 1 */}
          <div className="group flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:text-primary-900 transition-all duration-300">
              <Compass className="w-6 h-6" strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="font-display text-xl font-semibold mb-2 transition-colors group-hover:text-accent">
                {t('strategy.feature1.title', 'Market Prioritization')}
              </h3>
              <p className="text-sm text-primary-100 opacity-70 leading-relaxed">
                {t('strategy.feature1.body', 'Data-driven modeling to identify high-ROI global markets.')}
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="group flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:text-primary-900 transition-all duration-300">
              <GitBranch className="w-6 h-6" strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="font-display text-xl font-semibold mb-2 transition-colors group-hover:text-accent">
                {t('strategy.feature2.title', 'Competitor Mapping')}
              </h3>
              <p className="text-sm text-primary-100 opacity-70 leading-relaxed">
                {t('strategy.feature2.body', "Analysis of competitors' pricing and supply chain strategies.")}
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="group flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:text-primary-900 transition-all duration-300">
              <Map className="w-6 h-6" strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="font-display text-xl font-semibold mb-2 transition-colors group-hover:text-accent">
                {t('strategy.feature3.title', 'Regulatory Roadmap')}
              </h3>
              <p className="text-sm text-primary-100 opacity-70 leading-relaxed">
                {t('strategy.feature3.body', 'Compliance planning for global regulations like CBAM and ESG.')}
              </p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="group flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:text-primary-900 transition-all duration-300">
              <FileText className="w-6 h-6" strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="font-display text-xl font-semibold mb-2 transition-colors group-hover:text-accent">
                {t('strategy.feature4.title', 'Executive Briefing')}
              </h3>
              <p className="text-sm text-primary-100 opacity-70 leading-relaxed">
                {t('strategy.feature4.body', 'Investor-ready strategic reports and high-level presentations.')}
              </p>
            </div>
          </div>
        </div>

        {/* CTA Card */}
        <div className="relative bg-white/5 border border-white/10 p-8 lg:p-12 rounded-2xl flex flex-col md:flex-row justify-between items-center gap-8 group overflow-hidden">
          <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/5 to-transparent -rotate-45 transition-all duration-1000 group-hover:inset-full" />
          <div className="max-w-xl relative z-10">
            <h3 className="text-2xl lg:text-3xl font-display font-medium mb-2">
              {t('strategy.ctaTitle', 'Ready to Scale Globally?')}
            </h3>
            <p className="text-primary-100 opacity-70">
              {t('strategy.ctaBody', 'Defining your expansion strategy through data and expert insight.')}
            </p>
          </div>
          <a 
            href="mailto:info@dutyinsight.com" 
            className="relative z-10 bg-accent text-primary-900 px-8 py-4 rounded-xl font-bold hover:bg-white transition-all whitespace-nowrap flex items-center gap-2"
          >
            {t('strategy.cta', 'Request Custom Strategy')}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}