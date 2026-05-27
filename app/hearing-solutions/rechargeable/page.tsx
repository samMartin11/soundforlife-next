import type { Metadata } from "next";
import InfoPage from "@/components/InfoPage";

export const metadata: Metadata = {
  title: "Rechargeable Hearing Aids | SoundForLife",
  description: "Never buy batteries again. Explore rechargeable hearing aids with all-day power and fast charging.",
};

export default function Page() {
  return (
    <InfoPage
      tag="Hearing Solutions"
      title="Rechargeable Hearing Aids"
      description="Modern rechargeable hearing aids deliver a full day of hearing — including streaming — on a single charge. No fiddling with tiny batteries."
      faqs={[
        {
          q: "How long does the battery last on a single charge?",
          a: "Most rechargeable hearing aids provide 24 to 30 hours of continuous use, including several hours of Bluetooth streaming, on a single 3-hour charge.",
        },
        {
          q: "What happens if I forget my charger on a trip?",
          a: "Rechargeable models require their specific charging base. We highly recommend picking up a portable travel power bank designed for your specific model if you travel frequently.",
        },
        {
          q: "How long does it take to fully charge rechargeable hearing aids?",
          a: "A full charge typically takes about 3 hours. A quick 30-minute charge can usually provide up to 6 hours of use in an emergency.",
        },
        {
          q: "Are rechargeable hearing aids more expensive than battery-operated ones?",
          a: "The initial cost may be slightly higher, but you save money and hassle long-term by never having to purchase or replace disposable batteries.",
        },
        {
          q: "Can I replace the rechargeable battery myself?",
          a: "No, lithium-ion batteries in hearing aids are fully sealed to protect against moisture and dust. If the battery degrades over years of use, it must be replaced by the manufacturer.",
        },
      ]}
    />
  );
}
