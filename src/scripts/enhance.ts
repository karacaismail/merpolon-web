import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/* ──────────────────────────────────────────────────────────────
   Hareket dili — tek kaynak. CSS tarafındaki karşılığı
   tailwind.config.mjs içindeki transitionTimingFunction ile eşleşir.
   ────────────────────────────────────────────────────────────── */
const EASE = {
  out: 'power3.out',        // girişler · cubic-bezier(.22,1,.36,1)
  inOut: 'power2.inOut',    // aç/kapa geçişleri
} as const;

const DUR = { fast: 0.28, base: 0.55, slow: 0.9 } as const;

const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ══════════════════════════════════════════════════════════════
   1 · AKORDİYON — kendi uygulamamız (Flowbite'ın anlık aç/kapa'sı yerine).
   Yükseklik + içerik kayması + ikon dönüşü, hepsi easing'li.
   ══════════════════════════════════════════════════════════════ */
function accordions() {
  document.querySelectorAll<HTMLElement>('[data-accordion]').forEach((root) => {
    const single = root.dataset.accordion !== 'open';   // "collapse" → aynı anda tek panel
    const buttons = Array.from(root.querySelectorAll<HTMLButtonElement>('[data-accordion-target]'));

    const panelOf = (btn: HTMLElement) => {
      const sel = btn.getAttribute('data-accordion-target');
      return sel ? document.querySelector<HTMLElement>(sel) : null;
    };

    const paint = (btn: HTMLElement, open: boolean) => {
      const on = (btn.dataset.activeClasses || '').split(/\s+/).filter(Boolean);
      const off = (btn.dataset.inactiveClasses || '').split(/\s+/).filter(Boolean);
      btn.classList.remove(...(open ? off : on));
      btn.classList.add(...(open ? on : off));
      btn.setAttribute('aria-expanded', String(open));
    };

    const setOpen = (btn: HTMLElement, open: boolean, animate = true) => {
      const panel = panelOf(btn);
      if (!panel) return;
      const inner = (panel.firstElementChild as HTMLElement) || panel;
      paint(btn, open);

      const icon = btn.querySelector<SVGElement>('[data-accordion-icon]');
      if (icon) {
        if (animate && !reduce) gsap.to(icon, { rotation: open ? 180 : 0, duration: DUR.fast, ease: EASE.inOut });
        else gsap.set(icon, { rotation: open ? 180 : 0 });
      }

      if (!animate || reduce) {
        gsap.set(panel, { height: open ? 'auto' : 0, opacity: open ? 1 : 0 });
        panel.style.overflow = open ? '' : 'hidden';
        return;
      }

      gsap.killTweensOf([panel, inner]);
      panel.style.overflow = 'hidden';
      if (open) {
        gsap.set(panel, { height: 'auto' });
        const h = panel.offsetHeight;
        gsap.fromTo(panel, { height: 0, opacity: 0 },
          { height: h, opacity: 1, duration: DUR.base, ease: EASE.inOut,
            onComplete: () => { panel.style.height = 'auto'; panel.style.overflow = ''; ScrollTrigger.refresh(); } });
        gsap.fromTo(inner, { y: -10, opacity: 0 },
          { y: 0, opacity: 1, duration: DUR.base, ease: EASE.out, delay: 0.06 });
      } else {
        gsap.to(panel, { height: 0, opacity: 0, duration: DUR.fast + 0.1, ease: EASE.inOut,
          onComplete: () => ScrollTrigger.refresh() });
      }
    };

    buttons.forEach((btn) => {
      const panel = panelOf(btn);
      if (!panel) return;
      panel.classList.remove('hidden');           // yüksekliği biz yönetiyoruz
      setOpen(btn, btn.getAttribute('aria-expanded') === 'true', false);

      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const nowOpen = btn.getAttribute('aria-expanded') === 'true';
        if (single && !nowOpen) {
          buttons.forEach((b) => { if (b !== btn && b.getAttribute('aria-expanded') === 'true') setOpen(b, false); });
        }
        setOpen(btn, !nowOpen);
      });
    });
  });
}

/* ══════════════════════════════════════════════════════════════
   2 · GİRİŞ ANİMASYONLARI — kademeli, easing'li
   ══════════════════════════════════════════════════════════════ */
