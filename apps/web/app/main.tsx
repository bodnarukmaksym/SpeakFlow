import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./globals.css";
import RootLayout from "./layout";
import Home from "./pages";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RootLayout>
      <Home />
    </RootLayout>
  </StrictMode>,
);
