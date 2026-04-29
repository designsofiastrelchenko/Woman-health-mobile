import typography from "@/design-system/typography.module.css";
import { ProfileFigmaStatusBar } from "@/components/figma-screens/profile-figma-status-bar";
import styles from "./profile-change-email-send-code-view.module.css";

/** Figma 192:4013 — Change email / Send code. */
export function ProfileChangeEmailSendCodeView() {
  return (
    <div className={styles.root} data-node-id="192:4013">
      <ProfileFigmaStatusBar variant="ios78" className={styles.status} />

      <p className={`${typography.heading1} ${styles.title}`} data-node-id="192:4016">
        Проверьте почту
      </p>

      <p className={styles.sub} data-node-id="192:4017">
        <span>Мы отправили </span>
        <span style={{ fontWeight: 500 }}>код</span>
        <span> на </span>
        <span className={styles.subStrong}>anna.2947@gmail.com</span>
      </p>

      <div className={styles.codeRow} data-name="Code Box">
        <div className={`${styles.cell} ${styles.c74}`} data-node-id="192:4019" />
        <div className={`${styles.cell} ${styles.c74}`} data-node-id="192:4020" />
        <div className={`${styles.cell} ${styles.c73}`} data-node-id="192:4021" />
        <div className={`${styles.cell} ${styles.c74}`} data-node-id="192:4022" />
      </div>

      <div className={styles.btn} data-name="Button" role="presentation">
        <p className={`${typography.heading5} ${styles.btnText}`} data-node-id="I192:4023;696:4538">
          Подтвердить
        </p>
      </div>

      <p className={styles.resend} data-node-id="192:4015">
        <span className={styles.resendMed}>Отправить код повторно через </span>
        <span className={styles.resendLight}>00:20</span>
      </p>
    </div>
  );
}
