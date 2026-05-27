import type { Metadata } from "next";
import InfoPage from "@/components/InfoPage";

export const metadata: Metadata = {
  title: "Our Audiologists | SoundForLife",
  description: "Meet SoundForLife's team of BASLP/MASLP-certified audiologists dedicated to your long-term hearing health.",
};

export default function Page() {
  return (
    <InfoPage
      tag="Why SoundForLife"
      title="Our Audiologists — Certified, Experienced, Caring"
      description="Every SoundForLife audiologist holds an advanced clinical degree and undergoes continuous training to stay at the cutting edge of hearing technology."
      faqs={[
        {
          q: "Are your audiologists fully qualified and licensed?",
          a: "Absolutely. Every audiologist on our team holds an advanced degree in Audiology (such as a BASLP or MASLP) and is certified to practice clinically.",
        },
        {
          q: "Will I see the same audiologist at every visit?",
          a: "We strive for continuity of care. Whenever possible, you will see the same audiologist who performed your initial fitting so they know your complete history.",
        },
        {
          q: "Do your audiologists specialize in pediatrics?",
          a: "We have dedicated pediatric specialists on staff who specialize in early intervention and hearing solutions for children and teens.",
        },
        {
          q: "How often do your audiologists receive training on new technology?",
          a: "Our specialists undergo continuous education and attend manufacturer training seminars quarterly to stay at the cutting edge of hearing aid technology.",
        },
        {
          q: "What qualifications do your hearing specialists hold?",
          a: "Our team consists of certified Audiologists and seasoned Hearing Instrument Specialists, ensuring top-tier clinical expertise.",
        },
      ]}
    />
  );
}
