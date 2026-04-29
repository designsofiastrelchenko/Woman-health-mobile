/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { ProfileFigmaStatusBar } from "@/components/figma-screens/profile-figma-status-bar";
import { KnowledgeMaskedIcon } from "@/components/figma-screens/knowledge-masked-icon";
import { NavigationBar } from "@/components/ui/navigation-bar";
import styles from "./knowledge-list-view.module.css";

const IMG = {
  playFill: "/icons/figma/1aa6fcf8701f317c78898811522d486f6c787f77.svg",
  users: "/icons/figma/2c61c5c280eeca9bb7fc9a4d25d15bd636f8b1f5.svg",
  note: "/icons/figma/913c03b054ed5a229445a6e4c2bcdaf737f66b98.svg",
  mic: "/icons/figma/8dba33902a512dac388032d720a48da0f2870061.svg",
  arrow: "/icons/figma/dc4508dc1ca821633c49c816fbd159e45cff5484.svg",
  checkO: "/icons/figma/547d9b794b099e2dbeecf7e5173d3239c4986570.svg",
  checkI: "/icons/figma/f5a34a7506cb0b35939de148c59497d0ac76ab77.svg",
  search: "/icons/figma/27d9b915f2687d2a1080d9aba17ec095e811b79d.svg",
} as const;

const STATUS_RIGHT = "/icons/figma/fff8b42c3c4d1c153ff0ab5d627fa1b8b3a7f0fc.svg";

function ArrowRight() {
  return (
    <div className={styles.arrow24} data-name="icon / arrow - right">
      <div className={styles.arrowVec}>
        <img alt="" src={IMG.arrow} draggable={false} />
      </div>
    </div>
  );
}

function Check14() {
  return (
    <div className={styles.check14} data-name="icon / check">
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
          transform: "scale(1.08)",
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
  );
}

