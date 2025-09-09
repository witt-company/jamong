import {
  Logo01,
  Logo02,
  Logo03,
  Logo04,
  Logo05,
  Logo06,
  Logo07,
  Logo08,
} from "@/components/logos-06/logos";
import { Marquee } from "@/components/ui/marquee";

export default function Partners() {
  return (
    <section className="section-padding-sm bg-gray-50">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-lg sm:text-xl font-medium text-gray-700 mb-2">
            신뢰받는 파트너
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            함께하는 기관 및 기업들
          </h2>
        </div>
        
        <div className="overflow-hidden">
          <Marquee
            pauseOnHover
            className="[--duration:25s] [&_svg]:mx-8 [&_svg]:opacity-60 [&_svg]:hover:opacity-100 [&_svg]:transition-opacity"
          >
            <Logo01 />
            <Logo02 />
            <Logo03 />
            <Logo04 />
            <Logo05 />
            <Logo06 />
            <Logo07 />
            <Logo08 />
          </Marquee>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            공공기관, 대기업부터 스타트업까지 다양한 파트너들과 함께합니다
          </p>
        </div>
      </div>
    </section>
  );
}