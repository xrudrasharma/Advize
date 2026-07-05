/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: '#0DF087',
        dark: '#050505',
        darkGlass: 'rgba(5, 5, 5, 0.65)',
        lightGlass: 'rgba(255, 255, 255, 0.05)',
      },
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.01))',
      },
      boxShadow: {
        'neon': '0 0 15px rgba(13, 240, 135, 0.5)',
        'neon-hover': '0 0 30px rgba(13, 240, 135, 0.8)',
      }
    },
  },
  plugins: [],
}
