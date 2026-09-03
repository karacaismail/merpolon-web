#!/usr/bin/env bash
# merpolon.com (CyberPanel) yayını — KÖK yol, /merpolon ön eki YOK.
# Kullanım:
#   ./deploy-merpolon.sh rsync   → doğrudan sunucuya kopyalar (önerilen)
#   ./deploy-merpolon.sh git     → derlenmiş siteyi production deposuna iter, sonra CyberPanel'den Pull
set -euo pipefail
cd "$(dirname "$0")"

SITE="https://merpolon.com/"
MODE="${1:-rsync}"

SSH_HOST="${MERPOLON_SSH:-root@152.53.141.66}"
DOCROOT="/home/merpolon.com/public_html"
PROD_REPO="${MERPOLON_PROD_REPO:-git@github.com:karacaismail/merpolon-site.git}"

echo "▶ derleniyor (site=$SITE)"
rm -rf dist
SITE_URL="$SITE" npm run build

# robots.txt sitemap adresini canlı alan adına çevir
perl -pi -e 's{^Sitemap: .*$}{Sitemap: https://merpolon.com/sitemap-index.xml}' dist/robots.txt
touch dist/.nojekyll

case "$MODE" in
  rsync)
    echo "▶ $SSH_HOST:$DOCROOT dizinine kopyalanıyor"
    rsync -az --delete --exclude='.git' --exclude='.well-known' \
          dist/ "$SSH_HOST:$DOCROOT/"
    echo "✔ yayınlandı: https://merpolon.com/"
    ;;
  git)
    echo "▶ production deposuna gönderiliyor: $PROD_REPO"
    [ -d _prod/.git ] || git clone --branch main --single-branch "$PROD_REPO" _prod 2>/dev/null \
      || { mkdir -p _prod && git -C _prod init -q && git -C _prod remote add origin "$PROD_REPO" \
           && git -C _prod checkout -qb main; }
    rsync -a --delete --exclude='.git' dist/ _prod/
    git -C _prod add -A
    git -C _prod -c user.email="karacai@yandex.com" -c user.name="ismail Karaca" \
        commit -qm "site $(date +%F_%H:%M)" || { echo "değişiklik yok"; exit 0; }
    git -C _prod push -q origin main
    echo "✔ gönderildi. Şimdi CyberPanel → merpolon.com → GIT Manager → Pull"
    ;;
  *) echo "bilinmeyen mod: $MODE (rsync | git)"; exit 1;;
esac
