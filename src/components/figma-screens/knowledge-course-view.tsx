/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { IconArrowBack } from "@/components/figma-screens/icon-arrow-back";
import { KnowledgeMaskedIcon } from "@/components/figma-screens/knowledge-masked-icon";
import { ProfileFigmaStatusBar } from "@/components/figma-screens/profile-figma-status-bar";
import styles from "./knowledge-course-view.module.css";

const IMG = {
  thumb1: "/icons/figma/e4fee18d20be2cd6ccb819395654eb685748c9c9.png",
  thumb2: "/icons/figma/12e74b1149e500df936f5d903b94c2b863ed2c8f.png",
  thumb3: "/icons/figma/cad9063b650ece1ca8938fe6cd29038acb5dc1c8.png",
  thumb4: "/icons/figma/5e958d6a18ea03cd7ad781874ae136afdd7ab2f2.png",
  arrowWhite: "/icons/figma/1fcf2791bd261506ec5d367aa1c4705203efb096.svg",
  wave1: "/icons/figma/d0db789a5ca293048e53140bcaf4407a42fae4d1.svg",
  wave2: "/icons/figma/9fe5f4d4c510794a6a3d0ab7f5f82dc277c80fd9.svg",
  dot: "/icons/figma/1535809b43a1ae7b8a775f2df71ac1160ed547d0.svg",
  progress: "/icons/figma/f4813bc3a50070e0193ad6ed918396d460aaeb33.svg",
  checkO: "/icons/figma/d2fdd9ee2559b1c68123ef9795c227de60f53b6c.svg",
  checkI: "/icons/figma/2629bbf5a0fe53d0736b6d8ff0811dd3873d3dc2.svg",
  clockMask: "/icons/figma/f879ab38295f0d0fb666551c6edc7727f15b4df6.svg",
  clockFill: "/icons/figma/68cd96e6a077df0572f268597f7cf0b8a3a09c59.svg",
} as const;

const STATUS_RIGHT = "/icons/figma/fff8b42c3c4d1c153ff0ab5d627fa1b8b3a7f0fc.svg";

function GoArrow() {
  return (
    <div className={styles.goGreen}>
      <img alt="" src={IMG.arrowWhite} width={18} height={18} draggable={false} />
    </div>
  );
}

function GoArrowGray() {
  return (
    <div className={styles.goGray}>
      <img alt="" src={IMG.arrowWhite} width={18} height={18} draggable={false} />
    </div>
  );
}

function Check18() {
  return (
    <div className={styles.lessonIconGreen}>
      <div className={styles.clock18} style={{ position: "relative" }}>
        <img
          alt=""
          src={IMG.checkO}
          draggable={false}
          style={{
            position: "absolute",
            inset: "8.33%",
            width: "auto",
            height: "auto",
            maxWidth: "none",
          }}
        />
        <img
          alt=""
          src={IMG.checkI}
          draggable={false}
          style={{
            position: "absolute",
            top: "37.5%",
            left: "33.33%",
            right: "33.33%",
            bottom: "37.5%",
            maxWidth: "none",
          }}
        />
      </div>
    </div>
  );
}

function Clock18() {
  return (
    <div className={styles.lessonIconYellow}>
      <div className={styles.clock18}>
        <KnowledgeMaskedIcon
          maskSrc={IMG.clockMask}
          innerSrc={IMG.clockFill}
          size={18}
          maskPosition="-0.938px -0.938px"
          maskLayerInset="5.21%"
        />
      </div>
    </div>
  );
}

