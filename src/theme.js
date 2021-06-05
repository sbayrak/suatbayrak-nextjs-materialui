import { createMuiTheme } from '@material-ui/core/styles';

// Create a theme instance.
const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          scrollBehavior: 'smooth',
        },
      },
    },
  },
  palette: {
    primary: {
      main: '#f9c11c',
    },
    secondary: {
      main: '#eeeeee',
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;
