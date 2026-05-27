import type { Metadata } from "next";
import InfoPage from "@/components/InfoPage";

export const metadata: Metadata = {
  title: "Hearing Health FAQ | SoundForLife",
  description: "Answers to your most common questions about appointments, hearing assessments, and what to expect at SoundForLife.",
};

export default function Page() {
  return (
    <InfoPage
      tag="Hearing Health"
      title="Your Questions Answered"
      description="From booking your first appointment to bringing a family member along — everything you need to know before your visit."
      ctaLabel="Book an Appointment"
      faqs={[
        {
          q: "How do I book an appointment?",
          a: "You can book an appointment instantly via our website's booking portal, or you can call our front desk directly during business hours.",
        },
        {
          q: "What should I expect at my first consultation?",
          a: "Expect a warm welcome, a discussion of your hearing challenges, a painless ear exam, a comprehensive audiogram test, and a detailed explanation of your results.",
        },
        {
          q: "Do you accept walk-in patients?",
          a: "We highly recommend booking an appointment to ensure you receive the dedicated time you need. However, we do accommodate walk-ins for quick cleanings or minor repairs.",
        },
        {
          q: "How long does a hearing assessment take?",
          a: "A comprehensive adult hearing assessment, including consultation and results review, typically takes between 45 to 60 minutes.",
        },
        {
          q: "Can I bring a family member to my appointment?",
          a: "Yes, we strongly encourage you to bring a loved one. Their perspective on how hearing loss affects your daily life is incredibly valuable during the consultation.",
        },
      ]}
    />
  );
}
