import Pricing from "@/component/pricing";
import Hero from "@/component/hero-home";
import Benefits from "@/component/benefits";
import Steps from "@/component/steps";
import Solutions from "@/component/solutions";


export default function HomePage() {
  return (
    <>
      <Hero />
      <Solutions />
      <Steps />
      <Benefits />
      <Pricing />
    </>
  );
}
