import React from "react";
import Image from "next/image";

interface CardFaqCategoryProps {
  title: string;
  icon: string;
  description: string;
  href?: string;
}

export default function CardFaqCategory({ title, icon, description }: CardFaqCategoryProps) {
  return (
    <div className="bg-white rounded-[0.625rem] shadow-[0px_30px_80px_0px_rgba(0,0,0,0.06)] p-8.5 flex flex-col  justify-center items-center text-center min-h-[150px] hover:shadow-[0px_30px_80px_0px_rgba(0,0,0,0.12)] transition-all duration-300 ">
      <Image src={icon} alt={title} width={42} height={42} className="size-10.5 mb-7.5" />
      <h2 className="font-semibold text-2lg text-black  gap-6">{title}</h2>
      <p className="text-base text-text-400">{description}</p>
    </div>
  );
}
