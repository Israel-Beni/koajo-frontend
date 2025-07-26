import Image from "next/image";

export default function Hero({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <section className="w-full bg-gray pt-2.5">
      <div className="page_container">
        <div className="min-h-[calc(384rem/16)] py-15 flex  justify-center items-center rounded-[0.875rem] bg-white">
          {/* Background */}
          <div className="hidden md:block size-full absolute inset-0 z-0 rounded-[inherit]">
            <Image
              src="/media/images/background-grid-light.svg"
              alt="Hero Background"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="inner_container relative z-10 flex flex-col  text-center gap-5">
            <h2
              className="text-xl font-semibold text-text-600"
              dangerouslySetInnerHTML={{ __html: title }}
            />
            <div
              className="text-base text-text-500"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
