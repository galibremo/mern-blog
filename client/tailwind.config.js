import flowbite from "flowbite-react/tailwind";
import tailwindScrollbar from "tailwind-scrollbar";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      fontFamily: {
        Dosis: ["Dosis", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [flowbite.plugin(), tailwindScrollbar],
};
