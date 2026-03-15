/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html', //my entry point
    './src/views/**/*.html',
    './src/components/**/*.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Google Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}