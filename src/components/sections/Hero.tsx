import Image from 'next/image';
import Header from '@/components/layouts/Header';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section id="home" className="relative h-[100dvh] flex flex-col overflow-hidden">
      {/* Background Image - 전체 화면을 덮음 */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="https://oezif1e9leolgilw.public.blob.vercel-storage.com/hero/hero-background.jpg"
          alt=""
          fill
          className="object-cover grayscale object-center lg:object-right"
          priority
          aria-hidden="true"
        />
        {/* Light overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Header - 배경 이미지 위에 위치 */}
      <Header />

      {/* Hero Content - 헤더 아래에서 시작 */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-left">
              {/* Main Headline */}
              <h1 className="text-display-2xl font-bold text-white mb-8 leading-[1.15]">
                <span className="block">맞춤형 솔루션</span>
                <span className="block text-primary">IT 개발 파트너</span>
              </h1>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button 
                  size="lg"
                  className="h-12 sm:h-14 px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-medium shadow-lg hover:shadow-xl"
                  style={{textShadow: '0 1px 2px rgba(0,0,0,0.3)'}}
                  aria-label="무료 상담 신청하기"
                  asChild
                >
                  <a href="#contact">무료 상담 신청</a>
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  className="h-12 sm:h-14 border-2 border-white text-white px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-medium hover:bg-white hover:text-gray-900 bg-transparent"
                  aria-label="프로젝트 보기"
                  asChild
                >
                  <a href="#portfolio">프로젝트 보기</a>
                </Button>
              </div>
            </div>

            {/* Right Content - Empty for now */}
            <div className="hidden lg:block">
              <div className="w-full h-96"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}