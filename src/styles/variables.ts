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
    },
    background: {
      primary: '#F4F4F4',
      secondary: '#202020',
      tertiary: '#ffffff',
    },
    green: {
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
      500: '#69516E',
    },
  },
  breakPoints: {
    sm: '30em', // 480px
    md: '48em', // 768px
    lg: '62em', // 992px
    xl: '80em', // 1280px
    '2xl': '85.5em', // 1368px
    '3xl': '90em', // 1440px
  },
  customBreakPoints: {
    sm: '30em', // 480px
    md: '70em', // 1120px
    lg: '73em', // 1168px
    xl: '75em', // 1200px
    '2xl': '85.5em', // 1368px
    '3xl': '90em', // 1440px
  },
  fontSizes: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '28px',
    '4xl': '36px',
    '5xl': '48px',
    '6xl': '64px',
  },
  customFontSizes: {
    xs: '13px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '22px',
    '2xl': '24px',
    '3xl': '28px',
    '4xl': '36px',
    '5xl': '48px',
    '6xl': '64px',
  },
  buttons: {
    primary: {
      backgroundColor: '#2BB12B',
      color: '#fff',
      transition: 'all 0.2s ease-in-out',
      '&:hover': {
        filter: 'brightness(.9)',
      },
    },
    secondary: {
      backgroundColor: '#fff',
      color: '#C3B48B',
      transition: 'all 0.2s ease-in-out',
      '&:hover': {
        filter: 'brightness(.9)',
      },
    },
  },
};

export { theme };
