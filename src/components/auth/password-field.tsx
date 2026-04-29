"use client";

import { useId, useState } from "react";
import Image from "next/image";
import typography from "@/design-system/typography.module.css";
import styles from "@/components/ui/input-field.module.css";
import eyeStyles from "./password-field.module.css";

export interface PasswordFieldProps {
  label: string;
  name: string;
  placeholder?: string;
  defaultValue?: string;
  disabled?: boolean;
  autoComplete?: string;
  /** Merged onto the input box (e.g. Figma reset password border #d9d9d9). */
  boxClassName?: string;
}

/**
 * Password row with visibility toggle — matches Figma `icon / eye off` on register (node 85:15289).
 */
export function PasswordField({
  label,
  name,
  placeholder = "Введите пароль",
  defaultValue,
  disabled,
  autoComplete = "new-password",
  boxClassName,
}: PasswordFieldProps) {
  const reactId = useId();
  const id = `pwd-${name}-${reactId}`;
  const [visible, setVisible] = useState(false);

  return (
    <div className={styles.root}>
      <label className={`${typography.subhead3} ${styles.label}`} htmlFor={id}>
        {label}
      </label>
      <div
        className={[styles.box, boxClassName, disabled ? styles.boxDisabled : ""]
          .filter(Boolean)
          .join(" ")}
      >
        <input
          id={id}
          name={name}
          type={visible ? "text" : "password"}
          autoComplete={autoComplete}
          className={styles.input}
          placeholder={placeholder}
          defaultValue={defaultValue}
          disabled={disabled}
        />
        <button
          type="button"
          className={eyeStyles.eyeBtn}
          onClick={() => setVisible((v) => !v)}
          disabled={disabled}
          aria-label={visible ? "Скрыть пароль" : "Показать пароль"}
        >
          <Image
            src="/icons/auth/eye-off.svg"
            alt=""
            width={20}
            height={20}
            className={eyeStyles.eyeImg}
            unoptimized
          />
        </button>
      </div>
    </div>
  );
}
