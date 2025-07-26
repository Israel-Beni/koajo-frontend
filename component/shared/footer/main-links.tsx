"use client";

import Link from "next/link";
import { useCheckDevice } from "@/lib/hooks";

export default function MainLinks() {
  const device = useCheckDevice();
  const footerLinks =
    device === "mobile" ? footerLinksMobile : footerLinksDesktop;

  return (
    <div className="w-full flex flex-wrap gap-9 mb-5">
      {footerLinks.map((cluster) => (
        <div key={cluster.id} className="flex flex-col gap-8 max-w-[45%]">
          {cluster.group.map((group) => (
            <div key={group.id} className="w-full flex flex-col gap-4.5">
              <div className="font-semibold text-base  text-white">
                {group.title}
              </div>
              <div className="flex flex-col gap-4">
                {group.links.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href || "#"}
                    target={
                      link.href.includes("maps.app.goo.gl") ? "_blank" : "_self"
                    }
                    className="text-sm text-gray-100 hover:text-underline"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

const footerLinksMobile = [
  {
    id: 1,
    group: [
      {
        title: "Contact",
        id: "contact",
        links: [
          {
            label: "000-000-0000",
            href: "tel:000-000-0000",
          },
          {
            label: "Support@koajo.com",
            href: "mailto:support@koajo.com",
          },
        ],
      },
      {
        title: "Address",
        id: "address",
        links: [
          {
            label: "Dallas, Fort Worth, TX.",
            href: "https://maps.app.goo.gl/HJhjMeMK79h8p9Qz6",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    group: [
      {
        title: "Quick Links",
        id: "quick-links",
        links: [
          {
            label: "Home",
            href: "/",
          },
          {
            label: "About",
            href: "/about",
          },
          {
            label: "FAQ",
            href: "/faq",
          },
          {
            label: "Blog",
            href: "/blog",
          },
        ],
      },
      {
        title: "Utility Pages",
        id: "utility-pages",
        links: [
          {
            label: "Privacy",
            href: "/privacy",
          },
          {
            label: "Policy",
            href: "/policy",
          },
          {
            label: "Terms of Use",
            href: "/terms-of-use",
          },
        ],
      },
    ],
  },
];

const footerLinksDesktop = [
  {
    id: 1,
    group: [
      {
        title: "Contact",
        id: "contact",
        links: [
          {
            label: "000-000-0000",
            href: "tel:000-000-0000",
          },
          {
            label: "Support@koajo.com",
            href: "mailto:support@koajo.com",
          },
        ],
      },
      {
        title: "Address",
        id: "address",
        links: [
          {
            label: "Dallas, Fort Worth, TX.",
            href: "https://maps.app.goo.gl/HJhjMeMK79h8p9Qz6",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    group: [
      {
        title: "Quick Links",
        id: "quick-links",
        links: [
          {
            label: "Home",
            href: "/",
          },
          {
            label: "About",
            href: "/about",
          },
          {
            label: "FAQ",
            href: "/faq",
          },
          {
            label: "Blog",
            href: "/blog",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    group: [
      {
        title: "Utility Pages",
        id: "utility-pages",
        links: [
          {
            label: "Privacy Policy",
            href: "/legals/privacy-policy",
          },
          {
            label: "Terms of Use",
            href: "/legals/terms-of-use",
          },
        ],
      },
    ],
  },
];
