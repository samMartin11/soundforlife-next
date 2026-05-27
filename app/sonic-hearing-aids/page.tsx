import BrandPage from "@/components/brand/BrandPage";

export default function Page() {
  return <BrandPage brand={{
    name: "Sonic",
    status: "Authorised Partner",
    tagline: "The sound of life.",
    color: "#8B5CF6",
    startingPrice: "20,000",
    emi: "833",
    features: [
      "SpeechVariable Processing",
      "2.4 GHz Bluetooth streaming",
      "Rechargeable options",
      "Built-in tinnitus therapy",
    ],
  }} />;
}
