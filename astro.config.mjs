import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// NOT: Canlı adres. merpolon.com'a taşınınca burayı + public/robots.txt'yi güncelle
// ve deploy.sh'daki "/merpolon" ön-ekini kaldır. Kalan her şey (canonical, hreflang,
// OG, JSON-LD, sitemap) Astro.site üzerinden otomatik güncellenir.
export default defineConfig({
  // Hedef adres ortamdan gelir:
  //   varsayılan          → GitHub Pages önizleme (/merpolon alt yolu)
  //   SITE_URL=https://merpolon.com/ → canlı sunucu (kök, alt yol yok)
  site: process.env.SITE_URL || 'https://karacaismail.github.io/merpolon/',
  integrations: [
    tailwind(),
    sitemap({
      i18n: { defaultLocale: 'tr', locales: { tr: 'tr-TR', en: 'en-US', de: 'de-DE', ru: 'ru-RU', ar: 'ar' } },
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],
  build: { format: 'directory' },
});
