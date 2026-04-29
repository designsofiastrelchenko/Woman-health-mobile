import { IconArrowBack } from "@/components/figma-screens/icon-arrow-back";
import { ProfileFigmaStatusBar } from "@/components/figma-screens/profile-figma-status-bar";
import Link from "next/link";
import styles from "./deficit-calculator-step2-view.module.css";

const STATUS_RIGHT = "/icons/figma/fff8b42c3c4d1c153ff0ab5d627fa1b8b3a7f0fc.svg";

/** Figma 169:11241 — Deficit calculator / Step 2. */
export function DeficitCalculatorStep2View() {
  return (
    <div className={styles.root} data-node-id="169:11241">
      <ProfileFigmaStatusBar variant="ios125" rightSrc={STATUS_RIGHT} className={styles.status} />

      <header className={styles.header} data-node-id="169:11318">
        <IconArrowBack href="/trackers/deficit-calculator" label="Назад" />
        <h1 className={styles.headerTitle} data-node-id="I169:11318;568:1596">
          Калькулятор дефицитов
        </h1>
        <div className={styles.headerGhost} aria-hidden data-node-id="I169:11318;568:1597" />
      </header>

      <div className={`${styles.block} ${styles.b1}`} data-node-id="169:11467">
        <p className={styles.q} data-node-id="169:11469">
          Регулярно едите красное мясо?
        </p>
        <div className={styles.pair} data-node-id="169:11486">
          <button type="button" className={styles.btnFill} data-node-id="169:11538">
            <span data-node-id="I169:11538;85:17543">Да, часто</span>
          </button>
          <button type="button" className={styles.btnOutline} data-node-id="169:11539">
            <span data-node-id="I169:11539;85:17559">Редко или нет</span>
          </button>
        </div>
      </div>

      <div className={`${styles.block} ${styles.b2}`} data-node-id="169:11547">
        <p className={styles.q} data-node-id="169:11549">
          Употребляете молочные продукты?
        </p>
        <div className={styles.pair} data-node-id="169:11551">
          <button type="button" className={styles.btnFill} data-node-id="169:11552">
            <span data-node-id="I169:11552;85:17543">Да, часто</span>
          </button>
          <button type="button" className={styles.btnOutline} data-node-id="169:11553">
            <span data-node-id="I169:11553;85:17559">Редко или нет</span>
          </button>
        </div>
      </div>

      <div className={`${styles.block} ${styles.b3}`} data-node-id="169:11560">
        <p className={styles.q} data-node-id="169:11562">
          Бываете на солнце более 30 мин/день?
        </p>
        <div className={styles.pair} data-node-id="169:11564">
          <button type="button" className={styles.btnOutline} data-node-id="169:11566">
            <span data-node-id="I169:11566;85:17559">Да, часто</span>
          </button>
          <button type="button" className={styles.btnFill} data-node-id="169:11565">
            <span data-node-id="I169:11565;85:17543">Редко или нет</span>
          </button>
        </div>
      </div>

      <div className={`${styles.block} ${styles.b4}`} data-node-id="169:11573">
        <p className={styles.q} data-node-id="169:11575">
          Едите жирную рыбу (лосось, скумбрия)?
        </p>
        <div className={styles.pair} data-node-id="169:11577">
          <button type="button" className={styles.btnOutline} data-node-id="169:11578">
            <span data-node-id="I169:11578;85:17559">Да, часто</span>
          </button>
          <button type="button" className={styles.btnFill} data-node-id="169:11579">
            <span data-node-id="I169:11579;85:17543">Редко или нет</span>
          </button>
        </div>
      </div>

      <Link href="/trackers/deficit-calculator/result" className={styles.submit} data-node-id="169:11319">
        <span data-node-id="I169:11319;695:4435">Показать результаты{" "}</span>
      </Link>
    </div>
  );
}
