/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#FFFAEE',
        white: '#FFFFFF',
        'dark-brown': '#2F2A26',
        'point': '#C6BFAF',
        'point-hover': '#8B7E6A',
        'error': '#DC2626',
      },
      fontFamily: {
        'pretendard': ['Pretendard', 'system-ui', 'sans-serif'],
        'noto': ['Noto Sans KR', 'system-ui', 'sans-serif'],
      },
      animation: {
        'shake': 'shake 0.5s ease-in-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
      },
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-10px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(10px)' },
        },
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}