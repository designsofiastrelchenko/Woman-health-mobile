import type { OnboardingSlide } from "@/lib/types/onboarding";
import { mockNetworkDelay } from "@/lib/api-mock/delay";

const SLIDES: OnboardingSlide[] = [
  {
    step: 1,
    title: "Твоё пространство для здоровья",
    description:
      "Персональный помощник по женскому здоровью — курсы, инструменты и забота в одном приложении",
    imageSrc: "/images/onboarding-step1.png",
    imageAlt: "Иллюстрация: пространство для здоровья",
  },
  {
    step: 2,
    title: "Учись у эксперта в любое время",
    description:
      "Курсы, вебинары и гайды от врача-гинеколога — доступны офлайн прямо в телефоне",
    imageSrc: "/images/onboarding-step2.png",
    imageAlt: "Иллюстрация: обучение у эксперта",
  },
  {
    step: 3,
    title: "Приватность на первом месте",
    description:
      "Твои анализы и данные надёжно защищены. Шифрование и личное безопасное пространство",
    imageSrc: "/images/onboarding-step3.png",
    imageAlt: "Иллюстрация: приватность данных",
  },
  {
    step: 4,
    title: "Готово к спокойному старту",
    description:
      "Дальше ты попадёшь в главный экран прототипа. Позже этот шаг заменится на реальную авторизацию и синхронизацию.",
    imageSrc: "/images/onboarding-step2.png",
    imageAlt: "Иллюстрация: старт приложения",
  },
];

const TOTAL_STEPS = SLIDES.length;

/**
 * Mock data adapter. Replace this module with a real API client later.
 */
export async function getOnboardingSlides(): Promise<OnboardingSlide[]> {
  await mockNetworkDelay(280);
  return [...SLIDES];
}

export async function getOnboardingSlide(
  step: number
): Promise<OnboardingSlide | null> {
  await mockNetworkDelay(220);
  if (step < 1 || step > TOTAL_STEPS) {
    return null;
  }
  const slide = SLIDES.find((s) => s.step === step);
  return slide ?? null;
}

export function getOnboardingTotalSteps(): number {
  return TOTAL_STEPS;
}
