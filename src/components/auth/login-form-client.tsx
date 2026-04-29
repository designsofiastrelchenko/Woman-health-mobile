"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition, type FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { submitLoginMock } from "@/lib/api-mock/auth-forms";
import { MobileAuthShell } from "@/components/auth/mobile-auth-shell";
import { InputField } from "@/components/ui/input-field";
import { PasswordField } from "@/components/auth/password-field";
import { AuthDivider } from "@/components/auth/auth-divider";
import { LoadingDialog } from "@/components/auth/loading-dialog";
import { SocialGoogleIcon } from "@/components/auth/social-google-icon";
import screen from "@/components/auth/auth-screen.module.css";

export function LoginFormClient() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [pending, startTransition] = useTransition();

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      email: String(data.get("email") ?? ""),
      password: String(data.get("password") ?? ""),
    };

    setLoading(true);
    startTransition(async () => {
      await submitLoginMock(payload);
      setLoading(false);
      router.push("/home");
    });
  }

  const busy = loading || pending;

  return (
    <MobileAuthShell>
      {busy ? (
        <LoadingDialog title="Входим в аккаунт..." subtitle="Подождите немного" />
      ) : null}
      <form className={screen.formRoot} onSubmit={onSubmit}>
        <div className={screen.body}>
          <h1 className={screen.title}>Вход</h1>
          <div className={screen.fieldStack}>
            <InputField
              label="Email"
              name="email"
              placeholder="Введите email"
              trailing="none"
              inputMode="email"
              autoComplete="email"
              disabled={busy}
            />
            <PasswordField
              label="Пароль"
              name="password"
              placeholder="Введите пароль"
              autoComplete="current-password"
              disabled={busy}
            />
          </div>
          <div className={screen.forgotRow}>
            <Link href="/forgot-password" className={screen.forgotLink}>
              Забыли пароль?
            </Link>
          </div>
          <div className={screen.submitWrap}>
            <button type="submit" className={screen.submitBtn} disabled={busy}>
              Войти
            </button>
          </div>
          <AuthDivider label="или войдите через" variant="login" />
          <div className={screen.oauthRow}>
            <button
              type="button"
              className={screen.oauthBtn}
              disabled={busy}
              aria-label="Google"
            >
              <SocialGoogleIcon />
            </button>
            <button
              type="button"
              className={screen.oauthBtn}
              disabled={busy}
              aria-label="Apple"
            >
              <Image
                src="/icons/auth/apple.svg"
                alt=""
                width={24}
                height={24}
                unoptimized
              />
            </button>
          </div>
        </div>
        <div className={screen.footer}>
          <span className={screen.footerMuted}>Ещё нет аккаунта? </span>
          <Link href="/register" className={screen.footerLink}>
            Зарегистрироваться
          </Link>
        </div>
      </form>
    </MobileAuthShell>
  );
}
