"use client";

import typography from "@/design-system/typography.module.css";
import { ProfileFigmaStatusBar } from "@/components/figma-screens/profile-figma-status-bar";
import { IosNumericKeyboard } from "@/components/forgot-password/ios-numeric-keyboard";
import styles from "./profile-change-email-input-code-view.module.css";

/** Figma 192:4024 — Change email / Input code (+ iOS numeric keyboard). */
export function ProfileChangeEmailInputCodeView() {
  return (
    <div className={styles.root} data-node-id="192:4024">
      <ProfileFigmaStatusBar variant="ios78" className={styles.status} />

      <p className={`${typography.heading1} ${styles.title}`} data-node-id="192:4027">
        Проверьте почту
      </p>

      <p className={styles.sub} data-node-id="192:4028">
        <span>Мы отправили код на </span>
        <span className={styles.subStrong}>anna.sokol@yandex.ru</span>
      </p>

      <div className={styles.codeRow} data-name="Code Box">
        <div className={`${styles.cell} ${styles.cellFilled} ${styles.c74}`} data-node-id="192:4030">
          <p className={styles.digit} data-node-id="192:4031">
            8
          </p>
        </div>
        <div className={`${styles.cell} ${styles.cellFilled} ${styles.c74}`} data-node-id="192:4032">
          <p className={styles.digit} data-node-id="192:4033">
            2
          </p>
        </div>
        <div className={`${styles.cell} ${styles.cellFilled} ${styles.c73}`} data-node-id="192:4034">
          <p className={styles.digit} data-node-id="192:4035">
            1
          </p>
        </div>
        <div className={`${styles.cell} ${styles.cellEmpty} ${styles.c74}`} data-node-id="192:4036" />
      </div>

      <div className={styles.btn} data-name="Button" role="presentation">
        <p className={`${typography.heading5} ${styles.btnText}`} data-node-id="I192:4037;695:4435">
          Подтвердить
        </p>
      </div>

      <p className={styles.resend} data-node-id="192:4026">
        <span className={styles.resendMed}>Отправить код повторно через </span>
        <span className={styles.resendLight}>00:20</span>
      </p>

      <div className={styles.keyboard}>
        <IosNumericKeyboard onDigit={() => {}} onDelete={() => {}} />
      </div>
    </div>
  );
}
