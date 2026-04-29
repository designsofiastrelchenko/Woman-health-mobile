"use client";

import Image from "next/image";
import typography from "@/design-system/typography.module.css";
import styles from "./loading-dialog.module.css";

interface LoadingDialogProps {
  title: string;
  subtitle: string;
}

/** Figma `Dialogue Box` + `Loading 1` (nodes 192:3759 / 85:15795). */
export function LoadingDialog({ title, subtitle }: LoadingDialogProps) {
  return (
    <div className={styles.overlay} role="alertdialog" aria-live="polite" aria-busy="true">
      <div className={styles.card}>
        <Image
          src="/icons/auth/loading-spinner.png"
          alt=""
          width={64}
          height={64}
          className={styles.spinner}
          priority
        />
        <div className={styles.textBlock}>
          <p className={`${typography.heading3} ${styles.title}`}>{title}</p>
          <p className={`${typography.paragraph2} ${styles.sub}`}>{subtitle}</p>
        </div>
      </div>
    </div>
  );
}
