export default function ColorSystem() {
  return (
    <div className="space-y-12">

      {/* Main Brand Color */}
      <section>
        <h2 className="text-xl font-semibold mb-6" style={{ color: 'var(--foreground)' }}>메인 브랜드 색상</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-8 rounded-xl" style={{ backgroundColor: 'var(--primary)' }}>
            <div className="text-white font-semibold text-2xl mb-2">Primary Red</div>
            <div className="text-white text-lg mb-1">#e63946</div>
            <div className="text-white/80 text-sm">--primary</div>
            <div className="mt-4 text-white/90 text-sm">
              히어로 타이틀, CTA 버튼, 중요한 액센트에 사용
            </div>
          </div>
          <div className="p-8 rounded-xl border-2" style={{ backgroundColor: 'white', borderColor: 'var(--primary)' }}>
            <div style={{ color: 'var(--primary)' }} className="font-semibold text-2xl mb-2">Primary on White</div>
            <div style={{ color: 'var(--primary)' }} className="text-lg mb-1">#e63946</div>
            <div className="text-gray-600 text-sm">Border, Text accent</div>
            <div className="mt-4 text-gray-700 text-sm">
              흰 배경에서 텍스트나 테두리로 사용
            </div>
          </div>
        </div>
      </section>

      {/* Neutral System */}
      <section>
        <h2 className="text-xl font-semibold mb-6" style={{ color: 'var(--foreground)' }}>중성 색상 시스템</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-6 rounded-lg bg-white border border-gray-200">
            <div className="text-gray-900 font-medium text-lg">White</div>
            <div className="text-gray-700 text-sm mt-1">#ffffff</div>
            <div className="text-gray-600 text-xs mt-2">카드, 모달, 섹션 배경</div>
          </div>
          <div className="p-6 rounded-lg" style={{ backgroundColor: 'var(--background)' }}>
            <div style={{ color: 'var(--foreground)' }} className="font-medium text-lg">Light Gray</div>
            <div style={{ color: 'var(--foreground)' }} className="text-sm mt-1">#f1faee</div>
            <div style={{ color: 'var(--foreground)' }} className="text-xs mt-2 opacity-70">페이지 기본 배경</div>
          </div>
          <div className="p-6 rounded-lg" style={{ backgroundColor: 'var(--foreground)' }}>
            <div style={{ color: 'var(--background)' }} className="font-medium text-lg">Dark Blue</div>
            <div style={{ color: 'var(--background)' }} className="text-sm mt-1">#1d3557</div>
            <div style={{ color: 'var(--background)' }} className="text-xs mt-2 opacity-90">메인 텍스트, 헤딩</div>
          </div>
          <div className="p-6 rounded-lg bg-black">
            <div className="text-white font-medium text-lg">Black</div>
            <div className="text-white text-sm mt-1">#000000</div>
            <div className="text-white text-xs mt-2 opacity-80">오버레이, 강조</div>
          </div>
        </div>
      </section>

      {/* Gray Scale Palette */}
      <section>
        <h2 className="text-xl font-semibold mb-6" style={{ color: 'var(--foreground)' }}>그레이스케일 팔레트</h2>
        <div className="space-y-4">
          <div className="flex rounded-lg overflow-hidden border">
            <div className="flex-1 p-4 bg-gray-50">
              <div className="text-gray-800 font-medium">Gray 50</div>
              <div className="text-gray-600 text-sm">#f9fafb</div>
            </div>
            <div className="flex-1 p-4 bg-gray-100">
              <div className="text-gray-800 font-medium">Gray 100</div>
              <div className="text-gray-600 text-sm">#f3f4f6</div>
            </div>
            <div className="flex-1 p-4 bg-gray-200">
              <div className="text-gray-800 font-medium">Gray 200</div>
              <div className="text-gray-600 text-sm">#e5e7eb</div>
            </div>
            <div className="flex-1 p-4 bg-gray-300">
              <div className="text-gray-800 font-medium">Gray 300</div>
              <div className="text-gray-600 text-sm">#d1d5db</div>
            </div>
            <div className="flex-1 p-4 bg-gray-400">
              <div className="text-white font-medium">Gray 400</div>
              <div className="text-gray-100 text-sm">#9ca3af</div>
            </div>
          </div>
          <div className="flex rounded-lg overflow-hidden border">
            <div className="flex-1 p-4 bg-gray-500">
              <div className="text-white font-medium">Gray 500</div>
              <div className="text-gray-200 text-sm">#6b7280</div>
            </div>
            <div className="flex-1 p-4 bg-gray-600">
              <div className="text-white font-medium">Gray 600</div>
              <div className="text-gray-200 text-sm">#4b5563</div>
            </div>
            <div className="flex-1 p-4 bg-gray-700">
              <div className="text-white font-medium">Gray 700</div>
              <div className="text-gray-200 text-sm">#374151</div>
            </div>
            <div className="flex-1 p-4 bg-gray-800">
              <div className="text-white font-medium">Gray 800</div>
              <div className="text-gray-200 text-sm">#1f2937</div>
            </div>
            <div className="flex-1 p-4 bg-gray-900">
              <div className="text-white font-medium">Gray 900</div>
              <div className="text-gray-200 text-sm">#111827</div>
            </div>
          </div>
        </div>
      </section>

      {/* Color Usage Guide */}
      <section>
        <h2 className="text-xl font-semibold mb-6" style={{ color: 'var(--foreground)' }}>색상 사용 가이드</h2>
        <div className="grid gap-6">

          {/* Hero Section */}
          <div className="p-6 rounded-lg" style={{ backgroundColor: 'var(--primary)' }}>
            <h3 className="text-white font-semibold text-xl mb-2">히어로 섹션</h3>
            <p className="text-white/90 mb-4">Primary 색상 배경에 흰색 텍스트</p>
            <div className="flex gap-4">
              <button className="px-6 py-2 bg-white text-gray-900 rounded font-medium">
                메인 CTA 버튼
              </button>
              <button className="px-6 py-2 border-2 border-white text-white rounded font-medium hover:bg-white hover:text-gray-900 transition-colors">
                보조 버튼
              </button>
            </div>
          </div>

          {/* Features Section */}
          <div className="p-6 rounded-lg bg-white">
            <h3 className="text-gray-900 font-semibold text-xl mb-2">Features 섹션</h3>
            <p className="text-gray-600 text-lg mb-4">흰색 배경에 회색 텍스트 계층</p>
            <div className="space-y-2">
              <h4 className="text-gray-900 font-bold text-lg">메인 헤딩 - Gray 900</h4>
              <p className="text-gray-600 text-base">서브 텍스트 - muted-foreground</p>
              <p className="text-gray-500 text-sm uppercase font-medium">카테고리 라벨 - Gray 500</p>
            </div>
          </div>

          {/* Form Elements */}
          <div className="p-6 rounded-lg" style={{ backgroundColor: 'var(--primary)' }}>
            <h3 className="text-white font-semibold text-xl mb-4">CTA 폼 (Primary 배경)</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  className="px-3 py-3 bg-white text-gray-900 border border-gray-300 rounded-md focus:border-red-500 focus:ring-2 focus:ring-red-500/20 focus:shadow-lg focus:shadow-red-500/10"
                  placeholder="이름"
                />
                <input
                  className="px-3 py-3 bg-white text-gray-900 border border-gray-300 rounded-md focus:border-red-500 focus:ring-2 focus:ring-red-500/20 focus:shadow-lg focus:shadow-red-500/10"
                  placeholder="이메일"
                />
              </div>
              <textarea
                className="w-full px-3 py-3 bg-white text-gray-900 border border-gray-300 rounded-md resize-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 focus:shadow-lg focus:shadow-red-500/10"
                rows={3}
                placeholder="문의 내용"
              />
              <div>
                <input
                  className="w-full px-3 py-3 bg-white text-gray-900 border border-red-400 rounded-md focus:ring-2 focus:ring-red-400/20 focus:shadow-lg focus:shadow-red-400/10"
                  placeholder="에러 상태 예시"
                />
                <p className="text-red-200 text-sm mt-1">에러 메시지는 빨간색 계열 (red-200)</p>
              </div>
              <button className="w-full py-3 bg-white text-black font-semibold rounded-md hover:bg-white/90">
                문의하기 버튼
              </button>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}