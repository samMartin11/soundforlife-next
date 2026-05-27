import type { Metadata } from "next";
import InfoPage from "@/components/InfoPage";

export const metadata: Metadata = {
  title: "Free Hearing Aid Trial | SoundForLife",
  description: "Try premium hearing aids for 14 days in your own environment — at home, at work, in noisy settings — with zero obligation to buy.",
};

export default function Page() {
  return (
    <InfoPage
      tag="Why SoundForLife"
      title="14-Day Free Hearing Aid Trial — Zero Obligation"
      description="Test the latest hearing aids in your real world — restaurants, markets, family gatherings — before you commit. Completely free, completely risk-free."
      ctaLabel="Start Your Free Trial"
      faqs={[
        {
          q: "Is the trial actually 100% free?",
          a: "Yes. You can test our hearing aids in your own environment — at home, at work, or in noisy social settings — with zero obligation to buy.",
        },
        {
          q: "Do I need to pay a deposit for the trial?",
          a: "Depending on the premium level of the device, a fully refundable security deposit may be required, which is returned immediately if you choose not to proceed.",
        },
        {
          q: "How long does the free trial period last?",
          a: "Our standard free trial period lasts for 14 days, giving your brain enough time to acclimate to the new sounds.",
        },
        {
          q: "Can I trial more than one type of hearing aid?",
          a: "Yes. If the first device doesn't feel right, our audiologists can swap it for a different style or brand during your trial period.",
        },
        {
          q: "What happens if I lose the hearing aids during the trial?",
          a: "Lost devices during the trial period may incur a replacement fee. We go over all trial agreements and loss policies before you leave the clinic.",
        },
      ]}
    />
  );
}
