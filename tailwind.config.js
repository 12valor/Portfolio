/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Poppins for punchy headers
        display: ['Poppins', 'sans-serif'], 
        // Inter for clean UI and body text
        sans: ['Inter', 'sans-serif'],      
        // JetBrains Mono for that high-end "Comptech" feel
        mono: ['JetBrains Mono', 'monospace'],
        dm: ['DM Sans', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}