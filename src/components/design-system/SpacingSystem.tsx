export default function SpacingSystem() {
  return (
    <div className="space-y-12">

      {/* Section Spacing */}
      <section>
        <h2 className="text-xl font-semibold mb-6" style={{ color: 'var(--foreground)' }}>섹션 간격</h2>
        <div className="space-y-6">

          <div className="p-6 bg-white border rounded-lg">
            <h3 className="text-lg font-medium mb-4 text-gray-900">Section Padding (기본)</h3>
            <div className="bg-red-50 border-2 border-dashed border-red-200 rounded-lg">
              <div className="section-padding bg-red-100 rounded-lg">
                <div className="text-center py-4 bg-white rounded border-2 border-dashed border-red-300">
                  섹션 콘텐츠 영역
                </div>
              </div>
            </div>
            <div className="mt-4 space-y-2 text-sm">
              <p className="text-gray-600">클래스: <code>section-padding</code></p>
              <p className="text-gray-500">값: <code>py-16 md:py-20 lg:py-24</code></p>
              <p className="text-gray-700">사용: Features, Portfolio, CTA 등 메인 섹션</p>
            </div>
          </div>

          <div className="p-6 bg-white border rounded-lg">
            <h3 className="text-lg font-medium mb-4 text-gray-900">Section Padding Small</h3>
            <div className="bg-blue-50 border-2 border-dashed border-blue-200 rounded-lg">
              <div className="section-padding-sm bg-blue-100 rounded-lg">
                <div className="text-center py-4 bg-white rounded border-2 border-dashed border-blue-300">
                  작은 섹션 콘텐츠
                </div>
              </div>
            </div>
            <div className="mt-4 space-y-2 text-sm">
              <p className="text-gray-600">클래스: <code>section-padding-sm</code></p>
              <p className="text-gray-500">값: <code>py-12 md:py-16 lg:py-20</code></p>
              <p className="text-gray-700">사용: 덜 중요한 섹션, 서브 콘텐츠</p>
            </div>
          </div>

          <div className="p-6 bg-white border rounded-lg">
            <h3 className="text-lg font-medium mb-4 text-gray-900">Connected Sections</h3>
            <div className="space-y-2">
              <div className="bg-green-50 border-2 border-dashed border-green-200 rounded-lg">
                <div className="section-padding-connected-top bg-green-100 rounded-lg">
                  <div className="text-center py-2 bg-white rounded border-2 border-dashed border-green-300">
                    연결된 상단 섹션
                  </div>
                </div>
              </div>
              <div className="bg-green-50 border-2 border-dashed border-green-200 rounded-lg">
                <div className="section-padding-connected-bottom bg-green-100 rounded-lg">
                  <div className="text-center py-2 bg-white rounded border-2 border-dashed border-green-300">
                    연결된 하단 섹션
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 space-y-2 text-sm">
              <p className="text-gray-600">클래스: <code>section-padding-connected-top</code> | <code>section-padding-connected-bottom</code></p>
              <p className="text-gray-500">값: <code>pt-8 md:pt-12</code> | <code>pb-8 md:pb-12</code></p>
              <p className="text-gray-700">사용: 섹션 간 연결이 필요할 때</p>
            </div>
          </div>

        </div>
      </section>

      {/* Component Spacing */}
      <section>
        <h2 className="text-xl font-semibold mb-6" style={{ color: 'var(--foreground)' }}>컴포넌트 간격</h2>
        <div className="space-y-6">

          <div className="p-6 bg-white border rounded-lg">
            <h3 className="text-lg font-medium mb-4 text-gray-900">Features 섹션 간격</h3>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded border-2 border-dashed border-gray-300">
                <div className="text-center mb-16 lg:mb-20">
                  <h2 className="text-2xl font-bold mb-6 text-gray-900">섹션 헤더</h2>
                  <p className="text-gray-600">서브타이틀</p>
                </div>
                <div className="space-y-16 lg:space-y-20">
                  <div className="p-4 bg-white rounded">Feature 카드 1</div>
                  <div className="p-4 bg-white rounded">Feature 카드 2</div>
                </div>
              </div>
            </div>
            <div className="mt-4 space-y-2 text-sm">
              <p className="text-gray-700">• 헤더 하단 여백: <code>mb-16 lg:mb-20</code></p>
              <p className="text-gray-700">• 헤딩과 서브타이틀 간격: <code>mb-6</code></p>
              <p className="text-gray-700">• 카드 간 간격: <code>space-y-16 lg:space-y-20</code></p>
            </div>
          </div>

          <div className="p-6 bg-white border rounded-lg">
            <h3 className="text-lg font-medium mb-4 text-gray-900">Hero 섹션 간격</h3>
            <div className="p-4 bg-gradient-to-r from-red-600 to-red-700 rounded text-white">
              <h1 className="text-3xl font-bold mb-8 leading-tight">히어로 타이틀</h1>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button className="px-6 py-3 bg-white text-black rounded">메인 CTA</button>
                <button className="px-6 py-3 border-2 border-white rounded">보조 CTA</button>
              </div>
            </div>
            <div className="mt-4 space-y-2 text-sm">
              <p className="text-gray-700">• 타이틀 하단 여백: <code>mb-8</code></p>
              <p className="text-gray-700">• 버튼 간 간격: <code>gap-3 sm:gap-4</code></p>
              <p className="text-gray-700">• 라인 높이: <code>leading-[1.15]</code></p>
            </div>
          </div>

          <div className="p-6 bg-white border rounded-lg">
            <h3 className="text-lg font-medium mb-4 text-gray-900">Feature 카드 내부 간격</h3>
            <div className="p-4 bg-gray-50 rounded border-2 border-dashed border-gray-300">
              <span className="uppercase font-medium text-sm text-gray-500">CATEGORY</span>
              <h3 className="my-3 text-xl font-semibold">카드 제목</h3>
              <p className="text-gray-600 mb-6">카드 설명 텍스트</p>
              <button className="px-4 py-2 bg-red-600 text-white rounded">자세히 보기</button>
            </div>
            <div className="mt-4 space-y-2 text-sm">
              <p className="text-gray-700">• 카테고리와 제목: <code>my-3</code></p>
              <p className="text-gray-700">• 설명 하단 여백: <code>mb-6</code></p>
              <p className="text-gray-700">• 버튼 상단 여백: <code>mt-6</code></p>
            </div>
          </div>

        </div>
      </section>

      {/* Tailwind Spacing Scale */}
      <section>
        <h2 className="text-xl font-semibold mb-6" style={{ color: 'var(--foreground)' }}>Tailwind 간격 스케일</h2>
        <div className="space-y-6">

          <div className="p-6 bg-white border rounded-lg">
            <h3 className="text-lg font-medium mb-4 text-gray-900">자주 사용되는 간격</h3>
            <div className="space-y-4">
              {[
                { size: 'space-y-2', value: '0.5rem (8px)', usage: '리스트 아이템, 작은 요소들' },
                { size: 'space-y-3', value: '0.75rem (12px)', usage: '폼 요소 간격, 버튼 그룹' },
                { size: 'space-y-4', value: '1rem (16px)', usage: '카드 내부 요소, 일반적인 간격' },
                { size: 'space-y-6', value: '1.5rem (24px)', usage: '섹션 내부 요소, 중간 간격' },
                { size: 'space-y-8', value: '2rem (32px)', usage: '큰 요소 간격, 제목 하단' },
                { size: 'space-y-12', value: '3rem (48px)', usage: '섹션 간 작은 간격' },
                { size: 'space-y-16', value: '4rem (64px)', usage: '카드/컴포넌트 간 간격' },
                { size: 'space-y-20', value: '5rem (80px)', usage: '큰 섹션 간격' },
                { size: 'space-y-24', value: '6rem (96px)', usage: '메인 섹션 간격' },
              ].map((item) => (
                <div key={item.size} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                  <div className="flex items-center gap-4">
                    <code className="text-sm font-mono bg-white px-2 py-1 rounded">{item.size}</code>
                    <span className="text-sm text-gray-600">{item.value}</span>
                  </div>
                  <span className="text-sm text-gray-700">{item.usage}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Layout Examples */}
      <section>
        <h2 className="text-xl font-semibold mb-6" style={{ color: 'var(--foreground)' }}>레이아웃 예시</h2>
        <div className="space-y-8">

          {/* Hero Layout */}
          <div className="p-6 bg-white border rounded-lg">
            <h3 className="text-lg font-medium mb-4 text-gray-900">히어로 섹션 레이아웃</h3>
            <div className="h-96 bg-gradient-to-r from-red-600 to-red-700 rounded-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="relative z-10 h-full flex items-center">
                <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                  <div className="text-white">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                      <span className="block">맞춤형 솔루션</span>
                      <span className="block text-red-200">IT 개발 파트너</span>
                    </h1>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                      <button className="h-12 sm:h-14 px-6 py-3 sm:px-8 sm:py-4 bg-white text-black rounded font-medium">
                        무료 상담 신청
                      </button>
                      <button className="h-12 sm:h-14 px-6 py-3 sm:px-8 sm:py-4 border-2 border-white text-white rounded font-medium">
                        프로젝트 보기
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 text-sm text-gray-700">
              <p>• 전체 높이: <code>h-[100dvh]</code></p>
              <p>• 컨테이너: <code>max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8</code></p>
              <p>• 중앙 정렬: <code>flex items-center</code></p>
            </div>
          </div>

          {/* Features Layout */}
          <div className="p-6 bg-white border rounded-lg">
            <h3 className="text-lg font-medium mb-4 text-gray-900">Features 섹션 레이아웃</h3>
            <div className="section-padding bg-gray-50 rounded-lg">
              <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 lg:mb-20">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
                    전문적인 IT 솔루션 서비스
                  </h2>
                  <p className="text-gray-600 text-lg lg:text-xl max-w-2xl mx-auto">
                    공공기관과 기업을 위한 맞춤형 개발 서비스로 디지털 혁신을 실현합니다.
                  </p>
                </div>
                <div className="space-y-16 lg:space-y-20">
                  <div className="flex flex-col md:flex-row items-center gap-x-12 gap-y-6">
                    <div className="w-full aspect-[4/3] bg-gray-300 rounded-xl basis-1/2"></div>
                    <div className="basis-1/2">
                      <span className="uppercase font-medium text-sm text-gray-500">WEB DEVELOPMENT</span>
                      <h3 className="my-3 text-2xl font-semibold">웹 애플리케이션 개발</h3>
                      <p className="text-gray-600">React, Next.js를 활용한 현대적인 웹 애플리케이션 개발</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 text-sm text-gray-700">
              <p>• 섹션 패딩: <code>section-padding</code></p>
              <p>• 헤더 여백: <code>mb-16 lg:mb-20</code></p>
              <p>• 카드 간격: <code>gap-x-12 gap-y-6</code></p>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}