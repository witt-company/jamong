import type { Metadata } from "next";
import "./globals.css";
import { ToasterProvider } from "@/components/providers/ToasterProvider";

export const metadata: Metadata = {
  title: "자몽통신 - 맞춤형 디지털 솔루션 개발 전문기업",
  description: "나주 소재 자몽통신 - 원격검침, 에너지모니터링, 웹앱 개발 전문. 공공기관 맞춤형 디지털 솔루션 제공",
  keywords: [
    "자몽통신",
    "자몽",
    "Jamong",
    "나주 웹개발",
    "전남 앱개발",
    "나주 시스템개발",
    "전라남도 소프트웨어개발",
    "원격검침 시스템 개발",
    "원격검침 전문업체",
    "에너지모니터링 시스템",
    "에너지관리 솔루션",
    "공공기관 시스템 개발",
    "공공기관 전용 솔루션",
    "디지털전환 컨설팅",
    "맞춤형 개발 전문",
    "IoT 원격검침",
    "스마트 에너지 모니터링",
    "나주 IT회사",
    "전남 개발회사",
    "공공기관 개발 전문",
    "웹개발",
    "앱개발",
    "원격검침",
    "에너지모니터링",
    "디지털전환",
    "공공기관시스템",
    "맞춤형개발",
    "나주",
    "전라남도",
    "시스템개발",
    "소프트웨어개발"
  ],
  authors: [{ name: "자몽통신" }],
  creator: "자몽통신",
  publisher: "자몽통신",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://jamong.it.kr"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/images/logo/favicon.ico",
  },
  openGraph: {
    title: "자몽통신 - 맞춤형 디지털 솔루션 개발 전문기업",
    description: "나주 소재 자몽통신 - 원격검침, 에너지모니터링, 웹앱 개발 전문. 공공기관 맞춤형 디지털 솔루션 제공",
    url: "https://jamong.it.kr",
    siteName: "자몽통신",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "자몽통신 - 맞춤형 디지털 솔루션 개발 전문기업",
    description: "나주 소재 자몽통신 - 원격검침, 에너지모니터링, 웹앱 개발 전문. 공공기관 맞춤형 디지털 솔루션 제공",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "NLaY1n_yqPsyjD_rJXmiTZj-1Sm6Gkj4-sojd2XQVgo",
    other: {
      "naver-site-verification": "8e821ace4486c74fd21181f92e0a69c92afdeefb",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "자몽통신",
    "alternateName": ["Jamong Communications", "자몽", "Jamong"],
    "url": "https://jamong.it.kr",
    "logo": "https://jamong.it.kr/opengraph-image",
    "description": "전라남도 나주시 소재 공공기관과 기업 전용 디지털 솔루션 개발 전문기업. 원격검침 시스템, 에너지 모니터링, IoT 솔루션, 모바일 앱, 웹 애플리케이션 개발 전문",
    "foundingDate": "2020",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "빛가람동 그린로 370, 4층 414호",
      "addressLocality": "나주시",
      "addressRegion": "전라남도",
      "postalCode": "58327",
      "addressCountry": "KR"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": "Korean",
      "areaServed": "전라남도"
    },
    "sameAs": [
      "https://jamong.it.kr"
    ],
    "serviceType": [
      "원격검침 시스템 개발",
      "에너지 모니터링 솔루션",
      "IoT 시스템 구축",
      "공공기관 전용 시스템 개발",
      "웹 애플리케이션 개발",
      "모바일 앱 개발",
      "디지털 전환 컨설팅",
      "시스템 유지보수"
    ],
    "areaServed": [
      {
        "@type": "State",
        "name": "전라남도"
      },
      {
        "@type": "City",
        "name": "나주시"
      },
      {
        "@type": "Country",
        "name": "South Korea"
      }
    ],
    "hasOfferingCatalog": {
      "@type": "OfferingCatalog",
      "name": "디지털 솔루션 서비스",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "원격검침 시스템 개발",
            "description": "IoT 기반 실시간 데이터 수집 및 관리 솔루션"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "에너지 모니터링 시스템",
            "description": "스마트 에너지 관리 및 분석 플랫폼"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "공공기관 시스템 개발",
            "description": "공공기관 특화 업무관리 및 정보 시스템"
          }
        }
      ]
    },
    "keywords": "나주 웹개발, 전남 앱개발, 원격검침 전문업체, 에너지모니터링 시스템, 공공기관 개발 전문, IoT 솔루션"
  };

  return (
    <html lang="ko" data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-pretendard antialiased">
        <link
          rel="preconnect"
          href="https://cdn.jsdelivr.net"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
        {children}
        <ToasterProvider />
      </body>
    </html>
  );
}