/** Figma 140:10057 — Knowledge. */
export function KnowledgeListView() {
  return (
    <div className={styles.root} data-node-id="140:10057">
      <ProfileFigmaStatusBar variant="ios125" rightSrc={STATUS_RIGHT} className={styles.status} />

      <header className={styles.head} data-node-id="151:2680">
        <div className={styles.headRow} data-node-id="140:10129">
          <h1 className={styles.headTitle} data-node-id="I140:10129;568:1596">
            Мои продукты
          </h1>
          <div className={styles.headSettings} data-node-id="I140:10129;568:1597" aria-hidden />
        </div>
        <p className={styles.headSub} data-node-id="140:10130">
          6 активных доступа
        </p>
      </header>

      <div className={styles.search} data-node-id="186:3388">
        <div className={styles.searchIcon} data-node-id="186:3402">
          <img alt="" src={IMG.search} draggable={false} />
        </div>
        <p className={styles.searchPlaceholder} data-node-id="186:3390">
          Что вас интересует?
        </p>
      </div>

      <div className={styles.chips} data-node-id="186:3384">
        <div className={`${styles.chip} ${styles.chipActive}`} data-node-id="186:3376">
          <p className={`${styles.chipText} ${styles.chipTextActive}`} data-node-id="186:3377">
            Все
          </p>
        </div>
        <div className={`${styles.chip} ${styles.chipInactive}`} data-node-id="186:3385">
          <p className={`${styles.chipText} ${styles.chipTextInactive}`} data-node-id="186:3386">
            Курсы
          </p>
        </div>
        <div className={`${styles.chip} ${styles.chipInactive}`} data-node-id="186:3378">
          <p className={`${styles.chipText} ${styles.chipTextInactive}`} data-node-id="186:3379">
            Вебинары
          </p>
        </div>
        <div className={`${styles.chip} ${styles.chipInactive}`} data-node-id="186:3380">
          <p className={`${styles.chipText} ${styles.chipTextInactive}`} data-node-id="186:3381">
            Гайды
          </p>
        </div>
        <div className={`${styles.chip} ${styles.chipInactive}`} data-node-id="186:3382">
          <p className={`${styles.chipText} ${styles.chipTextInactive}`} data-node-id="186:3383">
            Клуб
          </p>
        </div>
      </div>

      <div className={styles.table} data-node-id="151:3508">
        <Link href="/knowledge/course" className={styles.row} data-node-id="151:3509">
          <div className={styles.rowInner} data-node-id="151:3510">
            <div className={`${styles.iconBubble} ${styles.iconBubbleViolet}`} data-node-id="151:3511">
              <div className={styles.sax24} data-node-id="151:3711">
                <KnowledgeMaskedIcon
                  innerSrc={IMG.playFill}
                  size={24}
                  maskPosition="-1.97px -2px"
                  maskLayerInset="8.33% 8.46% 8.33% 8.21%"
                  innerImgInset="-3.75%"
                />
              </div>
            </div>
            <div className={styles.rowTextCol} data-node-id="151:3515">
              <p className={styles.rowTitle} data-node-id="151:3516">
                Гормоны женского здоровья
              </p>
              <div className={styles.metaRow} data-node-id="151:3582">
                <div className={`${styles.badge} ${styles.badgeViolet}`} data-node-id="151:3583">
                  <p className={styles.badgeText} data-node-id="151:3584">
                    Курс
                  </p>
                </div>
                <p className={styles.metaMuted} data-node-id="151:3586">
                  78% пройдено · 9 уроков
                </p>
              </div>
            </div>
          </div>
          <ArrowRight />
        </Link>

        <Link href="/knowledge/course" className={styles.row} data-node-id="151:3520">
          <div className={styles.rowInner} data-node-id="151:3521">
            <div className={`${styles.iconBubble} ${styles.iconBubbleViolet}`} data-node-id="151:3719">
              <div className={styles.sax24} data-node-id="151:3720">
                <KnowledgeMaskedIcon
                  innerSrc={IMG.playFill}
                  size={24}
                  maskPosition="-1.97px -2px"
                  maskLayerInset="8.33% 8.46% 8.33% 8.21%"
                  innerImgInset="-3.75%"
                />
              </div>
            </div>
            <div className={styles.rowTextCol} data-node-id="151:3528">
              <p className={styles.rowTitle} data-node-id="151:3529">
                Всё о менструальном цикле
              </p>
              <div className={styles.metaRow} data-node-id="151:3597">
                <div className={`${styles.badge} ${styles.badgeViolet}`} data-node-id="151:3598">
                  <p className={styles.badgeText} data-node-id="151:3599">
                    Курс
                  </p>
                </div>
                <div className={styles.metaWithCheckWide} data-node-id="151:3600">
                  <Check14 />
                  <p className={styles.metaMuted} data-node-id="151:3602">
                    {" "}
                    Завершён
                  </p>
                </div>
              </div>
            </div>
          </div>
          <ArrowRight />
        </Link>

        <Link href="/knowledge/club" className={styles.row} data-node-id="151:3533">
          <div className={styles.rowInner} data-node-id="151:3534">
            <div className={`${styles.iconBubble} ${styles.iconBubbleWarm}`} data-node-id="151:3535">
              <div className={styles.sax24} data-node-id="151:3693">
                <KnowledgeMaskedIcon
                  innerSrc={IMG.users}
                  size={24}
                  maskPosition="-1.6px -1.25px"
                  maskLayerInset="5.21% 7.38% 6.04% 6.67%"
                />
              </div>
            </div>
            <div className={styles.rowTextCol} data-node-id="151:3547">
              <p className={styles.rowTitle} data-node-id="151:3548">
                Клуб Женского Здоровья
              </p>
              <div className={styles.metaRow} data-node-id="151:3606">
                <div className={`${styles.badge} ${styles.badgeWarm}`} data-node-id="151:3607">
                  <p className={styles.badgeText} data-node-id="151:3608">
                    Клуб
                  </p>
                </div>
                <div className={styles.metaWithCheck} data-node-id="151:3609" style={{ gap: "2px" }}>
                  <Check14 />
                  <p className={styles.metaMuted} data-node-id="151:3611">
                    Активен
                  </p>
                </div>
              </div>
            </div>
          </div>
          <ArrowRight />
        </Link>

        <div className={styles.row} data-node-id="151:3552">
          <div className={styles.rowInner} data-node-id="151:3553">
            <div className={`${styles.iconBubble} ${styles.iconBubbleGreen}`} data-node-id="151:3554">
              <div className={styles.sax24} data-node-id="151:3682">
                <KnowledgeMaskedIcon
                  innerSrc={IMG.note}
                  size={24}
                  maskPosition="-2.25px -1.25px"
                  maskLayerInset="5.21% 9.38%"
                />
              </div>
            </div>
            <div className={styles.rowTextCol} data-node-id="151:3562">
              <p className={styles.rowTitle} data-node-id="151:3563">
                Питание при СПКЯ
              </p>
              <div className={styles.metaRow} data-node-id="151:3615">
                <div className={`${styles.badge} ${styles.badgeGreen}`} data-node-id="151:3616">
                  <p className={styles.badgeText} data-node-id="151:3617">
                    Гайд
                  </p>
                </div>
                <p className={styles.metaMuted} data-node-id="151:3619">
                  8 стр · PDF
                </p>
              </div>
            </div>
          </div>
          <ArrowRight />
        </div>

        <Link href="/knowledge/guide" className={styles.row} data-node-id="151:3567">
          <div className={styles.rowInner} data-node-id="151:3568">
            <div className={`${styles.iconBubble} ${styles.iconBubbleGreen}`} data-node-id="151:3728">
              <div className={styles.sax24} data-node-id="151:3729">
                <KnowledgeMaskedIcon
                  innerSrc={IMG.note}
                  size={24}
                  maskPosition="-2.25px -1.25px"
                  maskLayerInset="5.21% 9.38%"
                />
              </div>
            </div>
            <div className={styles.rowTextCol} data-node-id="151:3571">
              <p className={styles.rowTitle} data-node-id="151:3572">
                Как читать анализы
              </p>
              <div className={styles.metaRow} data-node-id="151:3633">
                <div className={`${styles.badge} ${styles.badgeGreen}`} data-node-id="151:3634">
                  <p className={styles.badgeText} data-node-id="151:3635">
                    Гайд
                  </p>
                </div>
                <p className={styles.metaMuted} data-node-id="151:3637">
                  24 стр · PDF
                </p>
              </div>
            </div>
          </div>
          <ArrowRight />
        </Link>

        <Link href="/knowledge/webinar" className={styles.row} data-node-id="151:3639">
          <div className={styles.rowInner} data-node-id="151:3640">
            <div className={`${styles.iconBubble} ${styles.iconBubbleBlue}`} data-node-id="151:3641">
              <div className={styles.sax24} data-node-id="151:3660">
                <KnowledgeMaskedIcon
                  innerSrc={IMG.mic}
                  size={24}
                  maskPosition="-3.6px -1.25px"
                  maskLayerInset="5.21% 15%"
                />
              </div>
            </div>
            <div className={styles.rowTextCol} data-node-id="151:3643">
              <p className={styles.rowTitle} data-node-id="151:3644">
                Стресс и гормоны
              </p>
              <div className={styles.metaRow} data-node-id="151:3654">
                <div className={`${styles.badge} ${styles.badgeBlue}`} data-node-id="151:3655">
                  <p className={styles.badgeText} data-node-id="151:3656">
                    Вебинар
                  </p>
                </div>
                <p className={styles.metaMuted} data-node-id="151:3658">
                  Видео · 90 мин
                </p>
              </div>
            </div>
          </div>
          <ArrowRight />
        </Link>
      </div>

      <NavigationBar active="knowledge" className={styles.nav} />
    </div>
  );
}
