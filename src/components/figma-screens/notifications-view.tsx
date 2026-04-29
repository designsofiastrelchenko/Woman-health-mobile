import Image from "next/image";
import { IconArrowBack } from "./icon-arrow-back";
import { IconClock } from "./icon-clock";
import styles from "./notifications-view.module.css";

function Dot() {
  return (
    <span className={styles.dot}>
      <Image
        src="/icons/figma/4bb37e8b32a11b7c6ab60a25658fc28806ec41d6.svg"
        alt=""
        width={8}
        height={8}
        unoptimized
      />
    </span>
  );
}

export function NotificationsView() {
  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <IconArrowBack href="/home" />
        <h1 className={styles.headerTitle}>Уведомления</h1>
        <div className={styles.headerSpacer} aria-hidden />
      </header>

      <div className={styles.list1}>
        <div className={styles.row}>
          <div className={styles.rowMain}>
            <div className={`${styles.iconBubble} ${styles.iconBubbleBlue}`}>
              <Image
                src="/icons/figma/8aa782b7482045c1d07d479c954585363fbf3c60.svg"
                alt=""
                width={20}
                height={20}
                className={styles.iconImg}
                unoptimized
              />
            </div>
            <div className={styles.body}>
              <div className={`${styles.textBlock} ${styles.descWrap}`}>
                <p className={styles.title}>Консультация завтра</p>
                <p className={styles.desc}>
                  Др. Мария Иванова · 15:00. Подготовьте вопросы заранее
                </p>
              </div>
              <div className={styles.timeRow}>
                <IconClock size={18} />
                <p className={styles.timeText}>15:00</p>
              </div>
            </div>
          </div>
          <Dot />
        </div>

        <div className={styles.row}>
          <div className={styles.rowMain}>
            <div className={`${styles.iconBubble} ${styles.iconBubbleYellow}`}>
              <Image
                src="/icons/figma/dbfe043248518cf5f8e73c6eafe414ff5e727c3e.svg"
                alt=""
                width={20}
                height={20}
                className={styles.iconImg}
                unoptimized
              />
            </div>
            <div className={styles.body}>
              <div className={`${styles.textBlock} ${styles.descWrap}`}>
                <p className={styles.title}>Новый урок доступен</p>
                <p className={`${styles.desc}`} style={{ whiteSpace: "pre-wrap" }}>
                  Урок 3.3 «Прогестерон и цикл»{"\n"}в курсе Гормоны женского здоровья
                </p>
              </div>
              <div className={styles.timeRow}>
                <IconClock size={18} />
                <p className={styles.timeText}>18:00</p>
              </div>
            </div>
          </div>
          <Dot />
        </div>

        <div className={`${styles.row} ${styles.rowWide}`}>
          <div className={`${styles.iconBubble} ${styles.iconBubbleViolet}`}>
            <Image
              src="/icons/figma/a74aaa100e2228ffd335e43128e7c756b5d5c5c9.svg"
              alt=""
              width={20}
              height={20}
              className={styles.iconImg}
              unoptimized
            />
          </div>
          <div className={styles.body}>
            <div className={`${styles.textBlock} ${styles.descWide}`}>
              <p className={styles.title}>Напоминание о цикле</p>
              <p className={styles.desc}>
                По вашему трекеру сегодня ожидаемое начало фолликулярной фазы
              </p>
            </div>
            <div className={styles.timeRow}>
              <IconClock size={18} />
              <p className={styles.timeText}>15:00</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.divider}>
        <div className={styles.dividerLine}>
          <Image
            src="/icons/figma/da1ca28b6904ceca04ba0e03e01040e9564ae1f7.svg"
            alt=""
            width={143}
            height={1}
            unoptimized
          />
        </div>
        <p className={styles.dividerLabel}>Вчера</p>
        <div className={styles.dividerLine}>
          <Image
            src="/icons/figma/da1ca28b6904ceca04ba0e03e01040e9564ae1f7.svg"
            alt=""
            width={143}
            height={1}
            unoptimized
          />
        </div>
      </div>

      <div className={styles.list2}>
        <div className={`${styles.row} ${styles.rowWide}`}>
          <div className={styles.rowMain}>
            <div className={`${styles.iconBubble} ${styles.iconBubbleGreen}`}>
              <Image
                src="/icons/figma/c0f57a112ee473505ebcd1fe17b64d95d82022c8.svg"
                alt=""
                width={20}
                height={20}
                className={styles.iconImg}
                unoptimized
              />
            </div>
            <div className={styles.body}>
              <div className={`${styles.textBlock} ${styles.descWide}`}>
                <p className={styles.title}>Анализы загружены</p>
                <p className={styles.desc}>
                  Результаты ОАК от 22 апреля успешно добавлены в ваш профиль
                </p>
              </div>
              <div className={styles.timeRow}>
                <IconClock size={18} />
                <p className={styles.timeText}>17:00</p>
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.row} ${styles.rowWide}`}>
          <div className={styles.rowMain}>
            <div className={`${styles.iconBubble} ${styles.iconBubbleViolet}`}>
              <Image
                src="/icons/figma/a74aaa100e2228ffd335e43128e7c756b5d5c5c9.svg"
                alt=""
                width={20}
                height={20}
                className={styles.iconImg}
                unoptimized
              />
            </div>
            <div className={styles.body}>
              <div className={`${styles.textBlock} ${styles.descWide}`}>
                <p className={styles.title}>Материал для вас</p>
                <p className={styles.desc}>
                  «5 признаков дефицита прогестерона» — новая статья в рекомендациях
                </p>
              </div>
              <div className={styles.timeRow}>
                <IconClock size={18} />
                <p className={styles.timeText}>12:00</p>
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.row} ${styles.rowWide}`}>
          <div className={`${styles.iconBubble} ${styles.iconBubbleBlue}`}>
            <Image
              src="/icons/figma/8aa782b7482045c1d07d479c954585363fbf3c60.svg"
              alt=""
              width={20}
              height={20}
              className={styles.iconImg}
              unoptimized
            />
          </div>
          <div className={styles.body}>
            <div className={`${styles.textBlock} ${styles.descWide}`}>
              <p className={styles.title}>Консультация завершена</p>
              <p className={styles.desc}>
                Запись от 10 февраля: рекомендации доступны в разделе «Мои консультации»
              </p>
            </div>
            <div className={styles.timeRow}>
              <IconClock size={18} />
              <p className={styles.timeText}>19:00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
