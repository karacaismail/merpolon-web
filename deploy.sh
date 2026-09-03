#!/usr/bin/env bash
# Merpolon → GitHub Pages deploy (subpath /merpolon/). Güvenli: dist içinde .git tutmaz.
set -euo pipefail
REPO=merpolon
cd "$(dirname "$0")"
npm run build
# kök-mutlak iç bağlantıları /merpolon/ ile öne ekle
find dist -name '*.html' -print0 | xargs -0 perl -pi -e 's/(href|src)="\/(?!\/)/$1="\/'"$REPO"'\//g'
# srcset AYRI ele alınmalı: "src=" kalıbına uymaz (srcset="...) ve virgülle ayrılmış BİRDEN ÇOK
# adres taşır. Atlandığında responsive görsel adaylarının tamamı canlıda 404 veriyordu.
find dist -name '*.html' -print0 | xargs -0 perl -pi -e 's{srcset="([^"]*)"}{my $v=$1; $v =~ s{(\A|,\s*)/(?!/)}{$1/'"$REPO"'/}g; qq{srcset="$v"}}ge'
find dist -name '*.css'  -print0 | xargs -0 perl -pi -e 's/url\(\/(?!\/)/url(\/'"$REPO"'\//g'
touch dist/.nojekyll
# sitemap: site alt yolu (/$REPO) entegrasyonda düşüyor -> URL'lere geri ekle
perl -pi -e 's{https://karacaismail\.github\.io/(?!'"$REPO"'/)}{https://karacaismail.github.io/'"$REPO"'/}g' dist/sitemap-0.xml dist/sitemap-index.xml
# kalıcı deploy klonu (yoksa oluştur)
[ -d _deploy/.git ] || git clone --branch gh-pages --single-branch https://github.com/karacaismail/$REPO.git _deploy
rsync -a --delete --exclude='.git' dist/ _deploy/
cd _deploy
git add -A
git -c user.email="karacai@yandex.com" -c user.name="ismail Karaca" commit -qm "deploy $(date +%F_%H:%M)" || { echo "değişiklik yok"; exit 0; }
git push -q origin gh-pages
echo "✔ yayınlandı: https://karacaismail.github.io/$REPO/"
