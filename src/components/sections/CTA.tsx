'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

export default function CTA() {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setIsValid(false);
      return;
    }

    if (!validateEmail(email)) {
      setIsValid(false);
      return;
    }

    setIsValid(true);
    // TODO: 이메일 처리 로직 추가
    alert(`문의 메일이 접수되었습니다: ${email}`);
    setEmail('');
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (!isValid && e.target.value) {
      setIsValid(true);
    }
  };

  return (
    <section id="contact" className="bg-gradient-to-r from-primary to-primary/80 section-padding">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-display-lg font-bold text-white mb-8">
          프로젝트 문의하기
        </h2>
        <p className="text-lg lg:text-xl text-white/90 mb-12 max-w-2xl mx-auto">
          이메일을 남겨주시면 24시간 내 전문가가 직접 연락드립니다.
        </p>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1">
              <Input
                type="email"
                placeholder="이메일을 입력해주세요"
                value={email}
                onChange={handleEmailChange}
                className={`h-12 bg-white text-gray-900 placeholder:text-gray-500 ${
                  !isValid ? 'border-red-400 focus:border-red-400' : ''
                }`}
              />
              {!isValid && (
                <p className="text-red-200 text-sm mt-1 text-left">
                  올바른 이메일 주소를 입력해주세요
                </p>
              )}
            </div>
            <Button 
              type="submit"
              size="lg"
              className="h-12 px-6 bg-white text-primary hover:bg-white/90 font-semibold"
            >
              문의하기
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
