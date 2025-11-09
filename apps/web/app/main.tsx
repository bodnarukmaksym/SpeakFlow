import * as React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "../styles/global.css";

import Layout from "./layout";
import { AuthPage } from "./pages/auth/AuthPage";
import { MainPage } from "./pages/main/MainPage";
import { TranscriptionResultPage } from "./pages/transcription/TranscriptionResultPage";
import { SummarizingResultPage } from "./pages/summary_result/SummarizingResultPage";

const rootEl = document.getElementById("root");
if (!rootEl) throw new Error("Root container #root not found");

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/transcription" replace />} />

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
          path="/summarizing"
          element={
            <Layout>
              <SummarizingResultPage />
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
    </React.StrictMode>
  );
}

createRoot(rootEl).render(<App />);
