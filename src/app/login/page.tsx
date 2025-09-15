'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function LoginPage() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })
  const [errors, setErrors] = useState({
    username: '',
    password: ''
  })

  const validateForm = () => {
    const newErrors = { username: '', password: '' }

    // 사용자명 validation
    if (!formData.username) {
      newErrors.username = '사용자명을 입력해주세요'
    }

    // 비밀번호 validation
    if (!formData.password) {
      newErrors.password = '비밀번호를 입력해주세요'
    } else if (formData.password.length < 4) {
      newErrors.password = '비밀번호는 최소 4자 이상이어야 합니다'
    }

    setErrors(newErrors)
    return !newErrors.username && !newErrors.password
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    // 입력 중에는 에러 메시지 제거
    if (errors[field as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsLoading(true)
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (data.success) {
        // 로그인 성공 시 디자인 시스템 페이지로 이동
        window.location.href = '/design-system'
      } else {
        // 로그인 실패 시 에러 표시
        setErrors({
          username: '',
          password: data.message
        })
      }
    } catch (error) {
      setErrors({
        username: '',
        password: '로그인 중 오류가 발생했습니다.'
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-xs w-full flex flex-col items-center">
        {/* Logo */}
        <Link href="/" className="text-3xl font-bold tracking-tight" style={{ color: 'var(--foreground)' }}>
          Jamong
        </Link>

        <p className="mt-4 text-xl font-semibold tracking-tight" style={{ color: 'var(--foreground)' }}>
          자몽통신 관리자 로그인
        </p>

        <form onSubmit={handleSubmit} className="w-full space-y-4 mt-8">
          <div>
            <label htmlFor="username" className="block text-sm font-medium mb-1" style={{ color: 'var(--foreground)' }}>
              사용자명
            </label>
            <Input
              id="username"
              type="text"
              placeholder="사용자명을 입력하세요"
              className="w-full border-2"
              style={{
                backgroundColor: 'var(--input)',
                borderColor: 'var(--border)',
                color: 'var(--foreground)'
              }}
              value={formData.username}
              onChange={(e) => handleInputChange('username', e.target.value)}
            />
            {errors.username && (
              <p className="mt-1 text-sm" style={{ color: 'var(--destructive)' }}>{errors.username}</p>
            )}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-1" style={{ color: 'var(--foreground)' }}>
              비밀번호
            </label>
            <Input
              id="password"
              type="password"
              placeholder="비밀번호를 입력하세요"
              className="w-full border-2"
              style={{
                backgroundColor: 'var(--input)',
                borderColor: 'var(--border)',
                color: 'var(--foreground)'
              }}
              value={formData.password}
              onChange={(e) => handleInputChange('password', e.target.value)}
            />
            {errors.password && (
              <p className="mt-1 text-sm" style={{ color: 'var(--destructive)' }}>{errors.password}</p>
            )}
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="mt-4 w-full font-medium"
            style={{
              backgroundColor: 'var(--primary)',
              color: 'var(--primary-foreground)',
              borderColor: 'var(--primary)'
            }}
          >
            {isLoading ? '로그인 중...' : '로그인'}
          </Button>
        </form>

        <div className="mt-8 text-center">
          <Link
            href="/"
            className="text-sm underline hover:opacity-80"
            style={{ color: 'var(--muted-foreground)' }}
          >
            홈페이지로 돌아가기
          </Link>
        </div>
      </div>
    </div>
  )
}