import type { Metadata } from "next";
import InfoPage from "@/components/InfoPage";

export const metadata: Metadata = {
  title: "Bluetooth Hearing Aids | SoundForLife",
  description: "Stream calls, music, and TV audio directly to your hearing aids. Works with iPhone, Android, and smart TVs.",
};

export default function Page() {
  return (
    <InfoPage
      tag="Hearing Solutions"
      title="Bluetooth Hearing Aids — Stay Connected"
      description="Stream calls, music, and TV sound directly into your ears. Bluetooth hearing aids turn your hearing devices into powerful wireless earbuds."
      faqs={[
        {
          q: "Can I connect my hearing aids directly to my TV?",
          a: "Yes, most Bluetooth hearing aids can stream audio directly from smart TVs, or you can use a small TV adapter for older models.",
        },
        {
          q: "Will using Bluetooth drain my hearing aid battery faster?",
          a: "Yes, active streaming consumes more power. However, modern rechargeable batteries are built to handle a full day of use, including several hours of streaming.",
        },
        {
          q: "Do Bluetooth hearing aids work with both iPhone and Android?",
          a: "Yes, most modern Bluetooth hearing aids offer direct connectivity to iPhones (MFi) and compatible Android devices using the ASHA protocol.",
        },
        {
          q: "Can I take phone calls hands-free with Bluetooth hearing aids?",
          a: "Yes, your hearing aids essentially function as wireless earbuds, allowing you to hear the caller directly in your ears. Some models even use their built-in microphones to pick up your voice.",
        },
        {
          q: "How do I pair my hearing aids to a new device?",
          a: "Pairing is typically done through the accessibility or Bluetooth settings on your smartphone. We will help you pair your devices during your fitting appointment.",
        },
      ]}
    />
  );
}
