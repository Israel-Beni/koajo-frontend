"use client";
import { useState } from "react";
import cn from "clsx";
import Image from "next/image";
import { MyImage } from "./utils";

export default function Steps() {
  const [activeIdx, setActiveIdx] = useState(-1);

  const handleStepClick = (idx: number) => {
    setActiveIdx(idx);
  };

  return (
    <section className="w-full bg-[image:linear-gradient(250deg,#000_1.2%,#032425_43.67%,#000_96.25%)]">
      <div className="page_container py-15 relative">
        {/* Background */}
        <div className="size-full absolute inset-0 z-0 rounded-[inherit] overflow-hidden">
          <Image
            src="/media/images/background-grid-dark.svg"
            alt="Hero Background"
            fill
            className="object-cover"
          />
        </div>

        {/* headings */}
        <div className="flex flex-col gap-5 md:gap-6 items-center text-center mb-10 lg:mb-15 max-w-[calc(940rem/16)] mx-auto">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white">
            Solving real challenges
            <br />
            Reshaping <span className="text-highlight">financial</span>
            <br />
            freedom at scale!
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray">
            Koajo modernizes the rotating savings model to help people save
            consistently, access money when needed, and break the cycle of
            financial insecurity.
          </p>
        </div>

        {/* steps */}
        <div className="flex  lg:gap-28">
          <div className="relative hidden lg:flex flex-col gap-4 shrink-0 grow-0 rounded-[0.875rem] w-full lg:max-w-[calc(621rem/16)] lg:h-[calc(640rem/16)]">
            {steps.map((step, idx) => (
              <MyImage
                key={idx}
                src={step.cldImgId}
                alt={step.title}
                width={621}
                height={640}
                className={cn(
                  "absolute top-0 left-0 transition-all duration-300 ease-in-out",
                  {
                    "opacity-0 scale-95": activeIdx !== idx,
                    "opacity-100 scale-100": activeIdx === idx,
                  }
                )}
              />
            ))}
          </div>
          <div className="flex flex-col gap-7.5 overflow-scroll ">
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
      </div>
    </section>
  );
}

const steps = [
  {
    title: "Choose or Create a Pod",
    description:
      "Join a savings pod that fits your saving & financial goals or start your own with people you trust. Each pod runs for 12 weeks at a time, giving you short term access to the Lumpsum.",
    cldImgId: "create-account_qgdks3",
  },
  {
    title: "Commit & Contribute",
    description:
      "Set your savings amount and contribute on schedule; stay consistent, stay in control. Most members will receive their lump-sum payout before the pod cycle is complete.",
    cldImgId: "choose-pod_p95naa",
  },
  {
    title: "Receive Payout & Keep Building",
    description:
      "Monitor your savings in each pod in real-time, create multiple savings pods for different goals, and view upcoming payment schedules and payout dates from your account dashboard. You can use your payout to reach your financial goals faster.",
    cldImgId: "payment_wo9ymm",
  },

  {
    title: "Receive Payout & Keep Building",
    description:
      "Monitor your savings in each pod in real-time, create multiple savings pods for different goals, and view upcoming payment schedules and payout dates from your account dashboard. You can use your payout to reach your financial goals faster.",
    cldImgId: "keep-building_w2r1yi",
  },
];
