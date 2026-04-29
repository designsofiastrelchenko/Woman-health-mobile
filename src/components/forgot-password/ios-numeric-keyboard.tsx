"use client";

import Image from "next/image";
import styles from "./ios-numeric-keyboard.module.css";

const KEYS: { digit: string; letters?: string }[] = [
  { digit: "1" },
  { digit: "2", letters: "ABC" },
  { digit: "3", letters: "DEF" },
  { digit: "4", letters: "GHI" },
  { digit: "5", letters: "JKL" },
  { digit: "6", letters: "MNO" },
  { digit: "7", letters: "PQRS" },
  { digit: "8", letters: "TUV" },
  { digit: "9", letters: "WXYZ" },
];

export interface IosNumericKeyboardProps {
  onDigit: (d: string) => void;
  onDelete: () => void;
}

export function IosNumericKeyboard({ onDigit, onDelete }: IosNumericKeyboardProps) {
  return (
    <div className={styles.root}>
      <div className={styles.rows}>
        <div className={styles.row}>
          {KEYS.slice(0, 3).map((k) => (
            <button
              key={k.digit}
              type="button"
              className={styles.key}
              onClick={() => onDigit(k.digit)}
            >
              <span className={styles.keyCap}>
                <span className={styles.keyDigit}>{k.digit}</span>
                {k.letters ? (
                  <span className={styles.keyLetters}>{k.letters}</span>
                ) : null}
              </span>
            </button>
          ))}
        </div>
        <div className={styles.row}>
          {KEYS.slice(3, 6).map((k) => (
            <button
              key={k.digit}
              type="button"
              className={styles.key}
              onClick={() => onDigit(k.digit)}
            >
              <span className={styles.keyCap}>
                <span className={styles.keyDigit}>{k.digit}</span>
                <span className={styles.keyLetters}>{k.letters}</span>
              </span>
            </button>
          ))}
        </div>
        <div className={styles.row}>
          {KEYS.slice(6, 9).map((k) => (
            <button
              key={k.digit}
              type="button"
              className={styles.key}
              onClick={() => onDigit(k.digit)}
            >
              <span className={styles.keyCap}>
                <span className={styles.keyDigit}>{k.digit}</span>
                <span className={styles.keyLetters}>{k.letters}</span>
              </span>
            </button>
          ))}
        </div>
        <div className={styles.row}>
          <div className={`${styles.key} ${styles.keyBlank}`} aria-hidden>
            <span className={styles.keyCap} />
          </div>
          <button type="button" className={styles.key} onClick={() => onDigit("0")}>
            <span className={styles.keyCap}>
              <span className={styles.keyDigit}>0</span>
            </span>
          </button>
          <button type="button" className={`${styles.key} ${styles.keyDelete}`} onClick={onDelete}>
            <span className={styles.keyCap}>
              <Image
                src="/icons/keyboard/8ea3bde116268d95b9883516e0e9b4a08e3712e3.svg"
                alt=""
                width={33}
                height={25}
                unoptimized
              />
            </span>
          </button>
        </div>
      </div>
      <div className={styles.homeBar} aria-hidden />
    </div>
  );
}
