import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Context Providers
import { PatientProvider } from "./context/PatientContext";
import { AppProvider } from "./context/AppContext";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AppProvider>
    <PatientProvider>
      <App />
    </PatientProvider>
  </AppProvider>
);