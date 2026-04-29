import { FigmaDeviceShell } from "@/components/figma-screens/figma-device-shell";
import { BookConsultationView } from "@/components/figma-screens/book-consultation-view";

/** Figma: Book a Consultation / Success (node 200:4244). */
export default function BookConsultationSuccessPage() {
  return (
    <FigmaDeviceShell contentMinHeight={768}>
      <BookConsultationView variant="success" />
    </FigmaDeviceShell>
  );
}
