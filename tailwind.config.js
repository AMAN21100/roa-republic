/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        republic: {
          black: '#000000',
          dark: '#080808',
          card: '#111111',
          surface: '#181818',
          border: '#262626',
          muted: '#888888',
          red: '#dc2626',
          redDark: '#991b1b',
        }
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        display: ['ABeeZee', 'sans-serif'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        },
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        scanline: 'scanline 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}