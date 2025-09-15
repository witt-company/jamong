import { Button } from '@/components/ui/button'

export default function ButtonSystem() {
  return (
    <div className="space-y-12">

      {/* Button Variants */}
      <section>
        <h2 className="text-xl font-semibold mb-6" style={{ color: 'var(--foreground)' }}>버튼 Variants</h2>
        <div className="grid gap-6">

          <div className="p-6 bg-white border rounded-lg">
            <h3 className="text-lg font-medium mb-4 text-gray-900">Primary (Default)</h3>
            <div className="flex flex-wrap gap-4 mb-4">
              <Button>Primary Button</Button>
              <Button size="sm">Small Primary</Button>
              <Button size="lg">Large Primary</Button>
            </div>
            <p className="text-sm text-gray-600 mb-2">클래스: <code>variant="default"</code> (기본값)</p>
            <p className="text-sm text-gray-700">사용: 메인 CTA, 중요한 액션 버튼</p>
          </div>

          <div className="p-6 bg-white border rounded-lg">
            <h3 className="text-lg font-medium mb-4 text-gray-900">Outline</h3>
            <div className="flex flex-wrap gap-4 mb-4">
              <Button variant="outline">Outline Button</Button>
              <Button variant="outline" size="sm">Small Outline</Button>
              <Button variant="outline" size="lg">Large Outline</Button>
            </div>
            <p className="text-sm text-gray-600 mb-2">클래스: <code>variant="outline"</code></p>
            <p className="text-sm text-gray-700">사용: 보조 액션, 취소 버튼</p>
          </div>

          <div className="p-6 bg-white border rounded-lg">
            <h3 className="text-lg font-medium mb-4 text-gray-900">Secondary</h3>
            <div className="flex flex-wrap gap-4 mb-4">
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="secondary" size="sm">Small Secondary</Button>
              <Button variant="secondary" size="lg">Large Secondary</Button>
            </div>
            <p className="text-sm text-gray-600 mb-2">클래스: <code>variant="secondary"</code></p>
            <p className="text-sm text-gray-700">사용: 덜 중요한 액션</p>
          </div>

          <div className="p-6 bg-white border rounded-lg">
            <h3 className="text-lg font-medium mb-4 text-gray-900">Ghost</h3>
            <div className="flex flex-wrap gap-4 mb-4">
              <Button variant="ghost">Ghost Button</Button>
              <Button variant="ghost" size="sm">Small Ghost</Button>
              <Button variant="ghost" size="lg">Large Ghost</Button>
            </div>
            <p className="text-sm text-gray-600 mb-2">클래스: <code>variant="ghost"</code></p>
            <p className="text-sm text-gray-700">사용: 미니멀한 액션, 메뉴 아이템</p>
          </div>

          <div className="p-6 bg-white border rounded-lg">
            <h3 className="text-lg font-medium mb-4 text-gray-900">Link</h3>
            <div className="flex flex-wrap gap-4 mb-4">
              <Button variant="link">Link Button</Button>
              <Button variant="link" size="sm">Small Link</Button>
              <Button variant="link" size="lg">Large Link</Button>
            </div>
            <p className="text-sm text-gray-600 mb-2">클래스: <code>variant="link"</code></p>
            <p className="text-sm text-gray-700">사용: 인라인 링크, 로그아웃 등</p>
          </div>

        </div>
      </section>

      {/* Button States */}
      <section>
        <h2 className="text-xl font-semibold mb-6" style={{ color: 'var(--foreground)' }}>버튼 상태</h2>
        <div className="grid gap-6">

          <div className="p-6 bg-white border rounded-lg">
            <h3 className="text-lg font-medium mb-4 text-gray-900">Disabled State</h3>
            <div className="flex flex-wrap gap-4 mb-4">
              <Button disabled>Disabled Primary</Button>
              <Button variant="outline" disabled>Disabled Outline</Button>
              <Button variant="secondary" disabled>Disabled Secondary</Button>
            </div>
            <p className="text-sm text-gray-600 mb-2">속성: <code>disabled</code></p>
            <p className="text-sm text-gray-700">자동으로 opacity-50, pointer-events-none 적용</p>
          </div>

          <div className="p-6 bg-white border rounded-lg">
            <h3 className="text-lg font-medium mb-4 text-gray-900">Loading State</h3>
            <div className="flex flex-wrap gap-4 mb-4">
              <Button disabled>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                로딩 중...
              </Button>
              <Button variant="outline" disabled>전송 중...</Button>
            </div>
            <p className="text-sm text-gray-700">로딩 상태에서는 disabled와 로딩 인디케이터 함께 사용</p>
          </div>

        </div>
      </section>

      {/* Real Site Examples */}
      <section>
        <h2 className="text-xl font-semibold mb-6" style={{ color: 'var(--foreground)' }}>실제 사이트 사용 예시</h2>
        <div className="space-y-8">

          {/* Hero Buttons */}
          <div className="p-8 bg-gradient-to-r from-red-600 to-red-700 rounded-lg">
            <h3 className="text-white font-semibold text-xl mb-4">히어로 섹션 버튼</h3>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button
                size="lg"
                className="h-12 sm:h-14 px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-medium shadow-lg hover:shadow-xl bg-white text-black hover:bg-white/90"
                style={{textShadow: '0 1px 2px rgba(0,0,0,0.3)'}}
              >
                무료 상담 신청
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-12 sm:h-14 border-2 border-white text-white px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-medium hover:bg-white hover:text-gray-900 bg-transparent"
              >
                프로젝트 보기
              </Button>
            </div>
            <div className="mt-4 space-y-2 text-sm text-white/90">
              <p>• 메인 CTA: 흰색 배경, 검정 텍스트, shadow-lg</p>
              <p>• 보조 CTA: 투명 배경, 흰색 테두리, hover시 반전</p>
            </div>
          </div>

          {/* Header Buttons */}
          <div className="p-6 bg-white border rounded-lg">
            <h3 className="text-gray-900 font-semibold text-xl mb-4">헤더 버튼</h3>
            <div className="flex gap-4">
              <Button
                size="lg"
                className="px-4 py-2 text-base font-medium shadow-lg hover:shadow-xl"
                style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}
              >
                문의하기
              </Button>
            </div>
            <p className="mt-4 text-sm text-gray-700">• 헤더: Primary 색상, text-shadow로 가독성 향상</p>
          </div>

          {/* CTA Form Button */}
          <div className="p-6 rounded-lg" style={{ backgroundColor: 'var(--primary)' }}>
            <h3 className="text-white font-semibold text-xl mb-4">CTA 폼 버튼</h3>
            <Button
              size="lg"
              className="w-full h-12 bg-white text-black hover:bg-white/90 font-semibold text-lg cursor-pointer"
            >
              문의하기
            </Button>
            <p className="mt-4 text-sm text-white/90">• Primary 배경에서: 흰색 배경, 검정 텍스트, 전체 너비</p>
          </div>

          {/* Features Button */}
          <div className="p-6 bg-white border rounded-lg">
            <h3 className="text-gray-900 font-semibold text-xl mb-4">Features 섹션 버튼</h3>
            <Button
              className="w-36"
              style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}
            >
              <span className="inline-flex items-center">
                자세히 보기
                <svg className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Button>
            <p className="mt-4 text-sm text-gray-700">• Features: 고정 너비, 아이콘 포함, text-shadow</p>
          </div>

        </div>
      </section>

      {/* Button Code Examples */}
      <section>
        <h2 className="text-xl font-semibold mb-6" style={{ color: 'var(--foreground)' }}>코드 예시</h2>
        <div className="space-y-6">

          <div className="p-6 bg-gray-50 border rounded-lg">
            <h3 className="text-lg font-medium mb-3 text-gray-900">기본 사용법</h3>
            <pre className="bg-gray-800 text-gray-100 p-4 rounded text-sm overflow-x-auto">
{`// 기본 버튼
<Button>Click me</Button>

// Variant와 Size
<Button variant="outline" size="lg">Large Outline</Button>

// asChild로 Link 래핑
<Button asChild>
  <a href="/contact">Contact Us</a>
</Button>

// 커스텀 클래스
<Button className="w-full h-12 shadow-lg">
  Custom Button
</Button>`}
            </pre>
          </div>

          <div className="p-6 bg-gray-50 border rounded-lg">
            <h3 className="text-lg font-medium mb-3 text-gray-900">히어로 섹션 스타일</h3>
            <pre className="bg-gray-800 text-gray-100 p-4 rounded text-sm overflow-x-auto">
{`// 메인 CTA (흰색 배경)
<Button
  size="lg"
  className="h-12 sm:h-14 px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-medium shadow-lg hover:shadow-xl bg-white text-black hover:bg-white/90"
  style={{textShadow: '0 1px 2px rgba(0,0,0,0.3)'}}
>
  무료 상담 신청
</Button>

// 보조 CTA (투명 + 테두리)
<Button
  variant="outline"
  size="lg"
  className="h-12 sm:h-14 border-2 border-white text-white px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-medium hover:bg-white hover:text-gray-900 bg-transparent"
>
  프로젝트 보기
</Button>`}
            </pre>
          </div>

        </div>
      </section>
    </div>
  )
}