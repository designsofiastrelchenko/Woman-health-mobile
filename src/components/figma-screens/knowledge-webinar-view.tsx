/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { IconArrowBack } from "@/components/figma-screens/icon-arrow-back";
import { KnowledgeMaskedIcon } from "@/components/figma-screens/knowledge-masked-icon";
import { ProfileFigmaStatusBar } from "@/components/figma-screens/profile-figma-status-bar";
import styles from "./knowledge-webinar-view.module.css";

const IMG = {
  video: "/icons/figma/be5b96d29b23ade4bf2b4cda79f82cdf4a7db012.png",
  play: "/icons/figma/c4420e0204c2b880947e40571e1d7f010e2b337f.svg",
  volume: "/icons/figma/20e55e066c074176d8d9f031efdcf91847e6c109.svg",
  maximize: "/icons/figma/70e79035599380d9ec817870d700e716c01d946b.svg",
  clockFill: "/icons/figma/9cbafc9bcf8c9a5938a19f477fafcea5c6b8f44e.svg",
  docFill: "/icons/figma/f21f842a9350a0bedab391dd3c833ee0760e7019.svg",
} as const;

const STATUS_RIGHT = "/icons/figma/fff8b42c3c4d1c153ff0ab5d627fa1b8b3a7f0fc.svg";

const ABOUT_COPY =
  "Хронический стресс разрушает гормональный баланс: повышает кортизол, подавляет прогестерон и нарушает овуляцию. В этом вебинаре разбираем, как ось HPA влияет на цикл, какие анализы сдать и как выстроить путь к восстановлению";

/** Figma 162:6791 — Knowledge / Webinar. */
export function KnowledgeWebinarView() {
  return (
    <div className={styles.root} data-node-id="162:6791">
      <ProfileFigmaStatusBar variant="ios125" rightSrc={STATUS_RIGHT} className={styles.status} />

      <header className={styles.header} data-node-id="162:6793">
        <IconArrowBack href="/knowledge" />
        <h1 className={styles.headerTitle} data-node-id="I162:6793;568:1596">
          Вебинар
        </h1>
        <div className={styles.headerSpacer} data-node-id="I162:6793;568:1597" aria-hidden />
      </header>

      <div className={styles.titleCard} data-node-id="162:6811">
        <h2 data-node-id="162:6812">Стресс и гормоны</h2>
        <div className={styles.durRow} data-node-id="162:6813">
          <div className={styles.sax24} data-node-id="162:6814">
            <KnowledgeMaskedIcon
              innerSrc={IMG.clockFill}
              size={24}
              maskPosition="-1.25px -1.25px"
              maskLayerInset="5.21%"
            />
          </div>
          <p data-node-id="162:6821">90 mins</p>
        </div>
      </div>

      <div className={styles.video} data-node-id="162:6794">
        <div className={styles.videoInner} data-node-id="162:6796">
          <img alt="" src={IMG.video} draggable={false} />
          <div className={styles.videoDim} aria-hidden />
        </div>
        <div className={styles.timeBadge} data-node-id="162:6797">
          <p data-node-id="162:6798">1:30:00</p>
        </div>
        <button type="button" className={styles.playBtn} data-node-id="162:6799" aria-label="Play">
          <span className={styles.playBtnInner}>
            <img alt="" src={IMG.play} draggable={false} />
          </span>
        </button>
        <button type="button" className={styles.muteBtn} data-node-id="162:6800" aria-label="Mute">
          <img alt="" src={IMG.volume} width={12} height={12} draggable={false} />
        </button>
        <button type="button" className={styles.maxBtn} data-node-id="162:6805" aria-label="Fullscreen">
          <img alt="" src={IMG.maximize} width={14} height={14} draggable={false} />
        </button>
      </div>

      <section className={styles.about} data-node-id="162:6870">
        <h3 data-node-id="162:6871">О чём вебинар</h3>
        <p data-node-id="162:6872">{ABOUT_COPY}</p>
      </section>

      <section className={styles.materials} data-node-id="162:6822">
        <h3 data-node-id="162:6823">Материалы к уроку</h3>
        <div className={styles.matRow} data-node-id="162:6824">
          <div className={styles.matCol} data-node-id="162:6826">
            <strong data-node-id="162:6827">Конспект вебинара</strong>
            <span data-node-id="162:6829">PDF · 580 КБ</span>
          </div>
          <div className={styles.docIcon} data-node-id="162:6830">
            <KnowledgeMaskedIcon
              innerSrc={IMG.docFill}
              size={24}
              maskPosition="-1.25px -1.25px"
              maskLayerInset="5.21%"
            />
          </div>
        </div>
        <div className={styles.matRow} data-node-id="162:6839">
          <div className={styles.matCol} data-node-id="162:6841">
            <strong data-node-id="162:6842">Схема «Стресс и ось HPA»</strong>
            <span data-node-id="162:6844">PDF · 1.2 МБ</span>
          </div>
          <div className={styles.docIcon} data-node-id="162:6845">
            <KnowledgeMaskedIcon
              innerSrc={IMG.docFill}
              size={24}
              maskPosition="-1.25px -1.25px"
              maskLayerInset="5.21%"
            />
          </div>
        </div>
        <div className={styles.matRow} data-node-id="162:6854">
          <div className={styles.matCol} data-node-id="162:6856">
            <strong data-node-id="162:6857">Список анализов при стрессе</strong>
            <span data-node-id="162:6859">PDF · 210 КБ</span>
          </div>
          <div className={styles.docIcon} data-node-id="162:6860">
            <KnowledgeMaskedIcon
              innerSrc={IMG.docFill}
              size={24}
              maskPosition="-1.25px -1.25px"
              maskLayerInset="5.21%"
            />
          </div>
        </div>
      </section>

      <Link href="/knowledge/course" className={styles.cta} data-node-id="162:6869">
        <p data-node-id="I162:6869;695:4435">Следующий урок</p>
      </Link>
    </div>
  );
}
