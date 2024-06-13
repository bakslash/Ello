import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Mulish, Arial, sans-serif',
  },
  palette: {
    primary: {
      main: '#008080', // Teal
    },
    secondary: {
      main: '#FF4500', // OrangeRed
    },
    warning: {
      main: '#FFD700', // Yellow
    },
    success: {
      main: '#40E0D0', // Turquoise
    },
    info: {
      main: '#1E90FF', // Light Blue
    },
  },
});

export default theme;
