import React from 'react';
import '../styles/App.scss';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import Title from './Title';
import NewWords from './NewWords';

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
        <Title text={`Your words list`}/>
        <NewWords />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
