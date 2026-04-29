import { MobileAuthShell } from "@/components/auth/mobile-auth-shell";
import { ForgotInputCodeClient } from "@/components/forgot-password/forgot-input-code-client";

/** Figma: forgot password — input code + keyboard (node 85:15873). */
export default function ForgotInputCodePage() {
  return (
    <MobileAuthShell>
      <ForgotInputCodeClient />
    </MobileAuthShell>
  );
}
