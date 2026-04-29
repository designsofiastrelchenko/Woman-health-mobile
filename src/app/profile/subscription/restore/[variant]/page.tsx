import { notFound } from "next/navigation";
import { ProfileRestorePurchaseView } from "@/components/figma-screens/profile-restore-purchase-view";
import type { RestorePurchaseBannerVariant } from "@/components/figma-screens/profile-restore-purchase-view";

function parseVariant(raw: string): RestorePurchaseBannerVariant | null {
  if (raw === "1" || raw === "2" || raw === "3") {
    return Number(raw) as RestorePurchaseBannerVariant;
  }
  return null;
}

interface PageProps {
  params: Promise<{ variant: string }>;
}

/**
 * Figma: 92:27500 (1), 93:28281 (2), 93:28416 (3) — Restore purchase carousel screens.
 */
export default async function ProfileSubscriptionRestorePage({ params }: PageProps) {
  const { variant: variantParam } = await params;
  const variant = parseVariant(variantParam);
  if (variant === null) {
    notFound();
  }
  return <ProfileRestorePurchaseView variant={variant} />;
}
