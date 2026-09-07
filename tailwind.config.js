/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#E5DBD1',
        brown: '#623F1B',
        blue: '#322470',
        red: '#BB240A',
        yellow: '#EDCC4D',
        green: '#355E3B',
        white: '#FFFFFF',
        paper: '#F7F2EC',
      },
    },
  },
  plugins: [],
}
