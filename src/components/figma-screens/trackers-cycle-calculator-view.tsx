/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { IconArrowBack } from "@/components/figma-screens/icon-arrow-back";
import { KnowledgeMaskedIcon } from "@/components/figma-screens/knowledge-masked-icon";
import { ProfileFigmaStatusBar } from "@/components/figma-screens/profile-figma-status-bar";
import styles from "./trackers-cycle-calculator-view.module.css";

const STATUS_RIGHT = "/icons/figma/fff8b42c3c4d1c153ff0ab5d627fa1b8b3a7f0fc.svg";

const IMG = {
  sliderCycle: "/icons/figma/a93299e855236fc9b8d0c281352a20dba8816d46.svg",
  sliderPeriod: "/icons/figma/2934faef85b65b2cedc2a6992a8fad2800766421.svg",
  blood: "/icons/figma/1bb3ad77d99ce289848de99c9b0cb5105f6d558c.svg",
  fire: "/icons/figma/1ac75e74ab08eda6ab611cf8d249e2cc44b43051.svg",
  heartFill: "/icons/figma/3a6ac3e435c6a4734e010eaaf9c63b46c47a018f.svg",
  star: "/icons/figma/20e9e87dcb4c13e2e23647322d1efeab1b4975ee.svg",
  infoFill: "/icons/figma/f53edaa66ebb4523a08914390d9270aef21392d8.svg",
} as const;

