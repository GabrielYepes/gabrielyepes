/** @type {import('tailwindcss').Config}*/
module.exports = {
  content: [
    './src/app/**/*.{js,jsx,ts,tsx}',    // This tells Tailwind to look in src/app
    './src/components/**/*.{js,jsx,ts,tsx}',  // If you have a components folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}