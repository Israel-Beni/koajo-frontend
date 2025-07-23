import React from "react";
import CardFaq from "@/component/utils/card-faq-topic";
import { Button } from "@/component/utils";
import Hero from "@/component/shared/hero";
import FaqCategories from "@/component/faq-categories";

export default function FaqPage() {
  return (
    <>
      <Hero
        title="IT department manager"
        description="Lorem ipsum doloramet consectetur etiam urna suspendisse risus molestiefames elementum porta lamcorper semid senectus."
      />
      <FaqCategories />
    </>
  );
}