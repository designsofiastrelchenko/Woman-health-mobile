/* eslint-disable @next/next/no-img-element */
import { IconArrowBack } from "@/components/figma-screens/icon-arrow-back";
import { KnowledgeMaskedIcon } from "@/components/figma-screens/knowledge-masked-icon";
import { ProfileFigmaStatusBar } from "@/components/figma-screens/profile-figma-status-bar";
import styles from "./knowledge-club-chat-view.module.css";

const IMG = {
  statusRight: "/icons/figma/7583d06de40229752e21156f8a542c09e9ffb2ce.svg",
  plus: "/icons/figma/8ff53fa8cd1a5a478aa778808a2473e739e2fa82.svg",
  lineCaret: "/icons/figma/df4dd903635aeafa6856d789d7c5fad5a118a118.svg",
  sendFill: "/icons/figma/17074aefeb1eb263e9f45c1e2d2aba2e469c527f.svg",
  playMask: "/icons/figma/329d600c34e04aaae00fe7283e2d7bae1ccd2630.svg",
  playFill: "/icons/figma/37f7008b1caf79e51649319b08a8cf70fc750aac.svg",
  placeholder: "/icons/figma/71ca954b1e6756d7f3aa4f0d2a2abc02d94396a5.png",
  avatar1: "/icons/figma/cf9f206d6f968622ca88595df0889524ff6db331.png",
  avatar2: "/icons/figma/f30deecad038106e7331a3f97a5309deaffcdf34.png",
  avatar3: "/icons/figma/6ed1e4a2db135fd6d0327378485ccc2850214972.png",
  lineDivider: "/icons/figma/7aac1fa77042248b8867e0b7668e3491bc468599.svg",
} as const;

const SOUND_HEIGHTS = [5, 15, 19, 15, 21, 13, 17, 9, 21, 5, 15, 19, 15, 21, 13, 21, 13];

