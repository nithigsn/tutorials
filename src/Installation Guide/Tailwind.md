step 1 =>  tailwinds and dependencies
npm install -D tailwindcss postcss autoprefixer


step 2 => initialize
npx tailwindcss init -p


step 3 => Configure tailwind.config.js

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}


step 4 =>  create tailwind.css and add or add in index.css 
@tailwind base;
@tailwind components;
@tailwind utilities;



step 5 =>  import tailwind.css in index.js if u have created tailwind.css