/** Figma 157:3784 — Knowledge / Course. */
export function KnowledgeCourseView() {
  return (
    <div className={styles.root} data-node-id="157:3784">
      <ProfileFigmaStatusBar variant="ios125" rightSrc={STATUS_RIGHT} className={styles.status} />

      <header className={styles.header} data-node-id="157:3982">
        <IconArrowBack href="/knowledge" />
        <h1 className={styles.headerTitle} data-node-id="I157:3982;568:1596">
          Курс
        </h1>
        <div className={styles.headerSpacer} data-node-id="I157:3982;568:1597" aria-hidden />
      </header>

      <div className={styles.banner} data-node-id="157:5249">
        <div className={styles.bannerWave1} data-node-id="157:5250">
          <img alt="" src={IMG.wave1} draggable={false} />
        </div>
        <div className={styles.bannerWave2} data-node-id="157:5251">
          <img alt="" src={IMG.wave2} draggable={false} />
        </div>
        <div className={styles.bannerCopy} data-node-id="162:7195">
          <div className={styles.bannerTitle} data-node-id="157:5253">
            <p style={{ margin: 0, lineHeight: "22px" }}>Ещё немного </p>
            <p style={{ margin: 0, lineHeight: "22px" }}>и курс завершён!</p>
          </div>
          <div className={styles.bannerMeta} data-node-id="162:7194">
            <p data-node-id="162:7192">Пройдено 7/9</p>
            <div className={styles.dot3} data-node-id="162:7196">
              <img alt="" src={IMG.dot} draggable={false} />
            </div>
            <p data-node-id="162:7193">Осталось 2 урока</p>
          </div>
        </div>
        <div className={styles.progressRing} data-node-id="157:5256">
          <img alt="" src={IMG.progress} draggable={false} />
        </div>
        <div className={styles.progressLabel} data-node-id="157:5259">
          <p className={styles.pct} data-node-id="157:5260">
            78%
          </p>
          <p className={styles.pctSub} data-node-id="157:5261">
            Урок 3.2
          </p>
        </div>
      </div>

      <div className={styles.tableWrap} data-node-id="157:4019">
        <p className={styles.sectionTitle} data-node-id="157:4021">
          Гормоны женского здоровья
        </p>
        <div className={styles.table} data-node-id="157:4023">
          <div className={`${styles.row} ${styles.rowH80}`} data-node-id="157:4024">
            <div className={styles.thumb} data-node-id="157:4025">
              <img alt="" src={IMG.thumb1} draggable={false} />
            </div>
            <div className={styles.rowText} data-node-id="157:4181">
              <p className={styles.rowTitle} data-node-id="157:4182">
                Гормонология
              </p>
              <p className={styles.rowSub} data-node-id="157:4185">
                2 урока
              </p>
            </div>
            <GoArrow />
          </div>

          <div className={`${styles.row} ${styles.rowH80}`} data-node-id="157:4349">
            <div className={styles.thumb} data-node-id="157:4350">
              <img alt="" src={IMG.thumb2} draggable={false} />
            </div>
            <div className={styles.rowText} data-node-id="157:4626">
              <p className={styles.rowTitle} data-node-id="157:4627">
                Половые гормоны
              </p>
              <p className={styles.rowSub} data-node-id="157:4630">
                3 урока
              </p>
            </div>
            <GoArrow />
          </div>

          <div className={`${styles.row} ${styles.rowH196}`} data-node-id="157:4633">
            <div className={styles.thumb} data-node-id="157:4634">
              <img alt="" src={IMG.thumb3} draggable={false} />
            </div>
            <div className={styles.rowText} data-node-id="157:4809">
              <p className={styles.rowTitle} data-node-id="157:4810">
                Щитовидная железа
              </p>
              <p className={styles.rowSub} data-node-id="157:4813">
                2 урока
              </p>
            </div>
            <div className={styles.expandArrowOuter} data-node-id="157:4814">
              <div className={styles.expandArrowRot}>
                <div className={styles.expandArrowBubble}>
                  <img alt="" src={IMG.arrowWhite} width={18} height={18} draggable={false} />
                </div>
              </div>
            </div>
            <div className={`${styles.lessonRow} ${styles.lessonRow1}`} data-node-id="157:5519">
              <Check18 />
              <div className={styles.lessonTextCol} data-node-id="157:5481">
                <p className={styles.lessonTitle} data-node-id="157:5482">
                  Эстроген: функции и дефицит
                </p>
                <p className={styles.lessonDur} data-node-id="157:5484">
                  22 мин
                </p>
              </div>
            </div>
            <div className={`${styles.lessonRow} ${styles.lessonRow2}`} data-node-id="157:5521">
              <Clock18 />
              <div className={styles.lessonTextCol} data-node-id="157:5524">
                <p className={styles.lessonTitle} data-node-id="157:5525">
                  Тестостерон у женщин
                </p>
                <p className={styles.lessonDur} data-node-id="157:5527">
                  15 мин
                </p>
              </div>
            </div>
          </div>

          <div className={`${styles.row} ${styles.rowH80}`} data-node-id="157:4816">
            <div className={styles.thumb} data-node-id="157:4817">
              <img alt="" src={IMG.thumb4} draggable={false} />
            </div>
            <div className={styles.rowText} data-node-id="157:4902">
              <p className={styles.rowTitle} data-node-id="157:4903">
                Надпочечники и стресс
              </p>
              <p className={styles.rowSub} data-node-id="157:4906">
                2 урока
              </p>
            </div>
            <GoArrowGray />
          </div>
        </div>
      </div>

      <Link href="/knowledge/lesson" className={styles.cta} data-node-id="157:3990">
        <p className={styles.ctaText} data-node-id="I157:3990;695:4435">
          Продолжить: Урок 2.3
        </p>
      </Link>
    </div>
  );
}
