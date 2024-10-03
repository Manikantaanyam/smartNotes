/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      animation: {
        "pulse-custom": "pulse 1.5s infinite ease-in-out",
      },
      keyframes: {
        pulse: {
          from: { opacity: "0.5" },
          to: { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
  backgroundImage: {
    "custom-gradient": "linear-gradient(to right, #1F2937, #374151)",
  },
};
