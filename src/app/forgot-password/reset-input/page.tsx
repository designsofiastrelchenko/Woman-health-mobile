import { MobileAuthShell } from "@/components/auth/mobile-auth-shell";
import { ForgotResetClient } from "@/components/forgot-password/forgot-reset-client";

/** Figma: reset password filled fields (node 85:15833). */
export default function ForgotResetInputPage() {
  return (
    <MobileAuthShell>
      <ForgotResetClient variant="filled" />
    </MobileAuthShell>
  );
}
