/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "royal-gold": "#d4af37",
        "royal-cream": "#e8e4d9",
        "royal-dark": "#686262",
        "glass-bg": "rgba(146, 132, 132, 0.75)",
        "glass-border": "rgba(255, 255, 255, 0.08)",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        medieval: ["Cinzel", "serif"],
      },
      letterSpacing: {
        "ultra-wide": "0.25em",
      },
    },
  },
  plugins: [],
};
