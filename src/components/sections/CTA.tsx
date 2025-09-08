export default function CTA() {
  return (
    <section className="bg-gradient-to-r from-orange-500 to-orange-600 py-24">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          지금 시작하세요
        </h2>
        <p className="text-xl text-white mb-12 max-w-3xl mx-auto leading-relaxed">
          무료 상담을 통해 맞춤형 솔루션을 확인해보세요.<br />
          전문가가 직접 상담해드립니다.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            type="button"
            className="bg-white text-orange-700 px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl"
            aria-label="무료 상담 신청하기"
          >
            무료 상담 신청하기
          </button>
          <button 
            type="button"
            className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-white hover:text-orange-700 transition-all duration-200"
            aria-label="서비스 문의하기"
          >
            서비스 문의하기
          </button>
        </div>
      </div>
    </section>
  );
}
