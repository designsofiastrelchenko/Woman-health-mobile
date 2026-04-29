import Image from "next/image";
import Link from "next/link";
import type { OnboardingSlide } from "@/lib/types/onboarding";
import { getOnboardingTotalSteps } from "@/lib/api-mock/onboarding";
import { IosStatusBar } from "@/components/onboarding/ios-status-bar";
import { OnboardingProgress } from "@/components/onboarding/onboarding-progress";
import styles from "./onboarding-screen.module.css";

interface OnboardingScreenProps {
  slide: OnboardingSlide;
}

export function OnboardingScreen({ slide }: OnboardingScreenProps) {
  const total = getOnboardingTotalSteps();
  const isFirst = slide.step === 1;
  const isLast = slide.step === total;

  const nextHref = isLast ? "/home" : `/onboarding/${slide.step + 1}`;
  const nextLabel = isLast ? "Начать" : "Далее";

  return (
    <section className={styles.shell} aria-labelledby={`onb-title-${slide.step}`}>
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
          <h1 id={`onb-title-${slide.step}`} className={styles.title}>
            {slide.title}
          </h1>
          <p className={styles.description}>{slide.description}</p>
        </div>
        <div
          className={
            isLast ? `${styles.actions} ${styles.actionsLast}` : styles.actions
          }
        >
          <div
            className={
              isFirst && !isLast
                ? `${styles.rowActions} ${styles.rowSingle}`
                : styles.rowActions
            }
          >
            {!isFirst ? (
              <Link
                href={`/onboarding/${slide.step - 1}`}
                className={styles.linkQuiet}
                prefetch
              >
                Назад
              </Link>
            ) : null}
            <Link
              href={nextHref}
              className={isLast ? styles.linkPrimaryFull : styles.linkPrimary}
              prefetch
            >
              {nextLabel}
              {!isLast ? <span className={styles.linkChevron}>→</span> : null}
            </Link>
          </div>
          {isFirst ? (
            <Link href="/home" className={styles.linkQuiet} prefetch>
              Пропустить онбординг
            </Link>
          ) : null}
        </div>
        <OnboardingProgress currentStep={slide.step} totalSteps={total} />
      </div>
    </section>
  );
}
