import Pricing from "@/component/pricing";
import Hero from "@/component/hero-home";
import Benefits from "@/component/benefits";
import Steps from "@/component/steps";
import Solutions from "@/component/solutions";
import Features from "@/component/features";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Solutions />
      <Steps />
      <Benefits />
      <Features />
      <Pricing />
    </>
  );
}
