/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { IconArrowBack } from "@/components/figma-screens/icon-arrow-back";
import { KnowledgeMaskedIcon } from "@/components/figma-screens/knowledge-masked-icon";
import { ProfileFigmaStatusBar } from "@/components/figma-screens/profile-figma-status-bar";
import styles from "./trackers-due-date-step1-view.module.css";

const STATUS_RIGHT = "/icons/figma/fff8b42c3c4d1c153ff0ab5d627fa1b8b3a7f0fc.svg";

const IMG = {
  minus: "/icons/figma/b42b5f75c1323033ba5ca6fbbb804c306a04356f.svg",
  minusAlt: "/icons/figma/98c964623a4101465405207f6a0002b44ec2ef5a.svg",
  infoMask: "/icons/figma/329d600c34e04aaae00fe7283e2d7bae1ccd2630.svg",
  infoFill: "/icons/figma/f53edaa66ebb4523a08914390d9270aef21392d8.svg",
  calendarInner: "/icons/figma/7cbfd1bc70675d31a9ea90b7a055ce9347c8da19.svg",
} as const;

/** Figma 169:12648 — Trackers / Baby's due date calculator / Step 1. */
export function TrackersDueDateStep1View() {
  return (
    <div className={styles.root} data-node-id="169:12648">
      <ProfileFigmaStatusBar variant="ios125" rightSrc={STATUS_RIGHT} className={styles.status} />

      <header className={styles.header} data-node-id="169:12650">
        <IconArrowBack href="/trackers" label="К трекерам" />
        <h1 className={styles.headerTitle} data-node-id="I169:12650;568:1596">
          Расчёт даты родов
        </h1>
        <div className={styles.headerGhost} aria-hidden data-node-id="I169:12650;568:1597" />
      </header>

      <div className={styles.instructionBanner} data-node-id="169:12759">
        <div className={styles.instructionInner} data-node-id="169:12760">
          <div className={styles.infoBubble} data-node-id="169:12761">
            <div className={styles.infoBubbleInner} data-node-id="169:12762">
              <KnowledgeMaskedIcon
                maskSrc={IMG.infoMask}
                innerSrc={IMG.infoFill}
                size={16}
                maskPosition="-0.83px -0.839px"
                maskLayerInset="5.24% 5.22% 5.25% 5.19%"
              />
            </div>
          </div>
          <div className={styles.instructionTextCol} data-node-id="169:12770">
            <p className={styles.instructionTitle} data-node-id="169:12771">
              Инструкция
            </p>
            <p className={styles.instructionBody} data-node-id="169:12772">
              Укажи дату первого дня последней менструации (ПМ) и длину цикла
            </p>
          </div>
        </div>
      </div>

      <div className={`${styles.fieldCard} ${styles.fieldCard1}`} data-node-id="169:12773">
        <p className={styles.fieldLabel} data-node-id="169:12789">
          День последней менструации
        </p>
        <div className={styles.fieldRow} data-node-id="169:12788">
          <div className={styles.fieldIcon} data-node-id="169:12817">
            <img alt="" src={IMG.minus} draggable={false} />
          </div>
          <div className={styles.fieldValueWrap} data-node-id="169:12774">
            <p className={styles.fieldValue} data-node-id="169:12780">
              <span className={styles.fieldValueNum}>10</span>
              <span> января 2026</span>
            </p>
          </div>
          <div className={styles.fieldIcon} data-node-id="169:12820">
            <img alt="" src={IMG.minusAlt} draggable={false} />
          </div>
        </div>
      </div>

      <div className={`${styles.fieldCard} ${styles.fieldCard2}`} data-node-id="169:12800">
        <p className={styles.fieldLabel} data-node-id="169:12801">
          Длина цикла (дней)
        </p>
        <div className={styles.fieldRow} data-node-id="169:12802">
          <div className={styles.fieldIcon} data-node-id="169:12831">
            <img alt="" src={IMG.minus} draggable={false} />
          </div>
          <div className={styles.fieldValueWrap} data-node-id="169:12804">
            <p className={styles.fieldValue} data-node-id="169:12805">
              28
            </p>
          </div>
          <div className={styles.fieldIcon} data-node-id="169:12834">
            <img alt="" src={IMG.minusAlt} draggable={false} />
          </div>
        </div>
      </div>

      <div className={styles.pdrCard} data-node-id="169:12850">
        <div className={styles.pdrInner} data-node-id="169:12851">
          <div className={styles.calendarBubble} data-node-id="169:12852">
            <div className={styles.calendarBubbleInner} data-node-id="169:12878">
              <KnowledgeMaskedIcon
                innerSrc={IMG.calendarInner}
                size={24}
                maskPosition="-2.25px -1.25px"
                maskLayerInset="5.21% 9.38%"
              />
            </div>
          </div>
          <div className={styles.pdrTextCol} data-node-id="169:12854">
            <p className={styles.pdrTitle} data-node-id="169:12855">
              Предварительный расчёт ПДР
            </p>
            <p className={styles.pdrDate} data-node-id="169:12857">
              17 окт 2026
            </p>
          </div>
        </div>
      </div>

      <Link href="/trackers/due-date/step-2" className={styles.cta} data-node-id="169:12651">
        <p className={styles.ctaText} data-node-id="I169:12651;695:4435">
          {`Рассчитать `}
        </p>
      </Link>
    </div>
  );
}
