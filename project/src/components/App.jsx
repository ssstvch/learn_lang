import React, { useState } from "react";
import { WordsProvider } from "./WordsContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../styles/App.scss";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./Header";
import NewWords from "./table/NewWords";
import TurnCard from "./training_page/TurnCard";
import ErrorPage from "./ErrorPage";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2C346B",
    },
    secondary: {
      main: "#A0F8EE",
    },
    warning: {
      main: "#FF420E",
    },
    info: {
      main: "#89DA59",
    },
  },
});

const App = () => {
  return (
    <WordsProvider>
      <Router>
        <ThemeProvider theme={theme}>
          <Header />
          <Routes>
            <Route path="/game" element={<TurnCard />} />
            <Route path="/" element={<NewWords />} />
            <Route path="/*" element={<ErrorPage />} />
          </Routes>
        </ThemeProvider>
      </Router>
    </WordsProvider>
  );
};

export default App;
