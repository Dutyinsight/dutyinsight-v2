import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function Cookies() {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container-x py-32 min-h-screen">
      <div className="prose prose-lg max-w-3xl mx-auto text-ink-600">
        <h1 className="font-display text-4xl text-primary-600 mb-8">
          {t('cookies.title')}
        </h1>

        <p className="text-sm text-ink-500 italic">
          {t('cookies.lastUpdated')}
        </p>

        <p>{t('cookies.intro')}</p>

        <h2 className="font-display text-2xl text-primary-600 mt-12 mb-4">
          {t('cookies.section1.title')}
        </h2>
        <p>{t('cookies.section1.body')}</p>

        <h2 className="font-display text-2xl text-primary-600 mt-12 mb-4">
          {t('cookies.section2.title')}
        </h2>
        <p>{t('cookies.section2.body')}</p>

        <h2 className="font-display text-2xl text-primary-600 mt-12 mb-4">
          {t('cookies.essential.title')}
        </h2>
        <p>{t('cookies.essential.body')}</p>
        <ul>
          <li>{t('cookies.essential.item1')}</li>
          <li>{t('cookies.essential.item2')}</li>
          <li>{t('cookies.essential.item3')}</li>
        </ul>

        <h2 className="font-display text-2xl text-primary-600 mt-12 mb-4">
          {t('cookies.analytics.title')}
        </h2>
        <p>{t('cookies.analytics.body')}</p>
        <ul>
          <li>{t('cookies.analytics.item1')}</li>
          <li>{t('cookies.analytics.item2')}</li>
          <li>{t('cookies.analytics.item3')}</li>
        </ul>

        <h2 className="font-display text-2xl text-primary-600 mt-12 mb-4">
          {t('cookies.section5.title')}
        </h2>
        <p>{t('cookies.section5.body')}</p>

        <h2 className="font-display text-2xl text-primary-600 mt-12 mb-4">
          {t('cookies.section6.title')}
        </h2>
        <p>{t('cookies.section6.body')}</p>

        <h2 className="font-display text-2xl text-primary-600 mt-12 mb-4">
          {t('cookies.section7.title')}
        </h2>
        <p>{t('cookies.section7.body')}</p>

        <h2 className="font-display text-2xl text-primary-600 mt-12 mb-4">
          {t('cookies.contact.title')}
        </h2>
        <p>{t('cookies.contact.body')}</p>
      </div>
    </div>
  );
}