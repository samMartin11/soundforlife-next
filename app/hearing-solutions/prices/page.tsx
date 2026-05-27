import type { Metadata } from "next";
import InfoPage from "@/components/InfoPage";

export const metadata: Metadata = {
  title: "Hearing Aid Prices | SoundForLife",
  description: "Transparent, all-inclusive hearing aid pricing in India. No hidden costs — assessment, fitting, and aftercare included.",
};

export default function Page() {
  return (
    <InfoPage
      tag="Hearing Solutions"
      title="Hearing Aid Prices — Transparent & All-Inclusive"
      description="Our pricing includes the hearing assessment, custom programming, devices, manufacturer warranties, and follow-up adjustments. No surprises."
      faqs={[
        {
          q: "Why is there such a wide range in hearing aid prices?",
          a: "Price depends on the technology level (the microchip inside). Premium models cost more because they have advanced features like AI-driven background noise reduction and automatic environment switching.",
        },
        {
          q: "Are there hidden costs beyond the device price?",
          a: "At SoundForLife, our pricing is transparent. The quoted cost includes the devices, your initial fitting, and your designated aftercare package.",
        },
        {
          q: "Do more expensive hearing aids sound better?",
          a: "Yes, premium technology processes sound much faster and handles noisy environments significantly better, providing a more natural and effortless listening experience.",
        },
        {
          q: "Are cheaper hearing aids worth the money?",
          a: "Basic hearing aids are highly effective for one-on-one conversations and quiet environments. If you live a quiet lifestyle, a basic tier may be all you need.",
        },
        {
          q: "What is included in the price of the hearing aid?",
          a: "Our prices include the hearing assessment, custom programming, the devices themselves, manufacturer warranties, and follow-up adjustments.",
        },
      ]}
      ctaLabel="Get a Price Quote"
    />
  );
}
