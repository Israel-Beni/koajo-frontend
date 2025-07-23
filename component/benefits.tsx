import React from "react";
import Image from "next/image";

export default function Benefits() {
  return (
    <section className="w-full bg-gray py-15">
      <div className="page_container">
        {/* Heading */}
        <div className="flex flex-col items-center  gap-5 mb-10">
          {/* Title */}
          <h2 className="text-xl font-semibold text-gray-900 text-center">
            Why Choose <span className="text-highlight">koajo</span>
          </h2>
          <p className="text-center text-base text-gray-400">
            Unlike informal rotating savings, we are revolutionizing the way you
            experience savings
          </p>
        </div>

        {/* Benefits */}
        <div className="w-full flex flex-col gap-7.5">
          {benefits.map((benefit, idx) => (
            <div key={benefit.title} className="w-full">
              <div className="size-12.5 flex items-center justify-center  border-2 border-primary/10 rounded-xl mb-6 bg-[image:radial-gradient(111.8%_111.8%_at_50%_100%,_rgba(253,_139,_81,_0.20)_0%,_rgba(253,_139,_81,_0.00)_52%)]">
                <Image
                  src={benefit.icon}
                  alt={benefit.title}
                  width={36}
                  height={36}
                  className="size-auto object-contain"
                />
              </div>
              <h3 className="font-medium text-2lg mb-4 text-gray-900">
                {benefit.title}
              </h3>
              <p className="text-base text-gray-700">{benefit.description}</p>
              {idx !== benefits.length - 1 && (
                <hr className="border-text-200 mt-7.5" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const benefits = [
  {
    icon: "/media/icons/mission.svg",
    title: "Mission",
    description:
      "Our drive is to help people break free from the cycle of debt, save consistently, and build wealth together. We're fueled by the belief that everyone deserves access to",
  },
  {
    icon: "/media/icons/vision.svg",
    title: "The Vision",
    description:
      "We are driven to become the trusted financial ecosystem for everyone, regardless of background or income level, to save, grow wealth, and achieve financial freedom",
  },
  {
    icon: "/media/icons/value.svg",
    title: "The Value",
    description:
      "Trust We build trust through transparency, reliability, and safeguarding your financial journey. Empowerment We empower you to take control of your money and achieve your financial goals.",
  },
  {
    icon: "/media/icons/promise.svg",
    title: "The Promise",
    description:
      "On this journey, Koajo’s promise is to provide a simple, secure, and transparent savings experience that helps you take control of your financial future.",
  },
];
