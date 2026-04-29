"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import type { OnboardingSlide } from "@/lib/types/onboarding";
import { OnboardingSlideView } from "@/components/onboarding/onboarding-slide-view";
import styles from "./onboarding-screen.module.css";

const SLIDE_MS = 4200;

interface OnboardingAutoPlayProps {
  slides: OnboardingSlide[];
}

/**
 * Auto-advances onboarding slides, then navigates to `/auth` (prototype flow).
 */
export function OnboardingAutoPlay({ slides }: OnboardingAutoPlayProps) {
  const router = useRouter();
  const total = slides.length;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (total === 0) {
      return;
    }

    const id = window.setInterval(() => {
      setIndex((i) => {
        const next = i + 1;
        if (next >= total) {
          window.clearInterval(id);
          router.replace("/auth");
          return i;
        }
        return next;
      });
    }, SLIDE_MS);

    return () => window.clearInterval(id);
  }, [total, router]);

  const slide = slides[index];
  if (!slide) {
    return null;
  }

  return (
    <div className={styles.shell}>
      <OnboardingSlideView slide={slide} contentTotal={total} />
    </div>
  );
}
