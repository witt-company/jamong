export default function TypographySystem() {
  return (
    <div className="space-y-12">

      {/* Display Typography */}
      <section>
        <h2 className="text-xl font-semibold mb-6" style={{ color: 'var(--foreground)' }}>디스플레이 타이포그래피</h2>
        <div className="space-y-8">
          <div className="p-6 bg-gray-50 rounded-lg">
            <h1 className="text-display-2xl font-bold text-gray-900 mb-2">Display 2XL</h1>
            <p className="text-sm text-gray-600 mb-1">클래스: <code>text-display-2xl font-bold</code></p>
            <p className="text-sm text-gray-500">반응형: text-5xl md:text-6xl lg:text-7xl | line-height: 1.1</p>
            <p className="text-sm text-gray-700 mt-2">사용: 히어로 메인 헤딩</p>
          </div>

          <div className="p-6 bg-gray-50 rounded-lg">
            <h2 className="text-display-xl font-bold text-gray-900 mb-2">Display XL</h2>
            <p className="text-sm text-gray-600 mb-1">클래스: <code>text-display-xl font-bold</code></p>
            <p className="text-sm text-gray-500">반응형: text-4xl md:text-5xl lg:text-6xl | line-height: 0.95</p>
            <p className="text-sm text-gray-700 mt-2">사용: 서브 히어로 헤딩</p>
          </div>

          <div className="p-6 bg-gray-50 rounded-lg">
            <h3 className="text-display-lg font-bold text-gray-900 mb-2">Display LG</h3>
            <p className="text-sm text-gray-600 mb-1">클래스: <code>text-display-lg font-bold</code></p>
            <p className="text-sm text-gray-500">반응형: text-3xl md:text-4xl lg:text-5xl | line-height: 1</p>
            <p className="text-sm text-gray-700 mt-2">사용: 섹션 메인 헤딩 (Features 등)</p>
          </div>
        </div>
      </section>

      {/* Standard Typography */}
      <section>
        <h2 className="text-xl font-semibold mb-6" style={{ color: 'var(--foreground)' }}>표준 타이포그래피</h2>
        <div className="grid gap-6">

          <div className="p-6 bg-white border rounded-lg">
            <h3 className="text-2xl font-semibold tracking-tight text-gray-900 mb-2">Heading 2XL</h3>
            <p className="text-sm text-gray-600 mb-1">클래스: <code>text-2xl font-semibold tracking-tight</code></p>
            <p className="text-sm text-gray-700">사용: Features 카드 제목</p>
          </div>

          <div className="p-6 bg-white border rounded-lg">
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Heading XL</h4>
            <p className="text-sm text-gray-600 mb-1">클래스: <code>text-xl font-semibold</code></p>
            <p className="text-sm text-gray-700">사용: 서브섹션 헤딩</p>
          </div>

          <div className="p-6 bg-white border rounded-lg">
            <h5 className="text-lg font-medium text-gray-900 mb-2">Heading LG</h5>
            <p className="text-sm text-gray-600 mb-1">클래스: <code>text-lg font-medium</code></p>
            <p className="text-sm text-gray-700">사용: 카드 내부 헤딩</p>
          </div>

        </div>
      </section>

      {/* Body Text */}
      <section>
        <h2 className="text-xl font-semibold mb-6" style={{ color: 'var(--foreground)' }}>본문 텍스트</h2>
        <div className="grid gap-6">

          <div className="p-6 bg-white border rounded-lg">
            <p className="text-lg lg:text-xl text-gray-600 mb-2">Large Body Text</p>
            <p className="text-sm text-gray-600 mb-1">클래스: <code>text-lg lg:text-xl text-muted-foreground</code></p>
            <p className="text-sm text-gray-700">사용: 섹션 서브타이틀, 중요한 설명 텍스트</p>
          </div>

          <div className="p-6 bg-white border rounded-lg">
            <p className="text-base text-gray-600 mb-2">Regular Body Text</p>
            <p className="text-sm text-gray-600 mb-1">클래스: <code>text-base text-muted-foreground</code></p>
            <p className="text-sm text-gray-700">사용: 일반적인 본문 텍스트, 설명</p>
          </div>

          <div className="p-6 bg-white border rounded-lg">
            <p className="text-sm font-medium uppercase text-gray-500 mb-2">SMALL CAPS TEXT</p>
            <p className="text-sm text-gray-600 mb-1">클래스: <code>text-sm font-medium uppercase text-muted-foreground</code></p>
            <p className="text-sm text-gray-700">사용: 카테고리 라벨, 섹션 태그</p>
          </div>

        </div>
      </section>

      {/* Usage Examples */}
      <section>
        <h2 className="text-xl font-semibold mb-6" style={{ color: 'var(--foreground)' }}>실제 사용 예시</h2>
        <div className="space-y-8">

          {/* Hero Example */}
          <div className="p-8 bg-gradient-to-r from-red-600 to-red-700 rounded-lg text-white">
            <h1 className="text-display-2xl font-bold mb-4 leading-[1.15]">
              <span className="block">맞춤형 솔루션</span>
              <span className="block text-red-200">IT 개발 파트너</span>
            </h1>
            <p className="text-lg text-white/90 max-w-2xl">
              전문적인 개발팀과 함께 비즈니스 목표를 달성하세요
            </p>
          </div>

          {/* Features Example */}
          <div className="p-8 bg-white border rounded-lg">
            <div className="text-center mb-8">
              <h2 className="text-display-lg font-bold mb-6 text-gray-900">
                전문적인 IT 솔루션 서비스
              </h2>
              <p className="text-muted-foreground text-lg lg:text-xl max-w-2xl mx-auto">
                공공기관과 기업을 위한 맞춤형 개발 서비스로 디지털 혁신을 실현합니다.
              </p>
            </div>

            <div className="border-t pt-6">
              <span className="uppercase font-medium text-sm text-muted-foreground">
                WEB DEVELOPMENT
              </span>
              <h3 className="my-3 text-2xl font-semibold tracking-tight">
                웹 애플리케이션 개발
              </h3>
              <p className="text-muted-foreground">
                React, Next.js를 활용한 현대적인 웹 애플리케이션 개발
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}