import BrandPage from "@/components/brand/BrandPage";

export default function Page() {
  return <BrandPage brand={{
    name: "Unitron",
    status: "Authorised Partner",
    tagline: "Better hearing. Better living.",
    color: "#10B981",
    startingPrice: "25,000",
    emi: "1,042",
    features: [
      "Sound Nav 3.0 environment detection",
      "Flex:trial program",
      "Bluetooth connectivity",
      "AutoMic directional technology",
    ],
  }} />;
}
