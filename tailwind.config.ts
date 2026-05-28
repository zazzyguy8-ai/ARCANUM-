import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        arcanum: {
          void: '#050508',
          deep: '#0d0d14',
          dark: '#12121c',
          navy: '#1a1a2e',
          purple: '#1e0a2e',
          'purple-bright': '#3d1a5e',
          gold: '#c9a96e',
          'gold-light': '#e8c97a',
          'gold-dim': '#7c6c4a',
          'gold-pale': '#f0e4c4',
          silver: '#8b9dc3',
          'silver-light': '#b8c8e0',
          'silver-dim': '#4a5a7a',
          parchment: '#e8d5b7',
          'parchment-dim': '#a09080',
          crimson: '#8b1a1a',
          'crimson-bright': '#cc2222',
          ember: '#c84a12',
          'ember-glow': '#ff6622',
          storm: '#2255cc',
          'storm-bright': '#4488ff',
          emerald: '#1a4a2a',
          'emerald-bright': '#2a8844',
          ash: '#554433',
          'ash-pale': '#998877',
        },
      },
      fontFamily: {
        display: ['var(--font-cinzel)', 'Georgia', 'serif'],
        serif: ['var(--font-crimson)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'radial-void': 'radial-gradient(ellipse at center, #1a1a2e 0%, #050508 70%)',
        'radial-gold': 'radial-gradient(ellipse at center, rgba(201,169,110,0.15) 0%, transparent 70%)',
        'gradient-arcanum': 'linear-gradient(135deg, #0d0d14 0%, #1a1a2e 50%, #0d0d14 100%)',
        'gradient-gold': 'linear-gradient(135deg, #7c6c4a 0%, #c9a96e 50%, #7c6c4a 100%)',
      },
      boxShadow: {
        'gold-sm': '0 0 8px rgba(201,169,110,0.3)',
        'gold-md': '0 0 20px rgba(201,169,110,0.4)',
        'gold-lg': '0 0 40px rgba(201,169,110,0.5)',
        'gold-xl': '0 0 80px rgba(201,169,110,0.6)',
        'silver-sm': '0 0 8px rgba(139,157,195,0.3)',
        'silver-md': '0 0 20px rgba(139,157,195,0.4)',
        'crimson-md': '0 0 20px rgba(139,26,26,0.5)',
        'void-inset': 'inset 0 0 60px rgba(5,5,8,0.8)',
        'inner-glow': 'inset 0 1px 0 rgba(201,169,110,0.1)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
        'pulse-gold': 'pulseGold 3s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'spin-slow': 'spin 20s linear infinite',
        'spin-reverse': 'spin 15s linear infinite reverse',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'reveal': 'reveal 1.5s ease-out forwards',
        'rune-glow': 'runeGlow 2s ease-in-out infinite',
        'particle': 'particle 8s linear infinite',
        'char-reveal': 'charReveal 0.05s ease-out forwards',
        'orb-float': 'orbFloat 12s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(201,169,110,0.3)' },
          '50%': { boxShadow: '0 0 60px rgba(201,169,110,0.7)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        reveal: {
          '0%': { opacity: '0', transform: 'translateY(20px) scale(0.95)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        runeGlow: {
          '0%, 100%': { opacity: '0.4', filter: 'blur(0px)' },
          '50%': { opacity: '1', filter: 'blur(1px)' },
        },
        particle: {
          '0%': { transform: 'translateY(100vh) translateX(0) scale(0)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '0.5' },
          '100%': { transform: 'translateY(-20px) translateX(50px) scale(1)', opacity: '0' },
        },
        charReveal: {
          '0%': { opacity: '0', transform: 'translateY(4px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        orbFloat: {
          '0%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(30px, -40px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, -20px) scale(0.9)' },
          '100%': { transform: 'translate(0, 0) scale(1)' },
        },
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '1000': '1000ms',
        '1500': '1500ms',
        '2000': '2000ms',
      },
    },
  },
  plugins: [],
};

export default config;
