export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.3' },
        },

      },
      animation: {
        wiggle: 'wiggle 0.5s ease-in-out infinite',
        fade: 'fadeIn 1s ease-out forwards',
        blink: 'blink 1s ease-in-out infinite',

      },
    },
  },


}


