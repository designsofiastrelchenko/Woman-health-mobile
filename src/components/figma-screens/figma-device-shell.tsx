import { IosStatusBar } from "@/components/onboarding/ios-status-bar";
import styles from "./figma-device-shell.module.css";

interface FigmaDeviceShellProps {
  children: React.ReactNode;
  /** Inner scroll area min-height (Figma frame minus status bar). */
  contentMinHeight: number;
}

/**
 * White 375px column + iOS status bar; inner area for absolutely positioned Figma screens.
 */
export function FigmaDeviceShell({ children, contentMinHeight }: FigmaDeviceShellProps) {
  return (
    <div className={styles.device}>
      <IosStatusBar />
      <div className={styles.inner} style={{ minHeight: contentMinHeight }}>
        {children}
      </div>
    </div>
  );
}
