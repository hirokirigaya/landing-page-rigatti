const theme = {
  colors: {
    default: {
      white: '#fff',
      black: '#000',
    },
    text: {
      primary: '#333333',
      secondary: '#C3B48B',
      tertiary: '#4D4739',
      quaternary: '#666666',
      quinary: '#202020',
      senary: '#222222',
      septenary: '#F2EFE9',
    },
    background: {
      primary: '#F4F4F4',
      secondary: '#202020',
      tertiary: '#ffffff',
      quaternary: '#F9F9F9',
    },
    green: {
      50: '#E3F4DE',
      500: '#2BB12B',
    },
    pastelGreen: {
      500: '#818B6E',
    },
    gray: {
      50: '#707070',
      100: '#666666',
      200: '#555555',
    },
    blue: {
      50: '#DEE9F4',
    },
    darkGray: {
      500: '#202020',
      600: '#222222',
    },
    burntYellow: {
      500: '#C3B48B',
      900: '#4D4739',
    },
    cementBlue: {
      500: '#6E7C8B',
    },
    purple: {
      50: '#EBE8F4',
      500: '#69516E',
    },
  },
  breakPoints: {
    sm: '30em', // 480px
    md: '48em', // 768px
    lg: '62em', // 992px
    '2lg': '70em', // 1120px
    '3lg': '73em', // 1168px
    '4lg': '75em', // 1200px
    xl: '80em', // 1280px
    '2xl': '85.5em', // 1368px
    '3xl': '90em', // 1440px
  },
  fontSizes: {
    xs: '12px',
    '2xs': '13px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
    '1xl': '22px',
    '2xl': '24px',
    '3xl': '28px',
    '4xl': '36px',
    '5xl': '48px',
    '6xl': '64px',
    '7xl': '70px',
  },
  fontSizesVW: {
    xs: '0.625vw',
    '2xs': '0.6770833333333334vw',
    sm: '0.7291666666666666vw',
    md: '0.8333333333333334vw',
    lg: '0.9375vw',
    xl: '1.0416666666666667vw',
    '1xl': '1.1458333333333333vw',
    '2xl': '1.25vw',
    '3xl': '1.4583333333333333vw',
    '4xl': '1.875vw',
    '5xl': '2.5vw',
    '6xl': '3.3333333333333335vw',
    '7xl': '3.6458333333333335vw',
  },
  fontFamily: {
    poppins: 'var(--font-poppins), Arial, sans-serif',
    playfair: 'var(--font-playfair), Arial, sans-serif',
    // playfairDisplay: '"Playfair Display", sans-serif',
    montserrat: 'var(--font-montserrat), Arial, sans-serif',
  },
  buttons: {
    primary: {
      backgroundColor: '#2BB12B',
      color: '#fff',
      transition: 'all 0.2s ease-in-out',
      '&:hover': {
        filter: 'brightness(1.1)',
      },
    },
    secondary: {
      backgroundColor: '#fff',
      color: '#C3B48B',
      transition: 'all 0.2s ease-in-out',
      '&:hover': {
        filter: 'brightness(1.1)',
      },
    },
  },
};

export { theme };
