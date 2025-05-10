/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"], // Fixed missing closing bracket here
  theme: {
    extend: {
      colors: {
        primary: "#000957",
        secondary: "#FFEB00",
      },
    },
  },
  plugins: [],
}
