/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        dots: {
          "0%": {
            opacity: 0,
            transform: "translateY(0)",
          },
          "25%": {
            opacity: 1,
            transform: "translateY(0)",
          },
          "50%": {
            opacity: 1,
            transform: "translateY(120px) scale(1)",
          },
          "75%": {
            opacity: 0,
            transform: "translateY(120px) scaler(8px)",
          },
          "100%": {},
        },
      },
      height: {
        "header-height": "150px",
        "footer-height": "200px",
      },
      padding: {
        "layout-padding": "80px",
      },
      width: {
        "layout-padding": "80px",
      },
    },
  },
  plugins: [],
};
