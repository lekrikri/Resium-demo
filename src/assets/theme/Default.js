import { createTheme } from '@mui/material';

const Default = createTheme ({
  palette: {
    type: 'dark',
    primary: {
      main: '#1464A1',
    },
    secondary: {
      main: '#1464A1',
    },
    background: {
      paper: '#08090C',
      default: '#08090C',
    },
    text: {
      primary: '#DEDEE4',
      secondary: '#3F4B5B',
    },
  },
  typography: {
    fontFamily: 'Inter',
  },
		shape: {
    borderRadius: 0,
  },
});

export default Default;