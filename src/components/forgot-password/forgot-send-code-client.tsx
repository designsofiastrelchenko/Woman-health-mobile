"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import fp from "./forgot-password.module.css";

const MOCK_EMAIL_KEY = "wh-forgot-email";
const FIGMA_FALLBACK_EMAIL = "anna.2947@gmail.com";

function formatMmSs(total: number) {
  const m = Math.floor(total / 60);
  const s = total % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

export function ForgotSendCodeClient() {
  const router = useRouter();
  const [email, setEmail] = useState(FIGMA_FALLBACK_EMAIL);
  const [seconds, setSeconds] = useState(20);

  useEffect(() => {
    queueMicrotask(() => {
      try {
        const v = sessionStorage.getItem(MOCK_EMAIL_KEY);
        if (v) setEmail(v);
      } catch {
        void 0;
      }
    });
  }, []);

  useEffect(() => {
    const t = window.setInterval(() => {
      setSeconds((s) => (s > 0 ? s - 1 : 0));
    }, 1000);
    return () => window.clearInterval(t);
  }, []);

  return (
    <div className={fp.frame}>
      <h1 className={fp.titleCheckMail}>Проверьте почту</h1>
      <p className={fp.subCheckMail}>
        Мы отправили код на <span className={fp.subCheckMailStrong}>{email}</span>
      </p>
      <div className={fp.codeRow} aria-hidden>
        <div className={fp.codeCell} />
        <div className={fp.codeCell} />
        <div className={fp.codeCell} />
        <div className={fp.codeCell} />
      </div>
      <button
        type="button"
        className={fp.btnConfirmMid}
        onClick={() => router.push("/forgot-password/input-code")}
      >
        Подтвердить
      </button>
      <p className={fp.timerLine}>
        Отправить код повторно через {formatMmSs(seconds)}
      </p>
    </div>
  );
}
