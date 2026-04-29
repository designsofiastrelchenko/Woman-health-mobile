"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { type FormEvent, useState } from "react";
import { InputField } from "@/components/ui/input-field";
import fp from "./forgot-password.module.css";

const MOCK_EMAIL_KEY = "wh-forgot-email";

export function ForgotEmailClient() {
  const router = useRouter();
  const [busy, setBusy] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const email = String(data.get("email") ?? "").trim();
    if (!email) return;
    setBusy(true);
    try {
      sessionStorage.setItem(MOCK_EMAIL_KEY, email);
    } catch {
      void 0;
    }
    router.push("/forgot-password/send-code");
  }

  return (
    <form className={fp.frame} onSubmit={onSubmit}>
      <h1 className={fp.titleForgot}>Забыли пароль?</h1>
      <p className={fp.descForgot}>
        Ничего страшного, такое бывает. Введите email, привязанный к вашему аккаунту
      </p>
      <div className={fp.fieldEmailWrap}>
        <InputField
          label="Email"
          name="email"
          placeholder="Введите email"
          trailing="none"
          inputMode="email"
          autoComplete="email"
          disabled={busy}
        />
      </div>
      <button type="submit" className={fp.btnPrimaryMid} disabled={busy}>
        Отправить код
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
