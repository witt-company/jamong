'use client';

import { toast } from 'sonner';

export default function Footer() {
  const handleSocialClick = (platform: string) => {
    toast.info(`${platform} 페이지 준비중입니다`);
  };

  return (
    <footer className="bg-[#0f1b2e] text-white">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Jamong</h3>
            <p className="text-gray-300 mb-4 max-w-md">
              혁신적인 기술로 비즈니스의 성장을 지원하는 전문 기업입니다.
            </p>
            <div className="flex space-x-4">
              <button 
                onClick={() => handleSocialClick('블로그')}
                className="text-gray-300 hover:text-primary transition-colors" 
                aria-label="블로그로 이동"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M4 11a9 9 0 0 1 9 9"/>
                  <path d="M4 4a16 16 0 0 1 16 16"/>
                  <circle cx="5" cy="19" r="1"/>
                </svg>
              </button>
              <button 
                onClick={() => handleSocialClick('유튜브')}
                className="text-gray-300 hover:text-primary transition-colors" 
                aria-label="유튜브로 이동"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </button>
              <button 
                onClick={() => handleSocialClick('인스타그램')}
                className="text-gray-300 hover:text-primary transition-colors" 
                aria-label="인스타그램으로 이동"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">빠른 링크</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-300 hover:text-primary transition-colors" aria-label="회사소개 섹션으로 이동">회사소개</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-primary transition-colors" aria-label="서비스 섹션으로 이동">서비스</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-primary transition-colors" aria-label="문의하기 섹션으로 이동">문의하기</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors" aria-label="개인정보처리방침 페이지로 이동">개인정보처리방침</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">연락처</h3>
            <ul className="space-y-2 text-gray-300">
              <li>전라남도 나주시 빛가람동 그린로 370, 4층 414호</li>
              <li>이메일: ceo@jamong.it.kr</li>
              <li>전화: 010-6850-7890</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2025 Jamong. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
