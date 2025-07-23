import React from "react";
import { faqsData } from "@/data/faq";
import CardFaqCategory from "./utils/card-faq-category";
import Link from "next/link";

export default function FaqCategories() {
  const categories = faqsData.map((faq) => ({
    title: faq.category,
    icon: faq.icon,
    description: faq.description,
    href: `/faq/${faq.slug}`,
  }));
  return (
    <section className="w-full bg-gray py-15">
      <div className="page_container">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-7">
          {categories.map((category, idx) => (
            <Link href={category.href} key={idx}>
              <CardFaqCategory key={idx} {...category} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
