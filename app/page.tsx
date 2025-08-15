"use client";

import { useRef } from "react";
import Brain3D from "../components/Brain3D"; // ✅ fixed import path
import styles from "./page.module.css";

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement | null>(null);

  return (
    <main className={styles.main}>
      <section ref={heroRef} className={styles.hero}>
        <Brain3D />
      </section>
      <section className={styles.content}>
        <h1>Inside My Head</h1>
        <p>
          Explore the interactive 3D brain. Click a lobe to navigate to related
          projects and ideas.
        </p>
      </section>
    </main>
  );
}
