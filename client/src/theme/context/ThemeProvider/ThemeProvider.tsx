import { ReactNode } from 'react';

import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from '@mui/material/styles';

export type AppContainerProps = {
  children: ReactNode;
};

const darkTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

const ThemeProvider = ({ children }: AppContainerProps) => {
  return <MuiThemeProvider theme={darkTheme}>{children}</MuiThemeProvider>;
};

export default ThemeProvider;
