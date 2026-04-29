/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { IconArrowBack } from "@/components/figma-screens/icon-arrow-back";
import { ProfileFigmaStatusBar } from "@/components/figma-screens/profile-figma-status-bar";
import styles from "./trackers-checklist-detail-view.module.css";

const STATUS_RIGHT = "/icons/figma/7583d06de40229752e21156f8a542c09e9ffb2ce.svg";
const SLIDER_PROCESS = "/icons/figma/0237eb2bb619d4f05ecf0ded3926631b2508c596.svg";
const SLIDER_DONE = "/icons/figma/f6a337eaf9b1b152a4cf02cdcf743f18b618e1a2.svg";

export type ChecklistDetailVariant = "process" | "done";

interface TrackersChecklistDetailViewProps {
  variant: ChecklistDetailVariant;
}

/** Figma 170:14752 — process · 170:15121 — done. */
export function TrackersChecklistDetailView({ variant }: TrackersChecklistDetailViewProps) {
  const isDone = variant === "done";
  const rootId = isDone ? "170:15121" : "170:14752";

  return (
    <div className={styles.root} data-node-id={rootId}>
      <ProfileFigmaStatusBar variant="ios125" rightSrc={STATUS_RIGHT} className={styles.status} />

      <header className={styles.header} data-node-id={isDone ? "170:15123" : "170:14754"}>
        <IconArrowBack href="/trackers/checklists" label="К чек-листам" />
        <h1 className={styles.headerTitle} data-node-id={isDone ? "I170:15123;568:1596" : "I170:14754;568:1596"}>
          Чек-лист
        </h1>
        <div className={styles.headerGhost} aria-hidden data-node-id={isDone ? "I170:15123;568:1597" : "I170:14754;568:1597"} />
      </header>

      <p className={styles.subtitle} data-node-id={isDone ? "170:15125" : "170:14976"}>
        Ежегодный осмотр гинеколога
      </p>

      <div className={styles.progressBlock} data-node-id={isDone ? "170:15126" : "170:14979"}>
        <div className={styles.sliderWrap} data-node-id={isDone ? "170:15127" : "170:14981"}>
          <img alt="" src={isDone ? SLIDER_DONE : SLIDER_PROCESS} draggable={false} />
        </div>
        <p className={styles.progressCaption} data-node-id={isDone ? "170:15131" : "170:14985"}>
          {isDone ? "100% выполнено" : "17% выполнено"}
        </p>
      </div>

      <div className={`${styles.section} ${styles.sectionOnVisit}`} data-node-id={isDone ? "170:15132" : "170:14988"}>
        <p className={styles.sectionLabel} data-node-id={isDone ? "170:15134" : "170:15032"}>
          На приёме
        </p>

        <div className={styles.task} data-node-id={isDone ? "170:15135" : "170:14989"}>
          <div className={styles.checkFilled} data-node-id={isDone ? "170:15136" : "170:15028"}>
            <div className={styles.checkDot} data-node-id={isDone ? "170:15137" : "170:15029"} />
          </div>
          <p className={`${styles.taskTitle} ${styles.taskTitleDone}`} data-node-id={isDone ? "170:15140" : "170:14993"}>
            Осмотр и бимануальное исследование
          </p>
        </div>

        <div className={styles.task} data-node-id={isDone ? "170:15141" : "170:14994"}>
          <div className={styles.checkFilled} data-node-id={isDone ? "170:15142" : "170:14995"}>
            <div className={styles.checkDot} data-node-id={isDone ? "170:15143" : "170:14996"} />
          </div>
          <p className={`${styles.taskTitle} ${styles.taskTitleDone}`} data-node-id={isDone ? "170:15146" : "170:14999"}>
            Мазок на флору
          </p>
        </div>

        <div className={`${styles.task} ${styles.taskTall}`} data-node-id={isDone ? "170:15147" : "170:15000"}>
          {isDone ? (
            <div className={styles.checkFilled} data-node-id="170:15213">
              <div className={styles.checkDot} data-node-id="170:15214" />
            </div>
          ) : (
            <div className={styles.checkEmpty} data-node-id="170:15001" />
          )}
          <div className={styles.taskInner} data-node-id={isDone ? "170:15149" : "170:15078"}>
            <p
              className={isDone ? `${styles.taskTitle} ${styles.taskTitleDone}` : styles.taskTitle}
              data-node-id={isDone ? "170:15150" : "170:15079"}
            >
              ПАП-тест (цитология шейки матки)
            </p>
            <p className={styles.taskSub} data-node-id={isDone ? "170:15152" : "170:15081"}>
              Раз в 3 года, от 21 лет
            </p>
          </div>
        </div>

        <div className={styles.task} data-node-id={isDone ? "170:15153" : "170:15005"}>
          {isDone ? (
            <div className={styles.checkFilled} data-node-id="170:15216">
              <div className={styles.checkDot} data-node-id="170:15217" />
            </div>
          ) : (
            <div className={styles.checkEmpty} data-node-id="170:15006" />
          )}
          <p className={styles.taskTitle} data-node-id={isDone ? "170:15157" : "170:15009"}>
            УЗИ органов малого таза
          </p>
        </div>

        <div className={`${styles.task} ${styles.taskTall}`} data-node-id={isDone ? "170:15158" : "170:15010"}>
          {isDone ? (
            <div className={styles.checkFilled} data-node-id="170:15219">
              <div className={styles.checkDot} data-node-id="170:15220" />
            </div>
          ) : (
            <div className={styles.checkEmpty} data-node-id="170:15011" />
          )}
          <div className={styles.taskInner} data-node-id={isDone ? "170:15160" : "170:15088"}>
            <p
              className={isDone ? `${styles.taskTitle} ${styles.taskTitleDone}` : styles.taskTitle}
              data-node-id={isDone ? "170:15161" : "170:15089"}
            >
              Осмотр молочных желёз
            </p>
            <p className={styles.taskSub} data-node-id={isDone ? "170:15163" : "170:15091"}>
              УЗИ МЖ или маммография от 40 лет
            </p>
          </div>
        </div>
      </div>

      <div className={`${styles.section} ${styles.sectionLabs}`} data-node-id={isDone ? "170:15164" : "170:15034"}>
        <p className={styles.sectionLabel} data-node-id={isDone ? "170:15166" : "170:15036"}>
          Анализы
        </p>

        <div className={styles.task} data-node-id={isDone ? "170:15167" : "170:15049"}>
          {isDone ? (
            <div className={styles.checkFilled} data-node-id="170:15222">
              <div className={styles.checkDot} data-node-id="170:15223" />
            </div>
          ) : (
            <div className={styles.checkEmpty} data-node-id="170:15050" />
          )}
          <p
            className={isDone ? `${styles.taskTitle} ${styles.taskTitleDone}` : styles.taskTitle}
            data-node-id={isDone ? "170:15171" : "170:15053"}
          >
            ОАК (общий анализ крови) + ферритин
          </p>
        </div>

        <div className={styles.task} data-node-id={isDone ? "170:15172" : "170:15054"}>
          {isDone ? (
            <div className={styles.checkFilled} data-node-id="170:15225">
              <div className={styles.checkDot} data-node-id="170:15226" />
            </div>
          ) : (
            <div className={styles.checkEmpty} data-node-id="170:15055" />
          )}
          <p
            className={isDone ? `${styles.taskTitle} ${styles.taskTitleDone}` : styles.taskTitle}
            data-node-id={isDone ? "170:15176" : "170:15058"}
          >
            ТТГ (щитовидная железа)
          </p>
        </div>

        <div className={styles.task} data-node-id={isDone ? "170:15177" : "170:15059"}>
          {isDone ? (
            <div className={styles.checkFilled} data-node-id="170:15228">
              <div className={styles.checkDot} data-node-id="170:15229" />
            </div>
          ) : (
            <div className={styles.checkEmpty} data-node-id="170:15060" />
          )}
          <p
            className={isDone ? `${styles.taskTitle} ${styles.taskTitleDone}` : styles.taskTitle}
            data-node-id={isDone ? "170:15181" : "170:15063"}
          >
            Витамин D (25-OH-D)
          </p>
        </div>
      </div>

      <div className={styles.footer} data-node-id={isDone ? "170:15182" : "170:15107"}>
        {isDone ? (
          <Link href="/book-consultation" className={styles.btnPrimary} data-node-id="170:15183">
            <span data-node-id="I170:15183;695:4435">Записаться на консультацию</span>
          </Link>
        ) : (
          <Link href="/trackers/checklists/annual-exam/done" className={styles.btnPrimary} data-node-id="170:15108">
            <span data-node-id="I170:15108;695:4435">Отметить все выполненными</span>
          </Link>
        )}
        <button type="button" className={styles.btnGhost} data-node-id={isDone ? "170:15184" : "170:15110"}>
          <span data-node-id={isDone ? "I170:15184;698:4673" : "I170:15110;698:4673"}>Сбросить отметки</span>
        </button>
      </div>
    </div>
  );
}
