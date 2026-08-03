/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // In-between shades used for light/dark mode fine-tuning, layered
        // on top of Tailwind's default zinc/indigo scales.
        zinc: {
          205: "#e3e3e6",
          250: "#dcdce0",
          450: "#898992",
          455: "#878790",
          550: "#62626a",
          650: "#484850",
          850: "#202022",
        },
        indigo: {
          350: "#93a0fa",
          550: "#5956eb",
          555: "#5854ea",
          650: "#493fd8",
          750: "#3d34b6",
          850: "#342f92",
        },
      },
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
