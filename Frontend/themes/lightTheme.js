import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    primary: {
      main: "#8338EC"
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          height: 48,
          fontWeight: 600,
          fontSize: "14px",
          padding: "0px 32px",
          boxSizing: "border-box",
          backgroundColor: "primary",
          textTransform: "none"
        }
      }
    }
  }
});
