/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import typography from "@/design-system/typography.module.css";
import { NavigationBar } from "@/components/ui/navigation-bar";
import { IconArrowBack } from "@/components/figma-screens/icon-arrow-back";
import { ProfileFigmaStatusBar } from "@/components/figma-screens/profile-figma-status-bar";
import styles from "./profile-figma-view.module.css";

const IMG = {
  profile: "/icons/figma/d7782ac90c81a41ce9f2a97569e452e11b2e2e1f.png",
  profileTop: "/icons/figma/943898faecd477f7d486f17373ff66441ae92315.png",
  pencil1: "/icons/figma/de3828066d780e104262689f7d14316d83b58560.svg",
  pencil2: "/icons/figma/6dad0ace45f5063169882be88fc90f87227ed0ec.svg",
  pencil3: "/icons/figma/9b16410efb0b00b71a01871fc35fd943c7380cde.svg",
  star: "/icons/figma/a6c0f68dad3663bf01db24952c7276925d5707a9.svg",
  fire: "/icons/figma/39085ee1c675842ad20dac89efb5aabf4d3584ae.svg",
  check: "/icons/figma/8075f739b8480d81e14ec1fd8cadfe7237526e4d.svg",
  user1: "/icons/figma/1bf074721812c45a24b5c3686f3747fc69272976.svg",
  user2: "/icons/figma/89bfa11d2233b73dbc29d8b30deeaa44658d9df0.svg",
  notif1: "/icons/figma/e74df63ce2d0ce62136eeeaf7591f369bdc87db3.svg",
  notif2: "/icons/figma/b95e394e73d5aae2b44d934b2b64977ecdb3d24e.svg",
  cardFill: "/icons/figma/13af1046684dfeda4f5252adc32e7199d6651b75.svg",
  calFill: "/icons/figma/5e04b3a05a54ab3dbec9b7f033f4f58af3313117.svg",
  globeFill: "/icons/figma/b03b5ea3d0d55c0a6f3e6fe0f345dbd0556fb9ec.svg",
  infoFill: "/icons/figma/1253ef2d0ff088cbd3a56df0f6b1ddf6d48ddee7.svg",
  lifeFill: "/icons/figma/bdcbd0542c5f15e9605d31611eef5f7dc3395fba.svg",
  secFill: "/icons/figma/9c478a967434017e616cfe5e49109ab1a83e18b2.svg",
  switch: "/icons/figma/6e0668302826376eb979c788a76a507bf5836fce.svg",
  chevron: "/icons/figma/dc4508dc1ca821633c49c816fbd159e45cff5484.svg",
  logout1: "/icons/figma/13700e99ea5921f5dbddbcad49fd9ca6e3e38f34.svg",
  logout2: "/icons/figma/e8644324b12ca9a1f47c3366da4513bcd05876b3.svg",
  bagFill: "/icons/figma/5a099156576720eaad3e2dfafb22976bcfc8e5ae.svg",
  fingerFill: "/icons/figma/78e8d95115fe45b9acc45484339d35759768752f.svg",
  padlockFill: "/icons/figma/2c50df8dcb67dc608a3be61f2d45bd7c3f6adabc.svg",
} as const;

function IconUserSquare() {
  return (
    <div className={styles.icon24}>
      <span className={`${styles.vecAbs} ${styles.vecImg}`} style={{ inset: "10.42%" }}>
        <img alt="" src={IMG.user1} className={styles.vecImg} style={{ inset: "-3.95%", position: "absolute" }} />
      </span>
      <span className={`${styles.vecAbs}`} style={{ inset: "29.17% 31.25%" }}>
        <img alt="" src={IMG.user2} className={styles.vecImg} style={{ inset: "-7.5% -8.33%", position: "absolute" }} />
      </span>
    </div>
  );
}

function IconNotificationOff() {
  return (
    <div className={styles.icon24}>
      <span className={`${styles.vecAbs}`} style={{ inset: "8.33% 10.42% 20.83% 10.42%" }}>
        <img alt="" src={IMG.notif1} className={styles.vecImg} style={{ inset: "-4.41% -3.95%", position: "absolute" }} />
      </span>
      <span className={`${styles.vecAbs}`} style={{ inset: "79.17% 33.33% 8.33% 33.33%" }}>
        <img alt="" src={IMG.notif2} className={styles.vecImg} style={{ inset: "-25.01% -9.38%", position: "absolute" }} />
      </span>
    </div>
  );
}