function reveals() {
  const items = gsap.utils.toArray<HTMLElement>('[data-reveal]');
  if (!items.length) return;
  if (reduce) { gsap.set(items, { opacity: 1, y: 0 }); return; }

  gsap.set(items, { opacity: 0, y: 24 });

  const grouped = new Set<HTMLElement>();
  gsap.utils.toArray<HTMLElement>('[data-reveal-group]').forEach((g) => {
    const kids = gsap.utils.toArray<HTMLElement>('[data-reveal]', g);
    if (!kids.length) return;
    kids.forEach((k) => grouped.add(k));
    ScrollTrigger.create({
      trigger: g, start: 'top 88%', once: true,
      onEnter: () => gsap.to(kids, { opacity: 1, y: 0, duration: DUR.base, ease: EASE.out, stagger: 0.07 }),
    });
  });

  items.filter((el) => !grouped.has(el)).forEach((el) => {
    ScrollTrigger.create({
      trigger: el, start: 'top 90%', once: true,
      onEnter: () => gsap.to(el, { opacity: 1, y: 0, duration: DUR.base, ease: EASE.out }),
    });
  });
}

/* ══════════════════════════════════════════════════════════════
   3 · PARALLAX — arka plan görselleri kapsayıcıya göre kayar
   ══════════════════════════════════════════════════════════════ */
function parallax() {
  if (reduce) return;
  gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((el) => {
    const amt = parseFloat(el.dataset.parallax || '') || 9;   // yüzde
    gsap.fromTo(el, { yPercent: -amt },
      { yPercent: amt, ease: 'none',
        scrollTrigger: { trigger: el.parentElement || el, start: 'top bottom', end: 'bottom top', scrub: 0.6 } });
  });
}

/* ══════════════════════════════════════════════════════════════
   4 · GÖRSEL EFEKTLERİ — maskeyle açılma + kaydırdıkça yakınlaşma
   ══════════════════════════════════════════════════════════════ */
function media() {
  if (reduce) return;

  gsap.utils.toArray<HTMLElement>('[data-reveal-img]').forEach((el) => {
    gsap.fromTo(el,
      { clipPath: 'inset(0% 0% 100% 0%)', scale: 1.06 },
      { clipPath: 'inset(0% 0% 0% 0%)', scale: 1, duration: DUR.slow, ease: EASE.out,
        scrollTrigger: { trigger: el, start: 'top 85%', once: true } });
  });

  gsap.utils.toArray<HTMLElement>('[data-zoom]').forEach((el) => {
    gsap.fromTo(el, { scale: 1 }, { scale: 1.08, ease: 'none',
      scrollTrigger: { trigger: el.parentElement || el, start: 'top bottom', end: 'bottom top', scrub: 0.8 } });
  });
}

/* ══════════════════════════════════════════════════════════════
   5 · SAYAÇLAR
   ══════════════════════════════════════════════════════════════ */
function counters() {
  document.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => {
    const target = parseFloat(el.dataset.count || '0');
    const suffix = el.dataset.suffix || '';
    const prefix = el.dataset.prefix || '';
    const write = (v: number) => (el.textContent = prefix + Math.round(v).toLocaleString('tr-TR') + suffix);
    if (reduce) { write(target); return; }
    const obj = { v: 0 };
    ScrollTrigger.create({
      trigger: el, start: 'top 92%', once: true,
      onEnter: () => gsap.to(obj, { v: target, duration: 1.4, ease: EASE.out, onUpdate: () => write(obj.v) }),
    });
  });
}

/* ══════════════════════════════════════════════════════════════
   6 · BAŞLIK — kaydırınca sıkışır
   ══════════════════════════════════════════════════════════════ */
function header() {
  const el = document.querySelector<HTMLElement>('header');
  if (!el) return;
  const on = () => el.classList.toggle('is-scrolled', window.scrollY > 12);
  on();
  window.addEventListener('scroll', on, { passive: true });
}

/* ══════════════════════════════════════════════════════════════
   7 · GÜVENLİK AĞI — içerik ASLA görünmez kalmamalı.
   Arka planda açılan sekme, ScrollTrigger'ın çalışmadığı gömülü
   tarayıcılar ve bfcache dönüşleri için düz satır içi stil.
   ══════════════════════════════════════════════════════════════ */
function safety() {
  const force = () => document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
    if (getComputedStyle(el).opacity !== '1') { el.style.opacity = '1'; el.style.transform = 'none'; }
  });
  setTimeout(force, 1400);
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') { ScrollTrigger.refresh(); setTimeout(force, 300); }
  });
  window.addEventListener('pageshow', () => { ScrollTrigger.refresh(); setTimeout(force, 300); });
}

function run() {
  accordions();
  reveals();
  parallax();
  media();
  counters();
  header();
  safety();
  (document as any).fonts?.ready?.then(() => ScrollTrigger.refresh());
}

if (document.readyState !== 'loading') run();
else document.addEventListener('DOMContentLoaded', run);
