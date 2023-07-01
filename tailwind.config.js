/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'f-blue-t-white': {
          '0%': {
            backgroundColor: '#76adf8',
          },
          '100%': {
            backgroundColor: 'white',
          }
        }
      },
      animation: {
        'fade-f-blue-t-w': '4s ease-out f-blue-t-white'
      }
    },
  },
  plugins: [],
}
