/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors :{
        DarkBlue: '#025091',
        LightBlue: '#71C5EE',
        LightGray: '#BCC5CE',
        DarkGray: '#65696f',
        CustomGray: "rgba(179, 179, 179, 0.1)",
        // Gradient: "gradient(16deg, #4b90ff, #ff5546)",
      },
    },
  },
  plugins: [],
}

