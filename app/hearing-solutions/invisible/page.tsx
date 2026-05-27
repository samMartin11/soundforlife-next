import type { Metadata } from "next";
import InfoPage from "@/components/InfoPage";

export const metadata: Metadata = {
  title: "Invisible Hearing Aids | SoundForLife",
  description: "IIC hearing aids that sit deep in your ear canal — virtually undetectable. Find out if you're a candidate.",
};

export default function Page() {
  return (
    <InfoPage
      tag="Hearing Solutions"
      title="Invisible Hearing Aids — Hear Without Anyone Knowing"
      description="Invisible-In-Canal (IIC) hearing aids are the most discreet option available. They sit deep in the ear canal and are virtually undetectable in normal social settings."
      faqs={[
        {
          q: "Are invisible hearing aids really 100% hidden?",
          a: "Invisible-In-Canal (IIC) hearing aids sit deep within the second bend of your ear canal, making them virtually undetectable to others under normal circumstances.",
        },
        {
          q: "Can anyone wear an invisible hearing aid?",
          a: "Not everyone is a candidate. It depends on the size and shape of your ear canal, as well as the severity of your hearing loss.",
        },
        {
          q: "Do invisible hearing aids have Bluetooth connectivity?",
          a: "Due to their tiny size, most true invisible hearing aids lack the antennas required for Bluetooth streaming, though some newer models are beginning to incorporate basic connectivity.",
        },
        {
          q: "Are invisible models suitable for severe hearing loss?",
          a: "Generally, no. Invisible models are best suited for mild to moderate hearing loss because their small size limits the power output they can produce.",
        },
        {
          q: "How often do I need to clean an invisible hearing aid?",
          a: "Because they sit deep in the ear canal, they are more susceptible to earwax and moisture. Daily cleaning is required to keep them functioning properly.",
        },
      ]}
    />
  );
}
