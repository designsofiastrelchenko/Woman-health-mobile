/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { IconArrowBack } from "@/components/figma-screens/icon-arrow-back";
import { KnowledgeMaskedIcon } from "@/components/figma-screens/knowledge-masked-icon";
import { ProfileFigmaStatusBar } from "@/components/figma-screens/profile-figma-status-bar";
import styles from "./trackers-due-date-step2-view.module.css";

const STATUS_RIGHT = "/icons/figma/fff8b42c3c4d1c153ff0ab5d627fa1b8b3a7f0fc.svg";
const WAVE1 = "/icons/figma/d0db789a5ca293048e53140bcaf4407a42fae4d1.svg";
const WAVE2 = "/icons/figma/9fe5f4d4c510794a6a3d0ab7f5f82dc277c80fd9.svg";

const IMG = {
  infoMask: "/icons/figma/329d600c34e04aaae00fe7283e2d7bae1ccd2630.svg",
  infoFill: "/icons/figma/f53edaa66ebb4523a08914390d9270aef21392d8.svg",
} as const;

/** Figma 169:13032 — Trackers / Baby's due date calculator / Step 2. */
export function TrackersDueDateStep2View() {
  return (
    <div className={styles.root} data-node-id="169:13032">
      <ProfileFigmaStatusBar variant="ios125" rightSrc={STATUS_RIGHT} className={styles.status} />

      <header className={styles.header} data-node-id="169:13034">
        <IconArrowBack href="/trackers/due-date" label="Назад" />
        <h1 className={styles.headerTitle} data-node-id="I169:13034;568:1596">
          Расчёт даты родов
        </h1>
        <div className={styles.headerGhost} aria-hidden data-node-id="I169:13034;568:1597" />
      </header>

      <div className={styles.heroBanner} data-node-id="169:13127">
        <div className={styles.wave1} data-node-id="169:13128">
          <img alt="" src={WAVE1} draggable={false} />
        </div>
        <div className={styles.wave2} data-node-id="169:13129">
          <img alt="" src={WAVE2} draggable={false} />
        </div>
        <div className={styles.heroContent} data-node-id="169:13131">
          <p className={styles.heroCaption} data-node-id="169:13133">
            Предполагаемая дата родов (ПДР)
          </p>
          <p className={styles.heroDate} data-node-id="169:13136">
            17 окт 2026
          </p>
          <p className={styles.heroSub} data-node-id="169:13137">
            Осталось 177 дней
          </p>
        </div>
      </div>

      <div className={styles.statGrid} data-node-id="169:13138">
        <div className={styles.statRow} data-node-id="198:3281">
          <div className={styles.statCard} data-node-id="169:13139">
            <div className={styles.statValueRow} data-node-id="169:13140">
              <p className={styles.statLabelBig} data-node-id="169:13142">
                14
              </p>
              <p className={styles.statSuffix} data-node-id="169:13144">
                недель
              </p>
            </div>
            <p className={styles.statCaption} data-node-id="169:13146">
              Неделя беременности
            </p>
          </div>
          <div className={styles.statCard} data-node-id="169:13147">
            <div className={styles.statValueRow} data-node-id="169:13148">
              <p className={styles.statLabelBig} style={{ width: 16 }} data-node-id="169:13150">
                II
              </p>
              <p className={styles.statSuffix} data-node-id="169:13152">
                триместр
              </p>
            </div>
            <p className={styles.statCaption} data-node-id="169:13154">
              Нед. 14–26
            </p>
          </div>
        </div>
        <div className={styles.statRow} data-node-id="198:3282">
          <div className={styles.statCard} data-node-id="169:13155">
            <div className={styles.statValueRow} data-node-id="169:13156">
              <p className={styles.statLabelBig} style={{ width: 28 }} data-node-id="169:13158">
                10
              </p>
              <p className={styles.statSuffix} data-node-id="169:13160">
                января
              </p>
            </div>
            <p className={styles.statCaption} data-node-id="169:13162">
              Начало беременности
            </p>
          </div>
          <div className={styles.statCard} data-node-id="169:13163">
            <div className={styles.statValueRow} data-node-id="169:13164">
              <p className={styles.statLabelBig} style={{ width: 30 }} data-node-id="169:13166">
                28
              </p>
              <p className={styles.statSuffix} data-node-id="169:13168">
                дней
              </p>
            </div>
            <p className={styles.statCaption} data-node-id="169:13170">
              Длина цикла
            </p>
          </div>
        </div>
      </div>

      <div className={styles.progressCard} data-node-id="169:13199">
        <p className={styles.progressTitle} data-node-id="169:13205">
          Прогресс беременности
        </p>
        <div className={styles.progressInner} data-node-id="169:13257">
          <div className={styles.barRow} data-node-id="169:13228">
            <div className={`${styles.barSeg} ${styles.barSeg1}`} data-node-id="169:13229" />
            <div className={`${styles.barSeg} ${styles.barSeg2}`} data-node-id="169:13230" />
            <div className={`${styles.barSeg} ${styles.barSeg3}`} data-node-id="169:13231" />
          </div>
          <div className={styles.triRow} data-node-id="169:13240">
            <div className={`${styles.triCol} ${styles.triCol1}`} data-node-id="169:13241">
              <p data-node-id="169:13243">I триместр</p>
              <p data-node-id="169:13245">1–13 нед</p>
            </div>
            <div className={`${styles.triCol} ${styles.triCol2}`} data-node-id="169:13246">
              <p data-node-id="169:13248">II триместр</p>
              <p data-node-id="169:13250">14–26 нед</p>
            </div>
            <div className={`${styles.triCol} ${styles.triCol3}`} data-node-id="169:13251">
              <p data-node-id="169:13253">III триместр</p>
              <p data-node-id="169:13255">27–40 нед</p>
            </div>
          </div>
        </div>
        <div className={styles.keyBlock} data-node-id="169:13210">
          <p className={styles.keyTitle} data-node-id="169:13211">
            Ключевые даты
          </p>
          <div className={`${styles.keyRow} ${styles.keyRowMuted}`} data-node-id="169:13260">
            <p className={styles.keyLeft} data-node-id="169:13212">
              Конец I триместра
            </p>
            <p className={styles.keyRight} data-node-id="169:13258">
              11 апреля 2026
            </p>
          </div>
          <div className={`${styles.keyRow} ${styles.keyRowDark}`} data-node-id="169:13261">
            <p className={styles.keyLeft} data-node-id="169:13262">
              Конец II триместра
            </p>
            <p className={styles.keyRight} data-node-id="169:13263">
              11 июля 2026
            </p>
          </div>
          <div className={`${styles.keyRow} ${styles.keyRowMuted}`} data-node-id="169:13265">
            <p className={styles.keyLeft} data-node-id="169:13266">
              Предполагаемые роды
            </p>
            <p className={styles.keyRight} data-node-id="169:13267">
              17 октября 2026
            </p>
          </div>
        </div>
      </div>

      <div className={styles.negelBanner} data-node-id="169:13172">
        <div className={styles.negelInner} data-node-id="169:13173">
          <div className={styles.negelBubble} data-node-id="169:13174">
            <div className={styles.negelBubbleInner} data-node-id="169:13175">
              <KnowledgeMaskedIcon
                maskSrc={IMG.infoMask}
                innerSrc={IMG.infoFill}
                size={16}
                maskPosition="-0.83px -0.839px"
                maskLayerInset="5.24% 5.22% 5.25% 5.19%"
              />
            </div>
          </div>
          <div className={styles.negelTextCol} data-node-id="169:13183">
            <p className={styles.negelTitle} data-node-id="169:13184">
              Правила Негеле
            </p>
            <p className={styles.negelBody} data-node-id="169:13185">
              ПДР рассчитана по правилу Негеле. Точная дата определяется врачом по УЗИ в I триместре
            </p>
          </div>
        </div>
      </div>

      <div className={styles.footer} data-node-id="169:13186">
        <Link href="/book-consultation" className={styles.btnPrimary} data-node-id="169:13187">
          <p className={styles.btnPrimaryText} data-node-id="I169:13187;695:4435">
            Записаться на консультацию
          </p>
        </Link>
        <Link href="/trackers/due-date" className={styles.btnGhost} data-node-id="169:13189">
          <p className={styles.btnGhostText} data-node-id="I169:13189;698:4673">
            Пересчитать
          </p>
        </Link>
      </div>
    </div>
  );
}
