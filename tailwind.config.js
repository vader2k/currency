/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'textPrimary': '#000',
        'bgPrimary': '#fff',
        'bgSecondary': '#F9F9F9',
        'pink' : '#0071bd',
        'blue': '#e6f7ff',
        'borderBg': '#d9d9d9'
      }
    },
  },
  plugins: [],
}