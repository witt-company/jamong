'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

export default function Header() {
  const [scrollY, setScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up');
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      
      // 히어로 섹션 높이 (100dvh)를 기준으로 헤더 숨김
      const heroHeight = window.innerHeight;
      
      if (currentScrollY > lastScrollY && currentScrollY > heroHeight * 0.8) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // 헤더 스타일 결정
  const getHeaderClasses = () => {
    let baseClasses = "fixed top-0 left-0 right-0 z-[100] transition-all duration-300";
    
    // 히어로 섹션의 80% 지점에서 아래로 스크롤 중일 때는 헤더 숨김
    const heroHeight = typeof window !== 'undefined' ? window.innerHeight : 0;
    const hideThreshold = heroHeight * 0.8;
    
    if (scrollY > hideThreshold && scrollDirection === 'down') {
      baseClasses += " -translate-y-full";
    } else {
      baseClasses += " translate-y-0";
    }
    
    // 스크롤이 50px 이상일 때만 배경 표시 (언더라인 제거)
    if (scrollY > 50) {
      baseClasses += " bg-white/95 backdrop-blur-sm shadow-sm";
    } else {
      baseClasses += " bg-transparent";
    }
    
    return baseClasses;
  };

  // 텍스트 색상 결정
  const getTextColor = (isLogo = false) => {
    if (scrollY > 50) {
      return isLogo ? 'text-gray-900' : 'text-gray-800';
    }
    return 'text-white';
  };

  return (
    <header className={getHeaderClasses()}>
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[67.250px]">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className={`text-3xl font-bold tracking-tight transition-colors ${getTextColor(true)}`} aria-label="Jamong 홈페이지로 이동">
              Jamong
            </a>
          </div>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="space-x-8">
              <NavigationMenuItem>
                <NavigationMenuLink 
                  href="#home"
                  className={cn(
                    "px-4 py-2 text-base font-medium transition-colors hover:text-primary hover:bg-transparent focus:bg-transparent",
                    getTextColor()
                  )}
                  aria-label="홈 섹션으로 이동"
                >
                  홈
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink 
                  href="#about"
                  className={cn(
                    "px-4 py-2 text-base font-medium transition-colors hover:text-primary hover:bg-transparent focus:bg-transparent",
                    getTextColor()
                  )}
                  aria-label="소개 섹션으로 이동"
                >
                  소개
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink 
                  href="#services"
                  className={cn(
                    "px-4 py-2 text-base font-medium transition-colors hover:text-primary hover:bg-transparent focus:bg-transparent",
                    getTextColor()
                  )}
                  aria-label="서비스 섹션으로 이동"
                >
                  서비스
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink 
                  href="#contact"
                  className={cn(
                    "px-4 py-2 text-base font-medium transition-colors hover:text-primary hover:bg-transparent focus:bg-transparent",
                    getTextColor()
                  )}
                  aria-label="문의하기 섹션으로 이동"
                >
                  문의하기
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button size="lg" className="px-4 py-2 text-base text-shadow-sm" style={{textShadow: '0 1px 2px rgba(0,0,0,0.3)'}} aria-label="문의하기 버튼">
              문의하기
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <button 
                  type="button"
                  className={`hover:text-primary p-2 transition-colors ${getTextColor()}`}
                  aria-label={isMobileMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
                  aria-expanded={isMobileMenuOpen}
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] z-[200] bg-white">
                <div className="px-6 py-6">
                  <SheetHeader className="pb-8">
                    <SheetTitle className="text-left text-3xl font-bold text-gray-900">Jamong</SheetTitle>
                    <SheetDescription className="text-left text-gray-600 text-base">
                      혁신적인 솔루션으로 비즈니스를 성장시키세요
                    </SheetDescription>
                  </SheetHeader>
                  <div className="space-y-6">
                    <a href="#home" className="block px-4 py-4 text-lg font-medium text-gray-900 hover:text-primary transition-colors rounded-lg hover:bg-gray-50" aria-label="홈 섹션으로 이동">
                      홈
                    </a>
                    <a href="#about" className="block px-4 py-4 text-lg font-medium text-gray-900 hover:text-primary transition-colors rounded-lg hover:bg-gray-50" aria-label="소개 섹션으로 이동">
                      소개
                    </a>
                    <a href="#services" className="block px-4 py-4 text-lg font-medium text-gray-900 hover:text-primary transition-colors rounded-lg hover:bg-gray-50" aria-label="서비스 섹션으로 이동">
                      서비스
                    </a>
                    <a href="#contact" className="block px-4 py-4 text-lg font-medium text-gray-900 hover:text-primary transition-colors rounded-lg hover:bg-gray-50" aria-label="문의하기 섹션으로 이동">
                      문의하기
                    </a>
                    <div className="pt-8">
                      <Button className="w-full" style={{textShadow: '0 1px 2px rgba(0,0,0,0.3)'}} aria-label="문의하기 버튼">
                        문의하기
                      </Button>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
