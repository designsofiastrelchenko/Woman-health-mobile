import { MobileAuthShell } from "@/components/auth/mobile-auth-shell";
import { ForgotEmailClient } from "@/components/forgot-password/forgot-email-client";

/** Figma: Forgot Password (node 85:15801). */
export default function ForgotPasswordPage() {
  return (
    <MobileAuthShell>
      <ForgotEmailClient />
    </MobileAuthShell>
  );
}
