import { notFound } from "next/navigation";
import { getOnboardingSlide } from "@/lib/api-mock/onboarding";
import { OnboardingScreen } from "@/components/onboarding/onboarding-screen";

interface OnboardingStepPageProps {
  params: Promise<{ step: string }>;
}

export default async function OnboardingStepPage({
  params,
}: OnboardingStepPageProps) {
  const { step: raw } = await params;
  const step = Number.parseInt(raw, 10);
  if (!Number.isFinite(step) || step < 1) {
    notFound();
  }

  const slide = await getOnboardingSlide(step);
  if (!slide) {
    notFound();
  }

  return <OnboardingScreen slide={slide} />;
}
