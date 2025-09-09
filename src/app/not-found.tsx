import Link from 'next/link'
import { Button } from '@/components/ui/button'
 
export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-md mx-auto text-center">
        {/* 404 숫자 */}
        <div className="mb-8">
          <h1 className="text-8xl md:text-9xl font-black text-primary mb-4 opacity-10">
            404
          </h1>
        </div>

        {/* 메인 메시지 */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            페이지를 찾을 수 없습니다
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            요청하신 페이지가 존재하지 않거나 <br />
            이동되었을 수 있습니다.
          </p>
        </div>

        {/* 액션 버튼들 */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button asChild size="lg" className="w-full sm:w-auto">
            <Link href="/">
              🏠 홈으로 돌아가기
            </Link>
          </Button>
          
          <Button 
            asChild 
            variant="outline" 
            size="lg" 
            className="w-full sm:w-auto"
          >
            <Link href="#contact">
              📞 문의하기
            </Link>
          </Button>
        </div>

        {/* 도움말 */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            문제가 지속되면{' '}
            <Link 
              href="mailto:ceo@jamong.it.kr" 
              className="text-primary hover:underline"
            >
              ceo@jamong.it.kr
            </Link>
            로 연락주세요.
          </p>
        </div>
      </div>
    </div>
  )
}