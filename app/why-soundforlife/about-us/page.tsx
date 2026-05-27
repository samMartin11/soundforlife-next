import type { Metadata } from "next";
import InfoPage from "@/components/InfoPage";

export const metadata: Metadata = {
  title: "About Us | SoundForLife",
  description: "Learn about SoundForLife's decade-long mission to make premium hearing care accessible, transparent, and stigma-free across India.",
};

export default function Page() {
  return (
    <InfoPage
      tag="Why SoundForLife"
      title="About SoundForLife — A Decade of Hearing Care"
      description="We're India's largest multi-brand hearing care network. Our mission: make premium hearing care accessible, transparent, and stigma-free for every Indian."
      faqs={[
        {
          q: "Why should I choose an audiologist over buying online?",
          a: "Hearing loss is a medical condition. Our audiologists don't just sell devices; they diagnose your specific frequency loss, custom-program the aids, and provide ongoing medical adjustments.",
        },
        {
          q: "Are your clinics certified?",
          a: "Yes, all SoundForLife clinics are fully accredited and meet the highest regional and national healthcare standards.",
        },
        {
          q: "How long has SoundForLife been in business?",
          a: "SoundForLife has been dedicated to improving hearing health for over a decade, helping thousands of patients reconnect with their world.",
        },
        {
          q: "What is your company's mission regarding hearing health?",
          a: "Our mission is to make premium hearing care accessible, transparent, and stigma-free, ensuring every patient achieves their highest quality of life.",
        },
        {
          q: "Do you work with specific hearing aid brands exclusively?",
          a: "We operate as a multi-brand aggregator and retail partner. This means we maintain strong partnerships with top-tier global premium manufacturers like Signia and Phonak, ensuring we recommend the exact device that matches your clinical needs.",
        },
      ]}
    />
  );
}
