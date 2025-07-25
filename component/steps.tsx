export default function Steps() {
  return (
    <section className="w-full bg-[image:linear-gradient(250deg,#000_1.2%,#032425_43.67%,#000_96.25%)]">
      <div className="page_container py-15">
        {/* headings */}
        <div className="flex flex-col gap-5 items-center text-center mb-10">
          <h2 className="text-xl font-semibold text-white">
            Solving real challenges
            <br />
            Reshaping <span className="text-highlight">financial</span>
            <br />
            freedom at scale!
          </h2>
          <p className="text-sm text-gray">
            Koajo modernizes the rotating savings model to help people save
            consistently, access money when needed, and break the cycle of
            financial insecurity.
          </p>
        </div>

        {/* steps */}
        <div className="flex flex-col gap-7.5">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col gap-4">
              <h3 className="text-2lg font-semibold text-transparent bg-clip-text w-full bg-[image:linear-gradient(90deg,#5A606C_0%,#FFFFFF_50%,#5A606C_100%)]">
                {step.title}
              </h3>
              <p className="text-sm text-gray">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  {
    title: "Choose or Create a Pod",
    description:
      "Join a savings pod that fits your saving & financial goals or start your own with people you trust. Each pod runs for 12 weeks at a time, giving you short term access to the Lumpsum.",
  },
  {
    title: "Commit & Contribute",
    description:
      "Set your savings amount and contribute on schedule; stay consistent, stay in control. Most members will receive their lump-sum payout before the pod cycle is complete.",
  },
  {
    title: "Receive Payout & Keep Building",
    description:
      "Monitor your savings in each pod in real-time, create multiple savings pods for different goals, and view upcoming payment schedules and payout dates from your account dashboard. You can use your payout to reach your financial goals faster.",
  },
];
