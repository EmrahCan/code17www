/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        palark: {
          dark: '#1B1F24',
          charcoal: '#231F20',
          gray: '#5E6470',
          'light-gray': '#F2F4F7',
          bg: '#F8F9FA',
          border: '#E4E7EC',
          lime: '#00DDBA',
          'lime-light': '#E6FBF7',
          blue: '#00A1FC',
          'blue-light': '#EBF7FF',
          purple: '#9540FF',
          'purple-light': '#F5EDFF',
          orange: '#FF5722',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
