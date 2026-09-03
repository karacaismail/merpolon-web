import 'flowbite';
import { gsap } from 'gsap';

const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function run() {
  const reveals = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));

  if (reduce) {
    reveals.forEach(el => (el.style.opacity = '1'));
    document.querySelectorAll<HTMLElement>('[data-count]').forEach(el => {
      const p = el.dataset.prefix || '', s = el.dataset.suffix || '';
      el.textContent = p + (el.dataset.count || '0') + s;
    });
    return;
  }

  // initial hidden state
  gsap.set(reveals, { opacity: 0, y: 26 });

  const play = (el: HTMLElement) => {
    const group = el.closest('[data-reveal-group]');
    const items = group ? Array.from(group.querySelectorAll<HTMLElement>('[data-reveal]')) : [el];
    gsap.to(items, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', stagger: 0.08 });
  };

  const seen = new WeakSet<Element>();
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target as HTMLElement;
      if (seen.has(el)) return;
      const group = el.closest('[data-reveal-group]') || el;
      if (seen.has(group)) { io.unobserve(el); return; }
      seen.add(group); seen.add(el);
      play(el);
      io.unobserve(el);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
  reveals.forEach(el => io.observe(el));

  // Safety fallback: content must NEVER stay hidden. Plain inline styles (no GSAP/rAF)
  // so it also works when the tab loaded in the background (rAF paused), IO never
  // fires (in-app browsers) or the page is restored from bfcache.
  const forceShow = () => reveals.forEach(el => {
    if (el.style.opacity !== '1') { el.style.opacity = '1'; el.style.transform = 'none'; }
  });
  setTimeout(forceShow, 1200);
  document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible') setTimeout(forceShow, 300); });
  window.addEventListener('pageshow', () => setTimeout(forceShow, 300));

  // counters
  document.querySelectorAll<HTMLElement>('[data-count]').forEach(el => {
    const target = parseFloat(el.dataset.count || '0');
    const suffix = el.dataset.suffix || '';
    const prefix = el.dataset.prefix || '';
    const obj = { v: 0 };
    const cio = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        gsap.to(obj, { v: target, duration: 1.5, ease: 'power2.out',
          onUpdate: () => (el.textContent = prefix + Math.round(obj.v).toLocaleString('tr-TR') + suffix) });
        cio.disconnect();
      });
    }, { threshold: 0.4 });
    cio.observe(el);
  });
}

if (document.readyState !== 'loading') run();
else document.addEventListener('DOMContentLoaded', run);
