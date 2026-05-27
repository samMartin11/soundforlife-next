import BrandPage from "@/components/brand/BrandPage";

export default function Page() {
  return <BrandPage brand={{
    name: "Phonak",
    status: "Authorised Partner",
    tagline: "Life is on. Hear better. Live better.",
    color: "#F59E0B",
    startingPrice: "32,000",
    emi: "1,333",
    features: [
      "Universal Bluetooth (any phone)",
      "AutoSense OS 5.0 AI",
      "Roger remote microphone tech",
      "Waterproof Lumity range",
    ],
  }} />;
}
