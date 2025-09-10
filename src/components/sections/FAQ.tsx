import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { Accordion as AccordionPrimitive } from "radix-ui";
import { PlusIcon } from "lucide-react";
import { faqData, faqContent } from "@/data/faq";

export default function FAQ() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-display-lg font-bold mb-6 text-gray-900">
              {faqContent.title}
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-xl mx-auto">
              {faqContent.description}
            </p>
          </div>

          <Accordion
            type="single"
            collapsible
            className="space-y-4"
            defaultValue="question-0"
          >
            {faqData.map(({ question, answer }, index) => (
              <AccordionItem
                key={question}
                value={`question-${index}`}
                className="bg-gray-50 py-1 px-4 rounded-xl border-none"
              >
                <AccordionPrimitive.Header className="flex">
                  <AccordionPrimitive.Trigger
                    className={cn(
                      "flex flex-1 items-center justify-between pt-4 pb-3 font-semibold tracking-tight transition-all hover:underline [&[data-state=open]>svg]:rotate-45",
                      "text-start text-lg"
                    )}
                  >
                    {question}
                    <PlusIcon className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200" />
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionContent className="text-base text-muted-foreground">
                  {answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}