function IconChevronRight() {
  return (
    <div className={styles.chevron}>
      <div className={styles.chevronInner}>
        <img alt="" src={IMG.chevron} style={{ display: "block", width: "100%", height: "100%" }} />
      </div>
    </div>
  );
}

function IconLogout() {
  return (
    <div className={styles.icon24}>
      <span className={`${styles.vecAbs}`} style={{ inset: "22.92% 12.5% 8.33% 12.5%" }}>
        <img alt="" src={IMG.logout1} className={styles.vecImg} style={{ inset: "-4.55% -4.17%", position: "absolute" }} />
      </span>
      <span className={`${styles.vecAbs}`} style={{ bottom: "58.33%", left: "50%", right: "50%", top: "8.33%" }}>
        <img alt="" src={IMG.logout2} className={styles.vecImg} style={{ inset: "-9.38% -0.75px", position: "absolute" }} />
      </span>
    </div>
  );
}

function MaskedIcon({ maskClass, fillSrc }: { maskClass: string; fillSrc: string }) {
  return (
    <div className={styles.masked24}>
      <div className={`${styles.maskedInner} ${maskClass}`}>
        <img alt="" src={fillSrc} className={styles.maskedFill} />
      </div>
    </div>
  );
}

function SwitchFigma() {
  return (
    <div className={styles.switchWrap}>
      <div className={styles.switchInner}>
        <img alt="" src={IMG.switch} style={{ position: "absolute", inset: "-5% -5.56% -15% 0", width: "100%", height: "100%", objectFit: "contain" }} />
      </div>
    </div>
  );
}

export type ProfileFigmaLayout = "default" | "deleteModalChrome";

interface ProfileFigmaViewProps {
  /** Figma 92:24979 / 92:25269 — extended profile list + hidden tab bar (used under modal). */
  layout?: ProfileFigmaLayout;
}

