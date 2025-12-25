/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["ui-sans-serif", "system-ui", "Segoe UI", "Inter", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(59,130,246,.25), 0 10px 40px rgba(59,130,246,.15)",
      },
      backgroundImage: {
        "grid-fade": "radial-gradient(ellipse at center, rgba(59,130,246,.18) 0%, rgba(2,6,23,0) 60%)",
      }
    },
  },
  plugins: [],
}