/** Figma 145:14078 — Knowledge / Exclusive Materials / Chat. */
export function KnowledgeClubChatView() {
  return (
    <div className={styles.root} data-node-id="145:14078">
      <ProfileFigmaStatusBar variant="ios125" rightSrc={IMG.statusRight} className={styles.status} />

      <header className={styles.header} data-node-id="145:14295">
        <IconArrowBack href="/knowledge/club" />
        <h1 className={styles.headerTitle} data-node-id="I145:14295;568:1596">
          Общий чат клуба
        </h1>
        <div className={styles.headerSpacer} data-node-id="I145:14295;568:1597" aria-hidden />
      </header>

      <div className={`${styles.bubbleLeft} ${styles.b1}`} data-node-id="147:2394">
        <p className={styles.bubbleAuthor} data-node-id="147:2398">
          Доктор Мария
        </p>
        <div className={styles.bubbleImg} data-node-id="147:2395">
          <img alt="" src={IMG.placeholder} draggable={false} />
        </div>
        <p className={styles.bubbleBody} data-node-id="147:2396">
          Сегодня было очень мягко 💜
        </p>
        <p className={styles.bubbleTime} data-node-id="147:2397">
          16.46
        </p>
      </div>

      <div className={`${styles.avatar} ${styles.av1}`} data-node-id="146:14525">
        <img alt="" src={IMG.avatar1} draggable={false} />
      </div>

      <div className={`${styles.bubbleLeft} ${styles.b2}`} data-node-id="147:2400">
        <p className={styles.bubbleAuthor} data-node-id="147:2408">
          Ирина Кузнецова
        </p>
        <div className={styles.replyWrap} data-node-id="147:2401">
          <div className={styles.replyBar} data-node-id="147:2402" aria-hidden />
          <div className={styles.replyInner} data-node-id="147:2403">
            <p className={styles.replyYou} data-node-id="147:2404">
              Ты
            </p>
            <p className={styles.replyText} data-node-id="147:2405">
              Я тоже хочу попробовать
            </p>
          </div>
        </div>
        <p className={styles.bubbleBody} data-node-id="147:2406">
          Конечно, начинай в удобном темпе
        </p>
        <p className={styles.bubbleTime} data-node-id="147:2407">
          16.46
        </p>
      </div>

      <div className={`${styles.avatar} ${styles.av2}`} data-node-id="146:14527">
        <img alt="" src={IMG.avatar2} draggable={false} />
      </div>

      <div className={`${styles.bubbleOut} ${styles.bubbleOutPlain} ${styles.out1}`} data-node-id="147:2410">
        <p className={styles.bubbleOutText} data-node-id="147:2411">
          Я уже в пути, девчонки
        </p>
        <p className={styles.bubbleOutMeta} data-node-id="147:2412">
          16.50 · Просмотрено
        </p>
      </div>

      <div className={styles.audioBubble} data-node-id="157:3752">
        <div className={styles.audioDoc} data-node-id="162:8328">
          <div className={styles.audioPlayRow} data-node-id="162:8329">
            <div className={styles.play16} data-node-id="162:8330">
              <KnowledgeMaskedIcon
                maskSrc={IMG.playMask}
                innerSrc={IMG.playFill}
                size={16}
                maskPosition="-2.167px -1.82px"
                maskLayerInset="11.38% 13.5% 11.33% 13.54%"
              />
            </div>
            <p className={styles.audioDur} data-node-id="162:8336">
              0:20
            </p>
          </div>
          <div className={styles.soundBars} data-node-id="162:8337">
            {SOUND_HEIGHTS.map((h, i) => (
              <span key={i} className={styles.soundBar} style={{ height: `${h}px` }} />
            ))}
          </div>
        </div>
        <p className={styles.bubbleOutMeta} data-node-id="157:3775">
          09.13 · Просмотрено
        </p>
      </div>

      <div className={styles.divider} data-node-id="146:14517">
        <div className={styles.dividerLine} data-node-id="146:14518">
          <img alt="" src={IMG.lineDivider} draggable={false} />
        </div>
        <p className={styles.dividerText} data-node-id="146:14519">
          Сегодня
        </p>
        <div className={styles.dividerLine} data-node-id="146:14520">
          <img alt="" src={IMG.lineDivider} draggable={false} />
        </div>
      </div>

      <div className={`${styles.bubbleLeft} ${styles.b3}`} data-node-id="147:2417">
        <p className={styles.bubbleAuthor} data-node-id="147:2420">
          Юлия Годунова
        </p>
        <p className={styles.b3body} data-node-id="147:2418">
          {`Попробуйте мягче, без усилия \nи главное — не торопиться`}
        </p>
        <p className={styles.bubbleTime} data-node-id="147:2419">
          09.45
        </p>
      </div>

      <div className={`${styles.avatar} ${styles.av3}`} data-node-id="146:14529">
        <img alt="" src={IMG.avatar3} draggable={false} />
      </div>

      <div className={styles.composer} data-node-id="145:14303">
        <button type="button" className={styles.plusBtn} aria-label="Добавить" data-node-id="146:14333">
          <img alt="" src={IMG.plus} width={20} height={20} draggable={false} />
        </button>
        <div className={styles.inputShell} data-node-id="148:2665">
          <div className={styles.inputRow} data-node-id="148:2666">
            <p className={styles.inputPlaceholder} data-node-id="148:2668">
              Ты точно пра
            </p>
            <span className={styles.inputCaret} data-node-id="148:2669">
              <img alt="" src={IMG.lineCaret} draggable={false} />
            </span>
          </div>
        </div>
        <div className={styles.sendWrap} data-node-id="146:14454">
          <KnowledgeMaskedIcon
            innerSrc={IMG.sendFill}
            size={24}
            maskPosition="-2.293px -2.242px"
            maskLayerInset="9.34% 9.58% 9.38% 9.55%"
          />
        </div>
      </div>
    </div>
  );
}
