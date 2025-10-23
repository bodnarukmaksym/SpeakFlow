import { ReactNode } from "react";
import styles from "./styles/app.module.css";

export default function Layout({ children }: { children: ReactNode }) {
  return <div className={styles.app}>{children}</div>;
}
