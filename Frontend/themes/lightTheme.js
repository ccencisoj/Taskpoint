import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    primary: {
      main: "#8338EC"
    }
  },
  typography: {
    h1: {
      fontSize: "56px",
      fontWeight: "600",
      fontFamily: "Poppins"
    },
    h2: {
      fontSize: "32px",
      fontWeight: "600",
      fontFamily: "Poppins"
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
          textTransform: "none",
        }
      },
      variants: [
        {
          props: {variant: "light"},
          style: {
            color: "#8338EC",
            borderRadius: "5px",
            backgroundColor: "#f5f5ff",
            "&:hover": {
              backgroundColor: "#e5e5ee"
            },
            "&:active": {
              backgroundColor: "#e1e1ee"
            }
          }
        }
      ]
    }
  }
});
