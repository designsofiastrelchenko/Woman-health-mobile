/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { ChevronRightIcon } from "@/components/figma-screens/chevron-right-icon";
import { IconArrowBack } from "@/components/figma-screens/icon-arrow-back";
import { ProfileFigmaStatusBar } from "@/components/figma-screens/profile-figma-status-bar";
import styles from "./deficit-calculator-result-view.module.css";

const STATUS_RIGHT = "/icons/figma/fff8b42c3c4d1c153ff0ab5d627fa1b8b3a7f0fc.svg";
const WAVE1 = "/icons/figma/d0db789a5ca293048e53140bcaf4407a42fae4d1.svg";
const WAVE2 = "/icons/figma/9fe5f4d4c510794a6a3d0ab7f5f82dc277c80fd9.svg";
const DOT = "/icons/figma/1535809b43a1ae7b8a775f2df71ac1160ed547d0.svg";

/** Figma 169:11589 — Deficit calculator / Result. */
export function DeficitCalculatorResultView() {
  return (
    <div className={styles.root} data-node-id="169:11589">
      <ProfileFigmaStatusBar variant="ios125" rightSrc={STATUS_RIGHT} className={styles.status} />

      <header className={styles.header} data-node-id="169:11591">
        <IconArrowBack href="/trackers/deficit-calculator/step-2" label="Назад" />
        <h1 className={styles.headerTitle} data-node-id="I169:11591;568:1596">
          Калькулятор дефицитов
        </h1>
        <div className={styles.headerGhost} aria-hidden data-node-id="I169:11591;568:1597" />
      </header>

      <div className={styles.banner} data-node-id="169:12001">
        <div className={styles.wave1} data-node-id="169:12002">
          <img alt="" src={WAVE1} draggable={false} />
        </div>
        <div className={styles.wave2} data-node-id="169:12003">
          <img alt="" src={WAVE2} draggable={false} />
        </div>
        <div className={styles.bannerContent} data-node-id="169:12005">
          <div className={styles.metaRow} data-node-id="169:12007">
            <p data-node-id="169:12008">Выбрано симптомов: 2</p>
            <div className={styles.dot} data-node-id="169:12009">
              <img alt="" src={DOT} draggable={false} />
            </div>
            <p data-node-id="169:12010">Анализ завершён</p>
          </div>
          <p className={styles.bannerTitle} data-node-id="169:12006">
            4 возможных дефицита
          </p>
          <p className={styles.bannerNote} data-node-id="169:12017">
            Это ориентировочный анализ,{"\n"}
            не диагноз. Для точных данных сдайте анализы!
          </p>
        </div>
      </div>

      <div className={styles.table} data-node-id="169:12036">
        <div className={styles.rowSimple} data-node-id="169:12037">
          <div className={styles.rowLeft} data-node-id="169:12038">
            <div className={styles.rank} data-node-id="169:12039">
              <p data-node-id="169:12338">#1</p>
            </div>
            <div className={styles.col} data-node-id="169:12043">
              <p className={styles.title12} data-node-id="169:12044">
                Витамин D₃
              </p>
              <p className={styles.body10} data-node-id="169:12046">
                Усталость · Частые ОРВИ · Боли{"\n"}в суставах
              </p>
            </div>
          </div>
          <span className={styles.chevron}>
            <ChevronRightIcon />
          </span>
        </div>

        <div className={styles.cardExpand} data-node-id="169:12048">
          <div className={styles.expandHead} data-node-id="169:12383">
            <div className={styles.rowLeft} data-node-id="169:12049">
              <div className={`${styles.rank} ${styles.rankTight}`} data-node-id="169:12340">
                <p data-node-id="169:12341">#2</p>
              </div>
              <div className={styles.col} data-node-id="169:12056">
                <p className={styles.title12} data-node-id="169:12057">
                  Омега-3
                </p>
                <p className={styles.body10} data-node-id="169:12059">
                  Перепады настроения · Боли{"\n"} в суставах · Снижение концентрации
                </p>
              </div>
            </div>
            <div className={`${styles.chevron} ${styles.chevron90}`}>
              <ChevronRightIcon />
            </div>
          </div>
          <div className={styles.section} data-node-id="169:12537">
            <p className={styles.sectionTitle} data-node-id="169:12538">
              Вероятность
            </p>
            <p className={styles.sectionBody} data-node-id="169:12539">
              Средняя
            </p>
          </div>
          <div className={styles.section} data-node-id="169:12388">
            <p className={styles.sectionTitle} data-node-id="169:12389">
              Что это такое
            </p>
            <p className={styles.sectionBody} data-node-id="169:12391">
              Омега-3 жирные кислоты (ЭПК и ДГК) снижают воспаление, поддерживают работу мозга и гормоны
            </p>
          </div>
          <div className={styles.section} data-node-id="169:12532">
            <p className={styles.sectionTitle} data-node-id="169:12533">
              Что делать
            </p>
            <p className={styles.sectionBody} data-node-id="169:12534">
              Рыбий жир с ЭПК+ДГК ≥ 1000 мг/сут. Предпочтительно с едой. Источники: лосось, скумбрия, анчоусы
            </p>
          </div>
        </div>

        <div className={styles.rowSimple} data-node-id="169:12061">
          <div className={styles.rowLeft} data-node-id="169:12062">
            <div className={`${styles.rank} ${styles.rankTight}`} data-node-id="169:12343">
              <p data-node-id="169:12344">#3</p>
            </div>
            <div className={styles.col} data-node-id="169:12075">
              <p className={styles.title12} data-node-id="169:12076">
                Биотин (B7)
              </p>
              <p className={styles.body10} data-node-id="169:12078">
                Выпадение волос · Ломкость{"\n"}
                ногтей · Сухость кожи
              </p>
            </div>
          </div>
          <span className={styles.chevron}>
            <ChevronRightIcon />
          </span>
        </div>

        <div className={styles.rowSimple} data-node-id="169:12080">
          <div className={styles.rowLeft} data-node-id="169:12081">
            <div className={`${styles.rank} ${styles.rankTight}`} data-node-id="169:12346">
              <p data-node-id="169:12347">#4</p>
            </div>
            <div className={styles.col} data-node-id="169:12090">
              <p className={styles.title12} data-node-id="169:12091">
                Магний
              </p>
              <p className={styles.body10} style={{ whiteSpace: "normal" }} data-node-id="169:12093">
                Судороги · Тревожность · Нарушение сна
              </p>
            </div>
          </div>
          <span className={styles.chevron}>
            <ChevronRightIcon />
          </span>
        </div>
      </div>

      <div className={styles.footer} data-node-id="169:12019">
        <button type="button" className={styles.btnPrimary} data-node-id="169:12020">
          <span data-node-id="I169:12020;695:4435">Загрузить анализы</span>
        </button>
        <Link href="/book-consultation" className={styles.btnOutline} data-node-id="169:12021">
          <span data-node-id="I169:12021;698:4601">Записаться на консультацию</span>
        </Link>
        <Link href="/trackers/deficit-calculator" className={styles.btnGhost} data-node-id="169:12028">
          <span data-node-id="I169:12028;698:4673">Пройти заново</span>
        </Link>
      </div>
    </div>
  );
}
