/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        times: ['"Times New Roman"'],
      },
      colors: {
        'blue-dark': '#384c97',
        'blue-light': '#1bb0ec',
        'gray-light': '#7b868a',
        'gray-dark': '#5c6264',
        'aquamarine': '#026a7b',
        // 'gradient-blue': 'rgb(56,76,151) to rgb(27,176,236)'
      },
    },
  },
  plugins: [],
}

