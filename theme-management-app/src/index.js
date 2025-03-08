import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "./LazyLoader/ThemeContext";
import LazyApp from "./LazyLoader/LazyApp";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ThemeProvider>
    <LazyApp />
  </ThemeProvider>
);
