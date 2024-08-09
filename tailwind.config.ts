import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    screens: {
      "xs-min": { min: "350px" }, // small mobile
      "sm-min": { min: "481px" }, // mobile
      "md-min": { min: "700px" }, // tablet
      "lg-min": { min: "1025px" }, // laptop
      "xl-min": { min: "1171px" }, // desktop
      "2xl-min": { min: "1361px" }, // desktop lg
      "3xl-min": { min: "1561px" }, // desktop xl

      xss: { max: "320px" },
      "xs-max": { max: "480px" }, // small mobile
      "sm-max": { max: "699px" }, // mobile
      "md-max": { max: "1024px" }, // tablet
      "lg-max": { max: "1170px" }, // laptop
      "xl-max": { max: "1360px" }, // desktop
      "2xl-max": { max: "1560px" }, // desktop lg
      "3xl-max": { max: "1700px" }, // desktop xl
      "custom-1231": { max: "1231px" },

      xs: { min: "320px", max: "480px" },
      sm: { min: "481px", max: "699px" },
      md: { min: "700px", max: "1024px" },
      lg: { min: "1025px", max: "1170px" },
      xl: { min: "1171px", max: "1360px" },
      "2xl": { min: "1361px", max: "1560px" },
      "lg-4xl": { min: "1025px", max: "1701px" },
      "3xl": { min: "1561px" },
      "4xl": { min: "1701px" },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        "lg-min": "2rem",
      },
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function ({ addVariant }: any) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
} satisfies Config;

export default config;
