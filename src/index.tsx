import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { ThemeToggleProvider } from "./context/ThemeContext";

if (process.env.NODE_ENV === "development") {
  const { worker } = require("./mocks/browser");
  worker.start();
}

ReactDOM.render(
  <React.StrictMode>
    <ThemeToggleProvider>
      <App />
    </ThemeToggleProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// TODO Create snapshots and visual testing
