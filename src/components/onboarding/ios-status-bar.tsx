import Image from "next/image";
import styles from "./ios-status-bar.module.css";

export function IosStatusBar() {
  return (
    <header className={styles.bar} aria-hidden="true">
      <div className={styles.clock}>
        <span className={styles.clockText}>9:41</span>
      </div>
      <div className={styles.right}>
        <Image
          src="/images/status-right.svg"
          alt=""
          width={67}
          height={12}
          priority
        />
      </div>
    </header>
  );
}
