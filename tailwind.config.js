// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        maven: ['Maven Pro', 'sans-serif'],
      },
      colors: {
        gunmetal: '#2D3142',
        silver: '#BFC0C0',
        coral: '#EF8354',
        'coral-hover': '#C65D3D',
        'paynes-gray': '#4F5D75',
      },
      keyframes: {
        jiggle: {
          '0%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(3deg)' },
          '50%': { transform: 'rotate(-3deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        bounceIn: {
          '0%': { opacity: 0, transform: 'translateY(100%)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        scaleUp: {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
      },
      animation: {
        jiggle: 'jiggle 0.5s ease-in-out',
        bounceIn: 'bounceIn 0.5s ease-out',
        scaleUp: 'scaleUp 1s ease-out',
      },
    },
  },
  plugins: [],
};
