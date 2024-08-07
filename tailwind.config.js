/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "2xsmall": "320px",
        "xsmall": "480px",
        "small": "576px",
        "medium": "768px",
        "large": "1024px",
        "xlarge": "1200px",
        "2xlarge": "1400px",
      }
    },
  },
  plugins: [],
};
