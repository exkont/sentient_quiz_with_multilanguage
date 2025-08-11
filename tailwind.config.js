/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        buttermilk: '#FFFAF4',
        'soft-linen': '#FFF4E8',
        'off-white': '#ECECEC',
        'dark-grey': '#9B9B9B',
        black: '#000000',
        'sentient-orange': '#EF4D32',
      },
      fontFamily: {
        mono: ['var(--font-geist-mono)', 'Geist Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}

