import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Testimonial() {
  return (
    <section id="about" className="section-padding section-padding-connected-bottom bg-gray-50">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <blockquote className="text-2xl md:text-3xl font-semibold text-gray-900 mb-8 max-w-3xl mx-auto leading-relaxed">
            &ldquo;신뢰를 바탕으로 한 실용적인 솔루션,<br />
            그것이 자몽이 추구하는 개발입니다.&rdquo;
          </blockquote>
          <div className="text-gray-600 space-y-2 mb-8">
            <p>공공기관과 공기업의 요구사항은 단순한 기술을 넘어</p>
            <p>실제 현장에서 작동하는 &lsquo;현실적인 해결책&rsquo;을 필요로 합니다.</p>
            <p>자몽은 고객의 업무 환경을 깊이 이해하고,</p>
            <p>그에 맞는 맞춤형 시스템을 제안하고 구축해드립니다.</p>
          </div>
          <div className="flex flex-col items-center">
            <Avatar className="w-16 h-16 mb-4">
              <AvatarImage 
                src="https://oezif1e9leolgilw.public.blob.vercel-storage.com/Testimonial/ceo-avatar.jpg" 
                alt="KKY"
                className="object-cover"
              />
              <AvatarFallback>KKY</AvatarFallback>
            </Avatar>
            <p className="font-semibold text-gray-900">KKY</p>
            <p className="text-sm text-gray-600">자몽대표</p>
          </div>
        </div>
      </div>
    </section>
  );
}