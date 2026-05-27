import type { Metadata } from "next";
import InfoPage from "@/components/InfoPage";

export const metadata: Metadata = {
  title: "Signs of Hearing Loss | SoundForLife",
  description: "Learn the early signs of hearing loss — from struggling in noisy environments to turning up the TV — and when to seek help.",
};

export default function Page() {
  return (
    <InfoPage
      tag="Hearing Health"
      title="Signs of Hearing Loss — Do You Recognise These?"
      description="Hearing loss develops gradually, and most people don't notice until family members do. Here are the signs to watch for."
      ctaLabel="Take Our Free Hearing Check"
      faqs={[
        {
          q: "Why can I hear people talking but not understand the words?",
          a: "This is the classic sign of high-frequency hearing loss. You hear the 'volume' of vowels, but miss crisp consonants (like s, f, th) that give words meaning.",
        },
        {
          q: "Does ringing in the ears mean I'm losing my hearing?",
          a: "Ringing in the ears (tinnitus) is very frequently a symptom of underlying nerve damage and hearing loss. If you experience ringing, you should have a full hearing test.",
        },
        {
          q: "Why do I struggle to hear in noisy settings?",
          a: "Background noise easily drowns out speech when you have hearing loss. Healthy ears can naturally filter noise, but damaged auditory systems lose this directional capability.",
        },
        {
          q: "Is turning up the TV volume a sure sign of hearing loss?",
          a: "If family members complain that the TV or radio is uncomfortably loud for them, it is a very strong indicator that you need a hearing evaluation.",
        },
        {
          q: "Can family members detect my hearing loss before I do?",
          a: "Yes, hearing loss occurs so gradually that your brain compensates for it. Often, a spouse or child notices the behavioral changes long before you notice the hearing deficit.",
        },
      ]}
    />
  );
}
