import type { Metadata } from "next";
import InfoPage from "@/components/InfoPage";

export const metadata: Metadata = {
  title: "Aftercare & Warranty | SoundForLife",
  description: "3-year standard warranty, 6-monthly clean-and-check, and extended 5-year coverage options — your hearing aids are protected for life.",
};

export default function Page() {
  return (
    <InfoPage
      tag="Why SoundForLife"
      title="Aftercare & Warranty — Protected for the Long Run"
      description="Our relationship doesn't end at the fitting. We provide comprehensive aftercare, regular checkups, and warranty protection to keep your devices performing perfectly."
      faqs={[
        {
          q: "What does your warranty cover?",
          a: "Our standard warranty covers all manufacturer defects, internal component failures, and necessary reprogramming for up to 3 years.",
        },
        {
          q: "How often should I come in for checkups?",
          a: "We recommend a quick clean-and-check appointment every 6 months, and a full hearing reassessment annually to adjust your devices to any changes.",
        },
        {
          q: "Is repair service included in the aftercare plan?",
          a: "In-house cleaning, part replacements (like domes and filters), and minor repairs are fully covered under our comprehensive aftercare plan.",
        },
        {
          q: "Do you offer extended warranties?",
          a: "Yes, we offer extended warranty packages for up to 5 years, which cover comprehensive repairs and even include loss and damage protection options.",
        },
        {
          q: "What should I do if my hearing aid stops working suddenly?",
          a: "Check the battery or charge status first, and replace the wax guard. If it still doesn't work, bring it into the clinic — we can often fix it same-day.",
        },
      ]}
    />
  );
}
