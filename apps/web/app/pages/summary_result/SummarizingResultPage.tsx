import * as React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../../styles/SummarizingResultPage.module.css";

export function SummarizingResultPage() {
  const navigate = useNavigate();
  const [summary, setSummary] = React.useState("");

  React.useEffect(() => {
    const mockSummary = `It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;

    setSummary(mockSummary);
  }, []);

  const handleDownloadPdf = () => {
    window.print();
  };

  const handleSaveToDrive = () => {
    alert("Saving to Drive is not implemented yet.");
  };

  return (
    <main className={styles.shell} aria-label="Summarizing result">
      <div className={styles.topbar}>
        <div className={styles.brandRow}>
          <div className={styles.logo} aria-hidden="true">
            <svg viewBox="0 0 24 24" className={styles.logoSvg}>
              <path
                d="M12 3a8 8 0 0 0-8 8v6a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2H5a7 7 0 0 1 14 0h-2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-6a8 8 0 0 0-8-8Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <span className={styles.brand}>SpeakFlow</span>
        </div>
      </div>

      <section className={styles.board}>
        <div className={styles.card}>
          <header className={styles.cardHeader}>
            <div className={styles.titleIcon} aria-hidden="true">
              <svg viewBox="0 0 48 48">
                <rect x="8" y="6" width="28" height="36" rx="3" />
                <rect x="13" y="13" width="18" height="2" />
                <rect x="13" y="18" width="18" height="2" />
                <rect x="13" y="23" width="14" height="2" />
                <rect x="13" y="31" width="10" height="6" rx="1" />
              </svg>
            </div>
            <h1 className={styles.title}>Summarizing Result</h1>
          </header>

          <h2 className={styles.sectionTitle}>Key points from Audio</h2>

          <p className={styles.summaryText}>{summary}</p>

          <div className={styles.actions}>
            <button
              className={`${styles.cta} ${styles.ctaPrimary}`}
              type="button"
              onClick={handleDownloadPdf}
            >
              Download PDF
            </button>
            <button
              className={styles.cta}
              type="button"
              onClick={handleSaveToDrive}
            >
              Save Result to Drive
            </button>
            <button
              className={styles.cta}
              type="button"
              onClick={() => navigate("/main")}
            >
              Back to main
            </button>
          </div>
        </div>
      </section>

      <div className={styles.footerBadge}>Created by Human</div>
    </main>
  );
}