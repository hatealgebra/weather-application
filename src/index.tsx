import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { ThemeToggleProvider } from "./context/ThemeContext";

ReactDOM.render(
  <React.StrictMode>
    <ThemeToggleProvider>
      <App />
    </ThemeToggleProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// TODO Create snapshots and visual testing
