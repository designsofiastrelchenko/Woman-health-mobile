import Image from "next/image";
import typography from "@/design-system/typography.module.css";
import type { OnboardingSlide } from "@/lib/types/onboarding";
import { IosStatusBar } from "@/components/onboarding/ios-status-bar";
import { OnboardingProgress } from "@/components/onboarding/onboarding-progress";
import styles from "./onboarding-screen.module.css";

interface OnboardingSlideViewProps {
  slide: OnboardingSlide;
  contentTotal: number;
}

export function OnboardingSlideView({
  slide,
  contentTotal,
}: OnboardingSlideViewProps) {
  return (
    <section
      className={styles.section}
      aria-labelledby={`onb-title-${slide.step}`}
    >
      <IosStatusBar />
      <div className={styles.main}>
        <div className={styles.flexGrow} />
        <div className={styles.heroWrap}>
          <div className={styles.hero}>
            <Image
              className={styles.heroImage}
              src={slide.imageSrc}
              alt={slide.imageAlt}
              fill
              sizes="352px"
              priority={slide.step <= 2}
            />
          </div>
        </div>
        <div className={styles.flexGrow} />
        <div className={styles.copy}>
          <h1
            id={`onb-title-${slide.step}`}
            className={`${typography.heading3} ${styles.title}`}
          >
            {slide.title}
          </h1>
          <p className={`${typography.paragraph2} ${styles.description}`}>
            {slide.description}
          </p>
        </div>
        <OnboardingProgress contentStep={slide.step} contentTotal={contentTotal} />
      </div>
    </section>
  );
}
