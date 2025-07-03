import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import TaxCalculator from "./TaxCalculator";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TaxCalculator />
  </React.StrictMode>
);
