/* eslint-disable @next/next/no-img-element -- Figma SVG exports use preserveAspectRatio="none"; next/image distorts layered icons. */
import Link from "next/link";
import typography from "@/design-system/typography.module.css";
import styles from "./navigation-bar.module.css";

export type NavigationTabId =
  | "feed"
  | "knowledge"
  | "home"
  | "trackers"
  | "profile";

interface NavigationBarProps {
  active: NavigationTabId;
  className?: string;
}

const TABS: {
  id: NavigationTabId;
  label: string;
  href: string;
}[] = [
  { id: "feed", label: "Лента", href: "/feed" },
  { id: "knowledge", label: "Знания", href: "/knowledge" },
  { id: "home", label: "Дом", href: "/home" },
  { id: "trackers", label: "Трекеры", href: "/trackers" },
  { id: "profile", label: "Профиль", href: "/profile" },
];

/** Figma Navigation Bar — avoid Next/Image on SVGs with preserveAspectRatio="none" (they stretch). */
function NavLayerImg({ src, inset }: { src: string; inset: string }) {
  return (
    <span className={styles.layer} style={{ inset }}>
      <img src={src} alt="" className={styles.layerImg} draggable={false} />
    </span>
  );
}

function IconCrown({ active = false }: { active?: boolean }) {
  const src = active
    ? "/icons/figma/671e2fec8d3a7379fac6bd048cd9860885cea0f4.svg"
    : "/icons/figma/9236d25db5b69f1fda2924bcb1c9e4a3bc2dd8e6.svg";
  return (
    <span className={styles.icon22}>
      <img src={src} alt="" className={styles.crownImg} draggable={false} />
    </span>
  );
}

function IconTask({ active = false }: { active?: boolean }) {
  if (active) {
    return (
      <span className={styles.icon22}>
        <NavLayerImg
          src="/icons/figma/66729983d2327dbc7190d9321ebad663bd72db5b.svg"
          inset="14.58% 14.6% 8.33% 14.57%"
        />
        <NavLayerImg
          src="/icons/figma/f97797df5d27977b6e842070e35e0f9b1c9d03d7.svg"
          inset="45.83% 33.34% 33.33% 33.33%"
        />
        <NavLayerImg
          src="/icons/figma/dd5ed1f6c158e41f3b8cb8dd60cd3b7498a84aa4.svg"
          inset="8.33% 31.27% 77.08% 31.23%"
        />
      </span>
    );
  }
  return (
    <span className={styles.icon22}>
      <NavLayerImg
        src="/icons/figma/f28eddd6a14607d70851a8f7632f58dccc287415.svg"
        inset="45.83% 33.34% 33.33% 33.33%"
      />
      <NavLayerImg
        src="/icons/figma/9fe84290581d3ddc3630689afd2770b39acf7422.svg"
        inset="14.58% 14.6% 8.33% 14.57%"
      />
      <NavLayerImg
        src="/icons/figma/0e5bd55d979bbc6d833eca7de90a68573e04cf10.svg"
        inset="8.33% 31.27% 77.08% 31.23%"
      />
    </span>
  );
}

function IconHome({ active }: { active: boolean }) {
  const src = active
    ? "/icons/figma/home-fill-1.svg"
    : "/icons/figma/home-outline-2.svg";
  return (
    <span className={styles.icon22}>
      <img src={src} alt="" className={styles.iconSingle} draggable={false} />
    </span>
  );
}

function IconAnalytics({ active = false }: { active?: boolean }) {
  if (active) {
    return (
      <span className={styles.icon22}>
        <NavLayerImg
          src="/icons/figma/66f055d6487c096134fbe0fb4c7367e472cb1208.svg"
          inset="10.42%"
        />
        <NavLayerImg
          src="/icons/figma/0bb456bfd48ba82e94f5daeeb3afe4311dae8c2b.svg"
          inset="24.93% 29.12% 52.11% 24.97%"
        />
        <NavLayerImg
          src="/icons/figma/e1dae882d428553590def20a485e80243690036f.svg"
          inset="68.75% 68.75% 25% 31.25%"
        />
        <span
          className={styles.layer}
          style={{
            top: "62.5%",
            bottom: "25%",
            left: "50%",
            width: "18%",
            transform: "translateX(-50%)",
          }}
        >
          <img
            src="/icons/figma/d39dee5bb6f8702ebd96195614d906772b986144.svg"
            alt=""
            className={styles.layerImg}
            draggable={false}
          />
        </span>
        <NavLayerImg
          src="/icons/figma/fc73a7a753658de62e2b924b5dec88711cc10fd4.svg"
          inset="54.17% 29.17% 25% 70.83%"
        />
      </span>
    );
  }
  return (
    <span className={styles.icon22}>
      <NavLayerImg
        src="/icons/figma/84a5e3cf3557bdcb02e9341c21738861765f4ffb.svg"
        inset="10.42%"
      />
      <NavLayerImg
        src="/icons/figma/e2131578e9c77be7a0a874dc4447e5515affe433.svg"
        inset="24.93% 29.12% 52.11% 24.97%"
      />
    </span>
  );
}

function IconUser() {
  return (
    <span className={styles.icon22}>
      <NavLayerImg
        src="/icons/figma/1823a2cb1d4ce1a45ed4bbc2f98f55e62b40b925.svg"
        inset="10.42%"
      />
      <NavLayerImg
        src="/icons/figma/ce56644af69dba6dba3879b2984029dd6cad7d93.svg"
        inset="29.17% 31.25% 29.17% 31.25%"
      />
    </span>
  );
}

function TabIcon({ id, active }: { id: NavigationTabId; active: boolean }) {
  if (id === "feed") {
    return <IconCrown active={active} />;
  }
  if (id === "knowledge") {
    return <IconTask active={active} />;
  }
  if (id === "home") {
    return <IconHome active={active} />;
  }
  if (id === "trackers") {
    return <IconAnalytics active={active} />;
  }
  return <IconUser />;
}

/**
 * Bottom navigation — Figma `Navigation Bar` (node 130:7525), Light / Home vs Default.
 */
export function NavigationBar({ active, className }: NavigationBarProps) {
  const rootClass = [styles.bar, className].filter(Boolean).join(" ");

  return (
    <nav className={rootClass} aria-label="Основная навигация">
      {TABS.map((tab) => {
        const isActive = tab.id === active;
        return (
          <Link
            key={tab.id}
            href={tab.href}
            className={styles.item}
            aria-current={isActive ? "page" : undefined}
          >
            <TabIcon id={tab.id} active={isActive} />
            <span
              className={`${styles.itemLabel} ${typography.navLabel} ${isActive ? typography.navLabelActive : ""}`}
            >
              {tab.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
