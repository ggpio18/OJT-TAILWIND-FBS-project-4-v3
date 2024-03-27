/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        wave: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      animation: {
        'wave': 'Gradient 15s ease forwards',
      },
      backgroundImage:{
        Bgwave:"url(../dist/img/bg3.svg)",
        Bgservices: "url(../dist/img/bgservices.jpg)",
      },
      colors: {
        dark: "#626262",
        light: "#ffffff",
        body: "ffffff",
        section: "#f5f5f5",
        primary: "#6a103f",
        accent: "#6a103f",
      },
      listStyleType: {
        none: 'none',
        disc: 'disc',
        decimal: 'decimal',
        circle: 'circle',
        square: 'square',
        roman: 'upper-roman',
      }
    },
  },
  plugins: [],
}
