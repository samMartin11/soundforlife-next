import type { Metadata } from "next";
import InfoPage from "@/components/InfoPage";

export const metadata: Metadata = {
  title: "Current Deals on Hearing Aids | SoundForLife",
  description: "Browse SoundForLife's latest hearing aid deals, discounts, and promotional offers. In-clinic only — with professional fitting included.",
};

export default function Page() {
  return (
    <InfoPage
      tag="Offers"
      title="Current Deals — Best Prices on Premium Hearing Aids"
      description="Our latest offers combine savings with the professional care you deserve. All deals include in-clinic fitting and aftercare."
      ctaLabel="Claim This Deal"
      faqs={[
        {
          q: "Can I combine multiple promotional offers?",
          a: "In most cases, offers cannot be combined. We will always ensure you receive the maximum possible savings by applying the strongest single promotion to your purchase.",
        },
        {
          q: "Do these deals apply to all hearing aid styles?",
          a: "Most deals apply to our core technology ranges, but ultra-premium or highly specialized models (like completely invisible aids) may be excluded depending on the promotion.",
        },
        {
          q: "Are current deals applicable for online purchases?",
          a: "Our deals apply to purchases finalized in our clinics, as hearing aids require in-person professional fitting and programming for successful outcomes.",
        },
        {
          q: "When does the current promotion expire?",
          a: "Expiration dates vary by promotion. Please check the specific terms and conditions listed under each deal on this page.",
        },
        {
          q: "Is there a price-match guarantee for current deals?",
          a: "Yes, we offer a competitive price-match guarantee for exact make and model hearing aids quoted by local authorized licensed competitors. Terms and conditions apply.",
        },
      ]}
    />
  );
}
