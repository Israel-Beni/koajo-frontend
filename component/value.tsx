import Link from "next/link";

export default function Value() {
  return (
    <section className="w-full bg-gray- py-15">
      <div className="page_container bg-white rounded-[0.625rem]">
        <div className="inner_container py-7.5">
          <h2 className="text-xl font-semibold text-gray-900 mb-7.5">
            Our Commitment to Security and Compliance
          </h2>
          <div className="flex flex-col gap-5 text-sm text-gray-900">
            <p className="bg-[image:linear-gradient(107deg,#FD8B51_-2.13%,#469DA3_49.87%,#FD8B51_94.01%))] bg-clip-text text-transparent">
              Our reputation, platform, and integrity are built on keeping Koajo
              safe from bad actors while ensuring that our pods pay out
              reliably, and unlike traditional ajo, is non-reliant on the
              integrity of others.
            </p>
            <p>
              A strong compliance program is at the core of our business model.
              Our robust system is designed using industry-standard practices
              while incorporating a modernized approach to rotating savings. We
              prioritize both sophistication and innovation without compromising
              accessibility and functionality.
            </p>
            <p>
              We take pride in setting the highest standards for user
              protection. Trust and security are at the heart of Koajo, and our
              advanced security measures ensure that your information and funds
              remain safe. If you experience any issues verifying your identity,
              please contact us at{" "}
              <Link href="mailto:support@koajo.com" className="font-semibold">
                support@koajo.com
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
