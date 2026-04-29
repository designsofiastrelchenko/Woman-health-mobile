import Image from "next/image";
import typography from "@/design-system/typography.module.css";
import styles from "./input-field.module.css";

export interface InputFieldProps {
  label: string;
  name: string;
  placeholder?: string;
  hint?: string;
  defaultValue?: string;
  disabled?: boolean;
  trailing?: "none" | "plus";
  inputMode?: "text" | "email";
  autoComplete?: string;
}

/**
 * Figma component `Input Field` — Type=Tittle, State=Normal, Mode=Light (node 205:3589).
 */
export function InputField({
  label,
  name,
  placeholder = "Type here",
  hint,
  defaultValue,
  disabled,
  trailing = "plus",
  inputMode = "text",
  autoComplete,
}: InputFieldProps) {
  const id = `input-field-${name}`;
  const hintId = hint ? `${id}-hint` : undefined;

  return (
    <div className={styles.root}>
      <label className={`${typography.subhead3} ${styles.label}`} htmlFor={id}>
        {label}
      </label>
      <div
        className={[styles.box, disabled ? styles.boxDisabled : ""]
          .filter(Boolean)
          .join(" ")}
      >
        <input
          id={id}
          name={name}
          type={inputMode === "email" ? "email" : "text"}
          inputMode={inputMode === "email" ? "email" : undefined}
          autoComplete={autoComplete ?? (inputMode === "email" ? "email" : undefined)}
          className={styles.input}
          placeholder={placeholder}
          defaultValue={defaultValue}
          disabled={disabled}
          aria-describedby={hintId}
        />
        {trailing === "plus" ? (
          <Image
            className={styles.trailing}
            src="/icons/figma/plus.svg"
            alt=""
            width={20}
            height={20}
            aria-hidden
            unoptimized
          />
        ) : null}
      </div>
      {hint ? (
        <p id={hintId} className={`${typography.caption3} ${styles.hint}`}>
          {hint}
        </p>
      ) : null}
    </div>
  );
}
