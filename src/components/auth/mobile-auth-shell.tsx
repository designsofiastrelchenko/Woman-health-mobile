import { IosStatusBar } from "@/components/onboarding/ios-status-bar";
import styles from "./mobile-auth-shell.module.css";

export function MobileAuthShell({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.shell}>
      <IosStatusBar />
      {children}
    </div>
  );
}
