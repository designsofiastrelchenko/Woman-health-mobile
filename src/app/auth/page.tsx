import Link from "next/link";
import { MobileAuthShell } from "@/components/auth/mobile-auth-shell";
import { SocialGoogleIcon } from "@/components/auth/social-google-icon";
import Image from "next/image";
import screen from "@/components/auth/auth-screen.module.css";

/** Figma: `Sign in and Create Account Screen` (node 78:5315). */
export default function AuthHubPage() {
  return (
    <MobileAuthShell>
      <main className={screen.hubBlock}>
        <div className={screen.hubTitleBlock}>
          <h1 className={screen.brandTitle}>Шефова.онлайн</h1>
          <p className={screen.brandSubtitle}>Твоё пространство для здоровья</p>
        </div>
        <div className={screen.stack16}>
          <button type="button" className={screen.hubOAuth}>
            <SocialGoogleIcon />
            Войти через Google
          </button>
          <button type="button" className={screen.hubOAuth}>
            <Image
              src="/icons/auth/apple.svg"
              alt=""
              width={24}
              height={24}
              unoptimized
            />
            Войти через Apple
          </button>
        </div>
        <div className={screen.stack16}>
          <Link href="/login" className={screen.hubPrimary}>
            Войти
          </Link>
          <Link href="/register" className={screen.hubSecondary}>
            Регистрация
          </Link>
        </div>
      </main>
    </MobileAuthShell>
  );
}
