/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    fontFamily : {
      'global' : ['Inter', 'sans-serif']
    },
    fontSize : {
      'heading' : ['30px', {
          lineHeight : '40px',
          letterSpacing : '0px',
          fontWeight : '700',
        }
      ],
    'section' : ['25px', {
        lineHeight : '32px',
        letterSpacing : '0px',
        fontWeight : '500',
      }
     ],
    'regular' : ['18px', {
        lineHeight : '28px',
        letterSpacing : '0px',
        fontWeight : '400',
      }
    ],
  },
  screens: {
    'mobile' : '375px',
    'tablet': '640px',
    'laptop' : '1240px'
  },
    extend: {},
  },
  plugins: [
  ],
}

