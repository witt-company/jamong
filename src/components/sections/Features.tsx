import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const features = [
  {
    category: "마케팅 & 세일즈",
    title: "효과적인 리드 관리 시스템",
    details: "리드를 체계적으로 수집하고 관리하여 개인화된 이메일을 자동으로 발송합니다. 다양한 테이블에서 리드 정보를 저장하고 참조할 수 있습니다.",
    tutorialLink: "#",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
  },
  {
    category: "프로젝트 관리",
    title: "워크플로우 간소화 솔루션",
    details: "작업, 마감일, 팀 협업을 한 곳에서 관리합니다. 커스터마이징 가능한 보드를 활용해 프로젝트를 효율적으로 관리하고 루틴 업데이트를 자동화합니다.",
    tutorialLink: "#",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2039&q=80",
  },
  {
    category: "고객 지원",
    title: "seamless한 고객 경험 제공",
    details: "통합 티켓팅 시스템으로 고객 문의를 더 빠르게 추적하고 해결합니다. 우선순위를 설정하고 후속 조치를 자동화하여 개인화된 응답으로 만족도를 높입니다.",
    tutorialLink: "#",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
  },
  {
    category: "팀 협업",
    title: "팀과의 연결고리 강화",
    details: "공유 보드와 실시간 업데이트를 통해 커뮤니케이션을 간소화하고 팀의 노력을 조율합니다. 투명한 목표 추적과 즉각적인 피드백으로 더 나은 결과를 달성합니다.",
    tutorialLink: "#",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2371&q=80",
  },
  {
    category: "제품 개발",
    title: "혁신을 쉽게 가속화",
    details: "프로토타입, 피드백, 반복 작업을 한 곳에서 관리하여 제품 아이디어를 현실로 구현합니다. 팀과 협력하여 기능을 개선하고 자신 있게 출시하세요.",
    tutorialLink: "#",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
  },
];

export default function Features() {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-display-lg font-bold mb-6 text-gray-900">
            비즈니스 전략을 강화하세요
          </h2>
          <p className="text-muted-foreground text-lg lg:text-xl max-w-2xl mx-auto">
            성공을 위해 설계된 지능형 도구로 전략을 향상시키세요.
          </p>
        </div>
        <div className="space-y-16 lg:space-y-20">
          {features.map((feature, index) => (
            <div
              key={feature.category}
              className={`flex flex-col md:flex-row items-center gap-x-12 gap-y-6 ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="w-full aspect-[4/3] bg-muted rounded-xl border border-border/50 basis-1/2 overflow-hidden">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={600}
                  height={450}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="basis-1/2 shrink-0">
                <span className="uppercase font-medium text-sm text-muted-foreground">
                  {feature.category}
                </span>
                <h4 className="my-3 text-2xl font-semibold tracking-tight">
                  {feature.title}
                </h4>
                <p className="text-muted-foreground">{feature.details}</p>
                <Button asChild size="lg" className="mt-6 rounded-full gap-3">
                  <Link href={feature.tutorialLink}>
                    자세히 보기 <ArrowRight />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}