import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: "var(--font-poppins)",
        bebasNeue: "var(--font-bebas)",
      },
      spacing: {
        xs: "8px",
        sm: "12px",
        md: "16px",
        lg: "24px",
        xl: "32px",
        "2xl": "48px",
        "3xl": "64px",
        "4xl": "96px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      flex: {
        "2": "2 2 0%", // Custom flex-grow, flex-shrink, flex-basis
      },
      keyframes: {
        slideIn: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideOut: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
      animation: {
        slideIn: "slideIn 0.5s ease-in-out",
        slideOut: "slideOut 0.5s ease-in-out",
        fadeIn: "fadeIn 0.5s ease-in-out",
        fadeOut: "fadeOut 0.5s ease-in-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-themer")({
      defaultTheme: {
        extend: {
          colors: {
            primary: "red",
          },
          fontFamily: {
            poppins: ["var(--font-poppins)"],
          },
        },
      },
      themes: [
        {
          name: "dark-theme",
          extend: {
            colors: {
              primary: "#004CFF",
              primaryLight: "#004CFF",
              secondary: "#CCDBFF",
              background: "#0F0F0F",
              container: "#1F1F1F",
              containerSecondary: "#1A1A1A",
              onBackground: "#ECECEC",
              onBackgroundSecondary: "#828282",
              onPrimary: "#FFFFFF",
              error: "#FF0000",
            },
            fontFamily: {
              poppins: ["var(--font-poppins)"],
            },
          },
        },
      ],
    }),
  ],
};

export default config;
