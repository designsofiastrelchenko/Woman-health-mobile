/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { IconArrowBack } from "@/components/figma-screens/icon-arrow-back";
import { KnowledgeMaskedIcon } from "@/components/figma-screens/knowledge-masked-icon";
import { ProfileFigmaStatusBar } from "@/components/figma-screens/profile-figma-status-bar";
import styles from "./knowledge-lesson-view.module.css";

const IMG = {
  video: "/icons/figma/3156bfc3c9d06488050d0b918c4ca45edf837246.png",
  overlay: "/icons/figma/102fa1220ae07995097e8793914ff1357107252d.png",
  play: "/icons/figma/c4420e0204c2b880947e40571e1d7f010e2b337f.svg",
  volume: "/icons/figma/20e55e066c074176d8d9f031efdcf91847e6c109.svg",
  maximize: "/icons/figma/70e79035599380d9ec817870d700e716c01d946b.svg",
  clockFill: "/icons/figma/9cbafc9bcf8c9a5938a19f477fafcea5c6b8f44e.svg",
  docFill: "/icons/figma/f21f842a9350a0bedab391dd3c833ee0760e7019.svg",
} as const;

const STATUS_RIGHT = "/icons/figma/fff8b42c3c4d1c153ff0ab5d627fa1b8b3a7f0fc.svg";

/** Figma 157:5656 — Knowledge / Course / Lesson. */
export function KnowledgeLessonView() {
  return (
    <div className={styles.root} data-node-id="157:5656">
      <ProfileFigmaStatusBar variant="ios125" rightSrc={STATUS_RIGHT} className={styles.status} />

      <header className={styles.header} data-node-id="157:5658">
        <IconArrowBack href="/knowledge/course" />
        <h1 className={styles.headerTitle} data-node-id="I157:5658;568:1596">
          Урок 3.2
        </h1>
        <div className={styles.headerSpacer} data-node-id="I157:5658;568:1597" aria-hidden />
      </header>

      <div className={styles.titleCard} data-node-id="157:6203">
        <h2 data-node-id="157:6204">Тестостерон у женщин</h2>
        <div className={styles.durRow} data-node-id="157:6208">
          <div className={styles.sax24} data-node-id="157:6227">
            <KnowledgeMaskedIcon
              innerSrc={IMG.clockFill}
              size={24}
              maskPosition="-1.25px -1.25px"
              maskLayerInset="5.21%"
            />
          </div>
          <p data-node-id="157:6210">15 mins</p>
        </div>
      </div>

      <div className={styles.video} data-node-id="157:5769">
        <div className={styles.videoBg} data-node-id="157:5770">
          <img alt="" src={IMG.video} draggable={false} />
        </div>
        <div className={styles.videoOverlay} aria-hidden>
          <div className={styles.videoOverlayDim} />
          <div className={styles.videoOverlayImg}>
            <img alt="" src={IMG.overlay} draggable={false} />
          </div>
        </div>
        <div className={styles.timeBadge} data-node-id="157:5772">
          <p data-node-id="157:5773">15:02</p>
        </div>
        <button type="button" className={styles.playBtn} data-node-id="157:5774" aria-label="Play">
          <span className={styles.playBtnInner}>
            <img alt="" src={IMG.play} draggable={false} />
          </span>
        </button>
        <button type="button" className={styles.muteBtn} data-node-id="157:5775" aria-label="Mute">
          <img alt="" src={IMG.volume} width={12} height={12} draggable={false} />
        </button>
        <button type="button" className={styles.maxBtn} data-node-id="157:5780" aria-label="Fullscreen">
          <img alt="" src={IMG.maximize} width={14} height={14} draggable={false} />
        </button>
      </div>

      <section className={styles.about} data-node-id="157:6211">
        <h3 data-node-id="157:6212">О чём этот урок</h3>
        <p data-node-id="157:6213">
          В этом уроке разберём роль тестостерона
          <br />
          {` в женском организме, симптомы дефицита `}
          <br />
          {`и избытка, а также как правильно интерпретировать анализы `}
          <br />
          на андрогены
        </p>
      </section>

      <section className={styles.materials} data-node-id="157:6015">
        <h3 data-node-id="157:6016">Материалы к уроку</h3>
        <div className={styles.matRow} data-node-id="157:6022">
          <div className={styles.matCol} data-node-id="157:6028">
            <strong data-node-id="157:6029">Конспект урока</strong>
            <span data-node-id="157:6031">PDF · 420 КБ</span>
          </div>
          <div className={styles.docIcon} data-node-id="157:6156">
            <KnowledgeMaskedIcon
              innerSrc={IMG.docFill}
              size={24}
              maskPosition="-1.25px -1.25px"
              maskLayerInset="5.21%"
            />
          </div>
        </div>
        <div className={styles.matRow} data-node-id="157:6166">
          <div className={styles.matCol} data-node-id="157:6168">
            <strong data-node-id="157:6169">Схема гормонального фона</strong>
            <span data-node-id="157:6171">PDF · 1.1 МБ</span>
          </div>
          <div className={styles.docIcon} data-node-id="157:6172">
            <KnowledgeMaskedIcon
              innerSrc={IMG.docFill}
              size={24}
              maskPosition="-1.25px -1.25px"
              maskLayerInset="5.21%"
            />
          </div>
        </div>
        <div className={styles.matRow} data-node-id="157:6182">
          <div className={styles.matCol} data-node-id="157:6184">
            <strong data-node-id="157:6185">Список анализов</strong>
            <span data-node-id="157:6187">PDF · 210 КБ</span>
          </div>
          <div className={styles.docIcon} data-node-id="157:6188">
            <KnowledgeMaskedIcon
              innerSrc={IMG.docFill}
              size={24}
              maskPosition="-1.25px -1.25px"
              maskLayerInset="5.21%"
            />
          </div>
        </div>
      </section>

      <Link href="/knowledge/course" className={styles.cta} data-node-id="157:6198">
        <p data-node-id="I157:6198;695:4435">Следующий урок</p>
      </Link>
    </div>
  );
}
