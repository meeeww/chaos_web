/* eslint-disable no-undef */
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "tarjetaJugador": "url('./src/assets/backgrounds/FondoTarjeta.jpg')"
      },

    },
  },
  darkMode: "class",
  plugins: [nextui(), require('flowbite/plugin')],
}