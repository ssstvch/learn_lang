import React from 'react';
import '../styles/App.scss';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import Title from './Title';
import NewWords from './NewWords';
// import WordCard from './WordCard';

const words = [
  {
      "id":"00000",
      "word":"butterfly",
      "transcription":"[ ˈbʌtəflaɪ ]",
      "translate":"бабочка",
      "explanation": "Beautiful insect with brighty colored wings. Feed on flower nectar or fruit juice.",
      "theme":"Насекомые",
      "tags_json":"[\"u0436u0438u0432u043eu0442u043du044bu0435334\"]"
  },
  {
      "id":"00001",
      "word":"hedgehog",
      "transcription":"[ˈhedʒhɔːɡ]",
      "translate":"ёжик",
      "explanation": " ",
      "theme":"Животные",
      "tags_json":"[\"u043bu0434u043eu043bu0434u0434\"]"
  },
  {
      "id":"00002",
      "word":"apple",
      "transcription":"[ˈæpl]",
      "translate":"яблоко",
      "explanation": " ",
      "theme":"Фрукты",
      "tags_json":"[\"u0440u043bu043eu0440u043eu0440u043eu043b\"]"
  },
  {
      "id":"00003",
      "word":"pear",
      "transcription":"[peə]",
      "translate":"груша",
      "explanation": " ",
      "theme":"Фрукты",
      "tags_json":"null"
  },
  {
      "id":"00004",
      "word":"carrot",
      "transcription":"[ˈkærət]",
      "translate":"морковка",
      "explanation": " ",
      "theme":"Овощи",
      "tags_json":"[\"u043eu0432u043eu0449u0438\"]"
  },
  {
      "id":"00005",
      "word":"plum",
      "transcription":"[plʌm]",
      "translate":"слива",
      "explanation": " ",
      "theme":"Фрукты",
      "tags_json":"null"
  },
  {
      "id":"00006",
      "word":"unicorn",
      "transcription":"",
      "translate":"единорог",
      "explanation": " ",
      "theme":"Животные",
      "tags_json":"null"
  },
  {
      "id":"00007",
      "word":"cat",
      "transcription":"[kæt]",
      "translate":"кот",
      "explanation": " ",
      "theme":"Животные",
      "tags_json":"[\"u0436u0438u0432u043eu0442u043du044bu0435\"]"
  },
]

const theme = createTheme({
  palette: {
    primary: {
        main: '#2C346B',
    },
    secondary: {
        main: '#A0F8EE',
    },
    warning: {
        main: '#FF420E',
    },
    info: {
        main: '#89DA59'
    },
  },
});

function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Header />
        <Title text={`New word`}/>
        <NewWords />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
