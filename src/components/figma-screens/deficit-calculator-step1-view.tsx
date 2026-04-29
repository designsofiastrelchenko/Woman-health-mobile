/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { IconArrowBack } from "@/components/figma-screens/icon-arrow-back";
import { ProfileFigmaStatusBar } from "@/components/figma-screens/profile-figma-status-bar";
import styles from "./deficit-calculator-step1-view.module.css";

const STATUS_RIGHT = "/icons/figma/fff8b42c3c4d1c153ff0ab5d627fa1b8b3a7f0fc.svg";

const IMG = {
  brain02: "/icons/figma/999cef158c37866e3b0db01899e4943a02ed2da2.svg",
  medicine: "/icons/figma/b2011c4ed9205ab93c130ff9c48a97c23de2a9ce.svg",
  hand: "/icons/figma/ca3f9769a469d222d7ec2368e3e1f9b6891c07e5.svg",
  glucose: "/icons/figma/8454ce7b357afc50e6035368490c7154081e5962.svg",
  muscle: "/icons/figma/d8be2ca36661ea0161bbba35e16b14af9ae2ccfc.svg",
  neutralFace: "/icons/figma/dd5e806c3c120e9a59a977e744a383b6435b729f.svg",
  moon1: "/icons/figma/66aebbd82988e7dac12e5d1b299782c4dde880d9.svg",
  moon2: "/icons/figma/c7a33c4beed87c0a6f769803c75a33b4408d78a3.svg",
  temp: "/icons/figma/63e2ad7a74d793086ffd6a9f8c20287e9a67932e.svg",
  waist: "/icons/figma/10589d2e7687b00f0ba59426a21dc0831f57ec1c.svg",
  brain01: "/icons/figma/071909daa02d257041d6b5c7edd66ad257f66cc2.svg",
  knee: "/icons/figma/2f90825a375c8114df873c278ef9a205673498af.svg",
  sadFace: "/icons/figma/f54f0a2eb121a9dd536d19f45d1183faf44a5dfd.svg",
} as const;

type RowDef = {
  node: string;
  title: string;
  kind: "svg" | "moon" | "emoji";
  asset?: keyof typeof IMG;
};

const ROWS: RowDef[] = [
  { node: "167:10297", title: "Хроническая усталость", kind: "svg", asset: "brain02" },
  { node: "167:10385", title: "Выпадение волос", kind: "svg", asset: "medicine" },
  { node: "167:10393", title: "Ломкость ногтей", kind: "svg", asset: "hand" },
  { node: "167:10401", title: "Сухость / тусклость кожи", kind: "svg", asset: "glucose" },
  { node: "167:10514", title: "Судороги в мышцах и ногах", kind: "svg", asset: "muscle" },
  { node: "167:10521", title: "Тревожность / раздражительность", kind: "emoji", asset: "neutralFace" },
  { node: "167:10559", title: "Нарушение сна", kind: "moon" },
  { node: "167:10566", title: "Частые простуды", kind: "svg", asset: "temp" },
  { node: "167:10574", title: "Снижение либидо", kind: "svg", asset: "waist" },
  { node: "167:10581", title: "Туман в голове / забывчивость", kind: "svg", asset: "brain01" },
  { node: "167:10589", title: "Боли в суставах", kind: "svg", asset: "knee" },
  { node: "167:10597", title: "Перепады настроения", kind: "emoji", asset: "sadFace" },
];

function Moon24() {
  return (
    <div className={styles.moon24} data-node-id="169:11192">
      <div className={styles.moonVec1} data-node-id="169:11193">
        <img alt="" src={IMG.moon1} draggable={false} />
      </div>
      <div className={styles.moonVec2Wrap} data-node-id="169:11194">
        <div className={styles.moonVec2Inset}>
          <img alt="" src={IMG.moon2} draggable={false} />
        </div>
      </div>
    </div>
  );
}

function RowIcon({ row }: { row: RowDef }) {
  if (row.kind === "moon") {
    return <Moon24 />;
  }
  if (row.kind === "emoji" && row.asset) {
    return (
      <div className={styles.emoji24}>
        <img alt="" src={IMG[row.asset]} draggable={false} />
      </div>
    );
  }
  if (row.kind === "svg" && row.asset) {
    return <img alt="" className={styles.rowIconImg} src={IMG[row.asset]} draggable={false} />;
  }
  return null;
}

/** Figma 167:10015 — Deficit calculator / Step 1. */
export function DeficitCalculatorStep1View() {
  return (
    <div className={styles.root} data-node-id="167:10015">
      <ProfileFigmaStatusBar variant="ios125" rightSrc={STATUS_RIGHT} className={styles.status} />

      <header className={styles.header} data-node-id="167:10037">
        <IconArrowBack href="/trackers" label="К трекерам" />
        <h1 className={styles.headerTitle} data-node-id="I167:10037;568:1596">
          Калькулятор дефицитов
        </h1>
        <div className={styles.headerGhost} aria-hidden data-node-id="I167:10037;568:1597" />
      </header>

      <div className={styles.table} data-node-id="167:10296">
        {ROWS.map((r) => (
          <div key={r.node} className={styles.row} data-node-id={r.node}>
            <div className={styles.rowInner}>
              <div className={styles.iconBubble}>
                <RowIcon row={r} />
              </div>
              <p className={styles.rowTitle}>{r.title}</p>
            </div>
          </div>
        ))}
      </div>

      <Link href="/trackers/deficit-calculator/step-2" className={styles.nextBtn} data-node-id="167:10111">
        <p className={styles.nextBtnText} data-node-id="I167:10111;696:4538">
          Далее{" "}
        </p>
      </Link>
      <p className={styles.hint} data-node-id="169:11240">
        Выбери хотя бы один симптом
      </p>
    </div>
  );
}
