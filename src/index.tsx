import React from "react";
import ReactDOM from "react-dom/client";
import App from './components/App'
import "./index.scss";

const root: any = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);