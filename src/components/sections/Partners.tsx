import { Marquee } from "@/components/ui/marquee";
import Image from "next/image";

export default function Partners() {
  return (
    <section className="section-padding-sm bg-gray-50">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-lg sm:text-xl font-medium text-gray-700 mb-2">
            신뢰받는 파트너
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            함께하는 기관 및 기업들
          </h2>
        </div>
        
        <div className="overflow-hidden">
          <Marquee
            pauseOnHover
            className="[--duration:25s]"
          >
            <div className="relative h-16 w-auto mx-8 opacity-60 hover:opacity-100 transition-opacity" style={{ width: '162px' }}>
              <Image
                src="https://oezif1e9leolgilw.public.blob.vercel-storage.com/partners/partners_kepco.png"
                alt="한국전력공사"
                fill
                sizes="162px"
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className="relative h-16 w-auto mx-8 opacity-60 hover:opacity-100 transition-opacity" style={{ width: '162px' }}>
              <Image
                src="https://oezif1e9leolgilw.public.blob.vercel-storage.com/partners/partners_kdn.png"
                alt="KDN"
                fill
                sizes="162px"
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className="relative h-16 w-auto mx-8 opacity-60 hover:opacity-100 transition-opacity" style={{ width: '162px' }}>
              <Image
                src="https://oezif1e9leolgilw.public.blob.vercel-storage.com/partners/partners_kepri.png"
                alt="전력연구원"
                fill
                sizes="162px"
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className="relative h-16 w-auto mx-8 opacity-60 hover:opacity-100 transition-opacity" style={{ width: '162px' }}>
              <Image
                src="https://oezif1e9leolgilw.public.blob.vercel-storage.com/partners/partners_nuriflex.png"
                alt="누리플렉스"
                fill
                sizes="162px"
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className="relative h-16 w-auto mx-8 opacity-60 hover:opacity-100 transition-opacity" style={{ width: '162px' }}>
              <Image
                src="https://oezif1e9leolgilw.public.blob.vercel-storage.com/partners/partners_tbit.png"
                alt="으뜸정보기술"
                fill
                sizes="162px"
                style={{ objectFit: 'contain' }}
              />
            </div>
          </Marquee>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            공공기관, 대기업부터 스타트업까지 다양한 파트너들과 함께합니다
          </p>
        </div>
      </div>
    </section>
  );
}