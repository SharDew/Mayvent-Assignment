/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      container:{
        center:true
      },
      colors: {
        'primary': '#010100',
        'secondary': '#17291f',
        'gray': '#f2f3f2',
        'white': '#fffefe',
        'welcome': '#17291f'
      },
      backgroundImage:{
        'hero':"url('./Frame 502.png')",
        'p1': "url('./Rectangle 737.png')",
        'p2': "url('./Rectangle 738.png')",
        's51':"url('./Rectangle 741.png')",
        'b1': "url('./Frame 570.png')",
        'b1': "url('./Frame 448.png')",
        'b3': "url('./Frame 659.png')",
        'b4': "url('./Frame 448-1.png')"
      }
    },
  },
plugins: [],
}

