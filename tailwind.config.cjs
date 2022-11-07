/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xm: '280px',
      sm: '360px',
      md: '768px',
      lg: '980px',
      lg2: '1100px',
      xl: '1220px',
      tall: { raw: '(max-height: 750px)' },
    },
    extend: {
      colors: {
        white100: '#D9D9D9',
        white200: '#F2F2F2',
        green100: '#9FD0D2',
        green200: '#036C72',
        red100: '#F24141',
        yellow200: '#E7B14E',
        blue200: '#4957A6',
      },
    },
  },
  plugins: [],
}
