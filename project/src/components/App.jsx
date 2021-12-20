import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header'
import '../styles/App.scss';

const theme = createTheme({
  palette: {
    primary: {
        main: '#2C346B',
    },
  },
});

function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
