/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        fontFamily: {
          'playfair': ['"Playfair Display"', 'serif'],

        },
        brightColor: "#F4511F",
        backgroundColor: "#b7bca9",
        LightText: "#959595",
      },
      slidein: {
        '0%': { transform: 'translateX(-100%)' },
        '100%': { transform: 'translateX(0)' },
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(45deg,#FFFFFF, #dbd08f,#FFD16B, #FFFFFF)',
      },
    },
    animation: {
      slidein: 'slidein 3s ease-in 1s infinite reverse both running',
    },
  },
  plugins: [],
}

