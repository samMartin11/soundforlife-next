import BrandPage from "@/components/brand/BrandPage";

export default function Page() {
  return <BrandPage brand={{
    name: "Signia",
    status: "Privileged Partner",
    tagline: "Simply. More sound.",
    color: "#3B8BEB",
    startingPrice: "28,000",
    emi: "1,167",
    features: [
      "Own Voice Processing (OVP)",
      "Bluetooth streaming to any device",
      "Fully rechargeable options",
      "TeleCare remote support",
    ],
  }} />;
}
