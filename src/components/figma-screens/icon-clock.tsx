import Image from "next/image";
import styles from "./icon-clock.module.css";

/** Figma `icon / clock` (node 108:2212). */
export function IconClock({ size = 18 }: { size?: 18 | 24 }) {
  const s = size;
  return (
    <span className={styles.wrap} style={{ width: s, height: s }}>
      <span className={styles.layer1}>
        <Image
          src="/icons/figma/f0e6dc77e0655329c635531d4b0b16f66facee7b.svg"
          alt=""
          width={s}
          height={s}
          className={styles.img}
          unoptimized
        />
      </span>
      <span className={styles.layer2}>
        <Image
          src="/icons/figma/fa80534d98551464a4c75d9c0e6ccf5d60535ef9.svg"
          alt=""
          width={s}
          height={s}
          className={styles.img}
          unoptimized
        />
      </span>
    </span>
  );
}
