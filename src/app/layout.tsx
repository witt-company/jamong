import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "랜딩 페이지",
  description: "혁신적인 솔루션으로 비즈니스를 성장시키세요",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" data-scroll-behavior="smooth">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}