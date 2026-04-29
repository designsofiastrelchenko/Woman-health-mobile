/* eslint-disable @next/next/no-img-element */
import styles from "./knowledge-masked-icon.module.css";

const DEFAULT_MASK = "/icons/figma/96310348c445c45fc1af346852679c9efab4e455.svg";

interface KnowledgeMaskedIconProps {
  /** Defaults to shared Iconsax clip mask. */
  maskSrc?: string;
  innerSrc: string;
  size: number;
  maskPosition: string;
  /** Inset of the mask layer inside the outer box (Figma e.g. 8.33% 8.46% 8.33% 8.21%). */
  maskLayerInset?: string;
  /** Inset of the fill image inside the mask layer (Figma e.g. -3.75%). */
  innerImgInset?: string;
}

export function KnowledgeMaskedIcon({
  maskSrc = DEFAULT_MASK,
  innerSrc,
  size,
  maskPosition,
  maskLayerInset = "0",
  innerImgInset = "0",
}: KnowledgeMaskedIconProps) {
  const ms = `${size}px`;
  const maskBlock = {
    WebkitMaskImage: `url(${maskSrc})`,
    maskImage: `url(${maskSrc})`,
    WebkitMaskSize: `${ms} ${ms}`,
    maskSize: `${ms} ${ms}`,
    WebkitMaskPosition: maskPosition,
    maskPosition: maskPosition,
    WebkitMaskRepeat: "no-repeat" as const,
    maskRepeat: "no-repeat" as const,
  };

  return (
    <div className={styles.wrap} style={{ width: size, height: size }}>
      <div
        className={styles.masked}
        style={{
          ...maskBlock,
          inset: maskLayerInset === "0" ? 0 : maskLayerInset,
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: innerImgInset,
          }}
        >
          <img alt="" src={innerSrc} className={styles.fill} draggable={false} />
        </div>
      </div>
    </div>
  );
}
