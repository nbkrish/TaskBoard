module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      background: '#202125',
      surface: '#333237', //191919 //333333 //1e1e1e //202123
      secondary: '#388474',
      onBackground: '#9a9ea6', //807f85 colors.GRAY_7
      onSurface: '#e8e9ed', //ebebeb  colors.GRAY_6
      onPrimary: '#212121', //212121 //191a1b
      onSecondary: '#D1FAE5',
      link: '#8bb3f7', //7db6fe shadeColor(colors.BLUE_9, -8)
      error: '#CF6679', //fe837d  shadeColor(colors.RED_9, -8)
      success: '#40c057',
      warning: '#edc149',
      primary: '#6EE7B7', //'#3F51B5' //788cde //7e89c9 //91a7ff
      primaryDark: '#10B981',
      white: '#FFFFFF',
      download: '#8BB3F7',
      upload: '#40C057',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
