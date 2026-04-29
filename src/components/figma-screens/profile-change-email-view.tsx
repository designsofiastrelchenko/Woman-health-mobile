import Link from "next/link";
import typography from "@/design-system/typography.module.css";
import { IconArrowBack } from "@/components/figma-screens/icon-arrow-back";
import { ProfileFigmaStatusBar } from "@/components/figma-screens/profile-figma-status-bar";
import styles from "./profile-change-email-view.module.css";

/** Figma 192:3929 — Change email. */
export function ProfileChangeEmailView() {
  return (
    <div className={styles.root} data-node-id="192:3929">
      <ProfileFigmaStatusBar variant="ios125" className={styles.status} />
      <header className={styles.head}>
        <IconArrowBack href="/profile/personal-data" label="Назад" />
        <h1 className={`${typography.heading3} ${styles.headTitle}`} data-node-id="192:3933">
          Смена почты
        </h1>
        <div className={styles.headGhost} aria-hidden />
      </header>

      <p className={styles.currentLine} data-node-id="192:3999">
        <span>Текущая почта: </span>
        <span className={styles.currentDark}>anna.2947@gmail.com</span>
      </p>

      <div className={styles.form} data-node-id="192:4009">
        <div className={styles.field}>
          <p className={`${typography.subhead3} ${styles.label}`} data-node-id="I192:3936;704:2572">
            Новая почта
          </p>
          <div className={styles.inputBox}>
            <p className={`${typography.fieldPlaceholder} ${styles.inputText}`} data-node-id="I192:3936;704:2575">
              anna.sokol@yandex.ru
            </p>
            <div className={styles.eyeSpacer} aria-hidden />
          </div>
        </div>
        <Link
          href="/profile/personal-data/change-email/send-code"
          className={styles.btn}
          data-name="Button"
        >
          <p className={`${typography.heading5} ${styles.btnText}`} data-node-id="I192:3939;695:4435">
            Отправить код
          </p>
        </Link>
      </div>
    </div>
  );
}
