/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { ProfileFigmaStatusBar } from "@/components/figma-screens/profile-figma-status-bar";
import { NavigationBar } from "@/components/ui/navigation-bar";
import styles from "./news-feed-view.module.css";

const IMG = {
  avatar: "/icons/figma/6ed1e4a2db135fd6d0327378485ccc2850214972.png",
  videoThumb: "/icons/figma/3156bfc3c9d06488050d0b918c4ca45edf837246.png",
  videoOverlay: "/icons/figma/0a7fd89bb1d4272725979436a683fd384346b426.png",
  play: "/icons/figma/c4420e0204c2b880947e40571e1d7f010e2b337f.svg",
  volume: "/icons/figma/20e55e066c074176d8d9f031efdcf91847e6c109.svg",
  maximize: "/icons/figma/70e79035599380d9ec817870d700e716c01d946b.svg",
  heart1: "/icons/figma/f490cd8059d7c6543e81c3e18bb58df4f0c56fbb.svg",
  heart2: "/icons/figma/d005ccfe893219355ceca1058c43ce79f638b4bf.svg",
  heart3: "/icons/figma/8f72a50956abb11b1f841ec121f96f7d648bb3a5.svg",
  chat: "/icons/figma/fe80c14abe7c4f18dd4522f5fa8f6adb03b2e339.svg",
  more: "/icons/figma/2869f4c552e9f3add6a90cf05ce950e500844ba0.svg",
  /** Frame 69 / image 14 — left 0 */
  carouselA: "/icons/figma/47e24d39f7756bd01997d3d883aa2e8856947366.png",
  /** Frame 67 / unsplash — left 208 */
  carouselB: "/icons/figma/91b89d5a85bbe43d4a3fdecbb31e95a207547863.png",
  /** Frame 68 / image 13 — left 416 */
  carouselC: "/icons/figma/3d431f69cd1319d248f75b5ec17d72cb890f2adc.png",
} as const;

const STATUS_RIGHT = "/icons/figma/fff8b42c3c4d1c153ff0ab5d627fa1b8b3a7f0fc.svg";

function AuthorBlock({
  nameId,
  timeId,
  roleId,
  timeLabel,
}: {
  nameId: string;
  timeId: string;
  roleId: string;
  timeLabel: string;
}) {
  return (
    <div className={styles.authorRow}>
      <div className={styles.avatar}>
        <img alt="" src={IMG.avatar} className={styles.avatarImg} draggable={false} />
      </div>
      <div className={styles.authorMeta}>
        <div className={styles.nameRow}>
          <p className={styles.authorName} data-node-id={nameId}>
            Доктор Мария
          </p>
          <div className={styles.timeWrap}>
            <div className={styles.timeDot} aria-hidden />
            <p className={styles.timeText} data-node-id={timeId}>
              {timeLabel}
            </p>
          </div>
        </div>
        <div className={styles.rolePill}>
          <p className={styles.roleText} data-node-id={roleId}>
            Врач-гинеколог
          </p>
        </div>
      </div>
    </div>
  );
}

