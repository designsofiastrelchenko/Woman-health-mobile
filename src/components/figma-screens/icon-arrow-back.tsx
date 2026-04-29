import Image from "next/image";
import Link from "next/link";
import styles from "./icon-arrow-back.module.css";

interface IconArrowBackProps {
  href: string;
  label?: string;
}

/** Figma header back control (rotated `icon / arrow - right`). */
export function IconArrowBack({ href, label = "Назад" }: IconArrowBackProps) {
  return (
    <Link href={href} className={styles.btn} aria-label={label}>
      <span className={styles.flip}>
        <Image
          src="/icons/figma/dc4508dc1ca821633c49c816fbd159e45cff5484.svg"
          alt=""
          width={24}
          height={24}
          unoptimized
        />
      </span>
    </Link>
  );
}
