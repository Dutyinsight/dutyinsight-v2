import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function Privacy() {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container-x py-32 min-h-screen">
      <div className="prose prose-lg max-w-3xl mx-auto text-ink-600">
        <h1 className="font-display text-4xl text-primary-600 mb-8">
          {t('privacy.title')}
        </h1>

        <p className="text-sm text-ink-500 italic">
          {t('privacy.lastUpdated')}
        </p>

        <p>{t('privacy.intro')}</p>

        <h2 className="font-display text-2xl text-primary-600 mt-12 mb-4">
          {t('privacy.section1.title')}
        </h2>
        <p>{t('privacy.section1.body')}</p>

        <h2 className="font-display text-2xl text-primary-600 mt-12 mb-4">
          {t('privacy.section2.title')}
        </h2>
        <p>{t('privacy.section2.body')}</p>
        <ul>
          <li>{t('privacy.section2.item1')}</li>
          <li>{t('privacy.section2.item2')}</li>
          <li>{t('privacy.section2.item3')}</li>
          <li>{t('privacy.section2.item4')}</li>
          <li>{t('privacy.section2.item5')}</li>
        </ul>

        <h2 className="font-display text-2xl text-primary-600 mt-12 mb-4">
          {t('privacy.section3.title')}
        </h2>
        <p>{t('privacy.section3.body')}</p>
        <ul>
          <li>{t('privacy.section3.item1')}</li>
          <li>{t('privacy.section3.item2')}</li>
          <li>{t('privacy.section3.item3')}</li>
          <li>{t('privacy.section3.item4')}</li>
        </ul>

        <h2 className="font-display text-2xl text-primary-600 mt-12 mb-4">
          {t('privacy.section4.title')}
        </h2>
        <p>{t('privacy.section4.body')}</p>

        <h2 className="font-display text-2xl text-primary-600 mt-12 mb-4">
          {t('privacy.section5.title')}
        </h2>
        <p>{t('privacy.section5.body')}</p>

        <h2 className="font-display text-2xl text-primary-600 mt-12 mb-4">
          {t('privacy.section6.title')}
        </h2>
        <p>{t('privacy.section6.body')}</p>
        <ul>
          <li>{t('privacy.section6.item1')}</li>
          <li>{t('privacy.section6.item2')}</li>
          <li>{t('privacy.section6.item3')}</li>
          <li>{t('privacy.section6.item4')}</li>
          <li>{t('privacy.section6.item5')}</li>
          <li>{t('privacy.section6.item6')}</li>
        </ul>

        <h2 className="font-display text-2xl text-primary-600 mt-12 mb-4">
          {t('privacy.section7.title')}
        </h2>
        <p>{t('privacy.section7.body')}</p>

        <h2 className="font-display text-2xl text-primary-600 mt-12 mb-4">
          {t('privacy.section8.title')}
        </h2>
        <p>{t('privacy.section8.body')}</p>

        <h2 className="font-display text-2xl text-primary-600 mt-12 mb-4">
          {t('privacy.section9.title')}
        </h2>
        <p>{t('privacy.section9.body')}</p>

        <h2 className="font-display text-2xl text-primary-600 mt-12 mb-4">
          {t('privacy.contact.title')}
        </h2>
        <p>{t('privacy.contact.body')}</p>
      </div>
    </div>
  );
}