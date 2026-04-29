import { redirect } from "next/navigation";

/** Onboarding is auto-play only; legacy `/onboarding/N` URLs redirect here. */
export default function OnboardingStepRedirect() {
  redirect("/onboarding");
}
