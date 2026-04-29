import { MobileAuthShell } from "@/components/auth/mobile-auth-shell";
import { ForgotSendCodeClient } from "@/components/forgot-password/forgot-send-code-client";

/** Figma: forgot password — send code (node 85:15851). */
export default function ForgotSendCodePage() {
  return (
    <MobileAuthShell>
      <ForgotSendCodeClient />
    </MobileAuthShell>
  );
}
