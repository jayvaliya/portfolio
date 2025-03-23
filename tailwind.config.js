// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'space-grotesk': ['var(--font-space-grotesk)'],
      },
      backgroundImage: {
        'gradient-conic':
          'conic-gradient(var(--conic-position), var(--tw-gradient-stops))',
      },
      animation: {
        'pulse-slow': 'pulse 8s ease-in-out infinite',
        'pulse-slow2': 'pulse 10s ease-in-out infinite 1s',
        'pulse-slow3': 'pulse 12s ease-in-out infinite 2s',
        'float-slow': 'float 15s ease-in-out infinite',
        'float-slow2': 'float 18s ease-in-out infinite reverse',
        'float-slow3': 'float 20s ease-in-out infinite 2s',
        'gradient-pulse': 'gradient-pulse 5s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(10deg)' },
        },
        'gradient-pulse': {
          '0%, 100%': { opacity: '0.1' },
          '50%': { opacity: '0.25' },
        },
      },
    },
  },
  plugins: [],
};
