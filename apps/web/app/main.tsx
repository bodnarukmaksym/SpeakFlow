import React from "react";
import ReactDOM from "react-dom/client";
import "./app/globals.css";
import RootLayout from "./app/layout";
import Home from "./app/pages";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RootLayout>
      <Home />
    </RootLayout>
  </React.StrictMode>,
);
