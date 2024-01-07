/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'cream': '#fbe7c6',
        'pink': '#ffaebc',
        'mint': '#B4F8C8'
        // ...
      },
      // animation: {
      //   'popup': 'popup 0.5s ease-in-out',
      // },
      // keyframes: {
      //   'popup': {
      //     '0%': {
      //       position: 'absolute',
      //       top: '0',
      //     },
      //     '100%': {
      //       position: 'absolute',
      //       top: '50%',
      //     },
      //   },
      // }
    },

  },
  plugins: [],
}

