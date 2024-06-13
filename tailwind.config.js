/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderRadius: {
        'custom': '25px',
      },
      fontFamily:{
        "prompt": ["Catamaran", "sans-serif"],
      },

      fontWeight:{
        "depth": 8000,
        "lines": 400,
      },
      colors:{
        "block": "#D9D9D9",
      },
      fontSize:{
        "sm":"1.5rem",
      }
    },
  },
  plugins: [],
};
