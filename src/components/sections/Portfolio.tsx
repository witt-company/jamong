"use client";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { portfolioData } from "@/data/portfolio";
import { useInView } from "@/hooks/use-in-view";

export default function Portfolio() {
  const { ref, isInView } = useInView({ 
    threshold: 0.1, 
    rootMargin: '-50px 0px',
    triggerOnce: true 
  });
  
  const cards = portfolioData.map((card, index) => (
    <Card key={card.title} card={card} index={index} />
  ));

  return (
    <section id="portfolio" className="section-padding bg-white" ref={ref}>
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <h2 className="text-display-lg font-bold mb-6 text-gray-900">
            성공적인 프로젝트 사례
          </h2>
          <p className="text-muted-foreground text-lg lg:text-xl max-w-2xl mx-auto">
            다양한 분야에서 검증된 자몽의 기술력과 노하우를 확인해보세요.
          </p>
        </div>
        <div className="w-full h-full">
          <Carousel items={cards} isVisible={isInView} />
        </div>
      </div>
    </section>
  );
}