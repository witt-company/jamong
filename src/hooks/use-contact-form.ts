import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';
import type { ContactFormData, ContactFormErrors } from '@/types/contact';
import { EMAIL_CONFIG } from '@/config/emailjs';

export const useContactForm = () => {
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

  return {
    formData,
    errors,
    isSubmitting,
    handleSubmit,
    handleInputChange,
  };
};