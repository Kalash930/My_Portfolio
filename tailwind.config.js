/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        border: "hsl(var(--border))",
        primary: "hsl(var(--primary))",
        'primary-foreground': "hsl(var(--primary-foreground))",
        card: "hsl(var(--card))",
      },
      keyframes: {
        "pulse-subtle": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        meteor: {
          "0%": {
            transform: "translateX(0) translateY(0) rotate(45deg)",
            opacity: 1,
          },
          "100%": {
            transform: "translateX(500px) translateY(300px) rotate(45deg)",
            opacity: 0,
          },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      animation: {
        "pulse-subtle": "pulse-subtle 3s ease-in-out infinite",
        meteor: "meteor 2s linear infinite",
        blink: "blink 1s steps(2, start) infinite", // 👈 added blink
      },
    },
  },
  plugins: [],
};
