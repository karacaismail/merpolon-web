/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,ts,md}',
  ],
  theme: {
    extend: {
      // Global hareket dili: sitedeki HER `transition` sınıfı bu eğriyi ve süreyi alır.
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(.22,1,.36,1)',   // yumuşak çıkış (power3.out)
        'in-out': 'cubic-bezier(.65,0,.35,1)',
        spring:   'cubic-bezier(.34,1.56,.64,1)',
      },
      transitionDuration: { DEFAULT: '320ms' },

      fontWeight: { 400:'400', 500:'500', 600:'600', 700:'700', 800:'800' },
      colors: {
        navy:   { DEFAULT:'#16233F', 900:'#0B1424', 800:'#101B31', 700:'#16233F', 600:'#233254', 500:'#33456C' },
        brand:  { red:'#D62B23', redlite:'#FF5A4D' },
        steel:  { 50:'#F4F6FA', 100:'#EDF1F7', 200:'#DCE3EE', 300:'#C2CCDC', 400:'#9AA6BC', 500:'#6B7890' },
      },
      fontFamily: {
        display: ['Sora','system-ui','sans-serif'],
        sans: ['Inter','system-ui','sans-serif'],
      },
      boxShadow: {
        soft:'0 10px 40px -12px rgba(16,35,63,.18)',
        glow:'0 0 0 1px rgba(214,43,35,.25), 0 20px 60px -18px rgba(214,43,35,.35)',
      },
      backgroundImage: {
        'grid':'radial-gradient(circle at 1px 1px, rgba(255,255,255,.06) 1px, transparent 0)',
        'mesh':'radial-gradient(at 20% 20%, rgba(214,43,35,.18) 0, transparent 45%), radial-gradient(at 80% 0%, rgba(51,69,108,.5) 0, transparent 40%), radial-gradient(at 90% 80%, rgba(214,43,35,.12) 0, transparent 45%)',
      },
      keyframes: {
        float:{ '0%,100%':{ transform:'translateY(0)' }, '50%':{ transform:'translateY(-14px)' } },
        floatSlow:{ '0%,100%':{ transform:'translateY(0) rotate(0)' }, '50%':{ transform:'translateY(-22px) rotate(6deg)' } },
        marquee:{ '0%':{ transform:'translateX(0)' }, '100%':{ transform:'translateX(-50%)' } },
        shimmer:{ '100%':{ transform:'translateX(100%)' } },
      },
      animation: {
        float:'float 6s ease-in-out infinite',
        floatSlow:'floatSlow 9s ease-in-out infinite',
        marquee:'marquee 28s linear infinite',
      }
    }
  },
  plugins: []
}
