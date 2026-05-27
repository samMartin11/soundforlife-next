import BrandPage from "@/components/brand/BrandPage";

export default function Page() {
  return <BrandPage brand={{
    name: "A&M",
    status: "Authorised Partner",
    tagline: "Advanced hearing solutions for every lifestyle.",
    color: "#6B7280",
    startingPrice: "18,000",
    emi: "750",
    features: [
      "Advanced digital signal processing",
      "Adaptive noise reduction",
      "Multiple listening programs",
      "Remote control compatible",
    ],
  }} />;
}
