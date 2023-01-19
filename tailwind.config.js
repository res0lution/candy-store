/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fredoka: ['Fredoka', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        poppinsbold: ['Poppins Bold', 'sans-serif']
      },
      colors: {
        custom: '#f4f1ed',
        'custom-purple': '#4b1a45',
        'custom-red-2': '#e94949',
        'custom-purple-lite': '#6b5569',
        'custom-pink': '#e75fac',
        'custom-gray': '#D3cbd2',
        'custom-red': '#e93939',
        'color-orange': '#ffa961'
      }
    },
  },
  plugins: [],
}
