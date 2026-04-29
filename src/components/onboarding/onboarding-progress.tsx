import styles from "./onboarding-progress.module.css";

interface OnboardingProgressProps {
  currentStep: number;
  totalSteps: number;
}

export function OnboardingProgress({
  currentStep,
  totalSteps,
}: OnboardingProgressProps) {
  return (
    <div className={styles.row} role="status" aria-label={`Шаг ${currentStep} из ${totalSteps}`}>
      {Array.from({ length: totalSteps }, (_, index) => {
        const stepNumber = index + 1;
        const isActive = stepNumber === currentStep;
        return (
          <span
            key={stepNumber}
            className={isActive ? styles.dotActive : styles.dot}
          />
        );
      })}
    </div>
  );
}
