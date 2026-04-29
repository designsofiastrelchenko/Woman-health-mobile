import Image from "next/image";
import styles from "./social-google-icon.module.css";

const LAYERS = [
  { src: "/icons/auth/g1.svg", inset: "32.75% 70.88% 32.23% 12.5%" },
  { src: "/icons/auth/g2.svg", inset: "42.99% 12.5% 20.76% 50.83%" },
  { src: "/icons/auth/g3.svg", inset: "57.82% 26.52% 12.5% 16.97%" },
  { src: "/icons/auth/g4.svg", inset: "12.5% 26.07% 57.24% 16.69%" },
] as const;

/** Google “G” mark — layout from Figma `Logos` (node 78:314). */
export function SocialGoogleIcon() {
  return (
    <span className={styles.wrap} aria-hidden>
      {LAYERS.map((layer) => (
        <span
          key={layer.src}
          className={styles.layer}
          style={{ inset: layer.inset }}
        >
          <Image
            src={layer.src}
            alt=""
            width={24}
            height={24}
            className={styles.img}
            unoptimized
          />
        </span>
      ))}
    </span>
  );
}
