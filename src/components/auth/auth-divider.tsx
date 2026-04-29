import Image from "next/image";
import typography from "@/design-system/typography.module.css";
import styles from "./auth-divider.module.css";

interface AuthDividerProps {
  label: string;
  /** Figma register uses line-h / line-h2; login uses line-login for both sides */
  variant?: "register" | "login";
}

export function AuthDivider({ label, variant = "register" }: AuthDividerProps) {
  const left =
    variant === "login" ? "/icons/auth/line-login.svg" : "/icons/auth/line-h.svg";
  const right =
    variant === "login" ? "/icons/auth/line-login.svg" : "/icons/auth/line-h2.svg";

  return (
    <div className={styles.row} role="separator">
      <div className={styles.line}>
        <Image
          src={left}
          alt=""
          width={variant === "login" ? 90 : 91}
          height={2}
          className={styles.lineImg}
          unoptimized
        />
      </div>
      <span className={`${typography.paragraph2} ${styles.label}`}>{label}</span>
      <div className={styles.line}>
        <Image
          src={right}
          alt=""
          width={variant === "login" ? 90 : 91}
          height={2}
          className={styles.lineImg}
          unoptimized
        />
      </div>
    </div>
  );
}
