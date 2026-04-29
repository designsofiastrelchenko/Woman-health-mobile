import { getOnboardingSlides } from "@/lib/api-mock/onboarding";
import { OnboardingAutoPlay } from "@/components/onboarding/onboarding-auto-play";

export default async function OnboardingPage() {
  const slides = await getOnboardingSlides();
  return <OnboardingAutoPlay slides={slides} />;
}
