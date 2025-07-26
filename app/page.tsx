import Pricing from "@/component/pricing";
import Hero from "@/component/hero-home";
import Benefits from "@/component/benefits";
import Steps from "@/component/steps";
import Solutions from "@/component/solutions";
import Features from "@/component/features";
import Marques from "@/component/marques";
import Comparison from "@/component/comparison";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Solutions />
      <Marques />
      <Steps />
      <Benefits />
      <Features />
      <Comparison />
      <Pricing />
    </>
  );
}
