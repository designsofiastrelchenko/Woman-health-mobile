import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import type { ButtonVariant } from "./button";
import styles from "./button-link.module.css";

const variantClass: Record<ButtonVariant, string> = {
  primary: styles.primary,
  secondary: styles.secondary,
  tertiary: styles.tertiary,
};

export interface ButtonLinkProps
  extends Omit<ComponentProps<typeof Link>, "className" | "children"> {
  variant: ButtonVariant;
  children: ReactNode;
  className?: string;
}

export function ButtonLink({
  variant,
  children,
  className,
  ...rest
}: ButtonLinkProps) {
  const rootClass = [styles.root, variantClass[variant], className]
    .filter(Boolean)
    .join(" ");

  return (
    <Link className={rootClass} {...rest}>
      <span className={styles.label}>{children}</span>
    </Link>
  );
}
