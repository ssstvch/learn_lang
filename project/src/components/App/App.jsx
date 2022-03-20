import React from "react";
import "../../styles/App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TableProvider } from "../Table/tableContext";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "../ui_components/Header";
import TableWords from "../Table/index";
import TurnCard from "../Trainer/TurnCard";
import ErrorPage from "../ui_components/ErrorPage";

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
    <Router>
      <ThemeProvider theme={theme}>
        <Header />
        <TableProvider>
          <Routes>
            <Route path="/game" element={<TurnCard />} />
            <Route path="/" element={<TableWords />} />
            <Route path="/*" element={<ErrorPage />} />
          </Routes>
        </TableProvider>
      </ThemeProvider>
    </Router>
  );
};

export default App;
