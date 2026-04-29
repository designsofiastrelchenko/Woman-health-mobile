import Link from "next/link";
import { IconArrowBack } from "@/components/figma-screens/icon-arrow-back";
import { KnowledgeMaskedIcon } from "@/components/figma-screens/knowledge-masked-icon";
import { ProfileFigmaStatusBar } from "@/components/figma-screens/profile-figma-status-bar";
import styles from "./knowledge-guide-view.module.css";

const IMG = {
  clockFill: "/icons/figma/9cbafc9bcf8c9a5938a19f477fafcea5c6b8f44e.svg",
  docFill: "/icons/figma/f21f842a9350a0bedab391dd3c833ee0760e7019.svg",
  noteMask: "/icons/figma/45623ff455e640ac2e1d6d68fa4c2eaa5c4b8a61.svg",
  noteFill: "/icons/figma/2167aebc11c4c87c84019e50dad66c3afb5256a8.svg",
} as const;

const STATUS_RIGHT = "/icons/figma/fff8b42c3c4d1c153ff0ab5d627fa1b8b3a7f0fc.svg";

/** Figma 162:6643 — Knowledge / Guide. */
export function KnowledgeGuideView() {
  return (
    <div className={styles.root} data-node-id="162:6643">
      <ProfileFigmaStatusBar variant="ios125" rightSrc={STATUS_RIGHT} className={styles.status} />

      <header className={styles.header} data-node-id="162:6645">
        <IconArrowBack href="/knowledge" />
        <h1 className={styles.headerTitle} data-node-id="I162:6645;568:1596">
          Гайд
        </h1>
        <div className={styles.headerSpacer} data-node-id="I162:6645;568:1597" aria-hidden />
      </header>

      <div className={styles.titleCard} data-node-id="162:6663">
        <h2 data-node-id="162:6664">Как читать анализы</h2>
        <div className={styles.metaRow} data-node-id="162:6665">
          <div className={styles.sax24} data-node-id="162:6666">
            <KnowledgeMaskedIcon
              innerSrc={IMG.clockFill}
              size={24}
              maskPosition="-1.25px -1.25px"
              maskLayerInset="5.21%"
            />
          </div>
          <p data-node-id="162:6673">24 страницы</p>
        </div>
      </div>

      <div className={styles.preview} data-node-id="162:6761">
        <div className={styles.previewBg} data-node-id="162:6763" />
        <div className={styles.note48} data-node-id="162:6780">
          <KnowledgeMaskedIcon
            maskSrc={IMG.noteMask}
            innerSrc={IMG.noteFill}
            size={48}
            maskPosition="-4.5px -2.5px"
            maskLayerInset="5.21% 9.38%"
          />
        </div>
      </div>

      <section className={styles.about} data-node-id="162:6751">
        <h3 data-node-id="162:6752">О гайде</h3>
        <p data-node-id="162:6753">
          {`Практическое руководство по интерпретации женских гормональных анализов. Каждый гормон — с нормами, объяснением функций `}
          <br />
          и рекомендациями по дню цикла для сдачи
        </p>
      </section>

      <div className={styles.downloadRow} data-node-id="162:6706">
        <div className={styles.downloadCol} data-node-id="162:6708">
          <strong data-node-id="162:6709">Как читать анализы</strong>
          <span data-node-id="162:6711">PDF · 210 КБ</span>
        </div>
        <div className={styles.docIcon} data-node-id="162:6712">
          <KnowledgeMaskedIcon
            innerSrc={IMG.docFill}
            size={24}
            maskPosition="-1.25px -1.25px"
            maskLayerInset="5.21%"
          />
        </div>
      </div>

      <Link href="/knowledge" className={styles.cta} data-node-id="162:6721">
        <p data-node-id="I162:6721;695:4435">Читать онлайн</p>
      </Link>
    </div>
  );
}
