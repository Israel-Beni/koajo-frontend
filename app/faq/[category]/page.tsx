import FaqCategory  from "@/component/faq-category";

export default async function FaqCategoryPage({
  params: { category },
}: {
  params: { category: string };
}) {
  const categorySlug = await category;

  return (
    <>
      <FaqCategory categorySlug={categorySlug} />
    </>
  );
}
