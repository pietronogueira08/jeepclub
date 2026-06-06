/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary:    '#E8760A',
          accent:     '#F5A623',
          bg:         '#080808',
          surface:    '#141414',
          text:       '#F0ECE4',
          muted:      '#6B6560',
        },
      },
      fontFamily: {
        display: ['"Bebas Neue"', '"Black Ops One"', 'cursive'],
        body:    ['"Barlow"', '"Exo 2"', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'bounce-slow':   'bounce 2s infinite',
        'pulse-orange':  'pulseOrange 2s cubic-bezier(0.4,0,0.6,1) infinite',
        'float':         'float 3s ease-in-out infinite',
        'spin-slow':     'spin 8s linear infinite',
      },
      keyframes: {
        pulseOrange: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(232,118,10,0.7)' },
          '70%':      { boxShadow: '0 0 0 16px rgba(232,118,10,0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'noise':          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E\")",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      clipPath: {
        'diagonal':      'polygon(0 0, 100% 0, 100% 88%, 0 100%)',
        'diagonal-r':    'polygon(0 0, 100% 0, 100% 100%, 0 88%)',
      },
    },
  },
  plugins: [],
}
