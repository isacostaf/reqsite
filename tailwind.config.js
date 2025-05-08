/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        topic1: '#3b82f6',
        topic2: '#10b981',
      },
    },
  },
  plugins: [],
} 