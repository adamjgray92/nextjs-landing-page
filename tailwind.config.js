/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      display: 'var(--display-font)',
    },
    extend: {
      colors: {
        primary: '#1C2534',
        primaryLight: '#263040',
        secondary: '#fe6927',
        secondaryLight: '#fbcfbb',
        customGrey: '#fbfbfb',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
