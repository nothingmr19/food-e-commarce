import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

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
    container: {
      center: true,
      padding: "2rem",
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
    plugin(function ({ addBase, addComponents }) {
      addBase({});
      addComponents({
        ".container": {
          "@apply w-full max-w-[1440px] mx-auto px-5 md:px-10 lg:px-[60px]": {},
        },
        ".h2": {
          "@apply text-[26px] sm:text-[32px] md:text-[50px] lg:text-[48px] leading-[36px] sm:leading-[42px] md:leading-[50px] lg:leading-[58px] font-[500] lg:font-[600] text-[#0A0A0B]":
            {},
        },
        ".h4": {
          "@apply text-[20px] sm:text-[24px] md:text-[26px] lg:text-[30px] leading-[26px] sm:leading-[30px] md:leading-[36px] lg:leading-[38px] font-[500] lg:font-[600] text-gray-800":
            {},
        },
        ".h5": {
          "@apply text-[18px] sm:text-[18px] md:text-[20px] lg:text-[20px] leading-[28px] sm:leading-[28px] md:leading-[30px] lg:leading-[30px] font-[500] text-gray-700":
            {},
        },
        ".h6": {
          "@apply text-[16px] leading-[24px] font-[500] text-gray-700": {},
        },
        ".input_label": {
          "@apply text-[14px] leading-[20px] font-[500] text-gray-700": {},
        },
        ".price": {
          "@apply text-[18px] leading-[28px] font-[600] text-gray-800": {},
        },
        ".quantity": {
          "@apply text-[14px] leading-[20px] font-[400] text-gray-600": {},
        },
        ".py-section": {
          "@apply py-[30px] sm:py-[35px] md:py-[45px] lg:py-[48px]": {},
        },
        ".p-section": {
          "@apply p-16 sm:p-20 md:p-24 lg:p-28 xl:p-32": {},
        },
        ".space-y-section": {
          "@apply space-y-10 sm:space-y-12 md:space-y-14 lg:space-y-16 xl:space-y-20 2xl:space-y-24":
            {},
        },
      });
    }),
  ],
} satisfies Config;

export default config;
