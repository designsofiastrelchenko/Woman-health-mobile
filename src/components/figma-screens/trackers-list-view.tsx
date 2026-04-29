/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { ProfileFigmaStatusBar } from "@/components/figma-screens/profile-figma-status-bar";
import { ChevronRightIcon } from "@/components/figma-screens/chevron-right-icon";
import { NavigationBar } from "@/components/ui/navigation-bar";
import styles from "./trackers-list-view.module.css";

const STATUS_RIGHT = "/icons/figma/fff8b42c3c4d1c153ff0ab5d627fa1b8b3a7f0fc.svg";

const IMG = {
  cycle: "/icons/figma/7d0d056369ccaded8bbc94d4c00ea9c680b81458.svg",
  dueDate: "/icons/figma/68d389dfad3c30096ed89706f64c93118b2456f8.svg",
  deficit: "/icons/figma/0b9d762af29114272341f36fc8188dc8555dfd98.svg",
  tests: "/icons/figma/6d7cda177f789027678d2ff73ae7a488feed8360.svg",
  checklists: "/icons/figma/976ccd46c3b3b9a97ffd0a859df19d18789ba446.svg",
} as const;

/** Figma 136:9517 — Trackers list. */
export function TrackersListView() {
  return (
    <div className={styles.root} data-node-id="136:9517">
      <ProfileFigmaStatusBar variant="ios125" rightSrc={STATUS_RIGHT} className={styles.status} />

      <header className={styles.head}>
        <h1 className={styles.headTitle}>Трекеры</h1>
        <p className={styles.headSub}>Бесплатные помощники для здоровья</p>
      </header>

      <div className={styles.table}>
        <Link href="/trackers/cycle-calculator" className={styles.row}>
          <div className={styles.rowInner}>
            <div className={`${styles.iconBubble} ${styles.iconBubbleViolet}`}>
              <div className={styles.icon24}>
                <img alt="" src={IMG.cycle} draggable={false} />
              </div>
            </div>
            <div className={styles.rowTextCol}>
              <p className={styles.rowTitle}>Калькулятор цикла</p>
              <p className={styles.rowDesc}>Рассчитай дни цикла, овуляцию и фертильное окно</p>
            </div>
          </div>
          <span className={styles.chevron}>
            <ChevronRightIcon />
          </span>
        </Link>

        <Link href="/trackers/due-date" className={styles.row}>
          <div className={styles.rowInner}>
            <div className={`${styles.iconBubble} ${styles.iconBubbleWarm}`}>
              <div className={styles.icon24}>
                <img alt="" src={IMG.dueDate} draggable={false} />
              </div>
            </div>
            <div className={styles.rowTextCol}>
              <p className={styles.rowTitle}>Расчёт даты родов</p>
              <p className={styles.rowDesc}>Рассчитай предполагаемую дату рождения малыша</p>
            </div>
          </div>
          <span className={styles.chevron}>
            <ChevronRightIcon />
          </span>
        </Link>

        <Link href="/trackers/deficit-calculator" className={styles.row}>
          <div className={styles.rowInner}>
            <div className={`${styles.iconBubble} ${styles.iconBubbleBlue}`}>
              <div className={styles.icon24}>
                <img alt="" src={IMG.deficit} draggable={false} />
              </div>
            </div>
            <div className={styles.rowTextCol}>
              <p className={styles.rowTitle}>Калькулятор дефицитов</p>
              <p className={styles.rowDesc}>Узнай, каких витаминов и минералов тебе не хватает</p>
            </div>
          </div>
          <span className={styles.chevron}>
            <ChevronRightIcon />
          </span>
        </Link>

        <Link href="/trackers/tests" className={styles.row}>
          <div className={styles.rowInner}>
            <div className={`${styles.iconBubble} ${styles.iconBubbleCoral}`}>
              <div className={styles.icon24}>
                <img alt="" src={IMG.tests} draggable={false} />
              </div>
            </div>
            <div className={styles.rowTextCol}>
              <p className={styles.rowTitle}>Тесты</p>
              <p className={styles.rowDesc}>Пройди тесты и узнай о состоянии своего здоровья</p>
            </div>
          </div>
          <span className={styles.chevron}>
            <ChevronRightIcon />
          </span>
        </Link>

        <Link href="/trackers/checklists" className={styles.row}>
          <div className={styles.rowInner}>
            <div className={`${styles.iconBubble} ${styles.iconBubbleGreen}`}>
              <div className={styles.icon24}>
                <img alt="" src={IMG.checklists} draggable={false} />
              </div>
            </div>
            <div className={styles.rowTextCol}>
              <p className={styles.rowTitle}>Чек-листы</p>
              <p className={styles.rowDesc}>Готовые чек-листы для обследований и подготовки к приёму</p>
            </div>
          </div>
          <span className={styles.chevron}>
            <ChevronRightIcon />
          </span>
        </Link>
      </div>

      <NavigationBar active="trackers" className={styles.nav} />
    </div>
  );
}
