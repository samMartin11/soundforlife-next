import type { Metadata } from "next";
import InfoPage from "@/components/InfoPage";

export const metadata: Metadata = {
  title: "Types & Styles of Hearing Aids | SoundForLife",
  description: "Compare BTE, ITE, RIC, IIC, and CIC hearing aid styles to find what fits your hearing loss and lifestyle.",
};

export default function Page() {
  return (
    <InfoPage
      tag="Hearing Solutions"
      title="Hearing Aid Types & Styles Explained"
      description="From behind-the-ear to completely invisible, every style has a different fit for different hearing profiles. Find yours."
      faqs={[
        {
          q: "What is the difference between BTE and ITE styles?",
          a: "Behind-The-Ear (BTE) models rest behind the ear with a tube routing sound into the canal. In-The-Ear (ITE) models are custom-molded to fit entirely inside the outer bowl of your ear.",
        },
        {
          q: "Are all styles suitable for severe hearing loss?",
          a: "No. Very small, invisible styles often lack the power needed for severe-to-profound hearing loss. BTE or Receiver-In-Canal (RIC) styles are usually recommended for heavier loss.",
        },
        {
          q: "Which hearing aid style is the most discreet?",
          a: "Invisible-In-Canal (IIC) and Completely-In-Canal (CIC) models are the most discreet as they sit deep within the ear canal, making them virtually unnoticeable.",
        },
        {
          q: "What is a RIC hearing aid?",
          a: "A Receiver-In-Canal (RIC) hearing aid sits behind the ear, but the speaker (receiver) sits directly in the ear canal, connected by a thin wire. It offers a great balance of power and discretion.",
        },
        {
          q: "How do I choose the best style for my lifestyle?",
          a: "Your audiologist will guide you based on your hearing test results, ear anatomy, dexterity (ability to handle small batteries), and cosmetic preferences.",
        },
      ]}
    />
  );
}
