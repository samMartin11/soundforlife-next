import type { Metadata } from "next";
import InfoPage from "@/components/InfoPage";

export const metadata: Metadata = {
  title: "Hearing Solutions | SoundForLife",
  description: "Explore our full range of hearing solutions — custom-fitted hearing aids, rechargeable, invisible, Bluetooth, and more.",
};

export default function Page() {
  return (
    <InfoPage
      tag="Hearing Solutions"
      title="Complete Hearing Solutions for Every Lifestyle"
      description="From invisible custom-fitted devices to smart Bluetooth-enabled hearing aids, we match you with the exact solution your hearing profile demands."
      subPages={[
        { label: "Hearing Aids", href: "/hearing-solutions/hearing-aids/", description: "Comprehensive guide to hearing aids" },
        { label: "Types & Styles", href: "/hearing-solutions/types-styles/", description: "BTE, ITE, RIC, IIC and more" },
        { label: "Rechargeable", href: "/hearing-solutions/rechargeable/", description: "No more disposable batteries" },
        { label: "Invisible", href: "/hearing-solutions/invisible/", description: "IIC aids that nobody notices" },
        { label: "Bluetooth", href: "/hearing-solutions/bluetooth/", description: "Stream audio directly to your ears" },
        { label: "Prices", href: "/hearing-solutions/prices/", description: "Transparent, all-inclusive pricing" },
      ]}
      faqs={[
        {
          q: "What types of hearing solutions do you offer?",
          a: "We offer a full spectrum of hearing solutions including custom-fitted hearing aids, rechargeable models, invisible devices, and Bluetooth-enabled smart hearing aids tailored to your specific hearing profile.",
        },
        {
          q: "How do I know which hearing solution is right for me?",
          a: "The best solution depends on your lifestyle, degree of hearing loss, and budget. Our audiologists conduct a comprehensive hearing assessment to recommend the most effective device for you.",
        },
        {
          q: "Do you offer custom-fitted hearing solutions?",
          a: "Yes, we take precise molds of your ear canals to create custom-fitted solutions that ensure maximum comfort and optimal sound delivery.",
        },
        {
          q: "Can I upgrade my current hearing solution?",
          a: "Absolutely. We offer upgrade programs where you can trade in your older models for the latest technology, including AI-driven and rechargeable devices.",
        },
        {
          q: "What is the lifespan of your hearing solutions?",
          a: "With regular maintenance and care, our premium hearing solutions typically last between 3 to 7 years before needing a technology upgrade.",
        },
      ]}
    />
  );
}
