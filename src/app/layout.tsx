import type { Metadata } from "next";
import "./globals.css";
import { ToasterProvider } from "@/components/providers/ToasterProvider";

export const metadata: Metadata = {
  title: "자몽통신 - 맞춤형 디지털 솔루션 개발 전문기업",
  description: "자몽통신은 공공기관과 기업을 위한 실용적인 디지털 솔루션을 제공합니다. 원격검침, 에너지 모니터링, 모바일 앱, 웹 애플리케이션 개발 전문. 전라남도 나주 소재.",
  keywords: [
    "자몽통신",
    "자몽", 
    "Jamong",
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
    description: "자몽통신은 공공기관과 기업을 위한 실용적인 디지털 솔루션을 제공합니다. 원격검침, 에너지 모니터링, 모바일 앱, 웹 애플리케이션 개발 전문.",
    url: "https://jamong.it.kr",
    siteName: "자몽통신",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "자몽통신 - 디지털 솔루션 개발 전문기업",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "자몽통신 - 맞춤형 디지털 솔루션 개발 전문기업",
    description: "자몽통신은 공공기관과 기업을 위한 실용적인 디지털 솔루션을 제공합니다. 원격검침, 에너지 모니터링 전문.",
    images: ["/og-image.png"],
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
    "alternateName": "Jamong Communications",
    "url": "https://jamong.it.kr",
    "logo": "https://jamong.it.kr/og-image.png",
    "description": "공공기관과 기업을 위한 실용적인 디지털 솔루션을 제공하는 전문기업",
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
      "telephone": "+82-10-6850-7890",
      "contactType": "customer service",
      "availableLanguage": "Korean"
    },
    "sameAs": [
      "https://jamong.it.kr"
    ],
    "serviceType": [
      "웹 개발",
      "모바일 앱 개발",
      "원격검침 시스템",
      "에너지 모니터링",
      "디지털 전환 컨설팅"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "South Korea"
    }
  };

  return (
    <html lang="ko" data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <ToasterProvider />
      </body>
    </html>
  );
}