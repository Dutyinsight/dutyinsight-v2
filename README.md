# DutyInsight — Multilingual Corporate Website

5-dilli React + Vite + Tailwind tabanlı kurumsal site. SaaS estetik, i18n hazır.

## Diller

| Kod | Dil | Kalite |
|-----|-----|--------|
| `tr` | Türkçe | Native (ana dil) |
| `en` | English | Native-quality |
| `de` | Deutsch | High-quality AI translation |
| `cs` | Čeština | High-quality AI translation |
| `pl` | Polski | High-quality AI translation |

> **Not:** DE, CS, PL çevirileri profesyonel B2B tonunda yapıldı ama
> piyasaya çıkmadan önce native speaker review'dan geçirilmesi tavsiye edilir.
> Özellikle Çekçe ve Lehçe için Prag'a gittiğinde yerel kontakt bulup
> 1-2 saatlik proofread yaptırman yeterli.

## Teknik Stack

- **React 18** + **Vite 5** (hızlı dev, küçük bundle)
- **Tailwind CSS 3** (utility-first, custom design tokens)
- **react-i18next** + **i18next-browser-languagedetector** (i18n)
- **lucide-react** (icons)
- Fontlar: **Fraunces** (display serif) + **Inter** (sans body) + **JetBrains Mono** (mono accent)

## Kurulum

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # dist/ klasörü hazırlar
npm run preview      # production build'i lokal test
```

## Klasör Yapısı

```
src/
├── components/      # React componentleri
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── Problem.jsx
│   ├── Reports.jsx
│   ├── Strategy.jsx
│   ├── CEEHub.jsx
│   ├── LinkedInBlock.jsx
│   ├── Footer.jsx
│   ├── Logo.jsx
│   └── LanguageSwitcher.jsx
├── locales/         # i18n dosyaları
│   ├── tr.json
│   ├── en.json
│   ├── de.json
│   ├── cs.json
│   └── pl.json
├── styles/
│   └── index.css    # Tailwind + custom
├── i18n.js          # i18next config
├── App.jsx          # Ana orchestration
└── main.jsx         # Entry point
```

## İçerik Güncelleme

Tüm metinler `src/locales/{dil}.json` dosyalarındadır. Bir bölümün metnini
güncellemek için ilgili JSON dosyasını düzenlemek yeterli — kod değişikliği
gerekmez.

Örnek: Hero başlığını TR'de değiştirmek için:
```json
// src/locales/tr.json
{
  "hero": {
    "title": "Yeni başlık buraya"
  }
}
```

## Yeni Dil Ekleme

1. `src/locales/{code}.json` oluştur (mevcut bir dosyayı şablon olarak kopyala)
2. `src/i18n.js` içine import et ve `resources` objesine ekle
3. `LANGUAGES` dizisine ekle:
```js
{ code: 'fr', label: 'Français', flag: '🇫🇷', short: 'FR' }
```

## Deploy Seçenekleri

### Vercel (Önerilen — ücretsiz, hızlı)
```bash
npm install -g vercel
vercel
```
Vercel otomatik olarak Vite tespit eder, build alır, deploy eder.
Custom domain için Vercel dashboard → Domains → `dutyinsight.com`.

### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod
```
Build command: `npm run build`, publish directory: `dist`.

### GitHub Pages (Mevcut setup)
GitHub Pages SPA için ekstra config gerektirir (404.html redirect).
Pratikte Vercel/Netlify daha iyi.

## SEO Kontrol Listesi (Deploy Sonrası)

- [ ] Google Search Console'da yeni domain doğrula
- [ ] Her dil için ayrı `hreflang` etiketleri ekle (Next.js'e geçilirse otomatik)
- [ ] `sitemap.xml` oluştur (5 dil için 5 URL)
- [ ] `robots.txt` güncelle
- [ ] OG image (`og-image.png`, 1200×630) oluştur ve `/public/` içine koy
- [ ] Favicon (`favicon.svg`) oluştur ve `/public/` içine koy

## Geliştirme Notları

### Yeni Bölüm Ekleme
1. `src/components/YeniBolum.jsx` oluştur
2. `src/App.jsx` içinde import et ve `<main>` içine ekle
3. Tüm 5 `locales/*.json` dosyasına ilgili metinleri ekle

### Renk Sistemi
Marka rengi `#0F2341` `tailwind.config.js` içinde `primary.500` olarak tanımlı.
Tüm renk varyasyonları (primary.50 → primary.950) hazır. Accent: `#D4AF37` (altın).

### Tipografi
- Display headings: `font-display` (Fraunces)
- Body: `font-sans` (Inter, default)
- Mono accent: `font-mono` (JetBrains Mono)

## Bilinen Sınırlamalar

- **AI çevirileri** native review gerektirir (DE/CS/PL özellikle)
- LinkedIn linkleri henüz placeholder — gerçek profil/sayfa URL'lerini koyman lazım
- `/privacy`, `/terms`, `/cookies` sayfaları henüz yok — gerektiğinde eklemek için ayrı route'lar kur
- Mobile menu animasyonu basit — istersen genişletilebilir

## Şimdi Yapacakların

1. `npm install` çalıştır, projeyi kontrol et
2. `npm run dev` ile lokal test
3. Logo SVG'yi (mevcut DI logo) `/public/` içine kopyala, `Logo.jsx` componentini güncelle
4. LinkedIn URL'lerini gerçek profil/sayfalarla değiştir
5. OG image hazırla (Figma/Canva)
6. Vercel/Netlify'a deploy
7. Custom domain bağla
8. DE/CS/PL çevirilerini native speaker'a kontrol ettir (Prag'a gittiğinde)

---

**Lisans:** Private — DutyInsight markası
**Kurulum yardımı:** Claude (akademik asistan)
