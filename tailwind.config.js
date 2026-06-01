
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
        foreground: '#f4f4f0',
        accent: '#d4ff33', // Acid lime
        muted: '#888888',
        surface: '#141414',
      },
      fontFamily: {
        serif: ['"Instrument Serif"', 'serif'],
        sans: ['"Inter Tight"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      cursor: {
        none: 'none',
      }
    },
  },
  plugins: [],
}
