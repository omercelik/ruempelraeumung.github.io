/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./*.md",
    "./_layouts/**/*.html",
    "./_includes/**/*.html",
    "./_services/**/*.md",
    "./_guides/**/*.md",
    "./_districts/**/*.md",
    "./content/**/*.md",
    "./assets/js/**/*.js",
    "./_posts/**/*.md"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0A2342",
          light: "#2CA58D",
          accent: "#FFD700"
        },
        "background-light": "#F5F5F5",
        "background-dark": "#0f1723",
        "text-light": "#333333",
        "text-dark": "#F5F5F5"
      },
      fontFamily: {
        display: ["Segoe UI", "Inter", "system-ui", "-apple-system", "BlinkMacSystemFont", "Roboto", "sans-serif"]
      }
    }
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/container-queries")
  ]
};
