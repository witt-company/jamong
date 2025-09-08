import Image from 'next/image';
import Header from '@/components/layouts/Header';

export default function Hero() {
  return (
    <section className="relative h-[100dvh] flex flex-col overflow-hidden">
      {/* Background Image - 전체 화면을 덮음 */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="https://images.unsplash.com/photo-1483389127117-b6a2102724ae?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          fill
          className="object-cover grayscale object-right"
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
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight">
                <span className="block">혁신적인 기술로</span>
                <span className="block text-orange-500">비즈니스를 성장</span>
              </h1>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button 
                  type="button"
                  className="bg-orange-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-base sm:text-lg font-medium hover:bg-orange-800 transition-all duration-200 shadow-lg hover:shadow-xl"
                  aria-label="무료 상담 신청하기"
                >
                  무료 상담 신청
                </button>
                <button 
                  type="button"
                  className="border-2 border-white text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-base sm:text-lg font-medium hover:bg-white hover:text-gray-900 transition-all duration-200"
                  aria-label="서비스 자세히 알아보기"
                >
                  서비스 알아보기
                </button>
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