/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        kstate: {
          purple: "#512888",
          deep: "#2D174E",
          ink: "#17151B",
          mist: "#F4F2F7",
          line: "#D9D4E8",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      boxShadow: {
        soft: "0 18px 45px rgba(23, 21, 27, 0.10)",
      },
    },
  },
  plugins: [],
};
