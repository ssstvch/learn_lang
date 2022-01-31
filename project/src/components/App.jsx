import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../styles/App.scss";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./Header";
import NewWords from "./NewWords";
import TurnCard from "./TurnCard";
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

function App() {
  return (
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
  );
}

export default App;
