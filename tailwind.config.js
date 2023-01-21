/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins' : ['Poppins', 'sans-serif'],
        'merriweather' : ['Merriweather', 'serif'],
        'anton' : ['Anton', 'sans-serif'],
        'roboto' : ['Roboto', 'sans-serif'],
      },
    },
    backgroundImage: {
      'gallery' : "url('../public/images/gallery.jpg')",
      'photoshoots' : "url('../public/images/photoshoots.jpg')",
      'about' : "url('../public/images/about.jpg')",
      'contact' : "url('../public/images/contact.jpg')"
    }
  },
  plugins: [
    require("flowbite/plugin")
  ],
}
