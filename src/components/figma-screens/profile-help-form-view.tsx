import { IconArrowBack } from "@/components/figma-screens/icon-arrow-back";
import { ProfileFigmaStatusBar } from "@/components/figma-screens/profile-figma-status-bar";
import styles from "./profile-help-form-view.module.css";

/** Figma 91:21109 — Profile Page / Help (форма обращения). */
export function ProfileHelpFormView() {
  return (
    <div className={styles.root} data-node-id="91:21109">
      <ProfileFigmaStatusBar variant="ios125" className={styles.status} />

      <header className={styles.head} data-node-id="91:21111">
        <IconArrowBack href="/profile" label="Назад" />
        <h1 className={styles.headTitle} data-node-id="91:21113">
          Форма обращения
        </h1>
        <div className={styles.headGhost} aria-hidden />
      </header>

      <div className={styles.center} data-node-id="91:21116">
        <div className={styles.textBlock} data-node-id="91:21117">
          <p className={styles.title} data-node-id="91:21118">
            Мы рядом, когда вам{"\n"}нужна помощь
          </p>
          <p className={styles.sub} data-node-id="91:21119">
            <span>Есть вопрос? Напишите нам </span>
            <br />
            <span>на</span>
            <span className={styles.email}> support@shefova.ru</span>
            <br />
            <span>в любое время</span>
          </p>
        </div>
        <div className={styles.buttons} data-node-id="192:4630">
          <a className={styles.btnPrimary} href="mailto:support@shefova.ru" data-node-id="192:4631">
            <span className={styles.btnTextLight} data-node-id="192:4633">
              Поддержка по email
            </span>
          </a>
          <a href="#" className={styles.btnOutline} data-node-id="192:4635">
            <span className={styles.btnTextDark} data-node-id="192:4637">
              Отправить отзыв
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
