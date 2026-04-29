import typography from "@/design-system/typography.module.css";
import { IconArrowBack } from "@/components/figma-screens/icon-arrow-back";
import { ProfileFigmaStatusBar } from "@/components/figma-screens/profile-figma-status-bar";
import styles from "./profile-language-view.module.css";

/** Figma 92:27119 — Language. */
export function ProfileLanguageView() {
  return (
    <div className={styles.root} data-node-id="92:27119">
      <ProfileFigmaStatusBar variant="ios125" className={styles.status} />

      <header className={styles.head}>
        <IconArrowBack href="/profile" label="Назад" />
        <h1 className={`${typography.heading3} ${styles.headTitle}`} data-node-id="92:27123">
          Язык
        </h1>
        <div className={styles.headGhost} aria-hidden />
      </header>

      <div className={`${styles.field} ${styles.f1}`} data-node-id="92:27197">
        <div className={`${styles.inputBox} ${styles.inputBoxActive}`} data-node-id="I92:27197;704:2592">
          <p className={styles.inputText} data-node-id="I92:27197;704:2595">
            Русский
          </p>
          <div className={styles.spacer20} aria-hidden />
        </div>
      </div>

      <div className={`${styles.field} ${styles.f2}`} data-node-id="92:27206">
        <div className={styles.inputBox} data-node-id="I92:27206;704:2573">
          <p className={styles.inputText} data-node-id="I92:27206;704:2575">
            English
          </p>
          <div className={styles.spacer20} aria-hidden />
        </div>
      </div>

      <div className={`${styles.field} ${styles.f3}`} data-node-id="92:27215">
        <div className={styles.inputBox} data-node-id="I92:27215;704:2573">
          <p className={styles.inputText} data-node-id="I92:27215;704:2575">
            العربية
          </p>
          <div className={styles.spacer20} aria-hidden />
        </div>
      </div>
    </div>
  );
}
