import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { Accordion as AccordionPrimitive } from "radix-ui";
import { PlusIcon } from "lucide-react";

const faq = [
  {
    question: "자몽은 어떤 회사인가요?",
    answer:
      "자몽은 공공기관과 기업을 위한 맞춤형 디지털 솔루션을 제공하는 전문 개발 회사입니다. 실무진의 요구사항을 깊이 이해하고 현실적인 해결책을 제시합니다.",
  },
  {
    question: "주로 어떤 프로젝트를 진행하나요?",
    answer:
      "업무관리 시스템, 모바일 애플리케이션, 데이터 분석 플랫폼, 블록체인 기반 서비스, IoT 솔루션 등 다양한 분야의 프로젝트를 진행합니다.",
  },
  {
    question: "개발 기간은 얼마나 걸리나요?",
    answer:
      "프로젝트 규모와 복잡도에 따라 다르지만, 일반적으로 소규모 프로젝트는 2-3개월, 대규모 프로젝트는 6개월에서 1년 정도 소요됩니다. 정확한 일정은 요구사항 분석 후 제공해드립니다.",
  },
  {
    question: "사후 지원 서비스는 어떻게 되나요?",
    answer:
      "개발 완료 후 1년간 무상 A/S를 제공하며, 시스템 운영 중 발생하는 오류 수정과 기술 지원을 해드립니다. 이후에도 유지보수 계약을 통해 지속적인 지원이 가능합니다.",
  },
  {
    question: "비용은 어떻게 책정되나요?",
    answer:
      "프로젝트의 범위, 기능, 기술적 복잡도 등을 종합적으로 고려하여 견적을 산정합니다. 투명한 가격 정책을 통해 합리적인 비용으로 최고의 품질을 제공합니다.",
  },
  {
    question: "어떤 기술을 사용하나요?",
    answer:
      "React, Next.js, Node.js, Python, PostgreSQL, MongoDB 등 최신 기술 스택을 활용합니다. 프로젝트 요구사항에 맞는 최적의 기술을 선택하여 안정적이고 확장 가능한 시스템을 구축합니다.",
  },
];

export default function FAQ() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-display-lg font-bold mb-6 text-gray-900">
              자주 묻는 질문
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-xl mx-auto">
              자몽의 서비스와 개발 프로세스에 대한 궁금증을 해결해드립니다.
            </p>
          </div>

          <Accordion
            type="single"
            collapsible
            className="space-y-4"
            defaultValue="question-0"
          >
            {faq.map(({ question, answer }, index) => (
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