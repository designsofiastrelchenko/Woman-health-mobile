import Link from "next/link";
import styles from "./icon-arrow-back.module.css";

const ARROW_SRC = "/icons/figma/dc4508dc1ca821633c49c816fbd159e45cff5484.svg";

interface IconArrowBackProps {
  href: string;
  label?: string;
}

/** Figma header back control (rotated `icon / arrow - right`, same glyph inset as ChevronRightIcon). */
export function IconArrowBack({ href, label = "Назад" }: IconArrowBackProps) {
  return (
    <Link href={href} className={styles.btn} aria-label={label}>
      <span className={styles.flip}>
        <span className={styles.glyph}>
          <span className={styles.glyphInset}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt="" src={ARROW_SRC} draggable={false} />
          </span>
        </span>
      </span>
    </Link>
  );
}
