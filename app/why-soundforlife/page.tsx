import type { Metadata } from "next";
import InfoPage from "@/components/InfoPage";

export const metadata: Metadata = {
  title: "Why SoundForLife | India's Trusted Hearing Care Network",
  description: "Discover what makes SoundForLife different — certified audiologists, multi-brand expertise, and unmatched aftercare across 50+ clinics.",
};

export default function Page() {
  return (
    <InfoPage
      tag="Why SoundForLife"
      title="Why Thousands of Indians Choose SoundForLife"
      description="State-of-the-art diagnostics, personalized care, multi-brand expertise, and a lifelong aftercare commitment — all under one roof."
      subPages={[
        { label: "About Us", href: "/why-soundforlife/about-us/", description: "Our story and mission" },
        { label: "Our Audiologists", href: "/why-soundforlife/our-audiologists/", description: "Meet our certified specialists" },
        { label: "Free Trial", href: "/why-soundforlife/free-trial/", description: "14-day obligation-free trial" },
        { label: "Aftercare & Warranty", href: "/why-soundforlife/aftercare-warranty/", description: "Up to 5-year coverage" },
        { label: "Inside SoundForLife", href: "/why-soundforlife/inside-soundforlife/", description: "Press & media centre" },
      ]}
      faqs={[
        {
          q: "What makes SoundForLife different from other clinics?",
          a: "We combine state-of-the-art diagnostic technology with highly personalized aftercare, ensuring your hearing aids are perfectly tuned to your changing lifestyle.",
        },
        {
          q: "Where are your clinics located?",
          a: "We have multiple state-of-the-art facilities. Please check our locations page to find the SoundForLife clinic nearest to you.",
        },
        {
          q: "Do I need a doctor's referral to visit SoundForLife?",
          a: "In most cases, no. You can book an appointment directly with us. However, if your insurance or corporate panel requires a referral, we can assist you with that process.",
        },
        {
          q: "What happens during a first visit?",
          a: "Your first visit includes a deep dive into your medical history, a visual ear inspection, a comprehensive hearing test in a soundproof booth, and a discussion of your results.",
        },
        {
          q: "Do you offer home visits for senior citizens?",
          a: "Yes, we offer specialized home visit services across major cities for senior citizens and patients with mobility issues. Please contact our support team to schedule an in-home assessment.",
        },
      ]}
    />
  );
}
