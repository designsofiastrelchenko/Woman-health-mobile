/* eslint-disable @next/next/no-img-element */
import styles from "./profile-figma-status-bar.module.css";

export type ProfileFigmaStatusVariant = "ios125" | "ios78";

const RIGHT_SRC: Record<ProfileFigmaStatusVariant, string> = {
  ios125: "/icons/figma/ce44c68f807075ef1eb11a0819c0ba7b73876ae6.svg",
  ios78: "/icons/figma/27e7b81d81b0541a257a12077f0068c2d950afed.svg",
};

interface ProfileFigmaStatusBarProps {
  variant?: ProfileFigmaStatusVariant;
  className?: string;
  /** Override status-bar right cluster (e.g. Figma News Feed `fff8b42c…`). */
  rightSrc?: string;
}

/** Figma `IOS / Status bar` (node 91:20938) vs compact `IOS` (78:285). */
export function ProfileFigmaStatusBar({
  variant = "ios125",
  className,
  rightSrc,
}: ProfileFigmaStatusBarProps) {
  const right = rightSrc ?? RIGHT_SRC[variant];
  return (
    <div className={[styles.bar, className].filter(Boolean).join(" ")} aria-hidden>
      <div className={styles.right}>
        <img src={right} alt="" className={styles.rightImg} draggable={false} />
      </div>
      <div className={styles.clock}>
        <p className={styles.clockText}>9:41</p>
      </div>
    </div>
  );
}