/** Figma 166:9019 — Trackers / Cycle calculator. */
export function TrackersCycleCalculatorView() {
  return (
    <div className={styles.root} data-node-id="166:9019">
      <ProfileFigmaStatusBar variant="ios125" rightSrc={STATUS_RIGHT} className={styles.status} />

      <header className={styles.header} data-node-id="166:9154">
        <IconArrowBack href="/trackers" label="К трекерам" />
        <h1 className={styles.headerTitle} data-node-id="I166:9154;568:1596">
          Калькулятор цикла
        </h1>
        <div className={styles.headerGhost} aria-hidden data-node-id="I166:9154;568:1597" />
      </header>

      <div className={styles.fieldBlock} data-node-id="166:9174">
        <p className={styles.fieldLabel} data-node-id="I166:9174;704:2572">
          Первый день последней менструации
        </p>
        <div className={styles.fieldBox} data-node-id="I166:9174;704:2573">
          <p className={styles.fieldValue} data-node-id="I166:9174;704:2575">
            08.03.2026
          </p>
        </div>
      </div>

      <div className={styles.slidersCard} data-node-id="166:9532">
        <div className={styles.sliderSection} data-node-id="166:9540">
          <div className={styles.sliderRow} data-node-id="166:9589">
            <p className={styles.sliderLabel} data-node-id="166:9541">
              Длина цикла
            </p>
            <div className={styles.pill} data-node-id="166:9585">
              <p className={styles.pillText} data-node-id="166:9587">
                28 дней
              </p>
            </div>
          </div>
          <div className={styles.sliderTrack} data-node-id="169:12729">
            <img alt="" src={IMG.sliderCycle} draggable={false} />
          </div>
          <div className={styles.rangeRow} data-node-id="166:9565">
            <p data-node-id="166:9543">21</p>
            <p data-node-id="166:9563">40</p>
          </div>
        </div>
        <div className={styles.sliderSection} data-node-id="166:9576">
          <div className={styles.sliderRow} data-node-id="166:9590">
            <p className={styles.sliderLabel} data-node-id="166:9591">
              Длина цикла
            </p>
            <div className={styles.pill} data-node-id="166:9592">
              <p className={styles.pillText} data-node-id="166:9594">
                5 дней
              </p>
            </div>
          </div>
          <div className={styles.sliderTrack} data-node-id="169:12734">
            <img alt="" src={IMG.sliderPeriod} draggable={false} />
          </div>
          <div className={styles.rangeRow} data-node-id="166:9581">
            <p data-node-id="166:9582">2</p>
            <p data-node-id="166:9583">7</p>
          </div>
        </div>
      </div>

      <div className={styles.cardsScroll} data-node-id="166:9602">
        <div className={styles.cardsRow}>
          <div className={styles.dateCard} data-node-id="166:9603">
            <div className={styles.dateCardInner} data-node-id="166:9604">
              <div className={styles.iconSq} style={{ background: "#e94358" }} data-node-id="197:2673">
                <img alt="" src={IMG.blood} width={16} height={16} draggable={false} data-node-id="197:3231" />
              </div>
              <div className={styles.labelRow} data-node-id="166:9669">
                <p className={styles.dayNum} style={{ width: 15 }} data-node-id="166:9670">
                  5
                </p>
                <p className={styles.monthTxt} data-node-id="166:9672">
                  апреля
                </p>
              </div>
            </div>
            <p className={styles.cardCaption} style={{ left: "calc(50% + 0.5px)" }} data-node-id="166:9612">
              Начало цикла
            </p>
          </div>
          <div className={styles.dateCard} data-node-id="166:9623">
            <div className={`${styles.dateCardInner} ${styles.dateCardInnerCenter}`} data-node-id="166:9624">
              <div className={styles.iconSq} style={{ background: "#4979fb" }} data-node-id="197:2691">
                <img alt="" src={IMG.fire} width={16} height={16} draggable={false} data-node-id="198:3274" />
              </div>
              <div className={styles.labelRow} data-node-id="166:9627">
                <p className={styles.dayNum} style={{ width: 24 }} data-node-id="166:9628">
                  17
                </p>
                <p className={styles.monthTxt} data-node-id="166:9630">
                  марта
                </p>
              </div>
            </div>
            <p className={styles.cardCaption} data-node-id="166:9632">
              Начало фертильности
            </p>
          </div>
          <div className={styles.dateCard} data-node-id="166:9613">
            <div className={`${styles.dateCardInner} ${styles.dateCardInnerCenter}`} data-node-id="166:9614">
              <div className={styles.iconSq} style={{ background: "#febd59" }} data-node-id="197:2687">
                <KnowledgeMaskedIcon
                  maskSrc="/icons/figma/329d600c34e04aaae00fe7283e2d7bae1ccd2630.svg"
                  innerSrc={IMG.heartFill}
                  size={16}
                  maskPosition="0 0"
                  maskLayerInset="0"
                />
              </div>
              <div className={styles.labelRow} data-node-id="166:9617">
                <p className={styles.dayNum} style={{ width: 30 }} data-node-id="166:9618">
                  22
                </p>
                <p className={styles.monthTxt} data-node-id="166:9620">
                  марта
                </p>
              </div>
            </div>
            <p className={styles.cardCaption} data-node-id="166:9622">
              Овуляция
            </p>
          </div>
          <div className={styles.dateCard} data-node-id="166:9633">
            <div className={`${styles.dateCardInner} ${styles.dateCardInnerCenter}`} data-node-id="166:9634">
              <div className={styles.iconSq} style={{ background: "#674af8" }} data-node-id="197:2695">
                <img alt="" src={IMG.star} width={16} height={16} draggable={false} data-node-id="198:3278" />
              </div>
              <div className={styles.labelRow} data-node-id="166:9644">
                <p className={styles.dayNum} style={{ width: 30 }} data-node-id="166:9645">
                  23
                </p>
                <p className={styles.monthTxt} data-node-id="166:9647">
                  марта
                </p>
              </div>
            </div>
            <p className={styles.cardCaption} data-node-id="166:9649">
              Конец фертильности
            </p>
          </div>
        </div>
      </div>

      <div className={styles.monthWrap} data-node-id="167:9697">
        <div className={styles.monthHead} data-node-id="167:9698">
          <p className={styles.monthBig} data-node-id="167:9700">
            09
          </p>
          <p className={styles.yearTxt} data-node-id="167:9701">
            2026
          </p>
        </div>

        <div className={styles.calWeek} data-node-id="167:9702">
          <div className={`${styles.dayCell} ${styles.bgGrad} ${styles.roundTl16}`} data-node-id="I167:9702;1:252">
            <p className={styles.textBlack} data-node-id="I167:9702;1:252;1:240">
              Пн
            </p>
          </div>
          <div className={`${styles.dayCell} ${styles.bgGrad}`} data-node-id="I167:9702;1:254">
            <p className={styles.textBlack} data-node-id="I167:9702;1:254;1:240">
              Вт
            </p>
          </div>
          <div className={`${styles.dayCell} ${styles.bgGrad}`} data-node-id="I167:9702;1:242">
            <p className={styles.textBlack} data-node-id="I167:9702;1:242;1:240">
              Ср
            </p>
          </div>
          <div className={`${styles.dayCell} ${styles.bgGrad}`} data-node-id="I167:9702;1:244">
            <p className={styles.textBlack} data-node-id="I167:9702;1:244;1:240">
              Чт
            </p>
          </div>
          <div className={`${styles.dayCell} ${styles.bgGrad}`} data-node-id="I167:9702;1:246">
            <p className={styles.textBlack} data-node-id="I167:9702;1:246;1:240">
              Пт
            </p>
          </div>
          <div className={`${styles.dayCell} ${styles.bgGrad}`} data-node-id="I167:9702;1:248">
            <p className={styles.textBlue} data-node-id="I167:9702;1:248;1:240">
              Сб
            </p>
          </div>
          <div className={`${styles.dayCell} ${styles.bgGrad} ${styles.roundTr16}`} data-node-id="I167:9702;2:344">
            <p className={styles.textBlue} data-node-id="I167:9702;2:344;1:240">
              Вс
            </p>
          </div>
        </div>

        <div className={styles.calWeek} data-node-id="167:9703">
          <div className={`${styles.dayCell} ${styles.bgGrad}`} data-node-id="I167:9703;1:252">
            <p className={styles.textGrey} data-node-id="I167:9703;1:252;1:240">
              31
            </p>
          </div>
          <div className={`${styles.dayCell} ${styles.bgGrad}`} data-node-id="I167:9703;1:254">
            <p className={styles.textBlack} data-node-id="I167:9703;1:254;1:240">
              1
            </p>
          </div>
          <div className={`${styles.dayCell} ${styles.bgGrad}`} data-node-id="I167:9703;1:242">
            <p className={styles.textBlack} data-node-id="I167:9703;1:242;1:240">
              2
            </p>
          </div>
          <div className={`${styles.dayCell} ${styles.bgGreySolid}`} data-node-id="I167:9703;1:244">
            <p className={styles.textBlack} data-node-id="I167:9703;1:244;1:240">
              3
            </p>
          </div>
          <div className={`${styles.dayCell} ${styles.bgGreySolid}`} data-node-id="I167:9703;1:246">
            <p className={styles.textBlack} data-node-id="I167:9703;1:246;1:240">
              4
            </p>
          </div>
          <div className={`${styles.dayCell} ${styles.bgGreySolid}`} data-node-id="I167:9703;1:248">
            <p className={styles.textBlue} data-node-id="I167:9703;1:248;1:240">
              5
            </p>
          </div>
          <div className={`${styles.dayCell} ${styles.bgGreySolid}`} data-node-id="I167:9703;2:344">
            <p className={styles.textBlue} data-node-id="I167:9703;2:344;1:240">
              6
            </p>
          </div>
        </div>

        <div className={styles.calWeek} data-node-id="167:9704">
          <div className={`${styles.dayCell} ${styles.bgGreySolid}`} data-node-id="167:9705">
            <p className={styles.textBlack} data-node-id="I167:9705;1:240">
              7
            </p>
          </div>
          <div className={`${styles.dayCell} ${styles.bgGreySolid}`} data-node-id="167:9706">
            <p className={styles.textBlack} data-node-id="I167:9706;1:240">
              8
            </p>
          </div>
          <div className={`${styles.dayCell} ${styles.bgGreySolid}`} data-node-id="167:9707">
            <p className={styles.textBlack} data-node-id="I167:9707;1:240">
              9
            </p>
          </div>
          <div className={`${styles.dayCell} ${styles.bgPeach} ${styles.roundTl100}`} data-node-id="167:9708">
            <p className={styles.textBlack} data-node-id="167:9709">
              10
            </p>
          </div>
          <div className={`${styles.dayCell} ${styles.bgPeach}`} data-node-id="167:9710">
            <p className={styles.textBlack} data-node-id="I167:9710;1:240">
              11
            </p>
          </div>
          <div className={`${styles.dayCell} ${styles.bgPeach}`} data-node-id="167:9711">
            <p className={styles.textBlue} data-node-id="I167:9711;1:240">
              12
            </p>
          </div>
          <div className={`${styles.dayCell} ${styles.bgPeach}`} data-node-id="167:9712">
            <p className={styles.textBlue} data-node-id="I167:9712;1:240">
              13
            </p>
          </div>
        </div>

        <div className={styles.calWeek} data-node-id="167:9713">
          <div className={`${styles.dayCell} ${styles.bgPeach}`} data-node-id="I167:9713;1:252">
            <p className={styles.textBlack} data-node-id="I167:9713;1:252;1:240">
              14
            </p>
          </div>
          <div className={`${styles.dayCell} ${styles.bgPeach} ${styles.roundBr100}`} data-node-id="I167:9713;1:254">
            <p className={styles.textBlack} data-node-id="I167:9713;1:254;1:240">
              15
            </p>
          </div>
          <div className={`${styles.dayCell} ${styles.bgGrad}`} data-node-id="I167:9713;1:242">
            <p className={styles.textBlack} data-node-id="I167:9713;1:242;1:240">
              16
            </p>
          </div>
          <div className={`${styles.dayCell} ${styles.bgGrad}`} data-node-id="I167:9713;1:244">
            <p className={styles.textBlack} data-node-id="I167:9713;1:244;1:240">
              17
            </p>
          </div>
          <div className={`${styles.dayCell} ${styles.bgGrad}`} data-node-id="I167:9713;1:246">
            <p className={styles.textBlack} data-node-id="I167:9713;1:246;1:240">
              18
            </p>
          </div>
          <div className={`${styles.dayCell} ${styles.bgGrad}`} data-node-id="I167:9713;1:248">
            <p className={styles.textBlue} data-node-id="I167:9713;1:248;1:240">
              19
            </p>
          </div>
          <div className={`${styles.dayCell} ${styles.bgGrad}`} data-node-id="I167:9713;2:344">
            <p className={styles.textBlue} data-node-id="I167:9713;2:344;1:240">
              20
            </p>
          </div>
        </div>

        <div className={styles.calWeek} data-node-id="167:9714">
          <div className={`${styles.dayCell} ${styles.bgGrad}`} data-node-id="I167:9714;1:252">
            <p className={styles.textBlack} data-node-id="I167:9714;1:252;1:240">
              21
            </p>
          </div>
          <div className={`${styles.dayCell} ${styles.bgGrad}`} data-node-id="I167:9714;1:254">
            <p className={styles.textBlack} data-node-id="I167:9714;1:254;1:240">
              22
            </p>
          </div>
          <div className={`${styles.dayCell} ${styles.bgGrad}`} data-node-id="I167:9714;1:242">
            <p className={styles.textBlack} data-node-id="I167:9714;1:242;1:240">
              23
            </p>
          </div>
          <div className={`${styles.dayCell} ${styles.bgGrad}`} data-node-id="I167:9714;1:244">
            <p className={styles.textBlack} data-node-id="I167:9714;1:244;1:240">
              24
            </p>
          </div>
          <div className={`${styles.dayCell} ${styles.bgGrad}`} data-node-id="I167:9714;1:246">
            <p className={styles.textBlack} data-node-id="I167:9714;1:246;1:240">
              25
            </p>
          </div>
          <div className={`${styles.dayCell} ${styles.bgGrad}`} data-node-id="I167:9714;1:248">
            <p className={styles.textBlue} data-node-id="I167:9714;1:248;1:240">
              26
            </p>
          </div>
          <div className={`${styles.dayCell} ${styles.bgGrad}`} data-node-id="I167:9714;2:344">
            <p className={styles.textBlue} data-node-id="I167:9714;2:344;1:240">
              27
            </p>
          </div>
        </div>

        <div className={styles.calWeek} data-node-id="167:9715">
          <div className={`${styles.dayCell} ${styles.bgGrad} ${styles.roundBl16}`} data-node-id="I167:9715;1:252">
            <p className={styles.textBlack} data-node-id="I167:9715;1:252;1:240">
              28
            </p>
          </div>
          <div className={`${styles.dayCell} ${styles.bgGrad}`} data-node-id="I167:9715;1:254">
            <p className={styles.textBlack} data-node-id="I167:9715;1:254;1:240">
              29
            </p>
          </div>
          <div className={`${styles.dayCell} ${styles.bgGrad}`} data-node-id="I167:9715;1:242">
            <p className={styles.textBlack} data-node-id="I167:9715;1:242;1:240">
              30
            </p>
          </div>
          <div className={`${styles.dayCell} ${styles.bgGrad}`} data-node-id="I167:9715;1:244">
            <p className={styles.textGrey} data-node-id="I167:9715;1:244;1:240">
              1
            </p>
          </div>
          <div className={`${styles.dayCell} ${styles.bgGrad}`} data-node-id="I167:9715;1:246">
            <p className={styles.textGrey} data-node-id="I167:9715;1:246;1:240">
              2
            </p>
          </div>
          <div className={`${styles.dayCell} ${styles.bgGrad}`} data-node-id="I167:9715;1:248">
            <p className={styles.textGrey} data-node-id="I167:9715;1:248;1:240">
              3
            </p>
          </div>
          <div className={`${styles.dayCell} ${styles.bgGrad} ${styles.roundBr16}`} data-node-id="I167:9715;2:344">
            <p className={styles.textGrey} data-node-id="I167:9715;2:344;1:240">
              4
            </p>
          </div>
        </div>
      </div>

      <div className={styles.banner} data-node-id="167:9951">
        <div className={styles.bannerInner} data-node-id="167:9952">
          <div className={styles.bannerIcon} data-node-id="167:9957">
            <div className={styles.masked16} data-node-id="167:9966">
              <div className={styles.masked16Inner}>
                <img alt="" src={IMG.infoFill} draggable={false} />
              </div>
            </div>
          </div>
          <div className={styles.bannerTexts} data-node-id="167:9953">
            <p className={styles.bannerTitle} data-node-id="167:9954">
              Рекомендация врача!
            </p>
            <p className={styles.bannerBody} data-node-id="167:9955">
              Твой цикл нормальной длины. Старайся вести дневник цикла для отслеживания изменений
            </p>
          </div>
        </div>
      </div>

      <Link href="/book-consultation" className={styles.cta} data-node-id="167:9680">
        <p className={styles.ctaText} data-node-id="I167:9680;695:4435">
          Записаться к врачу
        </p>
      </Link>
    </div>
  );
}
