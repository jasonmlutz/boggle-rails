import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";

const container = document.getElementById("root");

// create the root
const root = ReactDOM.createRoot(container);

// initial render
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)