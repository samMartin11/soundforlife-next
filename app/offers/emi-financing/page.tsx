import type { Metadata } from "next";
import InfoPage from "@/components/InfoPage";

export const metadata: Metadata = {
  title: "EMI & Financing for Hearing Aids | SoundForLife",
  description: "0% interest EMI options up to 18 months, and extended plans up to 60 months. Get the hearing aid you need without financial stress.",
};

export default function Page() {
  return (
    <InfoPage
      tag="Offers"
      title="EMI & Financing — Get Your Hearing Aid Today"
      description="Don't let cost delay better hearing. Our 0% EMI plans let you start hearing clearly now and pay at a pace that suits you."
      ctaLabel="Check Your EMI Eligibility"
      faqs={[
        {
          q: "Are there zero-interest financing options?",
          a: "Yes, we offer flexible 6, 12, and 18-month 0% interest Easy Monthly Installment (EMI) options through our trusted financing partners for qualifying customers.",
        },
        {
          q: "Does applying for financing affect my credit score?",
          a: "Our financing partners typically perform a quick eligibility check or 'soft pull' initially to check your pre-approval eligibility, which does not impact your credit score. A hard check is done upon finalization.",
        },
        {
          q: "What is the maximum tenure for EMI payments?",
          a: "Depending on your financial approval and the cost of the devices, financing plans can be extended up to 36 months or even 60 months with manageable interest rates.",
        },
        {
          q: "Are there any processing fees for financing?",
          a: "Zero-interest plans may carry a small one-time processing fee depending on the partner. Our billing specialists will outline all costs clearly before you sign.",
        },
        {
          q: "Can I prepay my EMI without penalties?",
          a: "Yes, our financing plans have no prepayment penalties, meaning you can pay off your hearing aids early and save on any applicable interest components.",
        },
      ]}
    />
  );
}
