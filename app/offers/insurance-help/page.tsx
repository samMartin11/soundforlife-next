import type { Metadata } from "next";
import InfoPage from "@/components/InfoPage";

export const metadata: Metadata = {
  title: "Insurance & Government Schemes for Hearing Aids | SoundForLife",
  description: "Navigate CGHS, ADIP, Ayushman Bharat, and corporate reimbursements for hearing aids. We help you claim every rupee you're entitled to.",
};

export default function Page() {
  return (
    <InfoPage
      tag="Offers"
      title="Insurance & Government Scheme Assistance"
      description="From CGHS and ADIP to Ayushman Bharat and corporate reimbursements — we help you navigate every scheme so hearing care doesn't strain your wallet."
      ctaLabel="Talk to Our Helpdesk"
      ctaHref="/contact"
      faqs={[
        {
          q: "Can I claim a CGHS reimbursement for my hearing aids at SoundForLife?",
          a: "Yes. Central Government employees and pensioners can claim reimbursements as per official MoHFW ceiling rates. You will need a prescription from a government ENT specialist or a CGHS-empanelled hospital. We provide the necessary official tax invoice, serial number tracking, and warranty certificates required for your claim submission.",
        },
        {
          q: "Who is eligible to get a free hearing aid under the Government's ADIP scheme?",
          a: "The ADIP scheme is for Indian citizens holding a valid Disability Certificate with 40% or higher hearing loss. To get a free hearing aid, the individual's monthly family income must be below ₹15,000. For monthly incomes between ₹15,001 and ₹30,000, the government provides a 50% subsidy on the device.",
        },
        {
          q: "Does Ayushman Bharat (PM-JAY) cover the cost of hearing aids?",
          a: "Ayushman Bharat covers complex ear surgeries, diagnostic evaluations, and advanced treatments like Cochlear Implants for eligible children at empanelled hospitals. Standard standalone digital hearing aid coverage depends on your specific state's PM-JAY implementation guidelines. Please contact our helpdesk with your Ayushman card to verify current package availabilities.",
        },
        {
          q: "How do I claim a corporate or PSU reimbursement for my hearing aids?",
          a: "To claim corporate or PSU (e.g., Railways, ONGC, BHEL, NTPC) reimbursement, you require three core documents: 1) A diagnostic Audiometry report from a certified Audiologist, 2) A prescription from an ENT doctor recommending the use of a hearing aid, and 3) Our official GST retail invoice detailing the device model and serial number. We assist you in compiling this entire documentation kit.",
        },
        {
          q: "Do private health insurance policies in India cover hearing aids?",
          a: "Standard retail health insurance policies in India generally classify hearing aids as outpatient medical devices or external prosthetics and exclude them from basic hospitalization coverage. However, premium corporate group health policies and specific top-up plans with OPD covers do reimburse these costs. We recommend checking your policy's OPD clause with your corporate HR or TPA.",
        },
      ]}
    />
  );
}
