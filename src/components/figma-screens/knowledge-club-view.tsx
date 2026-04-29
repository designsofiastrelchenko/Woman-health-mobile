/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { ProfileFigmaStatusBar } from "@/components/figma-screens/profile-figma-status-bar";
import { KnowledgeMaskedIcon } from "@/components/figma-screens/knowledge-masked-icon";
import { NavigationBar } from "@/components/ui/navigation-bar";
import styles from "./knowledge-club-view.module.css";

const IMG = {
  playFill: "/icons/figma/1aa6fcf8701f317c78898811522d486f6c787f77.svg",
  bookFill: "/icons/figma/b4600b1af47c8cd368b1032006cc0599c1ea554d.svg",
  note: "/icons/figma/913c03b054ed5a229445a6e4c2bcdaf737f66b98.svg",
  mic: "/icons/figma/8dba33902a512dac388032d720a48da0f2870061.svg",
  arrow: "/icons/figma/dc4508dc1ca821633c49c816fbd159e45cff5484.svg",
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

/** Figma 200:4540 — Knowledge / Exclusive Materials (Клуб). */
export function KnowledgeClubView() {
  return (
    <div className={styles.root} data-node-id="200:4540">
      <ProfileFigmaStatusBar variant="ios125" rightSrc={STATUS_RIGHT} className={styles.status} />

      <div className={styles.headBlock} data-node-id="200:4665">
        <div className={styles.headLeft} data-node-id="200:4966">
          <div className={styles.headRow} data-node-id="200:4666">
            <h1 className={styles.headTitle} data-node-id="I200:4666;568:1596">
              Клуб
            </h1>
            <div className={styles.headSettings} data-node-id="I200:4666;568:1597" aria-hidden />
          </div>
          <p className={styles.headSub} data-node-id="200:4667">
            248 участниц
          </p>
        </div>
        <Link href="/knowledge/club/chat" className={styles.chatPillOuter} data-node-id="200:4961">
          <span className={styles.chatPillInner} data-node-id="200:4962">
            <span className={styles.chatPillText} data-node-id="200:4963">
              Чат клуба
            </span>
          </span>
        </Link>
      </div>

      <div className={styles.search} data-node-id="200:4679">
        <div className={styles.searchIcon} data-node-id="200:4680">
          <img alt="" src={IMG.search} draggable={false} />
        </div>
        <p className={styles.searchPlaceholder} data-node-id="200:4683">
          Что вас интересует?
        </p>
      </div>

      <div className={styles.chipsScroll} data-node-id="200:4668">
        <div className={styles.chipsInner}>
          <div className={`${styles.chip} ${styles.chipActive}`} data-node-id="200:4669">
            <p className={`${styles.chipText} ${styles.chipTextActive}`} data-node-id="200:4670">
              Все
            </p>
          </div>
          <div className={`${styles.chip} ${styles.chipInactive}`} data-node-id="200:4671">
            <p className={`${styles.chipText} ${styles.chipTextInactive}`} data-node-id="200:4672">
              Чек-листы
            </p>
          </div>
          <div className={`${styles.chip} ${styles.chipInactive}`} data-node-id="200:4673">
            <p className={`${styles.chipText} ${styles.chipTextInactive}`} data-node-id="200:4674">
              Вебинары
            </p>
          </div>
          <div className={`${styles.chip} ${styles.chipInactive}`} data-node-id="200:4675">
            <p className={`${styles.chipText} ${styles.chipTextInactive}`} data-node-id="200:4676">
              Гайды
            </p>
          </div>
          <div className={`${styles.chip} ${styles.chipInactive}`} data-node-id="200:4677">
            <p className={`${styles.chipText} ${styles.chipTextInactive}`} data-node-id="200:4678">
              Шаблоны
            </p>
          </div>
        </div>
      </div>

      <div className={styles.table} data-node-id="200:4541">
        <Link href="/knowledge/webinar" className={styles.row} data-node-id="200:4542">
          <div className={styles.rowInner} data-node-id="200:4543">
            <div className={`${styles.iconBubble} ${styles.iconBubbleViolet}`} data-node-id="200:4544">
              <div className={styles.sax24} data-node-id="200:4545">
                <KnowledgeMaskedIcon
                  innerSrc={IMG.playFill}
                  size={24}
                  maskPosition="-1.97px -2px"
                  maskLayerInset="8.33% 8.46% 8.33% 8.21%"
                  innerImgInset="-3.75%"
                />
              </div>
            </div>
            <div className={styles.rowTextCol} data-node-id="200:4552">
              <p className={styles.rowTitle} data-node-id="200:4553">
                Стресс и цикл
              </p>
              <div className={styles.metaRow} data-node-id="200:4554">
                <div className={`${styles.badge} ${styles.badgeViolet}`} data-node-id="200:4555">
                  <p className={styles.badgeText} data-node-id="200:4556">
                    Вебинар
                  </p>
                </div>
                <p className={styles.metaMuted} data-node-id="200:4558">
                  Видео · 120 мин
                </p>
              </div>
            </div>
          </div>
          <ArrowRight />
        </Link>

        <div className={styles.row} data-node-id="200:4579">
          <div className={styles.rowInner} data-node-id="200:4580">
            <div className={`${styles.iconBubble} ${styles.iconBubbleWarm}`} data-node-id="200:4581">
              <div className={styles.sax24} data-node-id="200:4952">
                <KnowledgeMaskedIcon
                  innerSrc={IMG.bookFill}
                  size={24}
                  maskPosition="-1.26px -1.918px"
                  maskLayerInset="7.99% 5.25% 8% 5.25%"
                />
              </div>
            </div>
            <div className={styles.rowTextCol} data-node-id="200:4591">
              <p className={styles.rowTitle} data-node-id="200:4592">
                Дневник симптомов
              </p>
              <div className={styles.metaRow} data-node-id="200:4593">
                <div className={`${styles.badge} ${styles.badgeWarm}`} data-node-id="200:4594">
                  <p className={styles.badgeText} data-node-id="200:4595">
                    Шаблон
                  </p>
                </div>
                <p className={styles.metaMuted} data-node-id="200:4950">
                  10 стр · PDF
                </p>
              </div>
            </div>
          </div>
          <ArrowRight />
        </div>

        <Link href="/knowledge/guide" className={styles.row} data-node-id="200:4600">
          <div className={styles.rowInner} data-node-id="200:4601">
            <div className={`${styles.iconBubble} ${styles.iconBubbleGreen}`} data-node-id="200:4602">
              <div className={styles.sax24} data-node-id="200:4603">
                <KnowledgeMaskedIcon
                  innerSrc={IMG.note}
                  size={24}
                  maskPosition="-2.25px -1.25px"
                  maskLayerInset="5.21% 9.38%"
                />
              </div>
            </div>
            <div className={styles.rowTextCol} data-node-id="200:4613">
              <p className={styles.rowTitle} data-node-id="200:4614">
                Анализы на женские гормоны
              </p>
              <div className={styles.metaRow} data-node-id="200:4615">
                <div className={`${styles.badge} ${styles.badgeGreen}`} data-node-id="200:4616">
                  <p className={styles.badgeText} data-node-id="200:4617">
                    Гайд
                  </p>
                </div>
                <p className={styles.metaMuted} data-node-id="200:4619">
                  8 стр · PDF
                </p>
              </div>
            </div>
          </div>
          <ArrowRight />
        </Link>

        <div className={styles.row} data-node-id="200:4621">
          <div className={styles.rowInner} data-node-id="200:4622">
            <div className={`${styles.iconBubble} ${styles.iconBubbleGreen}`} data-node-id="200:4623">
              <div className={styles.sax24} data-node-id="200:4624">
                <KnowledgeMaskedIcon
                  innerSrc={IMG.note}
                  size={24}
                  maskPosition="-2.25px -1.25px"
                  maskLayerInset="5.21% 9.38%"
                />
              </div>
            </div>
            <div className={styles.rowTextCol} data-node-id="200:4634">
              <p className={styles.rowTitle} data-node-id="200:4635">
                Подготовка к ЭКО
              </p>
              <div className={styles.metaRow} data-node-id="200:4636">
                <div className={`${styles.badge} ${styles.badgeGreen}`} data-node-id="200:4637">
                  <p className={styles.badgeText} data-node-id="200:4638">
                    Чек-лист
                  </p>
                </div>
                <p className={styles.metaMuted} data-node-id="200:4640">
                  24 стр · PDF
                </p>
              </div>
            </div>
          </div>
          <ArrowRight />
        </div>

        <div className={styles.row} data-node-id="200:4642">
          <div className={styles.rowInner} data-node-id="200:4643">
            <div className={`${styles.iconBubble} ${styles.iconBubbleBlue}`} data-node-id="200:4644">
              <div className={styles.sax24} data-node-id="200:4645">
                <KnowledgeMaskedIcon
                  innerSrc={IMG.mic}
                  size={24}
                  maskPosition="-3.6px -1.25px"
                  maskLayerInset="5.21% 15%"
                />
              </div>
            </div>
            <div className={styles.rowTextCol} data-node-id="200:4655">
              <p className={styles.rowTitle} data-node-id="200:4656">
                Стресс и гормоны
              </p>
              <div className={styles.metaRow} data-node-id="200:4657">
                <div className={`${styles.badge} ${styles.badgeBlue}`} data-node-id="200:4658">
                  <p className={styles.badgeText} data-node-id="200:4659">
                    Подкаст
                  </p>
                </div>
                <p className={styles.metaMuted} data-node-id="200:4661">
                  Аудио · 25 мин
                </p>
              </div>
            </div>
          </div>
          <ArrowRight />
        </div>
      </div>

      <NavigationBar active="knowledge" className={styles.nav} />
    </div>
  );
}
