'use client'

import { useState } from 'react'
import ColorSystem from '@/components/design-system/ColorSystem'
import TypographySystem from '@/components/design-system/TypographySystem'
import ButtonSystem from '@/components/design-system/ButtonSystem'
import SpacingSystem from '@/components/design-system/SpacingSystem'

export default function DesignSystemPage() {
  const [isLoggingOut, setIsLoggingOut] = useState(false)
  const [activeTab, setActiveTab] = useState('colors')

  const handleLogout = async () => {
    setIsLoggingOut(true)
    try {
      await fetch('/api/auth/logout', {
        method: 'POST'
      })
      window.location.href = '/login'
    } catch (error) {
      console.error('로그아웃 중 오류:', error)
    } finally {
      setIsLoggingOut(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold" style={{ color: 'var(--foreground)' }}>
            디자인 시스템
          </h1>
          <button
            onClick={handleLogout}
            disabled={isLoggingOut}
            className="text-sm hover:underline disabled:opacity-50 cursor-pointer"
            style={{ color: 'var(--primary)' }}
          >
            {isLoggingOut ? '로그아웃 중...' : '로그아웃'}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="w-full">
          <div className="flex space-x-8 mb-8">
            <button
              onClick={() => setActiveTab('colors')}
              className={`px-4 pb-3 border-b-2 transition-colors ${
                activeTab === 'colors'
                  ? 'border-black text-black'
                  : 'border-transparent text-gray-600 hover:text-black'
              }`}
            >
              색상
            </button>
            <button
              onClick={() => setActiveTab('typography')}
              className={`px-4 pb-3 border-b-2 transition-colors ${
                activeTab === 'typography'
                  ? 'border-black text-black'
                  : 'border-transparent text-gray-600 hover:text-black'
              }`}
            >
              타이포
            </button>
            <button
              onClick={() => setActiveTab('buttons')}
              className={`px-4 pb-3 border-b-2 transition-colors ${
                activeTab === 'buttons'
                  ? 'border-black text-black'
                  : 'border-transparent text-gray-600 hover:text-black'
              }`}
            >
              버튼
            </button>
            <button
              onClick={() => setActiveTab('spacing')}
              className={`px-4 pb-3 border-b-2 transition-colors ${
                activeTab === 'spacing'
                  ? 'border-black text-black'
                  : 'border-transparent text-gray-600 hover:text-black'
              }`}
            >
              간격
            </button>
          </div>

          {activeTab === 'colors' && <ColorSystem />}

          {activeTab === 'typography' && <TypographySystem />}

          {activeTab === 'buttons' && <ButtonSystem />}

          {activeTab === 'spacing' && <SpacingSystem />}
        </div>
      </div>
    </div>
  )
}