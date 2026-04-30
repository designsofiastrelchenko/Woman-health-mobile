/* eslint-disable @next/next/no-img-element */
import styles from "./chevron-right-icon.module.css";

const ARROW_SRC = "/icons/figma/dc4508dc1ca821633c49c816fbd159e45cff5484.svg";

/** Figma `icon / arrow - right` — raster from exported SVG (matches Knowledge rows). */
export function ChevronRightIcon({ className }: { className?: string }) {
  return (
    <div
      className={[styles.wrap, className].filter(Boolean).join(" ")}
      data-name="icon / arrow - right"
      aria-hidden
    >
      <div className={styles.vec}>
        <img alt="" src={ARROW_SRC} draggable={false} />
      </div>
    </div>
  );
}
