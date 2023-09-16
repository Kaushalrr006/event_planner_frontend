/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.html', // Include all HTML files in the src directory and its subdirectories
    './src/**/*.ts', 
    "./src/**/*.{html,js}"  // Include TypeScript files for Angular components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

