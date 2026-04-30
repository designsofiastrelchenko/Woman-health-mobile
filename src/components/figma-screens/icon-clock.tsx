import styles from "./icon-clock.module.css";

/** Figma `icon / clock` (node 108:2212) — two slices; each fills its inset rect so hands align with the ring. */
export function IconClock({ size = 18 }: { size?: 18 | 24 }) {
  const s = size;
  return (
    <span className={styles.wrap} style={{ width: s, height: s }}>
      <span className={styles.layer1}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/icons/figma/f0e6dc77e0655329c635531d4b0b16f66facee7b.svg"
          alt=""
          className={styles.img}
          draggable={false}
        />
      </span>
      <span className={styles.layer2}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/icons/figma/fa80534d98551464a4c75d9c0e6ccf5d60535ef9.svg"
          alt=""
          className={styles.img}
          draggable={false}
        />
      </span>
    </span>
  );
}
