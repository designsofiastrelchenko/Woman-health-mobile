import Link from "next/link";
import { ChevronRightIcon } from "@/components/figma-screens/chevron-right-icon";
import { IconArrowBack } from "@/components/figma-screens/icon-arrow-back";
import { ProfileFigmaStatusBar } from "@/components/figma-screens/profile-figma-status-bar";
import styles from "./trackers-checklists-view.module.css";

const STATUS_RIGHT = "/icons/figma/7583d06de40229752e21156f8a542c09e9ffb2ce.svg";

/** Figma 170:14188 — Trackers / Checklists. */
export function TrackersChecklistsView() {
  return (
    <div className={styles.root} data-node-id="170:14188">
      <ProfileFigmaStatusBar variant="ios125" rightSrc={STATUS_RIGHT} className={styles.status} />

      <header className={styles.header} data-node-id="170:14190">
        <IconArrowBack href="/trackers" label="К трекерам" />
        <h1 className={styles.headerTitle} data-node-id="I170:14190;568:1596">
          Чек-листы
        </h1>
        <div className={styles.headerGhost} aria-hidden data-node-id="I170:14190;568:1597" />
      </header>

      <Link href="/trackers/checklists/annual-exam" className={`${styles.card} ${styles.card1}`} data-node-id="170:14678">
        <div className={styles.cardInner} data-node-id="170:14679">
          <div className={styles.textCol} data-node-id="170:14680">
            <p className={styles.title} data-node-id="170:14681">
              Ежегодный осмотр гинеколога
            </p>
            <p className={styles.desc} data-node-id="170:14683">
              Полный список обследований{"\n"}
              для профилактического приёма
            </p>
            <p className={styles.meta} data-node-id="170:14685">
              12 пунктов
            </p>
          </div>
        </div>
        <span className={styles.chevron}>
          <ChevronRightIcon />
        </span>
      </Link>

      <Link href="/trackers/checklists" className={`${styles.card} ${styles.card2}`} data-node-id="170:14715">
        <div className={styles.cardInner} data-node-id="170:14716">
          <div className={styles.textCol} data-node-id="170:14717">
            <p className={styles.title} data-node-id="170:14718">
              Первый приём гинеколога
            </p>
            <p className={styles.desc} data-node-id="170:14720">
              Что взять и как подготовиться{"\n"}к первому визиту
            </p>
            <p className={styles.meta} data-node-id="170:14721">
              9 пунктов
            </p>
          </div>
        </div>
        <span className={styles.chevron}>
          <ChevronRightIcon />
        </span>
      </Link>

      <Link href="/trackers/checklists" className={`${styles.card} ${styles.card3}`} data-node-id="170:14724">
        <div className={styles.cardInner} data-node-id="170:14725">
          <div className={styles.textCol} data-node-id="170:14726">
            <p className={styles.title} data-node-id="170:14727">
              Планирование беременности
            </p>
            <p className={styles.desc} data-node-id="170:14729">
              Анализы и обследования до зачатия
            </p>
            <p className={styles.meta} data-node-id="170:14730">
              14 пунктов
            </p>
          </div>
        </div>
        <span className={styles.chevron}>
          <ChevronRightIcon />
        </span>
      </Link>

      <Link href="/trackers/checklists" className={`${styles.card} ${styles.card4}`} data-node-id="170:14732">
        <div className={styles.cardInner} data-node-id="170:14733">
          <div className={styles.textCol} data-node-id="170:14734">
            <p className={styles.title} data-node-id="170:14735">
              Базовый набор анализов
            </p>
            <p className={styles.desc} data-node-id="170:14737">
              Минимальный чек-лист анализов{"\n"}
              для ежегодного контроля
            </p>
            <p className={styles.meta} data-node-id="170:14738">
              10 пунктов
            </p>
          </div>
        </div>
        <span className={styles.chevron}>
          <ChevronRightIcon />
        </span>
      </Link>

      <Link href="/trackers/checklists" className={`${styles.card} ${styles.card5}`} data-node-id="170:14742">
        <div className={styles.cardInner} data-node-id="170:14743">
          <div className={styles.textCol} data-node-id="170:14744">
            <p className={styles.title} data-node-id="170:14745">
              Послеродовой уход
            </p>
            <p className={styles.desc} data-node-id="170:14747">
              Важные шаги для восстановления после родов
            </p>
            <p className={styles.meta} data-node-id="170:14748">
              11 пунктов
            </p>
          </div>
        </div>
        <span className={styles.chevron}>
          <ChevronRightIcon />
        </span>
      </Link>
    </div>
  );
}
