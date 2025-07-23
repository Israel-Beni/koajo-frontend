import React from "react";
import CardFaqTopic from "@/component/utils/card-faq-topic";
import { faqsData } from "@/data/faq";

export default async function FaqTopicPage({
  params,
}: {
  params: { category: string; topic: string };
}) {
  const faqCategory = await  faqsData.find((async (faq) => faq.slug ===  await params.category));
  const faqTopic = await faqCategory?.topics.find((async (_topic) => _topic.slug === await params.topic));


  return  (
      <div className="w-full bg-gray py-15">
        <div className="page_container flex flex-col gap-9.5">
          {/* headings */}
          <section className="flex flex-col gap-3">
            <h1 className="text-xl lg:text-2xl font-semibold text-black">
              {faqTopic?.title}
            </h1>
            <div className="flex flex-col gap-3 text-base lg:text-2lg text-text-400">
              <p>{faqTopic?.description}</p>
              <blockquote className=" border-l-2 border-l-black py-2 px-5.5">
                {faqTopic?.quote}
              </blockquote>
            </div>
          </section>

          {/* body */}
          <section className="flex flex-col gap-9.5">
            {faqTopic?.body.map((item, index) => (
              <div key={index} className="border-t border-t-black/2 pt-9.5">
                <h2 className="text-xl lg:text-2xl font-semibold text-black">
                  {item.title}
                </h2> 
                <p className="text-base lg:text-2lg text-text-400">{item.description}</p>
              </div>
            ))}
          </section>

          {/* related topics */}
          {faqTopic && <section className="flex flex-col gap-7">
            {Array(8)
              .fill(faqTopic)
              .map((faq, idx) => (
                <CardFaqTopic
                  key={idx}
                  {...faq}
                  href={`/faq/${params.category}/${faq.slug}`}
                />
              ))}
          </section>}
        </div>
      </div>
    )
}
