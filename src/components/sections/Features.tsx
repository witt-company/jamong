import { Construction, ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import { AnimatedSubscribeButton } from "@/components/ui/magicui/animated-subscribe-button";
import { featuresData } from "@/data/features";

export default function Features() {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-display-lg font-bold mb-6 text-gray-900">
            전문적인 IT 솔루션 서비스
          </h2>
          <p className="text-muted-foreground text-lg lg:text-xl max-w-2xl mx-auto">
            공공기관과 기업을 위한 맞춤형 개발 서비스로 디지털 혁신을 실현합니다.
          </p>
        </div>
        <div className="space-y-16 lg:space-y-20">
          {featuresData.map((feature, index) => (
            <div
              key={feature.category}
              className={`flex flex-col md:flex-row items-center gap-x-12 gap-y-6 ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="w-full aspect-[4/3] bg-muted rounded-xl basis-1/2 overflow-hidden">
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
                <h3 className="my-3 text-2xl font-semibold tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.details}</p>
                <AnimatedSubscribeButton className="mt-6 w-36" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>
                  <span className="group inline-flex items-center">
                    자세히 보기
                    <ChevronRightIcon className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                  <span className="group inline-flex items-center">
                    <Construction className="mr-2 size-4" />
                    준비중
                  </span>
                </AnimatedSubscribeButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}