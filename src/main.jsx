import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// Dil ayarlarının uygulama başlamadan yüklenmesi için üstte tutuyoruz
import './i18n';

// Ana uygulama bileşeni
import App from './App';

import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* BÜYÜ BURADA: Tüm sayfalar arası geçiş bu sarmalayıcı sayesinde çalışıyor */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);