import { FigmaDeviceShell } from "@/components/figma-screens/figma-device-shell";
import { NotificationsView } from "@/components/figma-screens/notifications-view";

/** Figma: Notification Page (node 108:2230). */
export default function NotificationsPage() {
  return (
    <FigmaDeviceShell contentMinHeight={768}>
      <NotificationsView />
    </FigmaDeviceShell>
  );
}
