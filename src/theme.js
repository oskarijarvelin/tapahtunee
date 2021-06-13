import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#223388',
      //main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fafafa',
    },
  },
});

theme.root = {
  [theme.breakpoints.up('md')]: {
    maxWidth: 1008,
  },
}

theme.typography.body2 = {
  fontSize: 18,
  lineHeight: 1.4,
  [theme.breakpoints.up('md')]: {
    fontSize: 20,
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: 22,
  },
};

theme.typography.h3 = {
  fontSize: 48,
  lineHeight: 1.2,
  [theme.breakpoints.up('md')]: {
    fontSize: 56,
  },
};

theme.typography.body1 = {
  fontSize: 16,
  lineHeight: 1.5,
  [theme.breakpoints.up('md')]: {
    fontSize: 18,
  },
};

theme.typography.caption = {
  fontSize: 14,
  lineHeight: 1,
};

export default theme;