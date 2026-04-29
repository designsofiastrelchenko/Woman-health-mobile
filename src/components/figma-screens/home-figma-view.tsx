import Image from "next/image";
import Link from "next/link";
import { IosStatusBar } from "@/components/onboarding/ios-status-bar";
import { NavigationBar } from "@/components/ui/navigation-bar";
import { ChevronRightIcon } from "@/components/figma-screens/chevron-right-icon";
import styles from "./home-figma-view.module.css";

export function HomeFigmaView() {
  return (
    <div className={styles.page}>
      <IosStatusBar />
      <div className={styles.scroll}>
        <div className={styles.topRow}>
          <Link href="/profile" className={`${styles.profileBlock} ${styles.profileTap}`} aria-label="Профиль">
            <div className={styles.avatar} aria-hidden />
            <div className={styles.greet}>
              <p className={styles.greetHi}>Привет,</p>
              <p className={styles.greetName}>Анна!</p>
            </div>
          </Link>
          <div className={styles.topRight}>
            <Link href="/notifications" className={styles.notifBtn} aria-label="Уведомления">
              <Image
                src="/icons/figma/c277797660a146d48bc52b88b04078c22981ba25.svg"
                alt=""
                width={24}
                height={24}
                unoptimized
              />
              <span className={styles.notifDot} aria-hidden />
            </Link>
            <div className={styles.premium}>
              <p className={styles.premiumText}>Премиум</p>
            </div>
          </div>
        </div>

        <div className={styles.dateBlock}>
          <p className={styles.dateLine}>Понедельник, 6 апреля 2026</p>
          <p className={styles.progressTitle}>Прогресс</p>
        </div>

        <div className={styles.bannerWrap}>
          <div className={styles.banner}>
            <div className={styles.bannerWave1Wrap}>
              <Image
                src="/icons/figma/d0db789a5ca293048e53140bcaf4407a42fae4d1.svg"
                alt=""
                width={347}
                height={37}
                unoptimized
              />
            </div>
            <div className={styles.bannerWave2}>
              <Image
                src="/icons/figma/9fe5f4d4c510794a6a3d0ab7f5f82dc277c80fd9.svg"
                alt=""
                width={342}
                height={32}
                unoptimized
              />
            </div>
            <div className={styles.bannerInner}>
              <p className={styles.bannerTitle}>Гормоны женского здоровья</p>
              <Link href="/knowledge/course" className={`${styles.bannerCta} ${styles.bannerCtaLink}`}>
                <p className={styles.bannerCtaText}>Продолжить обучение</p>
              </Link>
            </div>
            <div className={styles.bannerRing}>
              <Image
                src="/icons/figma/f4813bc3a50070e0193ad6ed918396d460aaeb33.svg"
                alt=""
                width={72}
                height={72}
                unoptimized
              />
            </div>
            <div className={styles.bannerPct}>
              <p className={styles.pctVal}>78%</p>
              <p className={styles.pctSub}>Урок 3.2</p>
            </div>
          </div>
        </div>

        <section className={styles.stories}>
          <p className={styles.storiesTitle}>Истории</p>
          <div className={styles.storiesRow}>
            <div className={styles.storyItem}>
              <div className={`${styles.storyRing} ${styles.storyBorder}`}>
                <Image
                  src="/icons/figma/8e699a3af65d90df8ab2036f28267b847441b293.svg"
                  alt=""
                  width={68}
                  height={68}
                  style={{ display: "block" }}
                  unoptimized
                />
                <span
                  style={{
                    position: "absolute",
                    left: 11,
                    top: 11,
                    width: 51,
                    height: 51,
                  }}
                >
                  <Image
                    src="/icons/figma/4af216d1c94c9049167ab767f125d4ceb3a20866.png"
                    alt=""
                    width={51}
                    height={51}
                    unoptimized
                  />
                </span>
              </div>
              <p className={styles.storyLabel}>Гормоны</p>
            </div>
            <div className={styles.storyItem}>
              <div className={`${styles.storyRing} ${styles.storyBorder}`}>
                <Image
                  src="/icons/figma/de3221cf86a0a3c7f2e31b8af05023c778b19f91.svg"
                  alt=""
                  width={68}
                  height={68}
                  unoptimized
                />
                <span
                  style={{
                    position: "absolute",
                    left: 6,
                    top: 10,
                    width: 61,
                    height: 61,
                  }}
                >
                  <Image
                    src="/icons/figma/f7ca37b75329f0744ed6183d925e929bd89579c0.png"
                    alt=""
                    width={61}
                    height={61}
                    unoptimized
                  />
                </span>
              </div>
              <p className={styles.storyLabel}>Цикл</p>
            </div>
            <div className={styles.storyItem}>
              <div className={`${styles.storyRing} ${styles.storyRingSm}`}>
                <Image
                  src="/icons/figma/d003c3eb00fa29be407524a859f7b3c89dcf2d46.svg"
                  alt=""
                  width={76}
                  height={76}
                  unoptimized
                />
                <span
                  style={{
                    position: "absolute",
                    left: 7,
                    top: 7,
                    width: 61,
                    height: 61,
                  }}
                >
                  <Image
                    src="/icons/figma/279db901f53cd6d6c6745db1f884b83ea57b1f74.png"
                    alt=""
                    width={61}
                    height={61}
                    unoptimized
                  />
                </span>
              </div>
              <p className={styles.storyLabel}>Питание</p>
            </div>
            <div className={styles.storyItem}>
              <div className={`${styles.storyRing} ${styles.storyBorderLight}`}>
                <Image
                  src="/icons/figma/de3221cf86a0a3c7f2e31b8af05023c778b19f91.svg"
                  alt=""
                  width={68}
                  height={68}
                  unoptimized
                />
                <span
                  style={{
                    position: "absolute",
                    left: 11,
                    top: 11,
                    width: 51,
                    height: 51,
                  }}
                >
                  <Image
                    src="/icons/figma/74261bf19683cd30badad1c968c9b41c7d7aae13.png"
                    alt=""
                    width={51}
                    height={51}
                    unoptimized
                  />
                </span>
              </div>
              <p className={styles.storyLabel}>Анализы</p>
            </div>
            <div className={styles.storyItem}>
              <div className={styles.storyRingSm}>
                <Image
                  src="/icons/figma/59e4b5aa227fbda25a28213c427301c4b5557fee.svg"
                  alt=""
                  width={76}
                  height={76}
                  unoptimized
                />
              </div>
              <p className={styles.storyLabel}>Доктор</p>
            </div>
          </div>
        </section>

        <div className={styles.statsRow}>
          <div className={styles.statCard}>
            <div className={styles.statInner}>
              <div className={`${styles.statIconBox} ${styles.statIconBoxBlue}`}>
                <Image
                  src="/icons/figma/b6fddedf30efe36af3570d4c9237354322823ec0.svg"
                  alt=""
                  width={16}
                  height={16}
                  unoptimized
                />
              </div>
              <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-end", gap: 2 }}>
                <p className={styles.statNum}>14</p>
                <div className={styles.statSuffix}>
                  <p className={styles.statSuffixMain}>/28</p>
                  <p className={styles.statSuffixSub}>дней</p>
                </div>
              </div>
            </div>
            <p className={styles.statCaption}>Цикл</p>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statInner}>
              <Image
                src="/icons/figma/55582082208c5edcdd42f2fb6822485da8657e84.svg"
                alt=""
                width={21}
                height={21}
                unoptimized
              />
              <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-end", gap: 2 }}>
                <p className={styles.statNum}>18</p>
                <div className={styles.statSuffix}>
                  <p className={styles.statSuffixMain}>дней</p>
                </div>
              </div>
            </div>
            <p className={styles.statCaption}>Наблюдения</p>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statInner}>
              <div className={`${styles.statIconBox} ${styles.statIconBoxRed}`}>
                <Image
                  src="/icons/figma/acc1d1043eeba00bc1476fc30fe347d57b01a01d.svg"
                  alt=""
                  width={16}
                  height={16}
                  unoptimized
                />
              </div>
              <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-end", gap: 2 }}>
                <p className={styles.statNum}>4</p>
                <div className={styles.statSuffix}>
                  <p className={styles.statSuffixMain}>файла</p>
                </div>
              </div>
            </div>
            <p className={styles.statCaption}>В анализах</p>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statInner}>
              <div className={`${styles.statIconBox} ${styles.statIconBoxViolet}`}>
                <Image
                  src="/icons/figma/87d86ceffb6aadd0e58f7234d10c8cd15eb3b0dd.svg"
                  alt=""
                  width={16}
                  height={16}
                  unoptimized
                />
              </div>
              <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-end", gap: 2 }}>
                <p className={styles.statNum}>0</p>
                <div className={styles.statSuffix}>
                  <p className={styles.statSuffixMain}>отметок</p>
                </div>
              </div>
            </div>
            <p className={styles.statCaption}>Симптомы</p>
          </div>
        </div>

        <div className={styles.cardsRegion}>
          <Link href="/book-consultation" className={`${styles.card} ${styles.cardConsult} ${styles.cardBlockLink}`}>
            <div className={styles.cardTitle}>
              <p className={styles.cardTitleText}>Консультации</p>
            </div>
            <div className={`${styles.cardBody} ${styles.cardBodyTall}`}>
              <div className={`${styles.iconRound} ${styles.iconRoundOrange}`}>
                <Image
                  src="/icons/figma/4085a5384c0c827c708036a8bcbd0b020ce4dfce.svg"
                  alt=""
                  width={18}
                  height={18}
                  unoptimized
                />
              </div>
              <div className={styles.progressTrack} style={{ width: 131, background: "#ffeee9" }}>
                <div className={styles.progressFill} style={{ width: 100, background: "#ff5722" }} />
              </div>
              <div style={{ textAlign: "center" }}>
                <p className={styles.cardTextBold}>Завтра, 15:00</p>
                <p className={`${styles.cardTextBook} ${styles.linkMore}`}>Подробнее</p>
              </div>
            </div>
          </Link>

          <Link href="/trackers/deficit-calculator" className={`${styles.card} ${styles.cardDef} ${styles.cardBlockLink}`}>
            <div className={styles.cardTitle}>
              <Image
                src="/icons/figma/fac03c474b8ef5cba84371f16c5b32be01bc1e57.svg"
                alt=""
                width={18}
                height={18}
                unoptimized
              />
              <p className={styles.cardTitleText}>Дефициты</p>
            </div>
            <div className={`${styles.cardBody} ${styles.cardBodyShort}`}>
              <div className={styles.progressTrack} style={{ width: 131, background: "#f0edfe" }}>
                <div className={styles.progressFill} style={{ width: 68, background: "#674af8" }} />
              </div>
              <div>
                <p className={styles.cardTextBold}>12 симптомов</p>
                <p className={styles.cardTextBook}>Риск: средний</p>
              </div>
            </div>
          </Link>

          <Link href="/trackers/tests" className={`${styles.card} ${styles.cardTests} ${styles.cardBlockLink}`}>
            <div className={styles.cardTitle}>
              <Image
                src="/icons/figma/4300eb34b7eae2ddef7a1a039ffd7ed952474ab8.svg"
                alt=""
                width={18}
                height={18}
                unoptimized
              />
              <p className={styles.cardTitleText}>Тесты</p>
            </div>
            <div className={`${styles.cardBody} ${styles.cardBodyShort}`}>
              <div className={styles.progressTrack} style={{ width: 149, background: "#edf2ff" }}>
                <div className={styles.progressFill} style={{ width: 48, background: "#4979fb" }} />
              </div>
              <div>
                <p className={styles.cardTextBold}>4 теста</p>
                <p className={styles.cardTextBook}>Подбор по симптомам</p>
              </div>
            </div>
          </Link>

          <Link href="/trackers/due-date" className={`${styles.card} ${styles.cardBirth} ${styles.cardBlockLink}`}>
            <div className={styles.cardTitle}>
              <p className={styles.cardTitleText}>Дата родов</p>
            </div>
            <div className={`${styles.cardBody} ${styles.cardBodyTall}`}>
              <div className={`${styles.iconRound} ${styles.iconRoundYellow}`}>
                <Image
                  src="/icons/figma/785963e409118f334ee7c050fdb598601310d777.svg"
                  alt=""
                  width={18}
                  height={18}
                  unoptimized
                />
              </div>
              <div className={styles.progressTrack} style={{ width: 131, background: "#fff8ee" }}>
                <div className={styles.progressFill} style={{ width: 100, background: "#febd59" }} />
              </div>
              <div style={{ textAlign: "center" }}>
                <p className={styles.cardTextBold}>24 неделя</p>
                <p className={styles.cardTextBook}>Осталось 112 дней</p>
              </div>
            </div>
          </Link>
        </div>

        <section className={styles.tableSection}>
          <p className={styles.tableTitle}>Бесплатно</p>
          <div className={styles.tableList}>
            <Link href="/trackers/deficit-calculator" className={`${styles.tableRow} ${styles.tableRowLink}`}>
              <div className={styles.tableLeft}>
                <div className={`${styles.iconSm} ${styles.iconSmViolet}`}>
                  <Image
                    src="/icons/figma/7d0d056369ccaded8bbc94d4c00ea9c680b81458.svg"
                    alt=""
                    width={24}
                    height={24}
                    unoptimized
                  />
                </div>
                <div className={styles.tableTexts}>
                  <p className={styles.tableLine1}>Дефициты</p>
                  <p className={styles.tableLine2}>Новое</p>
                </div>
              </div>
              <span className={styles.tableChevron}>
                <ChevronRightIcon />
              </span>
            </Link>
            <Link href="/trackers/tests" className={`${styles.tableRow} ${styles.tableRowLink}`}>
              <div className={styles.tableLeft}>
                <div className={`${styles.iconSm} ${styles.iconSmOrange}`}>
                  <Image
                    src="/icons/figma/6d7cda177f789027678d2ff73ae7a488feed8360.svg"
                    alt=""
                    width={24}
                    height={24}
                    unoptimized
                  />
                </div>
                <div className={styles.tableTexts}>
                  <p className={styles.tableLine1}>Тесты</p>
                  <p className={styles.tableLine2}>12 вопросов</p>
                </div>
              </div>
              <span className={styles.tableChevron}>
                <ChevronRightIcon />
              </span>
            </Link>
            <Link href="/trackers/cycle-calculator" className={`${styles.tableRow} ${styles.tableRowLink}`}>
              <div className={styles.tableLeft}>
                <div className={`${styles.iconSm} ${styles.iconSmBlue}`}>
                  <Image
                    src="/icons/figma/0b9d762af29114272341f36fc8188dc8555dfd98.svg"
                    alt=""
                    width={24}
                    height={24}
                    unoptimized
                  />
                </div>
                <div className={styles.tableTexts}>
                  <p className={styles.tableLine1}>Калькулятор цикла</p>
                  <p className={styles.tableLine2}>№1 у пользователей</p>
                </div>
              </div>
              <span className={styles.tableChevron}>
                <ChevronRightIcon />
              </span>
            </Link>
            <Link href="/trackers/due-date" className={`${styles.tableRow} ${styles.tableRowLink}`}>
              <div className={styles.tableLeft}>
                <div className={`${styles.iconSm} ${styles.iconSmYellow}`}>
                  <Image
                    src="/icons/figma/68d389dfad3c30096ed89706f64c93118b2456f8.svg"
                    alt=""
                    width={24}
                    height={24}
                    unoptimized
                  />
                </div>
                <div className={styles.tableTexts}>
                  <p className={styles.tableLine1}>Дата родов</p>
                  <p className={styles.tableLine2}>за пару минут</p>
                </div>
              </div>
              <span className={styles.tableChevron}>
                <ChevronRightIcon />
              </span>
            </Link>
          </div>
        </section>
      </div>

      <div className={styles.navWrap}>
        <NavigationBar active="home" />
      </div>
    </div>
  );
}
