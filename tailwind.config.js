/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Hanken Grotesk"', 'system-ui', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
      },
      colors: {
        paper: '#F2EDE2',
        surface: '#FFFFFF',
        onsurface: '#000000',
        ink: '#0A0A0A',
        'surface-dim': '#E8E1D2',
        clover: {
          DEFAULT: '#7C3AED',
          ink: '#000000',
        },
      },
      letterSpacing: {
        editorial: '-0.05em',
        display: '-0.02em',
        tightest: '-0.04em',
      },
      borderRadius: {
        none: '0',
        DEFAULT: '0',
      },
    },
  },
  plugins: [],
};
