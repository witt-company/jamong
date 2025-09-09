"use client";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

const portfolioData = [
  {
    category: "웹 애플리케이션",
    title: "공공기관 업무관리 시스템",
    src: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    content: (
      <div>
        <p className="text-neutral-600 text-base mb-4">
          공공기관의 복잡한 업무 프로세스를 효율적으로 관리할 수 있는 종합 솔루션을 개발했습니다.
        </p>
        <div className="mb-4">
          <h4 className="text-lg font-semibold mb-2">주요 기능</h4>
          <ul className="list-disc list-inside text-neutral-600 space-y-1">
            <li>전자결재 시스템</li>
            <li>업무 일정 관리</li>
            <li>부서간 협업 도구</li>
            <li>문서 관리 시스템</li>
          </ul>
        </div>
        <div className="mb-4">
          <h4 className="text-lg font-semibold mb-2">기술 스택</h4>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">React</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Node.js</span>
            <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">PostgreSQL</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    category: "모바일 앱",
    title: "시민 참여 플랫폼",
    src: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    content: (
      <div>
        <p className="text-neutral-600 text-base mb-4">
          시민들이 직접 지역 현안에 참여하고 의견을 제시할 수 있는 모바일 플랫폼을 구축했습니다.
        </p>
        <div className="mb-4">
          <h4 className="text-lg font-semibold mb-2">주요 기능</h4>
          <ul className="list-disc list-inside text-neutral-600 space-y-1">
            <li>실시간 설문조사</li>
            <li>지역 이슈 제보</li>
            <li>시민 토론방</li>
            <li>정책 제안 시스템</li>
          </ul>
        </div>
        <div className="mb-4">
          <h4 className="text-lg font-semibold mb-2">기술 스택</h4>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">React Native</span>
            <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">Firebase</span>
            <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">Redis</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    category: "데이터 분석",
    title: "교통 데이터 분석 대시보드",
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    content: (
      <div>
        <p className="text-neutral-600 text-base mb-4">
          도시 교통 데이터를 실시간으로 분석하여 교통 정책 수립에 도움을 주는 대시보드를 개발했습니다.
        </p>
        <div className="mb-4">
          <h4 className="text-lg font-semibold mb-2">주요 기능</h4>
          <ul className="list-disc list-inside text-neutral-600 space-y-1">
            <li>실시간 교통량 모니터링</li>
            <li>교통 패턴 분석</li>
            <li>사고 다발 지역 예측</li>
            <li>최적 경로 추천</li>
          </ul>
        </div>
        <div className="mb-4">
          <h4 className="text-lg font-semibold mb-2">기술 스택</h4>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">Python</span>
            <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">TensorFlow</span>
            <span className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm">MongoDB</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    category: "블록체인",
    title: "디지털 신원 인증 시스템",
    src: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    content: (
      <div>
        <p className="text-neutral-600 text-base mb-4">
          블록체인 기술을 활용하여 안전하고 투명한 디지털 신원 인증 시스템을 구축했습니다.
        </p>
        <div className="mb-4">
          <h4 className="text-lg font-semibold mb-2">주요 기능</h4>
          <ul className="list-disc list-inside text-neutral-600 space-y-1">
            <li>분산 신원 인증</li>
            <li>스마트 계약 기반 검증</li>
            <li>개인정보 보호</li>
            <li>다중 인증 시스템</li>
          </ul>
        </div>
        <div className="mb-4">
          <h4 className="text-lg font-semibold mb-2">기술 스택</h4>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">Solidity</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Web3.js</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Ethereum</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    category: "IoT 솔루션",
    title: "스마트 시티 관제 시스템",
    src: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    content: (
      <div>
        <p className="text-neutral-600 text-base mb-4">
          도시 전반의 IoT 센서 데이터를 통합 관리하여 스마트 시티 인프라를 효율적으로 운영하는 시스템입니다.
        </p>
        <div className="mb-4">
          <h4 className="text-lg font-semibold mb-2">주요 기능</h4>
          <ul className="list-disc list-inside text-neutral-600 space-y-1">
            <li>환경 모니터링</li>
            <li>에너지 효율 관리</li>
            <li>이상 상황 알림</li>
            <li>예측 유지보수</li>
          </ul>
        </div>
        <div className="mb-4">
          <h4 className="text-lg font-semibold mb-2">기술 스택</h4>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm">MQTT</span>
            <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">InfluxDB</span>
            <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Grafana</span>
          </div>
        </div>
      </div>
    ),
  },
];

export default function Portfolio() {
  const cards = portfolioData.map((card, index) => (
    <Card key={card.title} card={card} index={index} />
  ));

  return (
    <section id="portfolio" className="section-padding bg-white">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-display-lg font-bold mb-6 text-gray-900">
            성공적인 프로젝트 사례
          </h2>
          <p className="text-muted-foreground text-lg lg:text-xl max-w-2xl mx-auto">
            다양한 분야에서 검증된 자몽의 기술력과 노하우를 확인해보세요.
          </p>
        </div>
        <div className="w-full h-full">
          <Carousel items={cards} />
        </div>
      </div>
    </section>
  );
}