"use client";

import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { IosNumericKeyboard } from "./ios-numeric-keyboard";
import fp from "./forgot-password.module.css";

const MOCK_EMAIL_KEY = "wh-forgot-email";
const FIGMA_FALLBACK_EMAIL = "anna.2947@gmail.com";
const LEN = 4;

function formatMmSs(total: number) {
  const m = Math.floor(total / 60);
  const s = total % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

export function ForgotInputCodeClient() {
  const router = useRouter();
  const [email, setEmail] = useState(FIGMA_FALLBACK_EMAIL);
  const [digits, setDigits] = useState<string[]>(["8", "2", "1", ""]);
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

  const onDigit = useCallback((d: string) => {
    setDigits((prev) => {
      const i = prev.findIndex((c) => c === "");
      if (i === -1) return prev;
      const next = [...prev];
      next[i] = d;
      return next;
    });
  }, []);

  const onDelete = useCallback(() => {
    setDigits((prev) => {
      const lastFilled = [...prev].map((c, idx) => (c !== "" ? idx : -1)).filter((i) => i >= 0);
      const idx = lastFilled.length ? lastFilled[lastFilled.length - 1] : -1;
      if (idx < 0) return prev;
      const next = [...prev];
      next[idx] = "";
      return next;
    });
  }, []);

  return (
    <div className={`${fp.frame} ${fp.frameInputCode}`}>
      <h1 className={fp.titleCheckMail}>Проверьте почту</h1>
      <p className={fp.subCheckMail}>
        Мы отправили код на <span className={fp.subCheckMailStrong}>{email}</span>
      </p>
      <div className={fp.codeRow} role="group" aria-label="Код из 4 цифр">
        {Array.from({ length: LEN }, (_, i) => {
          const ch = digits[i] ?? "";
          const filled = ch !== "";
          return (
            <div
              key={i}
              className={`${fp.codeCell} ${filled ? fp.codeCellFilled : ""}`}
            >
              {ch}
            </div>
          );
        })}
      </div>
      <button
        type="button"
        className={fp.btnConfirmPrimary}
        onClick={() => router.push("/forgot-password/reset")}
      >
        Подтвердить
      </button>
      <p className={fp.timerLine}>
        Отправить код повторно через {formatMmSs(seconds)}
      </p>
      <div className={fp.keyboardSlot}>
        <IosNumericKeyboard onDigit={onDigit} onDelete={onDelete} />
      </div>
    </div>
  );
}
