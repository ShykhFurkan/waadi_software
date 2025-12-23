import { Hero } from "@/components/home/Hero";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { ProcessSteps } from "@/components/home/ProcessSteps";
import { Divisions } from "@/components/home/Divisions";
import { Industries } from "@/components/home/Industries";
import { CTA } from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <ProcessSteps />
      <Divisions />
      <Industries />
      <CTA />
    </>
  );
}
