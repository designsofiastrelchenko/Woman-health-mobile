import { FigmaDeviceShell } from "@/components/figma-screens/figma-device-shell";
import { BookConsultationView } from "@/components/figma-screens/book-consultation-view";

/** Figma: Book a Consultation (node 200:3845). */
export default function BookConsultationPage() {
  return (
    <FigmaDeviceShell contentMinHeight={768}>
      <BookConsultationView variant="active" />
    </FigmaDeviceShell>
  );
}
