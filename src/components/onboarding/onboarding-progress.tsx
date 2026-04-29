import styles from "./onboarding-progress.module.css";

/** Matches Figma onboarding: three indicators (pill + two dots pattern). */
const VISUAL_SEGMENT_COUNT = 3;

interface OnboardingProgressProps {
  /** Current content screen (1-based), can exceed visual segments. */
  contentStep: number;
  /** Total content screens — used for `aria-label` only. */
  contentTotal: number;
}

export function OnboardingProgress({
  contentStep,
  contentTotal,
}: OnboardingProgressProps) {
  const activeSegmentIndex = Math.min(
    Math.max(contentStep - 1, 0),
    VISUAL_SEGMENT_COUNT - 1
  );

  return (
    <div
      className={styles.row}
      role="status"
      aria-label={`Экран ${contentStep} из ${contentTotal}`}
    >
      {Array.from({ length: VISUAL_SEGMENT_COUNT }, (_, index) => {
        const isActive = index === activeSegmentIndex;
        return (
          <span
            key={index}
            className={isActive ? styles.dotActive : styles.dot}
          />
        );
      })}
    </div>
  );
}
