import Image from "next/image";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./button.module.css";

export type ButtonVariant = "primary" | "secondary" | "tertiary";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariant;
  size?: "large" | "small";
  iconLeftSrc?: string;
  iconRightSrc?: string;
  children: ReactNode;
}

const variantClass: Record<ButtonVariant, string> = {
  primary: styles.primary,
  secondary: styles.secondary,
  tertiary: styles.tertiary,
};

export function Button({
  variant,
  size = "large",
  iconLeftSrc,
  iconRightSrc,
  children,
  className,
  type = "button",
  ...rest
}: ButtonProps) {
  const rootClass = [
    styles.root,
    variantClass[variant],
    size === "small" ? styles.small : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button type={type} className={rootClass} {...rest}>
      {iconLeftSrc ? (
        <span className={styles.icon} aria-hidden>
          <Image src={iconLeftSrc} alt="" width={24} height={24} unoptimized />
        </span>
      ) : null}
      <span className={styles.label}>{children}</span>
      {iconRightSrc ? (
        <span className={styles.icon} aria-hidden>
          <Image src={iconRightSrc} alt="" width={24} height={24} unoptimized />
        </span>
      ) : null}
    </button>
  );
}
