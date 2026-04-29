import Link from "next/link";
import styles from "./home.module.css";

export default function HomePrototypePage() {
  return (
    <main className={styles.wrap}>
      <p className={styles.badge}>Прототип</p>
      <h1 className={styles.title}>Главный экран</h1>
      <p className={styles.text}>
        Здесь позже появится настоящий контент приложения. Сейчас это заглушка
        после онбординга.
      </p>
      <Link className={styles.link} href="/onboarding/1">
        Снова показать онбординг
      </Link>
    </main>
  );
}
