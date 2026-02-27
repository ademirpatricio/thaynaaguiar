/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#8d4bfa",
        secondary: "#cbacff",
        terciary: "#f3edfc",
        dark: "#1f1f1f",
        light: "#ffffff",
        link: "#22c55e",
        darkprimary: "#5e1ec9",
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        display: ['Capriola', 'sans-serif'],
      },
      fontSize: {
        h1: ['3.5rem', { lineHeight: '1.1' }],
        h2: ['2.5rem', { lineHeight: '1.2' }],
        h3: ['2rem', { lineHeight: '1.3' }],
        h4: ['1.25rem', { lineHeight: '1.4' }],
        h5: ['1rem', { lineHeight: '1.4' }],
        body: ['1rem', { lineHeight: '1.6' }],
        small: ['0.875rem', { lineHeight: '1.5' }],
      },
      keyframes: {
        rotacao: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        flutuando: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
      },
      animation: {
        rotacao: 'rotacao 10s linear infinite',
        flutuando: 'flutuando 5s ease-in-out infinite',
      },
    },
  },  
  plugins: [],
}