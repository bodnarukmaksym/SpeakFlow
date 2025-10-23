import * as React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./styles/global.css";

import Layout from "./layout";
import { AuthPage } from "./pages/auth/AuthPage";
import { MainPage } from "./pages/main/MainPage";
import { TranscriptionResultPage } from "./pages/transcription/TranscriptionResultPage";

const rootEl = document.getElementById("root");
if (!rootEl) throw new Error("Root container #root not found");

createRoot(rootEl).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* редірект з кореня */}
        <Route path="/" element={<Navigate to="/auth" replace />} />

        {/* сторінки */}
        <Route
          path="/auth"
          element={
            <Layout>
              <AuthPage />
            </Layout>
          }
        />
        <Route
          path="/main"
          element={
            <Layout>
              <MainPage />
            </Layout>
          }
        />
        <Route
          path="/transcription"
          element={
            <Layout>
              <TranscriptionResultPage />
            </Layout>
          }
        />

        <Route
          path="*"
          element={
            <Layout>
              <div style={{ color: "#e9eefb", padding: 32 }}>
                Page not found
              </div>
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
