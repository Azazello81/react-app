/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'monts': ['Montserrat', 'ui-sans-serif', 'system-ui'],
      'stolz': ['Stolzl', 'ui-sans-serif', 'system-ui'],
    },
    screens: {
      'xl': '1440px',
      'md': '1024px'
    },
    extend: {
      colors: {
        'almost-white': 'hsl(0%, 0%, 98%)'   
      },
    },
  },
  plugins: [],
}
