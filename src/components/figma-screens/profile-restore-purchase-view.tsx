/* eslint-disable @next/next/no-img-element */
import type { ReactNode } from "react";
import Link from "next/link";
import { IconArrowBack } from "@/components/figma-screens/icon-arrow-back";
import { ChevronRightIcon } from "@/components/figma-screens/chevron-right-icon";
import { ProfileFigmaStatusBar } from "@/components/figma-screens/profile-figma-status-bar";
import styles from "./profile-restore-purchase-view.module.css";

const W1 = "/icons/figma/d0db789a5ca293048e53140bcaf4407a42fae4d1.svg";
const W2 = "/icons/figma/9fe5f4d4c510794a6a3d0ab7f5f82dc277c80fd9.svg";
const BOOK = "/icons/figma/ff65a6403604162103c762d4d6b334018e32859c.svg";
const USERS = "/icons/figma/ee355566b8819f8d1dfeab1eed9e8a83ec323e6b.svg";
const HEALTH = "/icons/figma/e610219bbacfc03e8e4f0c5d152c558ee882fb8b.svg";

export type RestorePurchaseBannerVariant = 1 | 2 | 3;

const COPY: Record<
  RestorePurchaseBannerVariant,
  { title: string; desc: ReactNode; progress: ("on" | "off")[] }
> = {
  1: {
    title: "Материалы клуба",
    desc: "Видео, аудио, конспекты, гайды и полезные разборы по женскому здоровью",
    progress: ["on", "off", "off"],
  },
  2: {
    title: "Чат участниц",
    desc: (
      <>
        Общение с участницами, поддержка
        <br />
        и обсуждение тем внутри клуба
      </>
    ),
    progress: ["off", "on", "off"],
  },
  3: {
    title: "Дневник здоровья",
    desc: (
      <>
        Отслеживайте цикл, симптомы и анализы{"\u00a0"}
        <br />
        в одном месте. История под рукой
      </>
    ),
    progress: ["off", "off", "on"],
  },
};

function MaskIcon({ maskClass, src }: { maskClass: string; src: string }) {
  return (
    <div className={styles.iconMask}>
      <div className={maskClass}>
        <img alt="" src={src} className={styles.maskFill} />
      </div>
    </div>
  );
}

interface ProfileRestorePurchaseViewProps {
  variant: RestorePurchaseBannerVariant;
}

/**
 * Figma: 92:27500 (banner 1), 93:28281 (banner 2), 93:28416 (banner 3).
 */
export function ProfileRestorePurchaseView({ variant }: ProfileRestorePurchaseViewProps) {
  const c = COPY[variant];
  const chipClass = variant === 1 ? styles.chipV1 : variant === 2 ? styles.chipV2 : styles.chipV3;

  return (
    <div className={styles.root} data-node-id={variant === 1 ? "92:27500" : variant === 2 ? "93:28281" : "93:28416"}>
      <ProfileFigmaStatusBar variant="ios125" className={styles.status} />

      <header className={styles.head}>
        <IconArrowBack href="/profile/my-purchases/subscription-ended" label="Назад" />
        <h1 className={styles.headTitle}>Подписка</h1>
        <div className={styles.headGhost} aria-hidden />
      </header>

      <div className={`${styles.chip} ${chipClass}`}>
        <p className={styles.chipText}>Клуб · подписка завершена 12.09.2026</p>
      </div>

      <div className={styles.banner}>
        <div className={styles.wave1}>
          <img alt="" src={W1} />
        </div>
        <div className={styles.wave2}>
          <img alt="" src={W2} />
        </div>
        <div className={styles.bannerInner}>
          <p className={styles.bannerTitle}>{c.title}</p>
          <p className={styles.bannerDesc}>{c.desc}</p>
        </div>
        <div className={styles.progress}>
          {c.progress.map((s, i) =>
            s === "on" ? <div key={i} className={styles.segOn} /> : <div key={i} className={styles.segOff} />,
          )}
        </div>
      </div>

      <div className={styles.section}>
        <p className={styles.sectionTitle}>Входит в подписку</p>
        <div className={styles.card}>
          <div className={styles.row}>
            <div className={styles.rowLeft}>
              <MaskIcon maskClass={styles.maskBook} src={BOOK} />
              <p className={styles.rowLabel}>Материалы клуба</p>
            </div>
            <ChevronRightIcon />
          </div>
          <div className={styles.row}>
            <div className={styles.rowLeft}>
              <MaskIcon maskClass={styles.maskUsers} src={USERS} />
              <p className={styles.rowLabel}>Чат участниц</p>
            </div>
            <ChevronRightIcon />
          </div>
          <div className={styles.row}>
            <div className={styles.rowLeft}>
              <MaskIcon maskClass={styles.maskHealth} src={HEALTH} />
              <p className={styles.rowLabel}>Дневник здоровья</p>
            </div>
            <ChevronRightIcon />
          </div>
        </div>
      </div>

      <Link href="/profile" className={styles.btn}>
        <p className={styles.btnText}>Восстановить покупку</p>
      </Link>
    </div>
  );
}
