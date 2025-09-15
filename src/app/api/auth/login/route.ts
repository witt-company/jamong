import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json()

    // 환경변수에서 관리자 계정 정보 가져오기 (로컬 테스트용 기본값 포함)
    const adminUsername = process.env.ADMIN_USERNAME || 'admin'
    const adminPassword = process.env.ADMIN_PASSWORD || '1234'

    // 로그인 검증
    if (username === adminUsername && password === adminPassword) {
      // 성공 시 세션 토큰 생성 (간단한 방식)
      const sessionToken = btoa(`${username}:${Date.now()}`)

      const response = NextResponse.json({
        success: true,
        message: '로그인 성공',
        token: sessionToken
      })

      // 쿠키에 세션 저장
      response.cookies.set('auth-token', sessionToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 24 * 60 * 60 // 24시간
      })

      return response
    } else {
      return NextResponse.json(
        { success: false, message: '사용자명 또는 비밀번호가 올바르지 않습니다.' },
        { status: 401 }
      )
    }
  } catch (error) {
    return NextResponse.json(
      { success: false, message: '서버 오류가 발생했습니다.' },
      { status: 500 }
    )
  }
}