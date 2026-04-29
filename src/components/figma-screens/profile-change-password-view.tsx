/* eslint-disable @next/next/no-img-element */
import typography from "@/design-system/typography.module.css";
import { IconArrowBack } from "@/components/figma-screens/icon-arrow-back";
import { ProfileFigmaStatusBar } from "@/components/figma-screens/profile-figma-status-bar";
import styles from "./profile-change-password-view.module.css";

const EYE = {
  a: "/icons/figma/e0a3810d0656006cf5b69ad02f764058b0f295ca.svg",
  b: "/icons/figma/82f9f47b0f4e519323648892ed1026ea4fe292cd.svg",
  c: "/icons/figma/6500e9ae1e4dd029721134248757d2c415c2c0a0.svg",
  d: "/icons/figma/b31f214b7860facca6f9fc2a5b2dd0c307f47630.svg",
  e: "/icons/figma/0bf6c396f2dcfd532b849702e5fdbec0e4b642e6.svg",
} as const;

function EyeOff() {
  return (
    <div className={styles.eye}>
      <span className={styles.eyeSlot} style={{ inset: "33.33% 8.33% 41.67% 8.33%" }}>
        <img alt="" src={EYE.a} style={{ position: "absolute", inset: "-15% -4.5%", width: "100%", height: "100%" }} />
      </span>
      <span className={styles.eyeSlot} style={{ inset: "56.25% 31.25% 33.33% 62.5%" }}>
        <img alt="" src={EYE.b} style={{ position: "absolute", inset: "-36.01% -60.01%", width: "100%", height: "100%" }} />
      </span>
      <span className={styles.eyeSlot} style={{ inset: "45.83% 8.33% 45.83% 83.33%" }}>
        <img alt="" src={EYE.c} style={{ position: "absolute", inset: "-45%", width: "100%", height: "100%" }} />
      </span>
      <span className={styles.eyeSlot} style={{ inset: "45.83% 83.33% 45.83% 8.33%" }}>
        <img alt="" src={EYE.d} style={{ position: "absolute", inset: "-45%", width: "100%", height: "100%" }} />
      </span>
      <span className={styles.eyeSlot} style={{ inset: "56.25% 62.5% 33.33% 31.25%" }}>
        <img alt="" src={EYE.e} style={{ position: "absolute", inset: "-36.01% -60.01%", width: "100%", height: "100%" }} />
      </span>
    </div>
  );
}

/** Figma 92:27232 — Change password. */
export function ProfileChangePasswordView() {
  return (
    <div className={styles.root} data-node-id="92:27232">
      <ProfileFigmaStatusBar variant="ios125" className={styles.status} />
      <header className={styles.head}>
        <IconArrowBack href="/profile/personal-data" label="Назад" />
        <h1 className={`${typography.heading3} ${styles.headTitle}`} data-node-id="92:27236">
          Смена пароля
        </h1>
        <div className={styles.headGhost} aria-hidden />
      </header>

      <div className={styles.block} data-node-id="192:4012">
        <div className={styles.stack} data-node-id="92:27238">
          <div className={styles.field}>
            <p className={`${typography.subhead3} ${styles.label}`} data-node-id="I92:27242;704:2572">
              Текущий пароль
            </p>
            <div className={styles.inputBox}>
              <p className={`${typography.fieldPlaceholder} ${styles.inputText}`} data-node-id="I92:27242;704:2575">
                Ashtu-1nd/q
              </p>
              <div className={styles.eyeEmpty} aria-hidden />
            </div>
          </div>
          <div className={styles.field}>
            <p className={`${typography.subhead3} ${styles.label}`} data-node-id="I92:27308;704:2572">
              Новый пароль
            </p>
            <div className={styles.inputBox}>
              <p className={`${typography.fieldPlaceholder} ${styles.inputText}`} data-node-id="I92:27308;704:2575">
                ************
              </p>
              <EyeOff />
            </div>
          </div>
          <div className={styles.field}>
            <p className={`${typography.subhead3} ${styles.label}`} data-node-id="I92:27322;704:2572">
              Повторите новый пароль
            </p>
            <div className={styles.inputBox}>
              <p className={`${typography.fieldPlaceholder} ${styles.inputText}`} data-node-id="I92:27322;704:2575">
                ************
              </p>
              <EyeOff />
            </div>
          </div>
        </div>
        <div className={styles.btn} data-name="Button" role="presentation">
          <p className={`${typography.heading5} ${styles.btnText}`} data-node-id="I92:27341;695:4435">
            Изменить пароль
          </p>
        </div>
      </div>
    </div>
  );
}
