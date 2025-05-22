// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        lightning: 'lightning-flash 0.3s ease-in-out',
      },
      keyframes: {
        'lightning-flash': {
          '0%, 100%': { opacity: '0' },
          '25%': { opacity: '1' },
          '75%': { opacity: '0.6' },
        },
      },
    },
  },
  plugins: [],
  
}
