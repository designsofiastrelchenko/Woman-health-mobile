import Link from "next/link";
import typography from "@/design-system/typography.module.css";
import { IconArrowBack } from "@/components/figma-screens/icon-arrow-back";
import { ProfileFigmaStatusBar } from "@/components/figma-screens/profile-figma-status-bar";
import styles from "./profile-my-purchases-history-view.module.css";
import shared from "./profile-my-purchases-shared.module.css";

/** Figma 97:30039 — My purchases / History. */
export function ProfileMyPurchasesHistoryView() {
  return (
    <div className={shared.root812} data-node-id="97:30039">
      <ProfileFigmaStatusBar variant="ios125" className={shared.status} />

      <header className={shared.head}>
        <IconArrowBack href="/profile" label="Назад" />
        <h1 className={`${typography.heading3} ${shared.headTitle}`} data-node-id="97:30043">
          Мои покупки
        </h1>
        <div className={shared.headGhost} aria-hidden />
      </header>

      <nav className={shared.tabs} aria-label="Раздел покупок" data-node-id="192:4391">
        <div className={shared.tabCell}>
          <Link href="/profile/my-purchases/subscription" className={`${shared.tabBtn} ${shared.tabLabelInactive}`} data-node-id="I192:4391;96:29631">
            Подписка
          </Link>
        </div>
        <div className={shared.tabCell}>
          <span className={shared.tabActiveBg} aria-hidden />
          <span className={`${shared.tabBtn} ${shared.tabLabelActive}`} data-node-id="I192:4391;96:29633">
            История
          </span>
        </div>
      </nav>

      <div className={`${styles.card} ${styles.c1}`} data-node-id="97:30735">
        <div className={styles.row}>
          <p className={styles.title} data-node-id="97:30745">
            Клуб — подписка
          </p>
          <p className={styles.price} data-node-id="97:30751">
            2 990 ₽
          </p>
        </div>
        <div className={styles.pill} data-node-id="97:30747">
          <p className={styles.pillText} data-node-id="97:30748">
            1 апр 2026
          </p>
        </div>
      </div>

      <div className={`${styles.card} ${styles.c2}`} data-node-id="97:30753">
        <div className={styles.row}>
          <p className={styles.title} data-node-id="97:30756">
            Гормоны женского здоровья
          </p>
          <p className={styles.price} data-node-id="97:30758">
            4 900 ₽
          </p>
        </div>
        <div className={styles.pill} data-node-id="97:30759">
          <p className={styles.pillText} data-node-id="97:30760">
            12 мар 2026
          </p>
        </div>
      </div>

      <div className={`${styles.card} ${styles.c3}`} data-node-id="97:30761">
        <div className={styles.row}>
          <p className={styles.title} data-node-id="97:30764">
            Всё о менструальном цикле
          </p>
          <p className={styles.price} data-node-id="97:30766">
            3 490 ₽
          </p>
        </div>
        <div className={styles.pill} data-node-id="97:30767">
          <p className={styles.pillText} data-node-id="97:30768">
            3 янв 2026
          </p>
        </div>
      </div>

      <div className={`${styles.card} ${styles.c4}`} data-node-id="97:30769">
        <div className={styles.row}>
          <p className={styles.title} data-node-id="97:30772">
            Клуб — подписка (март)
          </p>
          <p className={styles.price} data-node-id="97:30774">
            2 990 ₽
          </p>
        </div>
        <div className={styles.pill} data-node-id="97:30775">
          <p className={styles.pillText} data-node-id="97:30776">
            1 мар 2026
          </p>
        </div>
      </div>
    </div>
  );
}
