/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  themes: {
    extend: {},
    boxShadow: {
      neon: '0 0 50px #F43EFC, 0 0 80px #9B59B6' 
    },
    textColor: {
      gradient: 'linear-gradient(to right, #F43EFC, #9B59B6)' 
    },
    colors: {
      primary: '#00C896',
      secondary: '#3A3F51',
      accent: '#A259FF',
      neutral: '#696e79',
      'base-100': '#1A1A1A',
      info: '#3ABFF8',
      success: '#00C896',
      warning: '#FFB020',
      error: '#FF4C61',
    },
  },
  plugins: [
    require('daisyui'),
  ],
}