/** Figma 140:10199 — News Feed. */
export function NewsFeedView() {
  return (
    <div className={styles.root} data-node-id="140:10199">
      <ProfileFigmaStatusBar variant="ios125" rightSrc={STATUS_RIGHT} className={styles.status} />

      <header className={styles.head} data-node-id="142:13416">
        <div className={styles.headRow} data-node-id="140:10271" data-name="Header">
          <h1 className={styles.headTitle} data-node-id="I140:10271;568:1596">
            Лента
          </h1>
          <div className={styles.headSettings} data-node-id="I140:10271;568:1597" aria-hidden />
        </div>
        <p className={styles.headSub} data-node-id="140:10272">
          Клуб · Телеграм · Приложение
        </p>
      </header>

      {/* Video post — 141:12200 */}
      <article className={`${styles.card} ${styles.cardVideo}`} data-node-id="141:12200">
        <AuthorBlock nameId="141:12238" timeId="141:12240" roleId="141:12244" timeLabel="5ч назад" />
        <p className={styles.videoTitle} data-node-id="141:12202">
          5 признаков дефицита прогестерона
        </p>
        <div className={styles.videoWrap} data-node-id="141:12203">
          <div className={styles.videoThumb} data-node-id="141:12204">
            <img alt="" src={IMG.videoThumb} draggable={false} />
          </div>
          <div className={styles.videoDim} data-node-id="141:12205" aria-hidden>
            <div className={styles.videoDimOverlay} />
            <img alt="" src={IMG.videoOverlay} className={styles.videoDimImg} draggable={false} />
          </div>
          <div className={styles.timeBadge} data-node-id="141:12206">
            <p className={styles.timeBadgeText} data-node-id="141:12207">
              00:32
            </p>
          </div>
          <button type="button" className={styles.playBtn} data-node-id="141:12208" aria-label="Play">
            <span className={styles.playBtnInner}>
              <img alt="" src={IMG.play} width={28} height={28} draggable={false} />
            </span>
          </button>
          <button type="button" className={styles.muteBtn} data-node-id="141:12209" aria-label="Mute">
            <img alt="" src={IMG.volume} draggable={false} />
          </button>
        </div>
        <button type="button" className={styles.maxBtn} data-node-id="141:12214" aria-label="Fullscreen">
          <img alt="" src={IMG.maximize} draggable={false} />
        </button>
        <div className={styles.actionsRow} data-node-id="141:12220">
          <div className={styles.stats}>
            <div className={styles.statPair} data-node-id="142:13089">
              <div className={styles.statIcon} data-node-id="142:13090">
                <img src={IMG.heart2} alt="" draggable={false} />
              </div>
              <p className={styles.statText} data-node-id="142:13096">
                1.6к
              </p>
            </div>
            <div className={`${styles.statPair} ${styles.statPairSecond}`} data-node-id="142:13098">
              <div className={styles.statIcon} data-node-id="142:13099">
                <img src={IMG.chat} alt="" draggable={false} />
              </div>
              <p className={styles.statText} data-node-id="142:13108">
                200
              </p>
            </div>
          </div>
          <div className={styles.moreIcon} data-node-id="141:12228">
            <img src={IMG.more} alt="" data-node-id="142:13065" draggable={false} />
          </div>
        </div>
      </article>

      {/* Text post — 142:13173 */}
      <article className={`${styles.card} ${styles.cardText}`} data-node-id="142:13173">
        <AuthorBlock nameId="142:13225" timeId="142:13227" roleId="142:13231" timeLabel="6ч назад" />
        <p className={styles.textBody} data-node-id="142:13175">
          {`Уровень прогестерона во второй фазе цикла — один из ключевых показателей гормонального здоровья.  Если замечаете раздражительность, отёки и болезненность груди…`}
        </p>
        <Link href="/knowledge/course" className={styles.readMore} data-node-id="142:13233">
          Читать далее
        </Link>
        <div className={styles.actionsRow} data-node-id="142:13193">
          <div className={styles.stats}>
            <div className={styles.statPair} data-node-id="142:13195">
              <div className={styles.statIcon} data-node-id="142:13196">
                <img src={IMG.heart3} alt="" draggable={false} />
              </div>
              <p className={styles.statText} data-node-id="142:13202">
                1.8к
              </p>
            </div>
            <div className={`${styles.statPair} ${styles.statPairSecond}`} data-node-id="142:13203">
              <div className={styles.statIcon} data-node-id="142:13204">
                <img src={IMG.chat} alt="" draggable={false} />
              </div>
              <p className={styles.statText} data-node-id="142:13213">
                55
              </p>
            </div>
          </div>
          <div className={styles.moreIcon} data-node-id="142:13214">
            <img src={IMG.more} alt="" data-node-id="142:13215" draggable={false} />
          </div>
        </div>
      </article>

      {/* Carousel post — 142:13242 */}
      <article className={`${styles.card} ${styles.cardCarousel}`} data-node-id="142:13242">
        <AuthorBlock nameId="142:13277" timeId="142:13279" roleId="142:13283" timeLabel="Вчера" />
        <p className={styles.carouselTitle} data-node-id="142:13244">
          Схема женского цикла по фазам — сохрани себе! Покажу, как меняются гормоны на каждом этапе
        </p>
        <div className={styles.carouselStrip} data-node-id="142:13284">
          <div className={styles.carouselTile} data-node-id="142:13287">
            <div className={styles.carouselTileInner} data-node-id="142:13288">
              <img alt="" src={IMG.carouselA} className={styles.carouselImg} draggable={false} />
            </div>
          </div>
          <div className={styles.carouselTile} data-node-id="142:13289">
            <div className={styles.carouselTileInner} data-node-id="142:13290">
              <img alt="" src={IMG.carouselB} className={styles.carouselImg} draggable={false} />
            </div>
          </div>
          <div className={styles.carouselTile} data-node-id="142:13285">
            <div className={styles.carouselTileInner} data-node-id="142:13286">
              <img alt="" src={IMG.carouselC} className={styles.carouselImg} draggable={false} />
            </div>
          </div>
        </div>
        <div className={styles.actionsRow} data-node-id="142:13245">
          <div className={styles.stats}>
            <div className={styles.statPair} data-node-id="142:13247">
              <div className={styles.statIcon} data-node-id="142:13248">
                <img src={IMG.heart1} alt="" draggable={false} />
              </div>
              <p className={styles.statText} data-node-id="142:13254">
                1.6 k
              </p>
            </div>
            <div className={`${styles.statPair} ${styles.statPairSecond}`} data-node-id="142:13255">
              <div className={styles.statIcon} data-node-id="142:13256">
                <img src={IMG.chat} alt="" draggable={false} />
              </div>
              <p className={styles.statText} data-node-id="142:13265">
                200
              </p>
            </div>
          </div>
          <div className={styles.moreIcon} data-node-id="142:13266">
            <img src={IMG.more} alt="" data-node-id="142:13267" draggable={false} />
          </div>
        </div>
      </article>

      <NavigationBar active="feed" className={styles.nav} />
    </div>
  );
}
