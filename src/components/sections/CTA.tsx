'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useContactForm } from '@/hooks/use-contact-form';

export default function CTA() {
  const {
    formData,
    errors,
    isSubmitting,
    handleSubmit,
    handleInputChange,
  } = useContactForm();

  return (
    <section id="contact" className="bg-gradient-to-r from-primary to-primary/80 section-padding">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-display-lg font-bold text-white mb-8">
          프로젝트 문의하기
        </h2>
        <p className="text-lg lg:text-xl text-white/90 mb-12 max-w-2xl mx-auto">
          정보를 남겨주시면 24시간 내 전문가가 직접 연락드립니다.
        </p>
        
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Input
                type="text"
                name="name"
                placeholder="이름"
                value={formData.name}
                onChange={handleInputChange}
                className={`h-12 bg-white text-gray-900 text-base placeholder:text-gray-500 placeholder:text-base border rounded-md focus:outline-none focus-visible:ring-0 transition-all duration-200 ${
                  errors.name 
                    ? 'border-red-400 focus:border-red-400 focus-visible:border-red-400 focus:ring-2 focus-visible:ring-2 focus:ring-red-400/20 focus-visible:ring-red-400/20 focus:shadow-lg focus:shadow-red-400/10' 
                    : 'border-gray-300 focus:border-primary focus-visible:border-primary focus:ring-2 focus-visible:ring-2 focus:ring-primary/20 focus-visible:ring-primary/20 focus:shadow-lg focus:shadow-primary/10'
                }`}
              />
              {errors.name && (
                <p className="text-red-200 text-sm mt-1 text-left">
                  이름을 입력해주세요
                </p>
              )}
            </div>
            
            <div>
              <Input
                type="email"
                name="email"
                placeholder="이메일"
                value={formData.email}
                onChange={handleInputChange}
                className={`h-12 bg-white text-gray-900 text-base placeholder:text-gray-500 placeholder:text-base border rounded-md focus:outline-none focus-visible:ring-0 transition-all duration-200 ${
                  errors.email 
                    ? 'border-red-400 focus:border-red-400 focus-visible:border-red-400 focus:ring-2 focus-visible:ring-2 focus:ring-red-400/20 focus-visible:ring-red-400/20 focus:shadow-lg focus:shadow-red-400/10' 
                    : 'border-gray-300 focus:border-primary focus-visible:border-primary focus:ring-2 focus-visible:ring-2 focus:ring-primary/20 focus-visible:ring-primary/20 focus:shadow-lg focus:shadow-primary/10'
                }`}
              />
              {errors.email && (
                <p className="text-red-200 text-sm mt-1 text-left">
                  올바른 이메일 주소를 입력해주세요
                </p>
              )}
            </div>
          </div>

          <div>
            <textarea
              name="message"
              placeholder="문의 내용을 입력해주세요"
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              className={`w-full px-3 py-3 bg-white text-gray-900 text-base placeholder:text-gray-500 placeholder:text-base border rounded-md resize-none focus:outline-none transition-all duration-200 ${
                errors.message 
                  ? 'border-red-400 focus:border-red-400 focus:ring-2 focus:ring-red-400/20 focus:shadow-lg focus:shadow-red-400/10' 
                  : 'border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:shadow-lg focus:shadow-primary/10'
              }`}
            />
            {errors.message && (
              <p className="text-red-200 text-sm mt-1 text-left">
                문의 내용을 입력해주세요
              </p>
            )}
          </div>

          <Button 
            type="submit"
            size="lg"
            disabled={isSubmitting}
            className="w-full h-12 bg-white text-black hover:bg-white/90 font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:shadow-lg hover:shadow-white/20 hover:-translate-y-0.5"
          >
            {isSubmitting ? '전송 중...' : '문의하기'}
          </Button>
        </form>
      </div>
    </section>
  );
}
