/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        tomato: "hsl(4, 100%, 67%)",
        "dark-slate-grey": "hsl(234, 29%, 20%)",
        "charcoal-grey": "hsl(235, 18%, 26%)",
        grey: "hsl(231, 7%, 60%)",
      },
      boxShadow: {
        box: "0px 15px 60px 0px rgba(0, 0, 0, 0.25)",
        button: "0px 16px 32px 0px rgba(255, 97, 85, 0.50)",
      },
      backgroundImage: {
        "gradient-1": "linear-gradient(204deg, #FF6A3A 0%, #FF527B 100%)",
      },
    },
  },
  plugins: [],
};
