/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html", "./src/**/*.{js,ts,jsx,tsx, html}",
  ],
  theme: {
    extend: {
    keyframes: {
      fadeIn: {
        "0%": { opacity: 0, transform: "translateY(20px)" },
        "100%": { opacity: 1, transform: "translateY(0)" },
      },
      spinSlow: {
        to: { transform: 'rotate(360deg)' },
      },
    },
    animation: {
      fadeIn: "fadeIn 0.6s ease-in-out",
      'spin-slow': 'spinSlow 6s linear infinite',
    },
  },
  },
  plugins: [],
}

