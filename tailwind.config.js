/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./about/index.html", "./portfolio/index.html", "./contact/index.html"],
  theme: {
    extend: {
      colors: {
        ink: "#e2e8f0",
        slatebg: "#06080d",
        panel: "#12151f",
        accent: "#ef4444",
      },
      fontFamily: {
        sans: ["Public Sans", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
