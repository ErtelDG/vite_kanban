/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
   theme: {
      extend: {},
      screens: {
         sm: "568px",
         // => @media (min-width: 568px) { ... }

         sm2: "640px",
         // => @media (min-width: 640px) { ... }

         md: "720px",
         // => @media (min-width: 720px) { ... }
         md2: "768px",
         // => @media (min-width: 768px) { ... }

         lg: "1024px",
         // => @media (min-width: 1024px) { ... }

         xl: "1280px",
         // => @media (min-width: 1280px) { ... }
         "1xl": "1440px",
         // => @media (min-width: 1280px) { ... }

         "2xl": "1536px",
         // => @media (min-width: 1536px) { ... }
      },
   },
   plugins: [],
   darkMode: "class",
   variants: {
      extend: {
         display: ["group-hover"],
      },
   },

};
