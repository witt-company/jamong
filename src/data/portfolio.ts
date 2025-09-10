import type { PortfolioProject } from "@/types/portfolio";

export const portfolioData: PortfolioProject[] = [
  {
    category: "웹 애플리케이션",
    title: "공공기관 업무관리 시스템",
    src: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "공공기관의 복잡한 업무 프로세스를 효율적으로 관리할 수 있는 종합 솔루션을 개발했습니다.",
    features: [
      "전자결재 시스템",
      "업무 일정 관리", 
      "부서간 협업 도구",
      "문서 관리 시스템"
    ],
    techStack: [
      { name: "React", color: "bg-blue-100 text-blue-800" },
      { name: "Node.js", color: "bg-green-100 text-green-800" },
      { name: "PostgreSQL", color: "bg-purple-100 text-purple-800" }
    ],
  },
  {
    category: "모바일 앱",
    title: "시민 참여 플랫폼",
    src: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "시민들이 직접 지역 현안에 참여하고 의견을 제시할 수 있는 모바일 플랫폼을 구축했습니다.",
    features: [
      "실시간 설문조사",
      "지역 이슈 제보",
      "시민 토론방",
      "정책 제안 시스템"
    ],
    techStack: [
      { name: "React Native", color: "bg-blue-100 text-blue-800" },
      { name: "Firebase", color: "bg-orange-100 text-orange-800" },
      { name: "Redis", color: "bg-red-100 text-red-800" }
    ],
  },
  {
    category: "데이터 분석",
    title: "교통 데이터 분석 대시보드",
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "도시 교통 데이터를 실시간으로 분석하여 교통 정책 수립에 도움을 주는 대시보드를 개발했습니다.",
    features: [
      "실시간 교통량 모니터링",
      "교통 패턴 분석",
      "사고 다발 지역 예측",
      "최적 경로 추천"
    ],
    techStack: [
      { name: "Python", color: "bg-yellow-100 text-yellow-800" },
      { name: "TensorFlow", color: "bg-indigo-100 text-indigo-800" },
      { name: "MongoDB", color: "bg-pink-100 text-pink-800" }
    ],
  },
  {
    category: "블록체인",
    title: "디지털 신원 인증 시스템",
    src: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "블록체인 기술을 활용하여 안전하고 투명한 디지털 신원 인증 시스템을 구축했습니다.",
    features: [
      "분산 신원 인증",
      "스마트 계약 기반 검증",
      "개인정보 보호",
      "다중 인증 시스템"
    ],
    techStack: [
      { name: "Solidity", color: "bg-gray-100 text-gray-800" },
      { name: "Web3.js", color: "bg-blue-100 text-blue-800" },
      { name: "Ethereum", color: "bg-green-100 text-green-800" }
    ],
  },
  {
    category: "IoT 솔루션",
    title: "스마트 시티 관제 시스템",
    src: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "도시 전반의 IoT 센서 데이터를 통합 관리하여 스마트 시티 인프라를 효율적으로 운영하는 시스템입니다.",
    features: [
      "환경 모니터링",
      "에너지 효율 관리",
      "이상 상황 알림",
      "예측 유지보수"
    ],
    techStack: [
      { name: "MQTT", color: "bg-teal-100 text-teal-800" },
      { name: "InfluxDB", color: "bg-orange-100 text-orange-800" },
      { name: "Grafana", color: "bg-purple-100 text-purple-800" }
    ],
  },
];