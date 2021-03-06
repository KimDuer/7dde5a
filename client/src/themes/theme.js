import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
  typography: {
    fontFamily: "Open Sans, sans-serif",
    fontSize: 14,
    h4: {
      fontSize: 26,
      fontWeight: "bold",
      marginBottom: "15px"
    },
    h5: {
      fontSize: 26,
      fontWeight: "100",
      lineHeight: 1.5
    },
    button: {
      textTransform: "none",
      letterSpacing: 0,
      fontWeight: "bold",
      width: "150px",
      height: "60px",
      color: "white",
      backgroundColor: "#3A8DFF",
    },
    
  },
  overrides: {
    MuiTypography: {
      colorTextSecondary: {
        color: "#3A8DFF"
      },
      body1: {
        fontSize: "13px",
        fontWeight: "bold",
        paddingRight: "10px"
      }
    },
    MuiInput: {
      input: {
        fontWeight: "bold",
        paddingTop: "10px",
        paddingLeft: "4px",
      },
      underline: {
        "&:before":{
          borderBottomColor: "lightgray"
        }
      }
    },
    MuiInputLabel: {
      root: {
        color: "#B0B0B0",
        marginLeft: "4px",
        '& span': {
          display: "none"
        },
      },

      shrink: {
        transform: "translate(0, 1.5px) scale(0.8)"
      }
      
    },
  },
  palette: {
    primary: { main: "#3A8DFF" },
    secondary: { main: "#B0B0B0" },
  }
});
