/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1b2a38',
        accent: '#2a9d8f',
        hero: '#031b33',
        'explore-bg': '#e8f0eb',
        'footer-bg': '#0d1f2d',
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        lora: ['Lora', 'serif'],
      },
    },
  },
  plugins: [],
};
