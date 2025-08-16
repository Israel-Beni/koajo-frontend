import { legalPages } from "@/data/legal-pages";
import { HTMLTag } from "@/types";
import { notFound } from "next/navigation";

const legalPageSlugs = legalPages.map((page) => page.slug);

// statically generate list of legal pages
export const generateStaticParams = async () => {
  return legalPageSlugs.map((slug) => ({ slug }));
};

export default function LegalsPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const data = legalPages.find((page) => page.slug === slug) || null;

  if (!data) {
    return notFound();
  }
  const { title, description, content } = data;

  const processedContent = content.map(({body, ...rest}) => {
    const processedBody = body
      .removeUndesirableTags(["metadata", "script", "style", "noscript", "template", "slot", "h1", "h2", "h4", "h5", "h6"])
      .bulkAddClassToHtmlTag(["p", "ul", "ol"], "text-sm md:text-base lg:text-md text-text-400")
      .addClassToHtmlTag("h3", "text-sm md:text-base lg:text-md font-semibold text-text-500")
      .addClassToHtmlTag("strong", "font-semibold text-text-500")
      .addClassToHtmlTag("a", "text-primary")
      .bulkAddClassToHtmlTag(["ul" , "ol"], "list-disc list-inside marker:text-text-500")
    
    return {body: processedBody, ...rest}
  })

  return (
    
    <section className="w-full py-10 md:py-15 lg:py-20">
      <div className="page_container">
        <div className="max-w-[calc(1006rem/16)] mx-auto flex flex-col gap-5 md:gap-7 lg:gap-10">
          {/* Heading */}
          <div className="z-10 flex flex-col gap-5 md:gap-6">
            <h1
              className="text-2xl md:text-3xl lg:text-5xl font-semibold text-text-600 text-center "
              dangerouslySetInnerHTML={{ __html: title }}
            />
            <p className="text-base md:text-md text-text-400">
              {description}
            </p>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-5 md:gap-7 lg:gap-10">
            {processedContent?.length && processedContent.map((item, index) => (
              <div key={index} className="flex flex-col gap-4">
                {'title' in item && item.title && (
                  <h2 className="text-md md:text-lg lg:text-2lg font-bold text-gray-900">
                    {item.title}
                  </h2>
                )}
                <div 
                  className="flex flex-col gap-4 text-sm md:text-base lg:text-md text-text-400"
                  dangerouslySetInnerHTML={{ __html: item.body }} 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
