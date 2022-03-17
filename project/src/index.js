import React from "react";
import ReactDOM from "react-dom";
import { WordsProvider } from "./components/App/WordsContext";

import "./index.css";
import App from "./components/App/App";
import { ThemeContext } from "@mui/styled-engine";

ReactDOM.render(
  <React.StrictMode>
    <WordsProvider>
      <ThemeContext.Provider>
        <App />
      </ThemeContext.Provider>
    </WordsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
