/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'orange': {
          500: '#FF9800',
        },
        'brown': {
          700: '#795548',
        },
      },
    },
  },
  plugins: [],
}