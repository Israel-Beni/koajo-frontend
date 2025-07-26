"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { faqsData } from "@/data/faq";
import { useState, useMemo } from "react";
import Image from "next/image";
import cn from "clsx";

export default function FaqListings() {
  const categories = useMemo(
    () => faqsData.map((item) => item.category).sort(),
    []
  ); // sort alphabetically
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(categories[0]);

  // Filter data based on search query and selected category
  const filteredData = useMemo(() => {
    let filtered = faqsData;

    // Filter by category if selected
    if (selectedCategory) {
      filtered = filtered.filter(
        (category) =>
          category.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    // Filter by search query
    if (searchQuery.trim()) {
      filtered = filtered
        .map((category) => ({
          ...category,
          items: category.items.filter(
            (item) =>
              item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
              item.answer.toLowerCase().includes(searchQuery.toLowerCase())
          ),
        }))
        .filter((category) => category.items.length > 0);
    }

    return filtered;
  }, [searchQuery, selectedCategory]);

  const highlightText = (text: string, query: string) => {
    if (!query.trim()) return text;

    const regex = new RegExp(`(${query})`, "gi");
    const parts = text.split(regex);

    return parts.map((part, index) =>
      regex.test(part) ? (
        <span key={index} className="bg-primary/20 text-primary font-medium">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <section className="w-full bg-gray py-7.5">
      <div className="page_container">
        {/* Search Bar */}
        <div className="flex items-center justify-between w-full px-5 py-4.5 gap-2.5 rounded-xl bg-white mb-5 border border-text-200 focus:border-primary">
          <div className="shrink-0 flex  items-center pointer-events-none">
            <Image
              src="/media/icons/search.svg"
              alt="search"
              width={21}
              height={21}
              className="size-5 object-contain"
            />
          </div>
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full text-sm text-text-400 placeholder-secondary-300 focus:outline-none"
          />
        </div>

        {/* Category Filters */}
        <div className="w-full mb-7.5">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() =>
                  setSelectedCategory(
                    selectedCategory === category ? null : category
                  )
                }
                className={cn(
                  "px-4 py-2 rounded-xl text-sm font-medium transition-colors",
                  selectedCategory === category
                    ? "bg-primary text-white"
                    : "bg-white text-gray-600 hover:bg-gray-50"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Items */}
        <div className="w-full space-y-5">
          {filteredData.map((category) => (
            <div key={category.category}>
              {filteredData.length > 1 && (
                <h3 className="text-md font-semibold text-gray-900 mb-3">
                  {category.category}
                </h3>
              )}
              <Accordion.Root type="single" collapsible className="space-y-3">
                {category.items.map((item, index) => {
                  const itemId = `${category.category}-${index}`;

                  return (
                    <Accordion.Item
                      key={itemId}
                      value={itemId}
                      className="bg-white rounded-[0.875rem] px-4 py-5 hover:shadow-sm transition-shadow"
                    >
                      <Accordion.Trigger asChild>
                        <button className="w-full text-left">
                          <div className="flex justify-between">
                            <h4 className="text-md text-gray-900 pr-4">
                              {highlightText(item.question, searchQuery)}
                            </h4>
                            <div className="flex-shrink-0 rounded-full">
                              {index === 0 ? <Image
                                src="/media/icons/plus.svg"
                                alt="plus"
                                width={17}
                                height={17}
                                className="size-4 object-contain data-[state=open]:hidden"
                              /> : <Image
                                src="/media/icons/minus.svg"
                                alt="minus"
                                width={17}
                                height={17}
                                className="size-4 object-contain data-[state=closed]:hidden"
                              />}
                            </div>
                          </div>
                        </button>
                      </Accordion.Trigger>

                      <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                        <div className="pb-4 pt-2">
                          <p className="text-text-500 text-sm">
                            {highlightText(item.answer, searchQuery)}
                          </p>
                        </div>
                      </Accordion.Content>
                    </Accordion.Item>
                  );
                })}
              </Accordion.Root>
            </div>
          ))}

          {filteredData.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-500">
                No questions found matching your search.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
