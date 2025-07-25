import { MyImage } from "./utils";

export default function Solutions() {
  return (
    <section className="w-full bg-gray">
      <div className="page_container py-15">
        {/* headings */}
        <h2 className="text-xl font-semibold text-text-600 mb-10">
          Solving real challenges Reshaping{" "}
          <span className="text-highlight">financial</span> freedom at scale!
        </h2>

        {/* solutions */}
        <div className="flex flex-col gap-10">
          {solutions.map((solution, idx) => (
            <div key={idx}>
              <div className="flex flex-col gap-4 mb-7.5">
                {solution.image()}
              </div>
              <h3 className="text-2lg font-semibold mb-4 text-gray-900 w-full">
                {solution.title}
              </h3>
              <p className="text-sm text-gray-700">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const solutions = [
  {
    title: "Financial Foundation",
    image: () => (
      <MyImage
        src="financial-freedon_q1oswa"
        alt="Financial foundation"
        width={343}
        height={353}
        className="w-[calc(343rem/16)] h-[calc(353rem/16)]"
        isCloudinary
      />
    ),
    description:
      "Most people let bills, debt, and lifestyle expenses dictate their money for them. Without a plan, their income disappears before they can use it to build security.  Koajo helps break the Paycheck-to-Paycheck Cycle by making saving structured, intentional, and community-driven.",
  },
  {
    title: "Financial Freedom",
    image: () => (
      <MyImage
        src="financial-freedom_ho0nxf"
        alt="Financial foundation"
        width={343}
        height={353}
        className="w-[calc(343rem/16)] h-[calc(353rem/16)]"
        isCloudinary
      />
    ),
    description:
      "People struggle to save! not because they don’t want to, but because they don’t have a system that works. Access Lump Sum Savings Without Loans; think of it as borrowing money from your ",
  },
  {
    title: "Financial Fluidity",
    image: () => (
      <MyImage
        src="financial-fludity_r1xf8w"
        alt="Financial foundation"
        width={343}
        height={353}
        className="w-[calc(343rem/16)] h-[calc(353rem/16)]"
        isCloudinary
      />
    ),
    description:
      "Existing financial systems benefit those who are already ahead; charging the highest fees to those who can least afford them. Koajo levels the playing field. Users can use their lump-sum savings for emergencies, major payments, business growth, or faster debt payoff. Koajo makes saving structured, intentional, and easy without predatory practices.",
  },
];
