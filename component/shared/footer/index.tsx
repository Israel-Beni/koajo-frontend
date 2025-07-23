import Link from "next/link";
import { Button } from "../../utils";
import Image from "next/image";
import MainLinks from "./main-links";

export default function Footer() {
  return (
    <footer className="w-full bg-gray pt-7">
      <div className="page_container flex flex-col items-center gap-6 pb-9">
        <div className="relative px-6 py-15 bg-[image:linear-gradient(250deg,#E78D5C_1.2%,#2F8488_43.67%,#000_96.25%),linear-gradient(107deg,#672706_-2.13%,#024044_46.9%,#3A1E10_94.01%)] rounded-xl">
          {/* Background */}
          <div className="size-full absolute inset-0 z-0 rounded-[inherit]">
            <Image
              src="/media/images/background-grid-dark.svg"
              alt="Footer Background"
              fill
              className="object-cover"
            />
          </div>

          {/* Header Section */}
          <div className="relative text-center text-white mb-9">
            <h2 className="text-xl font-semibold mb-6">
              Ready for financial possibilities ?
            </h2>
            <p className="text-sm text-white mb-8">
              Every dollar saved is a step toward a future of security,
              independence, and possibility. No matter how small, your savings
              today will shape a brighter tomorrow.
            </p>
            <Button text="Join the Community" />
          </div>

          <div className="relative">
            {/* Logo and Tagline */}
            <div className="flex flex-col items-center gap-2 mb-5 w-fit">
              <Image
                src="/media/icons/logo-white.svg"
                alt="Koajo"
                width={115}
                height={32}
              />
              <span className="text-lg text-text-300">Built for you.</span>
            </div>

            {/* Contact & Links */}
            <MainLinks />
          </div>
        </div>

        {/* Copyright & Socials */}
        <div className="w-full flex flex-col gap-2.5">
          <div className="flex flex-wrap justify-between items-center gap-2.5">
            <div className="flex gap-2.5  text-base text-text-400 ">
              ©2025, Koajo
              <span className="text-black">All Rights Reserved.</span>
            </div>
            <div className="flex gap-2.5">
              {socialLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href || "#"}
                  aria-label={link.label}
                  className="size-6 p-[1.25px] hover:opacity-90"
                >
                  <Image
                    src={link.icon}
                    alt={link.label || "Social Icon"}
                    width={22}
                    height={22}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="text-sm text-text-400">
          Koajo is a fintech company, not a bank, lender, advisor, broker, fund
          manager, investment firm, MLM scheme, credit repair service, credit
          reporting agency, money service business, money transmitter, financial
          institution or issuer of stored valued products. Koajo does not
          control user behavior and disclaims any liability in this regard.
          Koajo is not designed to pool funds for investment or generate profits
          for users. We do not offer investment returns or shares on savings.
          Users&apos; relationship with Koajo is independent, and their savings
          are paid out either in advance or arrears, based solely on their own
          contributions, with no reliance on the efforts of others.
        </div>
      </div>
    </footer>
  );
}

const socialLinks = [
  {
    label: "Instagram",
    icon: "/media/icons/social-instagram.svg",
    href: "https://www.instagram.com/koajo",
  },
  {
    label: "Facebook",
    icon: "/media/icons/social-facebook.svg",
    href: "https://www.facebook.com/koajo",
  },
  {
    label: "WhatsApp",
    icon: "/media/icons/social-whatsapp.svg",
    href: "https://wa.me/koajo",
  },
  {
    label: "LinkedIn",
    icon: "/media/icons/social-linkedin.svg",
    href: "https://www.linkedin.com/company/koajo",
  },
];
