module.exports = {
  mode: "jit",
  purge: ["./*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Josefin Sans", "sans-serif"],
    },
    extend: {
      colors: {
        lr: "hsl(0, 36%, 70%)",
        dr: "hsl(0, 93%, 68%)",
        gr: "hsl(0, 6%, 24%)",
        w1: "hsl(0, 0%, 100%)",
        w2: "hsl(0, 100%, 98%)",
        p1: "hsl(0, 80%, 86%)",
        p2: "hsl(0, 74%, 74%)",
      },
      fontSize: {
        base: "16px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
