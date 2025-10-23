import styles from "../../../styles/TranscriptionResultPage.module.css";

export function TranscriptionResultPage() {
  return (
    <main className={styles.shell} aria-label="Transcription result">
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
                <rect x="10" y="8" width="20" height="28" rx="3" />
                <rect x="15" y="14" width="12" height="2" />
                <rect x="15" y="19" width="12" height="2" />
                <rect x="15" y="24" width="9" height="2" />
                <path d="M36 26a5 5 0 1 1-3-4.7V26h3Z" />
                <path d="M33 29v2a6 6 0 0 1-6 6h-3" />
              </svg>
            </div>
            <h1 className={styles.title}>Transcription Result</h1>
          </header>

          <div className={styles.transcriptBox} />

          <div
            className={styles.pagination}
            role="navigation"
            aria-label="Pages"
          >
            <button
              className={styles.pageBtn}
              type="button"
              disabled
            >{`<< Prev`}</button>
            <button className={styles.pageBtn} type="button" disabled>
              1
            </button>
            <button className={styles.pageBtn} type="button" disabled>
              2
            </button>
            <button className={styles.pageBtn} type="button" disabled>
              3
            </button>
            <button
              className={styles.pageBtn}
              type="button"
              disabled
            >{`Next >>`}</button>
          </div>

          <div className={styles.actions}>
            <button
              className={`${styles.cta} ${styles.ctaPrimary}`}
              type="button"
              disabled
            >
              Download PDF
            </button>
            <button className={styles.cta} type="button" disabled>
              Save Result to Drive
            </button>
            <a className={styles.cta} href="/main" role="button">
              Back to main
            </a>
          </div>
        </div>
      </section>

      <div className={styles.footerBadge}>Created by Human</div>
    </main>
  );
}
