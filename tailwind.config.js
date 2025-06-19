```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        'springer-blue': '#0055A4',
        'springer-dark': '#002244'
      }
    }
  },
  plugins: []
};
```