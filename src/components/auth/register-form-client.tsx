"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition, type FormEvent } from "react";
import Link from "next/link";
import type { RegisterStepDefinition } from "@/lib/types/auth-forms";
import { submitRegisterStepMock } from "@/lib/api-mock/auth-forms";
import { MobileAuthShell } from "@/components/auth/mobile-auth-shell";
import { InputField } from "@/components/ui/input-field";
import { PasswordField } from "@/components/auth/password-field";
import { AuthDivider } from "@/components/auth/auth-divider";
import { CheckboxConsent } from "@/components/auth/checkbox-consent";
import { LoadingDialog } from "@/components/auth/loading-dialog";
import { SocialGoogleIcon } from "@/components/auth/social-google-icon";
import Image from "next/image";
import screen from "@/components/auth/auth-screen.module.css";

interface RegisterFormClientProps {
  definition: RegisterStepDefinition;
  step: number;
  afterSuccessPath: string;
}

export function RegisterFormClient({
  definition,
  step,
  afterSuccessPath,
}: RegisterFormClientProps) {
  const router = useRouter();
  const [consent, setConsent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [pending, startTransition] = useTransition();

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!consent) {
      return;
    }
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload: Record<string, string> = {};
    definition.fields.forEach((f) => {
      payload[f.name] = String(data.get(f.name) ?? "");
    });

    setLoading(true);
    startTransition(async () => {
      await submitRegisterStepMock(step, payload);
      setLoading(false);
      router.push(afterSuccessPath);
    });
  }

  const busy = loading || pending;

  return (
    <MobileAuthShell>
      {busy ? (
        <LoadingDialog
          title={step === 1 ? "Создаём аккаунт..." : "Сохраняем профиль..."}
          subtitle="Подождите немного"
        />
      ) : null}
      <form className={screen.formRoot} onSubmit={onSubmit}>
        <div className={screen.body}>
          <h1 className={screen.title}>{definition.title}</h1>
          <div className={screen.fieldStack}>
            {definition.fields.map((field) =>
              field.kind === "password" ? (
                <PasswordField
                  key={field.name}
                  label={field.label}
                  name={field.name}
                  placeholder={field.placeholder}
                  disabled={busy}
                />
              ) : (
                <InputField
                  key={field.name}
                  label={field.label}
                  name={field.name}
                  placeholder={field.placeholder}
                  trailing="none"
                  inputMode={field.kind === "email" ? "email" : "text"}
                  autoComplete={field.kind === "email" ? "email" : "name"}
                  disabled={busy}
                />
              )
            )}
          </div>
          <div className={screen.submitWrap}>
            <button type="submit" className={screen.submitBtn} disabled={busy || !consent}>
              {definition.submitLabel}
            </button>
          </div>
          <AuthDivider label="или продолжить с" />
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
          <div className={screen.checkboxRow}>
            <CheckboxConsent checked={consent} onChange={setConsent} disabled={busy} />
          </div>
        </div>
        <div className={screen.footer}>
          <span className={screen.footerMutedGrey}>Уже есть аккаунт? </span>
          <Link href="/login" className={screen.footerLink}>
            Войти
          </Link>
        </div>
      </form>
    </MobileAuthShell>
  );
}
