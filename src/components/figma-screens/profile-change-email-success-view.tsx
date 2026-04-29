/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import typography from "@/design-system/typography.module.css";
import { ProfileFigmaStatusBar } from "@/components/figma-screens/profile-figma-status-bar";
import styles from "./profile-change-email-success-view.module.css";

const HERO = "/icons/figma/a6f906fabfbf13d608bbae6e2b26cd0a9f6b146d.png";

/** Figma 192:4135 — Change email / Successful screen. */
export function ProfileChangeEmailSuccessView() {
  return (
    <div className={styles.root} data-node-id="192:4135">
      <ProfileFigmaStatusBar variant="ios78" className={styles.status} />

      <div className={styles.hero} data-node-id="192:4144">
        <img alt="" src={HERO} />
      </div>

      <div className={styles.copy} data-node-id="192:4137">
        <p className={`${typography.heading3} ${styles.title}`} data-node-id="192:4138">
          Почта изменена!
        </p>
        <p className={styles.desc} data-node-id="192:4139">
          Теперь для входа и уведомлений будет использоваться новый адрес
        </p>
      </div>

      <Link href="/profile" className={styles.btn} data-name="Button">
        <p className={`${typography.heading5} ${styles.btnText}`} data-node-id="I192:4162;695:4435">
          Вернуться в профиль
        </p>
      </Link>
    </div>
  );
}
