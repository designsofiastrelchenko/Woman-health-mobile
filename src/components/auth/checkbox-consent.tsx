"use client";

import Image from "next/image";
import styles from "./checkbox-consent.module.css";

interface CheckboxConsentProps {
  checked: boolean;
  onChange: (next: boolean) => void;
  disabled?: boolean;
}

/** Figma `CheckBox` on register (node 191:3486) + legal copy (node 78:5329). */
export function CheckboxConsent({
  checked,
  onChange,
  disabled,
}: CheckboxConsentProps) {
  return (
    <div className={styles.row}>
      <button
        type="button"
        role="checkbox"
        aria-checked={checked}
        data-checked={checked ? "1" : "0"}
        disabled={disabled}
        className={styles.box}
        onClick={() => onChange(!checked)}
      >
        {checked ? (
          <Image
            src="/icons/auth/checkbox-check.svg"
            alt=""
            width={10}
            height={10}
            className={styles.check}
            unoptimized
          />
        ) : null}
      </button>
      <p className={styles.text}>
        Я соглашаюсь с{" "}
        <span className={styles.link}>Политикой конфиденциальности</span>
        <br />
        и даю согласие на обработку персональных
        <br />и медицинских данных
      </p>
    </div>
  );
}
