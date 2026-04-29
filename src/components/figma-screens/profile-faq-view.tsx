/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { IconArrowBack } from "@/components/figma-screens/icon-arrow-back";
import { ProfileFigmaStatusBar } from "@/components/figma-screens/profile-figma-status-bar";
import styles from "./profile-faq-view.module.css";

const PLUS = "/icons/figma/8ff53fa8cd1a5a478aa778808a2473e739e2fa82.svg";

const QUESTIONS: { id: string; idExpanded: string; q: string; answer?: string }[] = [
  {
    id: "92:26674",
    idExpanded: "92:27050",
    q: "Как изменить пароль?",
    answer: "Перейдите в Профиль → Личные данные → Смена пароля. Введите текущий и новый пароль",
  },
  { id: "92:26765", idExpanded: "92:26952", q: "Как отменить подписку?" },
  { id: "92:26773", idExpanded: "92:26953", q: "Где хранятся мои анализы?" },
  { id: "92:26781", idExpanded: "92:26954", q: "Как скачать материалы для просмотра?" },
  { id: "92:26789", idExpanded: "92:26955", q: "Как записаться на консультацию?" },
];

const ROW_CLASSES_COLLAPSED = [styles.r0, styles.r1, styles.r2, styles.r3, styles.r4];
const ROW_CLASSES_EXPANDED = [styles.r0, styles.r1Expanded, styles.r2Expanded, styles.r3Expanded, styles.r4Expanded];

interface ProfileFaqViewProps {
  /** Figma 92:26945 — first accordion open. */
  expandedFirst?: boolean;
}

/**
 * Figma 92:26598 — FAQ list.
 * Figma 92:26945 — FAQ / Question 1 (first item expanded).
 */
export function ProfileFaqView({ expandedFirst = false }: ProfileFaqViewProps) {
  const rootNode = expandedFirst ? "92:26945" : "92:26598";
  const rowClasses = expandedFirst ? ROW_CLASSES_EXPANDED : ROW_CLASSES_COLLAPSED;

  return (
    <div className={styles.root} data-node-id={rootNode}>
      <ProfileFigmaStatusBar variant="ios125" className={styles.status} />

      <header className={styles.head}>
        <IconArrowBack href="/profile" label="Назад" />
        <h1 className={styles.headTitle} data-node-id={expandedFirst ? "92:26949" : "92:26602"}>
          FAQ
        </h1>
        <div className={styles.headGhost} aria-hidden />
      </header>

      {QUESTIONS.map((item, index) => {
        const isExpanded = expandedFirst && index === 0;
        const fieldNode = expandedFirst ? item.idExpanded : item.id;
        const boxNode = isExpanded ? "92:27053" : `I${item.id};704:2573`;

        return (
          <div key={item.id} className={`${styles.rowField} ${rowClasses[index]}`} data-node-id={fieldNode}>
            <div
              className={`${styles.inputBox} ${isExpanded ? styles.inputBoxExpanded : ""}`}
              data-node-id={boxNode}
            >
              {!isExpanded ? (
                <>
                  <p className={styles.question} data-node-id={`I${item.id};704:2575`}>
                    {item.q}
                  </p>
                  <div className={styles.plusWrap} aria-hidden>
                    <img src={PLUS} alt="" className={styles.plusImg} width={20} height={20} />
                  </div>
                </>
              ) : (
                <>
                  <div className={styles.rowTop}>
                    <p className={styles.question} data-node-id="92:27055">
                      {item.q}
                    </p>
                    <div className={styles.plusWrapRotate} aria-hidden>
                      <div className={styles.plusWrapRotateInner}>
                        <img src={PLUS} alt="" className={styles.plusImg} width={20} height={20} />
                      </div>
                    </div>
                  </div>
                  <p className={styles.answer} data-node-id="92:27063">
                    {item.answer}
                  </p>
                </>
              )}
            </div>
          </div>
        );
      })}

      <footer className={styles.footer} data-node-id={expandedFirst ? "92:26956" : "192:4640"}>
        <div className={styles.footerTexts} data-node-id={expandedFirst ? "92:26957" : "192:4641"}>
          <p className={styles.footerTitle} data-node-id={expandedFirst ? "92:26958" : "192:4642"}>
            Не нашли ответ?
          </p>
          <p className={styles.footerSub} data-node-id={expandedFirst ? "92:26959" : "192:4643"}>
            Напишите нам — отвечаем в течение 24 часов{"\n"}в рабочие дни
          </p>
        </div>
        <Link
          href="/profile/help"
          className={styles.btnPrimary}
          data-node-id={expandedFirst ? "92:26960" : "192:4644"}
          data-name="Button"
        >
          <span className={styles.btnLabel} data-node-id={expandedFirst ? "I92:26960;695:4435" : "I192:4644;695:4435"}>
            Написать в поддержку
          </span>
        </Link>
      </footer>
    </div>
  );
}
