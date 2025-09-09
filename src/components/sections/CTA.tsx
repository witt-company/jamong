'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';
import type { ContactFormData, ContactFormErrors } from '@/types/contact';
import { EMAIL_CONFIG } from '@/config/emailjs';

export default function CTA() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<ContactFormErrors>({
    name: false,
    email: false,
    message: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newErrors: ContactFormErrors = {
      name: !formData.name.trim(),
      email: !formData.email.trim() || !validateEmail(formData.email),
      message: !formData.message.trim()
    };
    
    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        EMAIL_CONFIG.SERVICE_ID,
        EMAIL_CONFIG.TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        EMAIL_CONFIG.PUBLIC_KEY
      );

      toast.success('문의가 성공적으로 접수되었습니다!');
      setFormData({ name: '', email: '', message: '' });
      setErrors({ name: false, email: false, message: false });
    } catch (error) {
      console.error('Email send failed:', error);
      toast.error('메일 전송에 실패했습니다. 다시 시도해주세요.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name as keyof ContactFormErrors] && value.trim()) {
      setErrors(prev => ({ ...prev, [name]: false }));
    }
  };

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
                className={`h-12 bg-white text-gray-900 text-base placeholder:text-gray-500 placeholder:text-base ${
                  errors.name ? 'border-red-400 focus:border-red-400' : ''
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
                className={`h-12 bg-white text-gray-900 text-base placeholder:text-gray-500 placeholder:text-base ${
                  errors.email ? 'border-red-400 focus:border-red-400' : ''
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
              className={`w-full px-3 py-3 bg-white text-gray-900 text-base placeholder:text-gray-500 placeholder:text-base border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.message ? 'border-red-400 focus:border-red-400 focus:ring-red-400' : 'border-gray-300'
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
            className="w-full h-12 bg-white text-black hover:bg-white/90 font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? '전송 중...' : '문의하기'}
          </Button>
        </form>
      </div>
    </section>
  );
}
