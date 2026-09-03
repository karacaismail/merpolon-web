# 301 Yönlendirme Haritası — eski site → Merpolon

Eski site: `merteksmerdane.com` (ve `.com.tr`) · Yeni: `merpolon.com`
Bu dosya **domain taşınınca** kullanılır. GitHub Pages 301 veremez; aşağıdaki kurallar
CyberPanel (OpenLiteSpeed/Apache `.htaccess`) veya Cloudflare Bulk Redirect için hazırdır.

## Eşleşmeler

| Eski URL | Yeni URL | Not |
|---|---|---|
| `/` | `/` | ana sayfa |
| `/hakkimizda-P151928.html` | `/kurumsal/` | |
| `/katildigimiz-fuarlar-P151927.html` | `/kurumsal/` | fuar içeriği kurumsalda |
| `/katalog/` | `/belgeler/` | katalog talebi |
| `/haberler.php` | `/kurumsal/` | haber akışı yok |
| `/iletisim.php` | `/iletisim/` | |
| `/bilgial.php` | `/teklif/` | bilgi alma → teklif formu |
| `/eng/` | `/en/` | dil kökü |
| `/ambalaj-sektoru-P151919.html` | `/sektorler/ambalaj/` | |
| `/kagit-sektoru-P151920.html` | `/sektorler/kagit-tissue/` | |
| `/deri-ve-branda-sektoru-P151921.html` | `/sektorler/deri-branda/` | |
| `/demir-celik-sektoru-P151922.html` | `/sektorler/demir-celik/` | |
| `/ahsap-ve-cam-sektoru-P151923.html` | `/sektorler/ahsap-cam/` | |
| `/tekstil-sektoru-P151924.html` | `/sektorler/tekstil/` | |
| `/elyaf-iplik-sektoru-P151926.html` | `/sektorler/elyaf-iplik/` | |
| `/metal-imalat-sektoru-P151935.html` | `/sektorler/metal-imalat/` | |
| `/*-H1519*.html` (haber detayları) | `/kurumsal/` | 5 haber sayfası |
| diğer tüm `*.html` / `*.php` | `/` | yakalayıcı kural |

## .htaccess (CyberPanel / Apache / OpenLiteSpeed)

```apache
RewriteEngine On

# www + https kanonikleştirme
RewriteCond %{HTTPS} off [OR]
RewriteCond %{HTTP_HOST} ^www\. [NC]
RewriteRule ^(.*)$ https://merpolon.com/$1 [R=301,L]

# Eski alan adlarından
RewriteCond %{HTTP_HOST} ^(www\.)?merteksmerdane\.(com|com\.tr)$ [NC]
RewriteRule ^$ https://merpolon.com/ [R=301,L]

# Sayfa eşleşmeleri
Redirect 301 /hakkimizda-P151928.html            https://merpolon.com/kurumsal/
Redirect 301 /katildigimiz-fuarlar-P151927.html  https://merpolon.com/kurumsal/
Redirect 301 /katalog/                           https://merpolon.com/belgeler/
Redirect 301 /haberler.php                       https://merpolon.com/kurumsal/
Redirect 301 /iletisim.php                       https://merpolon.com/iletisim/
Redirect 301 /bilgial.php                        https://merpolon.com/teklif/
Redirect 301 /eng/                               https://merpolon.com/en/
Redirect 301 /ambalaj-sektoru-P151919.html       https://merpolon.com/sektorler/ambalaj/
Redirect 301 /kagit-sektoru-P151920.html         https://merpolon.com/sektorler/kagit-tissue/
Redirect 301 /deri-ve-branda-sektoru-P151921.html https://merpolon.com/sektorler/deri-branda/
Redirect 301 /demir-celik-sektoru-P151922.html   https://merpolon.com/sektorler/demir-celik/
Redirect 301 /ahsap-ve-cam-sektoru-P151923.html  https://merpolon.com/sektorler/ahsap-cam/
Redirect 301 /tekstil-sektoru-P151924.html       https://merpolon.com/sektorler/tekstil/
Redirect 301 /elyaf-iplik-sektoru-P151926.html   https://merpolon.com/sektorler/elyaf-iplik/
Redirect 301 /metal-imalat-sektoru-P151935.html  https://merpolon.com/sektorler/metal-imalat/

# Haber detayları (…-H1519xx.html) → kurumsal
RewriteRule ^.*-H1519[0-9]+\.html$ https://merpolon.com/kurumsal/ [R=301,L]

# Kalan eski uzantılar → ana sayfa (son çare)
RewriteRule ^.*\.(html|php)$ https://merpolon.com/ [R=301,L]
```

## Domain taşınırken yapılacaklar (kontrol listesi)

1. `astro.config.mjs` → `site: 'https://merpolon.com/'`
2. `public/robots.txt` → `Sitemap: https://merpolon.com/sitemap-index.xml`
3. `deploy.sh` → `/merpolon` alt-yol ön-ekini kaldır (prefix perl satırları ve sitemap düzeltmesi)
4. Yukarıdaki `.htaccess` kurallarını sunucuya koy
5. Search Console'da **domain mülkü** ekle + eski mülkte **adres değişikliği** bildir
6. `sitemap-index.xml`'i yeni mülkte gönder
7. Sosyal profiller, Google Business Profile ve dizinlerdeki linkleri güncelle
