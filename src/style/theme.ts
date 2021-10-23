import { createTheme } from '@mui/material/styles';

export const mainTheme = createTheme({
  palette: {
    primary: {
      main: "#532BDC",
    },
    secondary: {
      main: "#1B4D82",
    },
    background: {
      default: "white",
      paper: "white",
    },
    text: {
      primary: "#7B7B7C",
      secondary: "#FAFAFA",
    },
  },
  typography: {
    fontFamily: [
      "MONTSERRAT",
      "Roboto",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    h1: {
      fontSize: "64px",
      fontWeight: 600,
    },
    h2: {
      fontSize: "24px",
      fontWeight: 600,
    },
    h3: {
      fontSize: "19px",
      fontWeight: 400,
    },
    h4: {
      fontSize: "18px",
      fontWeight: 400,
    },
    h5: {
      fontSize: "16px",
      fontWeight: 400,
    },
    h6: {},
    caption: {},
    body1: {
      fontSize: "16px",
    },
    body2: {
      fontSize: "12px",
    },
    button: {
      fontSize: "16px",
      textTransform: "none",
      fontWeight: "normal",
    },
  },
  shape: {
    borderRadius: 8,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 700,
      md: 960,
      lg: 1128,
      xl: 1920,
    },
  },
});
