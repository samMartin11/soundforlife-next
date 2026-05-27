import type { Metadata } from "next";
import InfoPage from "@/components/InfoPage";

export const metadata: Metadata = {
  title: "Tinnitus Treatment & Relief | SoundForLife",
  description: "Understand tinnitus — its triggers, therapies, and how modern hearing aids with built-in sound therapy can bring relief.",
};

export default function Page() {
  return (
    <InfoPage
      tag="Hearing Health"
      title="Tinnitus — Understanding & Managing the Ringing"
      description="Tinnitus affects millions of Indians. It's not a disease — it's a symptom. And modern hearing aids are one of the most effective treatments available."
      ctaLabel="Book a Tinnitus Consultation"
      faqs={[
        {
          q: "Can hearing aids cure tinnitus?",
          a: "While there is no permanent 'cure' for tinnitus, hearing aids are one of the most effective treatments. They amplify background sounds to mask the ringing naturally.",
        },
        {
          q: "What triggers tinnitus flare-ups?",
          a: "Common triggers include exposure to loud noises, high stress, lack of sleep, excess caffeine, high sodium intake, and certain medications.",
        },
        {
          q: "Is tinnitus a disease?",
          a: "No, tinnitus is not a disease itself; it is a symptom of an underlying condition, most commonly age-related hearing loss, ear injury, or a circulatory system disorder.",
        },
        {
          q: "Do you offer specific therapies for tinnitus relief?",
          a: "Yes, many of our premium hearing aids feature built-in Tinnitus Sound Therapy, which plays soothing, customizable sounds (like ocean waves or white noise) to train your brain to ignore the ringing.",
        },
        {
          q: "Can stress make my tinnitus worse?",
          a: "Absolutely. Stress and anxiety heavily influence the limbic system, which can make the perception of tinnitus much louder and more intrusive.",
        },
      ]}
    />
  );
}
