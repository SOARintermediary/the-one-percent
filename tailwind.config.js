module.exports = {
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#FFD700',
          dark: '#BFA100',
        },
        luxurygreen: {
          DEFAULT: '#1a3a2b',
          dark: '#101613',
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'serif'],
      },
    },
  },
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  plugins: [],
};