/** Figma node 91:20934 — Profile Page / Profile. */
export function ProfileFigmaView({ layout = "default" }: ProfileFigmaViewProps) {
  const isDeleteChrome = layout === "deleteModalChrome";

  return (
    <div
      className={styles.page}
      data-node-id="91:20934"
      data-layout={isDeleteChrome ? "deleteModalChrome" : undefined}
    >
      <ProfileFigmaStatusBar variant="ios125" className={styles.status} />

      <div className={styles.avatarWrap} data-name="Profile">
        <div className={styles.avatarLayers} aria-hidden>
          <img alt="" className={styles.avatarBase} src={IMG.profile} />
          <div className={styles.avatarOverlay}>
            <img alt="" className={styles.avatarOverlayImg} src={IMG.profileTop} />
          </div>
        </div>
        <div className={styles.editBadge} data-name="icon">
          <div className={styles.editBadgeInner} data-name="icon / pencil">
            <span className={styles.vecAbs} style={{ inset: "8.33%" }}>
              <img alt="" src={IMG.pencil1} className={styles.vecImg} style={{ position: "absolute", inset: "-5.62% -5.63% -5.63% -5.62%" }} />
            </span>
            <span className={styles.vecAbs} style={{ inset: "16.67% 16.67% 54.17% 54.17%" }}>
              <img alt="" src={IMG.pencil2} className={styles.vecImg} style={{ position: "absolute", inset: "-11.36%" }} />
            </span>
            <span className={styles.vecAbs} style={{ inset: "91.67% 8.33% 8.33% 58.33%" }}>
              <img alt="" src={IMG.pencil3} className={styles.vecImg} style={{ position: "absolute", inset: "-0.75px -14.06%" }} />
            </span>
          </div>
        </div>
      </div>

      <header className={styles.head} data-name="Head">
        <div className={styles.headFlip}>
          <IconArrowBack href="/home" label="Назад" />
        </div>
        <p className={`${typography.heading3} ${styles.headTitle}`} data-node-id="91:20941">
          Профиль
        </p>
        <div className={styles.headFlip} aria-hidden>
          <div className={styles.headGhostSlot} />
        </div>
      </header>

      <div className={styles.nameBlock} data-name="Name and email">
        <p className={`${typography.heading4} ${styles.nameTitle}`} data-node-id="91:20944">
          Анна Соколова
        </p>
        <p className={`${typography.paragraph3} ${styles.nameEmail}`} data-node-id="91:20945">
          anna.2947@gmail.com
        </p>
      </div>

      <div className={styles.statusRow} data-name="Profile Status">
        <div className={`${styles.pill} ${styles.pill108}`} data-name="training hour">
          <div className={`${styles.pillIconBg} ${styles.pillIconBgStar}`}>
            <div className={styles.pillIcon16}>
              <img alt="" src={IMG.star} />
            </div>
          </div>
          <div className={styles.pillTexts}>
            <p className={`${typography.heading6} ${styles.pillLine1}`} data-node-id="91:20951">
              Клуб
            </p>
            <p className={`${typography.caption3} ${styles.pillLine2}`} data-node-id="91:20952">
              Здоровье+
            </p>
          </div>
        </div>
        <div className={`${styles.pill} ${styles.pill110}`}>
          <div className={`${styles.pillIconBg} ${styles.pillIconBgFire}`}>
            <div className={styles.pillIcon16}>
              <span className={styles.vecAbs} style={{ inset: "12.5% 20.83%" }}>
                <img alt="" src={IMG.fire} className={styles.vecImg} style={{ position: "absolute", inset: "-5.7% -8.04% -6.25% -8.04%" }} />
              </span>
            </div>
          </div>
          <div className={styles.pillTexts}>
            <p className={`${typography.heading6} ${styles.pillLine1}`} data-node-id="91:20957">
              Подписка
            </p>
            <p className={`${typography.caption3} ${styles.pillLine2}`} data-node-id="91:20958">
              Premium
            </p>
          </div>
        </div>
        <div className={`${styles.pill} ${styles.pill109}`}>
          <div className={`${styles.pillIconBg} ${styles.pillIconBgCheck}`}>
            <div className={styles.pillIcon16}>
              <span className={styles.checkInset}>
                <img alt="" src={IMG.check} className={styles.vecImg} style={{ position: "absolute", inset: 0 }} />
              </span>
            </div>
          </div>
          <div className={styles.pillTexts}>
            <p className={`${typography.heading6} ${styles.pillLine1}`} data-node-id="91:20963">
              Статус
            </p>
            <p className={`${typography.caption3} ${styles.pillLine2}`} data-node-id="91:20964">
              До 12.09.2026
            </p>
          </div>
        </div>
      </div>

      <section className={`${styles.section} ${styles.sectionAccount}`} data-node-id="91:23766">
        <p className={`${typography.heading5} ${styles.sectionTitle}`} data-node-id="91:23767">
          Аккаунт
        </p>
        <div className={styles.card} data-name="Container">
          <Link href="/profile/personal-data" className={styles.rowLink} data-name="Personal Data">
            <div className={styles.rowLeft}>
              <IconUserSquare />
              <p className={styles.rowLabelFigma} data-node-id="91:20969">
                Личные данные
              </p>
            </div>
            <IconChevronRight />
          </Link>
          {isDeleteChrome ? (
            <>
              <Link href="/profile/my-purchases/history" className={styles.rowLink} data-name="Help">
                <div className={styles.rowLeft}>
                  <MaskedIcon maskClass={styles.maskBag} fillSrc={IMG.bagFill} />
                  <p className={styles.rowLabelFigma} data-node-id="92:25024">
                    Мои покупки / доступы
                  </p>
                </div>
                <IconChevronRight />
              </Link>
              <Link href="/profile/my-purchases/subscription" className={styles.rowLink} data-name="Delete Account">
                <div className={styles.rowLeft}>
                  <MaskedIcon maskClass={styles.maskCard} fillSrc={IMG.cardFill} />
                  <p className={styles.rowLabelFigma} data-node-id="92:25029">
                    Подписка
                  </p>
                </div>
                <IconChevronRight />
              </Link>
            </>
          ) : (
            <Link href="/profile/my-purchases/subscription" className={styles.rowLink} data-name="My purchases">
              <div className={styles.rowLeft}>
                <MaskedIcon maskClass={styles.maskCard} fillSrc={IMG.cardFill} />
                <p className={styles.rowLabelFigma} data-node-id="91:20979">
                  Мои покупки
                </p>
              </div>
              <IconChevronRight />
            </Link>
          )}
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionNotify}`} data-node-id="91:23799">
        <p className={`${typography.heading5} ${styles.sectionTitle}`} data-node-id="91:23800">
          Уведомления
        </p>
        <div className={styles.card} data-name="Container">
          <div className={`${styles.row} ${styles.rowTight}`} data-name="Personal Data">
            <div className={styles.rowLeft}>
              <IconNotificationOff />
              <p className={styles.rowLabelFigma} data-node-id="91:23805">
                Push-уведомления
              </p>
            </div>
            <SwitchFigma />
          </div>
          <div className={`${styles.row} ${styles.rowTight}`} data-name="Help">
            <div className={styles.rowLeft}>
              <MaskedIcon maskClass={styles.maskCal} fillSrc={IMG.calFill} />
              <p className={styles.rowLabelFigma} data-node-id="91:23810">
                Консультации
              </p>
            </div>
            <SwitchFigma />
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionApp}`} data-node-id="91:23829">
        <p className={`${typography.heading5} ${styles.sectionTitle}`} data-node-id="91:23830">
          Настройки приложения
        </p>
        <div className={`${styles.card} ${isDeleteChrome ? "" : styles.cardNoGap32}`} data-name="Container">
          <Link href="/profile/language" className={styles.rowLink} data-name="Language">
            <div className={styles.rowLeft}>
              <MaskedIcon maskClass={styles.maskGlobe} fillSrc={IMG.globeFill} />
              <p className={styles.rowLabelFigma} data-node-id="91:23835">
                Язык
              </p>
            </div>
            <IconChevronRight />
          </Link>
          {isDeleteChrome ? (
            <div className={`${styles.row} ${styles.rowTight}`} data-name="Help">
              <div className={styles.rowLeft}>
                <MaskedIcon maskClass={styles.maskFinger} fillSrc={IMG.fingerFill} />
                <p className={styles.rowLabelFigma} data-node-id="92:25085">
                  Face ID / Touch ID
                </p>
              </div>
              <SwitchFigma />
            </div>
          ) : null}
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionSupport}`} data-node-id="91:23907">
        <p className={`${typography.heading5} ${styles.sectionTitle}`} data-node-id="91:23908">
          Поддержка
        </p>
        <div className={styles.card} data-name="Container">
          <Link href="/profile/faq" className={styles.rowLink} data-name="Personal Data">
            <div className={styles.rowLeft}>
              <MaskedIcon maskClass={styles.maskInfo} fillSrc={IMG.infoFill} />
              <p className={styles.rowLabelFigma} data-node-id={isDeleteChrome ? "92:25100" : "91:23913"}>
                FAQ
              </p>
            </div>
            <IconChevronRight />
          </Link>
          <Link href="/profile/help" className={styles.rowLink} data-name="Help">
            <div className={styles.rowLeft}>
              <MaskedIcon maskClass={styles.maskLife} fillSrc={IMG.lifeFill} />
              <p className={styles.rowLabelFigma} data-node-id={isDeleteChrome ? "92:25115" : "91:23918"}>
                Форма обращения
              </p>
            </div>
            <IconChevronRight />
          </Link>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAbout}`} data-node-id="91:23937">
        <p className={`${typography.heading5} ${styles.sectionTitle}`} data-node-id="91:23938">
          О приложении
        </p>
        <div className={styles.card} data-name="Container">
          <div className={styles.row} data-name="Personal Data">
            <div className={styles.rowLeft}>
              <IconUserSquare />
              <p className={styles.rowLabelFigma} data-node-id="91:23943">
                Версия
              </p>
            </div>
            <p className={`${typography.caption3} ${styles.versionText}`} data-node-id="92:26520">
              1.0.3
            </p>
          </div>
          <div className={styles.row} data-name="Help">
            <div className={styles.rowLeft}>
              <MaskedIcon maskClass={styles.maskSec} fillSrc={IMG.secFill} />
              <p className={styles.rowLabelFigma} data-node-id="91:23948">
                Защита данных
              </p>
            </div>
            <IconChevronRight />
          </div>
          {isDeleteChrome ? (
            <div className={styles.row} data-name="Personal Data">
              <div className={styles.rowLeft}>
                <MaskedIcon maskClass={styles.maskPadlock} fillSrc={IMG.padlockFill} />
                <p className={styles.rowLabelFigma} data-node-id="92:25145">
                  Пароль, сессии
                </p>
              </div>
              <IconChevronRight />
            </div>
          ) : null}
        </div>
      </section>

      <div className={styles.logoutCard} data-name="Container">
        <Link href="/profile/logout-confirm" className={`${styles.row} ${styles.rowLink}`} data-name="Log out">
          <div className={styles.rowLeft}>
            <IconLogout />
            <p className={styles.logoutLabel} data-node-id="91:23980">
              Выйти
            </p>
          </div>
          <IconChevronRight />
        </Link>
      </div>

      <NavigationBar active="profile" className={styles.nav} />
    </div>
  );
}
