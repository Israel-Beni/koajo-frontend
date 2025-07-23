import React from "react";
import CardFaqTopic from "@/component/utils/card-faq-topic";
import { Button } from "@/component/utils";
import { faqsData } from "@/data/faq";


export default function FaqCategory({ categorySlug }: { categorySlug: string }) {
  const faqCategory = faqsData.find((faq) => faq.slug === categorySlug);
  return (
    <div className="w-full bg-gray pb-15 lg:px-1">
      <div className="w-full bg-white  pt-15 rounded-[0.875rem]">
        <div className="page_container">
          <h1 className="text-4xl font-semibold text-center mb-10 md:15 lg:mb-20">
            {faqCategory?.category}
          </h1>
          {faqCategory && (
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6.5 mb-7.5">
              {Array(8).fill(faqCategory.topics[0]).map((faq, idx) => (
                <CardFaqTopic key={idx} {...faq} href={`/faq/${categorySlug}/${faq.slug}`} />
              ))}
            </section>
          )}
          <Button text="Apply Now" className="w-full" />
        </div>
      </div>
    </div>
  );
}
