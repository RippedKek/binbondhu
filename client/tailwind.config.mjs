/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        lightGreen: '#43A046',
        darkGreen: '#103E13',
        lightGray: '#3F403F',
        darkGray: '#141513',
        formGreen: '#D4E5C6',
        leafColor: '#75A777',
        textLightGreen: '#138017',
        textDarkGreen: '#235E27',
        landingText: '#EFEFEF',
        homeLightGreen: '#60C464',
        homeDarkGreen: '#0B9D10',
        menuBg: '#D4D4D4',
      },
    },
  },
  plugins: [],
}
