import BrandPage from "@/components/brand/BrandPage";

export default function Page() {
  return <BrandPage brand={{
    name: "ReSound",
    status: "Authorised Partner",
    tagline: "Hear more. Do more. Be more.",
    color: "#F43F5E",
    startingPrice: "30,000",
    emi: "1,250",
    features: [
      "M&RIE microphone-in-ear technology",
      "ReSound Assist Live remote care",
      "Direct streaming iPhone & Android",
      "Rechargeable all-day battery",
    ],
  }} />;
}
