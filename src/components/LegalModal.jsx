import React, { useEffect } from 'react';
import { X, ShieldCheck, FileText, Cookie } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function LegalModal({ isOpen, onClose, type }) {
  const { t } = useTranslation();

  // Modal açıkken arkadaki sayfanın kaymasını engelle
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen || !type) return null;

  // Tipine göre ikon seçelim (Premium B2B havası)
  const getIcon = () => {
    switch (type) {
      case 'privacy': return <ShieldCheck className="w-6 h-6 text-accent" />;
      case 'terms': return <FileText className="w-6 h-6 text-accent" />;
      case 'cookies': return <Cookie className="w-6 h-6 text-accent" />;
      default: return null;
    }
  };

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-6">
      {/* Arka Plan (Blur ve Karartma) */}
      <div 
        className="absolute inset-0 bg-primary-950/40 backdrop-blur-md transition-opacity duration-300" 
        onClick={onClose} 
      />
      
      {/* Modal Kutusu */}
      <div className="relative bg-white w-full max-w-4xl max-h-[90vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in duration-300 border border-gray-100">
        
        {/* Üst Bar (Header) */}
        <div className="flex items-center justify-between p-5 md:p-6 border-b border-gray-100 bg-gray-50/50">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary-50 rounded-lg">
              {getIcon()}
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-primary-900 font-display">
              {t(`${type}.title`)}
            </h2>
          </div>
          <button 
            onClick={onClose} 
            className="p-2 hover:bg-gray-200 rounded-full transition-all text-gray-400 hover:text-gray-600"
          >
            <X size={24} />
          </button>
        </div>

        {/* İçerik Alanı */}
        <div className="overflow-y-auto p-6 md:p-10 custom-scrollbar">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-medium text-primary-400 uppercase tracking-widest mb-2">
              {t(`${type}.lastUpdated`)}
            </p>
            
            <p className="text-lg text-primary-800/80 leading-relaxed mb-10 pb-10 border-b border-gray-100">
              {t(`${type}.intro`)}
            </p>

            {/* Bölümleri ve Alt Maddeleri Döngüye Alıyoruz */}
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((num) => {
              const sectionTitle = t(`${type}.section${num}.title`);
              const sectionBody = t(`${type}.section${num}.body`);
              
              // Eğer bu numaralı bir section yoksa (çeviri anahtarı ile dönen değer aynıysa) hiçbir şey basma
              if (sectionTitle === `${type}.section${num}.title`) return null;

              return (
                <div key={num} className="mb-10 group">
                  <h3 className="text-xl font-bold text-primary-900 mb-4 flex items-center gap-3">
                    <span className="w-1.5 h-6 bg-accent/30 rounded-full group-hover:bg-accent transition-colors" />
                    {sectionTitle}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {sectionBody}
                  </p>

                  {/* Alt Maddeler (item1, item2...) kontrolü */}
                  <ul className="grid gap-3 ml-4">
                    {[1, 2, 3, 4, 5, 6].map((itemNum) => {
                      const itemText = t(`${type}.section${num}.item${itemNum}`);
                      if (itemText === `${type}.section${num}.item${itemNum}`) return null;
                      
                      return (
                        <li key={itemNum} className="flex gap-3 text-sm text-gray-600 bg-primary-50/30 p-3 rounded-lg border border-primary-100/50">
                          <span className="text-accent font-bold">•</span>
                          {itemText}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}

            {/* İletişim Bölümü (Eğer varsa) */}
            {t(`${type}.contact.title`) !== `${type}.contact.title` && (
              <div className="mt-12 p-6 bg-primary-900 rounded-xl text-white">
                <h4 className="text-lg font-bold mb-2">{t(`${type}.contact.title`)}</h4>
                <p className="text-primary-100 text-sm leading-relaxed mb-4">{t(`${type}.contact.body`)}</p>
                <a href="mailto:info@dutyinsight.com" className="text-accent hover:underline font-medium">
                  info@dutyinsight.com
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Alt Kısım (Action) */}
        <div className="p-4 md:p-6 border-t border-gray-100 flex justify-end bg-gray-50/30">
          <button 
            onClick={onClose}
            className="w-full sm:w-auto px-8 py-3 bg-primary-600 text-white rounded-xl font-semibold hover:bg-primary-700 transition-all shadow-lg active:scale-95"
          >
            Anladım, Kapat
          </button>
        </div>
      </div>
    </div>
  );
}