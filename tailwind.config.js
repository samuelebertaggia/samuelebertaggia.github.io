module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      screens: {
        print: { raw: "print" },
        screen: { raw: "screen" },
      },
    },
    fontFamily: {
      sans: ["Noto Sans Display", "sans-serif"],
    },
  },
};
