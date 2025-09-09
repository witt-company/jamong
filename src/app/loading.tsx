export default function Loading() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        {/* 로딩 스피너 */}
        <div className="relative">
          <div className="w-16 h-16 border-4 border-gray-200 border-t-primary rounded-full animate-spin"></div>
        </div>
        
        {/* 로딩 텍스트 */}
        <div className="text-center">
          <p className="text-lg font-semibold text-gray-900 mb-2">
            자몽통신
          </p>
          <p className="text-sm text-gray-600">
            페이지를 불러오는 중...
          </p>
        </div>
      </div>
    </div>
  )
}