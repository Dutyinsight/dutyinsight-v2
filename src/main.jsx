import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// Dil ayarlarının uygulama başlamadan yüklenmesi için üstte tutuyoruz
import './i18n';

// Ana uygulama bileşeni
import App from './App';

import './styles/index.css';

const container = document.getElementById('root');

// react-snap "data-server-rendered" attribute'unu ekleyecek (snapSaveState ile)
// Eğer attribute varsa = prerendered HTML var = hydrate et
// Yoksa = normal CSR = createRoot
if (container.hasChildNodes() && container.getAttribute('data-server-rendered') === 'true') {
  ReactDOM.hydrateRoot(
    container,
    <React.StrictMode>
      {/* BÜYÜ BURADA: Tüm sayfalar arası geçiş bu sarmalayıcı sayesinde çalışıyor */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
} else {
  ReactDOM.createRoot(container).render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
}

// react-snap render bittiğinde bu hook'u çağırır
// Burada DOM'a "data-server-rendered" attribute'unu ekliyoruz ki
// production'da hydrate moduna geçsin
window.snapSaveState = () => {
  document.getElementById('root').setAttribute('data-server-rendered', 'true');
};