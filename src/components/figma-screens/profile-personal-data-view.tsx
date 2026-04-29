/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import typography from "@/design-system/typography.module.css";
import { IconArrowBack } from "@/components/figma-screens/icon-arrow-back";
import { ProfileFigmaStatusBar } from "@/components/figma-screens/profile-figma-status-bar";
import styles from "./profile-personal-data-view.module.css";

const IMG = {
  profile: "/icons/figma/d7782ac90c81a41ce9f2a97569e452e11b2e2e1f.png",
  profileTop: "/icons/figma/943898faecd477f7d486f17373ff66441ae92315.png",
  p1: "/icons/figma/de3828066d780e104262689f7d14316d83b58560.svg",
  p2: "/icons/figma/6dad0ace45f5063169882be88fc90f87227ed0ec.svg",
  p3: "/icons/figma/9b16410efb0b00b71a01871fc35fd943c7380cde.svg",
  eye1: "/icons/figma/e0a3810d0656006cf5b69ad02f764058b0f295ca.svg",
  eye2: "/icons/figma/82f9f47b0f4e519323648892ed1026ea4fe292cd.svg",
  eye3: "/icons/figma/6500e9ae1e4dd029721134248757d2c415c2c0a0.svg",
  eye4: "/icons/figma/b31f214b7860facca6f9fc2a5b2dd0c307f47630.svg",
  eye5: "/icons/figma/0bf6c396f2dcfd532b849702e5fdbec0e4b642e6.svg",
} as const;

function PencilIcon() {
  return (
    <div className={styles.editInner}>
      <span className={styles.vecAbs} style={{ inset: "8.33%" }}>
        <img alt="" src={IMG.p1} style={{ position: "absolute", inset: "-5.62% -5.63% -5.63% -5.62%", width: "100%", height: "100%" }} />
      </span>
      <span className={styles.vecAbs} style={{ inset: "16.67% 16.67% 54.17% 54.17%" }}>
        <img alt="" src={IMG.p2} style={{ position: "absolute", inset: "-11.36%", width: "100%", height: "100%" }} />
      </span>
      <span className={styles.vecAbs} style={{ inset: "91.67% 8.33% 8.33% 58.33%" }}>
        <img alt="" src={IMG.p3} style={{ position: "absolute", inset: "-0.75px -14.06%", width: "100%", height: "100%" }} />
      </span>
    </div>
  );
}

function EyeOffIcon() {
  return (
    <div className={styles.eye}>
      <span className={styles.vecAbs} style={{ inset: "33.33% 8.33% 41.67% 8.33%" }}>
        <img alt="" src={IMG.eye1} style={{ position: "absolute", inset: "-15% -4.5%", width: "100%", height: "100%" }} />
      </span>
      <span className={styles.vecAbs} style={{ inset: "56.25% 31.25% 33.33% 62.5%" }}>
        <img alt="" src={IMG.eye2} style={{ position: "absolute", inset: "-36.01% -60.01%", width: "100%", height: "100%" }} />
      </span>
      <span className={styles.vecAbs} style={{ inset: "45.83% 8.33% 45.83% 83.33%" }}>
        <img alt="" src={IMG.eye3} style={{ position: "absolute", inset: "-45%", width: "100%", height: "100%" }} />
      </span>
      <span className={styles.vecAbs} style={{ inset: "45.83% 83.33% 45.83% 8.33%" }}>
        <img alt="" src={IMG.eye4} style={{ position: "absolute", inset: "-45%", width: "100%", height: "100%" }} />
      </span>
      <span className={styles.vecAbs} style={{ inset: "56.25% 62.5% 33.33% 31.25%" }}>
        <img alt="" src={IMG.eye5} style={{ position: "absolute", inset: "-36.01% -60.01%", width: "100%", height: "100%" }} />
      </span>
    </div>
  );
}

/** Figma 91:21122 — Profile Page / Personal Data. */
export function ProfilePersonalDataView() {
  return (
    <div className={styles.root} data-node-id="91:21122">
      <ProfileFigmaStatusBar variant="ios125" className={styles.status} />

      <header className={styles.head} data-name="Head">
        <IconArrowBack href="/profile" label="Назад" />
        <h1 className={`${typography.heading3} ${styles.headTitle}`} data-node-id="91:21126">
          Личные данные
        </h1>
        <div className={styles.headGhost} aria-hidden />
      </header>

      <div className={styles.avatarWrap} data-name="Profile">
        <div className={styles.avatarLayers} aria-hidden>
          <img alt="" className={styles.avatarBase} src={IMG.profile} />
          <div className={styles.avatarOverlay}>
            <img alt="" className={styles.avatarOverlayImg} src={IMG.profileTop} />
          </div>
        </div>
        <div className={styles.editBadge} data-name="icon">
          <PencilIcon />
        </div>
      </div>

      <div className={styles.nameBlock} data-name="Name and email">
        <p className={`${typography.heading4} ${styles.nameTitle}`} data-node-id="91:21136">
          Анна Соколова
        </p>
        <p className={`${typography.paragraph3} ${styles.nameEmail}`} data-node-id="91:21137">
          anna.2947@gmail.com
        </p>
      </div>

      <div className={styles.fields} data-name="Input Field">
        <div className={styles.field} data-name="Input Field">
          <p className={`${typography.subhead3} ${styles.label}`} data-node-id="I91:21129;704:2591">
            Имя и фамилия
          </p>
          <div className={`${styles.inputBox} ${styles.inputBoxFocus}`} data-name="Input Box">
            <p className={`${typography.fieldPlaceholder} ${styles.inputText}`} data-node-id="I91:21129;704:2595">
              Анна Соколова
            </p>
          </div>
        </div>
        <div className={styles.field}>
          <p className={`${typography.subhead3} ${styles.label}`} data-node-id="I91:21131;704:2572">
            Дата рождения
          </p>
          <div className={styles.inputBox}>
            <p className={`${typography.fieldPlaceholder} ${styles.inputText}`} data-node-id="I91:21131;704:2575">
              25.02.1998
            </p>
          </div>
        </div>
        <div className={styles.field}>
          <p className={`${typography.subhead3} ${styles.label}`} data-node-id="I91:21130;704:2572">
            Email
          </p>
          <div className={styles.inputBox}>
            <p className={`${typography.fieldPlaceholder} ${styles.inputText}`} data-node-id="I91:21130;704:2575">
              anna.2947@gmail.com
            </p>
          </div>
        </div>
        <div className={styles.field}>
          <p className={`${typography.subhead3} ${styles.label}`} data-node-id="I92:26506;704:2572">
            Пароль
          </p>
          <div className={styles.inputBox}>
            <p className={`${typography.fieldPlaceholder} ${styles.inputText}`} data-node-id="I92:26506;704:2575">
              ************
            </p>
            <EyeOffIcon />
          </div>
          <Link href="/profile/personal-data/change-password" className={`${typography.caption3} ${styles.hintLink}`} style={{ color: "#4979fb" }} data-node-id="I92:26506;741:2817">
            Изменить пароль
          </Link>
        </div>
      </div>

      <div className={styles.saveBtn} data-name="Button" role="presentation">
        <p className={`${typography.heading5} ${styles.saveBtnText}`} data-node-id="I192:3786;695:4435">
          Сохранить
        </p>
      </div>
    </div>
  );
}
