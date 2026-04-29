"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { type FormEvent, useState } from "react";
import { PasswordField } from "@/components/auth/password-field";
import fp from "./forgot-password.module.css";

export interface ForgotResetClientProps {
  variant: "empty" | "filled";
}

export function ForgotResetClient({ variant }: ForgotResetClientProps) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const isFilled = variant === "filled";

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    if (isFilled) {
      router.push("/login");
    } else {
      router.push("/forgot-password/reset-input");
    }
  }

  return (
    <form className={fp.frame} onSubmit={onSubmit}>
      <h1 className={fp.titleReset}>Сброс пароля</h1>
      <p className={fp.subReset}>Введите новый пароль</p>
      <div className={fp.fieldsResetWrap}>
        <PasswordField
          label="Новый пароль"
          name="password"
          placeholder="Минимум 8 символов"
          boxClassName={fp.fieldBoxD9}
          defaultValue={isFilled ? "whProto8!" : undefined}
          disabled={busy}
        />
        <PasswordField
          label="Подтвердите пароль"
          name="passwordConfirm"
          placeholder="Минимум 8 символов"
          boxClassName={fp.fieldBoxD9}
          defaultValue={isFilled ? "whProto8!" : undefined}
          disabled={busy}
        />
      </div>
      <button
        type="submit"
        className={isFilled ? fp.btnSavePrimary : fp.btnSaveMid}
        disabled={busy}
      >
        Сохранить пароль
      </button>
      <p className={fp.footerRow}>
        <span className={fp.footerMuted}>Вспомнили пароль? </span>
        <Link href="/login" className={fp.footerLink}>
          Войти
        </Link>
      </p>
    </form>
  );
}
