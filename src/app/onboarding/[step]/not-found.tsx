import Link from "next/link";
import styles from "./not-found.module.css";

export default function OnboardingNotFound() {
  return (
    <main className={styles.wrap}>
      <p className={styles.title}>Шаг не найден</p>
      <p className={styles.text}>Проверь адрес или вернись к онбордингу.</p>
      <Link className={styles.link} href="/onboarding/1">
        К первому шагу
      </Link>
    </main>
  );
}
