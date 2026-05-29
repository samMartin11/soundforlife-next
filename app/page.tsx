import Hero          from "@/components/home/Hero";
import Stats         from "@/components/home/Stats";
import HearingCheck  from "@/components/home/HearingCheck";
import Journey       from "@/components/home/Journey";
import Brands        from "@/components/home/Brands";
import ClientResults from "@/components/home/ClientResults";
import Testimonials  from "@/components/home/Testimonials";
import Faq           from "@/components/home/Faq";
import FinalCta      from "@/components/home/FinalCta";

export default function HomePage() {
  return (
    <div className="page-wrapper">
      <Hero />
      <Stats />
      <HearingCheck />
      <Journey />
      <Brands />
      <ClientResults />
      <Testimonials/>
      <Faq />
      <FinalCta />
    </div>
  );
}
