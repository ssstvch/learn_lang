import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { ThemeContext } from "@mui/styled-engine";

ReactDOM.render(
  <React.StrictMode>
    <ThemeContext.Provider>
      <App />
    </ThemeContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
