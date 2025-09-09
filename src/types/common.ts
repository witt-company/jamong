// 공통 타입 정의
export interface BaseItem {
  title: string;
  category: string;
}

export interface ImageItem {
  src: string;
  alt?: string;
}

// 유틸리티 타입
export type WithContent<T> = T & {
  content: React.ReactNode;
};

export type WithDetails<T> = T & {
  details: string;
};

export type WithImage<T> = T & ImageItem;