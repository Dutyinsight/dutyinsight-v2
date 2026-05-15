import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function Terms() {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container-x py-32 min-h-screen">
      <div className="prose prose-lg max-w-3xl mx-auto text-ink-600">
        <h1 className="font-display text-4xl text-primary-600 mb-8">
          {t('terms.title')}
        </h1>

        <p className="text-sm text-ink-500 italic">
          {t('terms.lastUpdated')}
        </p>

        <p>{t('terms.intro')}</p>

        <h2 className="font-display text-2xl text-primary-600 mt-12 mb-4">
          {t('terms.section1.title')}
        </h2>
        <p>{t('terms.section1.body')}</p>

        <h2 className="font-display text-2xl text-primary-600 mt-12 mb-4">
          {t('terms.section2.title')}
        </h2>
        <p>{t('terms.section2.body')}</p>

        <h2 className="font-display text-2xl text-primary-600 mt-12 mb-4">
          {t('terms.section3.title')}
        </h2>
        <p>{t('terms.section3.body')}</p>
        <ul>
          <li>{t('terms.section3.item1')}</li>
          <li>{t('terms.section3.item2')}</li>
          <li>{t('terms.section3.item3')}</li>
          <li>{t('terms.section3.item4')}</li>
        </ul>

        <h2 className="font-display text-2xl text-primary-600 mt-12 mb-4">
          {t('terms.disclaimer.title')}
        </h2>
        <p className="font-semibold text-primary-600">
          {t('terms.disclaimer.body')}
        </p>
        <ul>
          <li>{t('terms.disclaimer.item1')}</li>
          <li>{t('terms.disclaimer.item2')}</li>
          <li>{t('terms.disclaimer.item3')}</li>
          <li>{t('terms.disclaimer.item4')}</li>
        </ul>

        <h2 className="font-display text-2xl text-primary-600 mt-12 mb-4">
          {t('terms.liability.title')}
        </h2>
        <p>{t('terms.liability.body')}</p>

        <h2 className="font-display text-2xl text-primary-600 mt-12 mb-4">
          {t('terms.section6.title')}
        </h2>
        <p>{t('terms.section6.body')}</p>

        <h2 className="font-display text-2xl text-primary-600 mt-12 mb-4">
          {t('terms.section7.title')}
        </h2>
        <p>{t('terms.section7.body')}</p>
        <ul>
          <li>{t('terms.section7.item1')}</li>
          <li>{t('terms.section7.item2')}</li>
          <li>{t('terms.section7.item3')}</li>
        </ul>

        <h2 className="font-display text-2xl text-primary-600 mt-12 mb-4">
          {t('terms.ip.title')}
        </h2>
        <p>{t('terms.ip.body')}</p>

        <h2 className="font-display text-2xl text-primary-600 mt-12 mb-4">
          {t('terms.section9.title')}
        </h2>
        <p>{t('terms.section9.body')}</p>

        <h2 className="font-display text-2xl text-primary-600 mt-12 mb-4">
          {t('terms.section10.title')}
        </h2>
        <p>{t('terms.section10.body')}</p>

        <h2 className="font-display text-2xl text-primary-600 mt-12 mb-4">
          {t('terms.section11.title')}
        </h2>
        <p>{t('terms.section11.body')}</p>

        <h2 className="font-display text-2xl text-primary-600 mt-12 mb-4">
          {t('terms.contact.title')}
        </h2>
        <p>{t('terms.contact.body')}</p>
      </div>
    </div>
  );
}