/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      colors: {
        obsidian: '#05070b',
        graphite: '#0b1020',
        cyanGlow: '#35d9ff',
        blueGlow: '#4f7cff'
      },
      boxShadow: {
        glow: '0 0 55px rgba(53, 217, 255, 0.22)',
        card: '0 24px 80px rgba(0, 0, 0, 0.38)'
      },
      backgroundImage: {
        'tech-grid': 'linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)'
      }
    }
  },
  plugins: []
};
