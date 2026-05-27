import type { Metadata } from "next";
import InfoPage from "@/components/InfoPage";

export const metadata: Metadata = {
  title: "Hearing Health | SoundForLife",
  description: "Understand the impact of hearing loss on your overall health and why early treatment matters.",
};

export default function Page() {
  return (
    <InfoPage
      tag="Hearing Health"
      title="Hearing Health — Why It Matters More Than You Think"
      description="Untreated hearing loss is linked to cognitive decline, social isolation, and depression. Understanding your hearing health is the first step to a better life."
      subPages={[
        { label: "Signs of Hearing Loss", href: "/hearing-health/signs-of-hearing-loss/", description: "Recognise the early warning signs" },
        { label: "Tinnitus", href: "/hearing-health/tinnitus/", description: "Managing the ringing in your ears" },
        { label: "FAQ", href: "/hearing-health/faq/", description: "Answers to common questions" },
      ]}
      faqs={[
        {
          q: "Why is treating hearing loss important for overall health?",
          a: "Untreated hearing loss is linked to social isolation, depression, fatigue, and a significantly higher risk of cognitive decline and dementia.",
        },
        {
          q: "How often should I get my hearing checked?",
          a: "If you are over 55, we recommend an annual hearing test. If you are younger but frequently exposed to loud noises, yearly tests are also advised.",
        },
        {
          q: "Can untreated hearing loss lead to dementia?",
          a: "Numerous clinical studies have shown a strong correlation between untreated hearing loss and an accelerated rate of cognitive decline and dementia.",
        },
        {
          q: "What are the common causes of hearing loss?",
          a: "The most common causes are natural aging (presbycusis) and prolonged exposure to loud noises. Genetics, ear infections, and certain medical conditions can also play a role.",
        },
        {
          q: "Is hearing loss reversible?",
          a: "Sensorineural hearing loss (nerve damage) is permanent and cannot be reversed, but it is highly treatable with hearing aids. Conductive hearing loss (blockages) can sometimes be medically reversed.",
        },
      ]}
      ctaLabel="Book a Free Hearing Test"
    />
  );
}
