/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        display: ["'Space Grotesk'", "sans-serif"],
        serif: ["'Instrument Serif'", "serif"],
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(59,130,246,.15), 0 10px 40px rgba(59,130,246,.08)",
        glow_accent: "0 0 0 1px rgba(139,92,246,.25), 0 10px 40px rgba(139,92,246,.15)",
      },
      backgroundImage: {
        "grid-fade": "radial-gradient(ellipse at center, rgba(99,102,241,.12) 0%, rgba(9,9,11,0) 70%)",
      }
    },
  },
  plugins: [],
}
