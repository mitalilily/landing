import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#125cff",
      dark: "#061b67",
      light: "#2f8cff",
    },
    secondary: {
      main: "#ef2638",
      dark: "#c91527",
      light: "#ff6a76",
    },
    success: {
      main: "#00a986",
    },
    warning: {
      main: "#e2a000",
    },
    background: {
      default: "#f7fbff",
      paper: "#ffffff",
    },
    text: {
      primary: "#061844",
      secondary: "#43577e",
    },
  },
  typography: {
    fontFamily: '"Plus Jakarta Sans", sans-serif',
    h1: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 700,
      letterSpacing: 0,
    },
    h2: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 700,
      letterSpacing: 0,
    },
    h3: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 700,
      letterSpacing: 0,
    },
    button: {
      fontWeight: 700,
      textTransform: "none",
    },
  },
  shape: {
    borderRadius: 20,
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 999,
          paddingInline: 22,
          paddingBlock: 12,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
  },
});

export default theme;
