/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "kstate-purple": "#512888",
        "kstate-deep": "#3d1d66",
        "kstate-mist": "#f3effa",
        "kstate-line": "#ded6ea",
        "kstate-ink": "#18181b",
      },
      boxShadow: {
        soft: "0 18px 45px rgba(24, 24, 27, 0.08)",
      },
      fontFamily: {
        display: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
