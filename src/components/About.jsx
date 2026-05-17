import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ShieldCheck, Lock, ServerOff, EyeOff } from 'lucide-react';

const About = () => {
  const { t } = useTranslation();

  const securityFeatures = [
    {
      icon: <Lock className="w-6 h-6 text-slate-900" />,
      title: t('about.sec1.title'),
      desc: t('about.sec1.desc'),
    },
    {
      icon: <ServerOff className="w-6 h-6 text-slate-900" />,
      title: t('about.sec2.title'),
      desc: t('about.sec2.desc'),
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-slate-900" />,
      title: t('about.sec3.title'),
      desc: t('about.sec3.desc'),
    },
    {
      icon: <EyeOff className="w-6 h-6 text-slate-900" />,
      title: t('about.sec4.title'),
      desc: t('about.sec4.desc'),
    },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section: Corporate Vision */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-bold tracking-widest text-slate-500 uppercase">
              {t('about.eyebrow')}
            </span>
            <h2 className="mt-4 text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl">
              {t('about.title')}
            </h2>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              {t('about.description')}
            </p>
          </motion.div>
        </div>

        {/* Bottom Section: Armored Data Protocol */}
        <div className="bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-100">
          <div className="mb-12 text-center">
            <h3 className="text-2xl font-bold text-slate-900">
              {t('about.securityTitle')}
            </h3>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              {t('about.securitySubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-semibold text-slate-900 mb-2">
                  {feature.title}
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;