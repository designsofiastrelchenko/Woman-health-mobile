import { MobileAuthShell } from "@/components/auth/mobile-auth-shell";
import { ForgotResetClient } from "@/components/forgot-password/forgot-reset-client";

/** Figma: reset password empty fields (node 85:15815). */
export default function ForgotResetPage() {
  return (
    <MobileAuthShell>
      <ForgotResetClient variant="empty" />
    </MobileAuthShell>
  );
}
