import type { Metadata } from "next";
import InfoPage from "@/components/InfoPage";

export const metadata: Metadata = {
  title: "Hearing Aids | SoundForLife",
  description: "Everything you need to know about modern hearing aids — lifespan, maintenance, and how they help.",
};

export default function Page() {
  return (
    <InfoPage
      tag="Hearing Solutions"
      title="Hearing Aids — Everything You Need to Know"
      description="Modern hearing aids are small, powerful, and smarter than ever. Here's what to expect when you choose SoundForLife."
      faqs={[
        {
          q: "Do I need one or two hearing aids?",
          a: "If you have hearing loss in both ears, wearing two aids provides better sound direction, speech clarity in noise, and a more natural listening experience than just one.",
        },
        {
          q: "How long do modern hearing aids last?",
          a: "With proper daily cleaning and professional checkups, most high-quality hearing aids last between 3 to 7 years.",
        },
        {
          q: "Are hearing aids difficult to maintain?",
          a: "Not at all. Modern hearing aids are designed for ease of use. Routine maintenance simply involves wiping them down with a dry cloth and replacing wax filters as needed.",
        },
        {
          q: "Can hearing aids restore my hearing to normal?",
          a: "While hearing aids cannot cure hearing loss or restore natural hearing to 100%, they significantly improve your ability to hear speech and environmental sounds clearly.",
        },
        {
          q: "Will wearing a hearing aid make my natural hearing worse?",
          a: "No. Wearing correctly programmed hearing aids actually preserves the brain's ability to process sound and speech, keeping your auditory pathways active.",
        },
      ]}
    />
  );
}
