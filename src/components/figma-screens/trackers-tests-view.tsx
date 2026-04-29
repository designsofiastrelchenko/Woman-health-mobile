import { ChevronRightIcon } from "@/components/figma-screens/chevron-right-icon";
import { IconArrowBack } from "@/components/figma-screens/icon-arrow-back";
import { ProfileFigmaStatusBar } from "@/components/figma-screens/profile-figma-status-bar";
import styles from "./trackers-tests-view.module.css";

const STATUS_RIGHT = "/icons/figma/fff8b42c3c4d1c153ff0ab5d627fa1b8b3a7f0fc.svg";

/** Figma 170:13454 — Trackers / Tests (no bottom nav in frame). */
export function TrackersTestsView() {
  return (
    <div className={styles.root} data-node-id="170:13454">
      <ProfileFigmaStatusBar variant="ios125" rightSrc={STATUS_RIGHT} className={styles.status} />

      <header className={styles.header} data-node-id="170:13456">
        <IconArrowBack href="/trackers" label="К трекерам" />
        <h1 className={styles.headerTitle} data-node-id="I170:13456;568:1596">
          Тесты
        </h1>
        <div className={styles.headerGhost} aria-hidden data-node-id="I170:13456;568:1597" />
      </header>

      <ul className={styles.list} role="list">
        <li className={`${styles.card} ${styles.card1}`} data-node-id="170:13457">
          <div className={styles.cardInner}>
            <div className={styles.textCol} data-node-id="170:13458">
              <p className={styles.title} data-node-id="170:13460">
                Уровень стресса (PSS)
              </p>
              <p className={styles.desc} data-node-id="170:13462">
                Шкала воспринимаемого стресса — золотой стандарт оценки
              </p>
              <div className={styles.metaRow} data-node-id="170:13463">
                <p className={styles.meta} data-node-id="170:13464">
                  3–4 мин
                </p>
                <span className={styles.metaDot} aria-hidden data-node-id="170:13465" />
                <p className={styles.meta} data-node-id="170:13466">
                  8 вопр.
                </p>
              </div>
            </div>
          </div>
          <span className={styles.chevron} aria-hidden>
            <ChevronRightIcon />
          </span>
        </li>

        <li className={`${styles.card} ${styles.card2}`} data-node-id="170:13468">
          <div className={styles.cardInner}>
            <div className={styles.textCol} data-node-id="170:13469">
              <p className={styles.title} data-node-id="170:13471">
                Оценка ПМС
              </p>
              <p className={styles.desc} data-node-id="170:13473">
                Оцени симптомы предменструального синдрома
              </p>
              <div className={styles.metaRow} data-node-id="170:13474">
                <p className={styles.meta} data-node-id="170:13475">
                  2–3 мин
                </p>
                <span className={styles.metaDot} aria-hidden data-node-id="170:13476" />
                <p className={styles.meta} data-node-id="170:13477">
                  6 вопр.
                </p>
              </div>
            </div>
          </div>
          <span className={styles.chevron} aria-hidden>
            <ChevronRightIcon />
          </span>
        </li>

        <li className={`${styles.card} ${styles.card3}`} data-node-id="170:13479">
          <div className={styles.cardInner}>
            <div className={styles.textCol} data-node-id="170:13480">
              <p className={styles.title} data-node-id="170:13482">
                Гормональный баланс
              </p>
              <p className={styles.desc} data-node-id="170:13484">
                Признаки возможного гормонального дисбаланса
              </p>
              <div className={styles.metaRow} data-node-id="170:13485">
                <p className={styles.meta} data-node-id="170:13486">
                  3 мин
                </p>
                <span className={styles.metaDot} aria-hidden data-node-id="170:13487" />
                <p className={styles.meta} data-node-id="170:13488">
                  6 вопр.
                </p>
              </div>
            </div>
          </div>
          <span className={styles.chevron} aria-hidden>
            <ChevronRightIcon />
          </span>
        </li>
      </ul>
    </div>
  );
}
