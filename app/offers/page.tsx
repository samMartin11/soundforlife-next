import type { Metadata } from "next";
import InfoPage from "@/components/InfoPage";

export const metadata: Metadata = {
  title: "Offers & Deals | SoundForLife",
  description: "Current deals, EMI financing, and insurance/government scheme assistance — making hearing care affordable for every Indian.",
};

export default function Page() {
  return (
    <InfoPage
      tag="Offers"
      title="Offers — Hearing Care Made Affordable"
      description="From 0% EMI to government scheme assistance, we work to make premium hearing care financially accessible for every patient."
      subPages={[
        { label: "Current Deals", href: "/offers/current-deals/", description: "Latest discounts and promotions" },
        { label: "EMI & Financing", href: "/offers/emi-financing/", description: "0% interest payment plans" },
        { label: "Insurance & Government Schemes", href: "/offers/insurance-help/", description: "CGHS, ADIP, Ayushman & more" },
      ]}
      ctaLabel="See Current Deals"
      ctaHref="/offers/current-deals/"
      faqs={[
        {
          q: "How often do you update your offers and promotions?",
          a: "We update our promotions monthly, offering different discounts, technology upgrades, and seasonal deals to ensure hearing healthcare remains affordable.",
        },
        {
          q: "Can I combine a discount code with an ongoing sale?",
          a: "Generally, promotional offers and discounts cannot be stacked. Our team will automatically apply the single best discount available for your situation.",
        },
        {
          q: "Do you have seasonal sales on hearing aids?",
          a: "Yes, we often run special promotions during festive seasons (like Diwali or New Year) and Better Hearing Month.",
        },
        {
          q: "How can I stay updated on new offers?",
          a: "The best way to stay informed is by subscribing to our newsletter or checking the 'Offers' page on our website regularly.",
        },
        {
          q: "Are discounts available for existing customers upgrading their devices?",
          a: "Yes, we value loyalty. Existing customers trading in old devices receive exclusive trade-in discounts toward the purchase of new technology.",
        },
      ]}
    />
  );
}
