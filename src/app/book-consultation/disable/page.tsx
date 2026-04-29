import { FigmaDeviceShell } from "@/components/figma-screens/figma-device-shell";
import { BookConsultationView } from "@/components/figma-screens/book-consultation-view";

/** Figma: Book a Consultation / Disable (node 200:4122). */
export default function BookConsultationDisablePage() {
  return (
    <FigmaDeviceShell contentMinHeight={768}>
      <BookConsultationView variant="disable" />
    </FigmaDeviceShell>
  );
}
