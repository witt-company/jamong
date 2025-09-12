export interface Partner {
  name: string;
  logo: string;
  width: number;
}

export const partnersData: Partner[] = [
  {
    name: "한국전력공사",
    logo: "/images/partners/partners_kepco.png",
    width: 162,
  },
  {
    name: "KDN",
    logo: "/images/partners/partners_kdn.png", 
    width: 162,
  },
  {
    name: "전력연구원",
    logo: "/images/partners/partners_kepri.png",
    width: 162,
  },
  {
    name: "누리플렉스",
    logo: "/images/partners/partners_nuriflex.png",
    width: 162,
  },
  {
    name: "으뜸정보기술",
    logo: "/images/partners/partners_tbit.png",
    width: 162,
  },
];

export const partnersContent = {
  subtitle: "신뢰받는 파트너",
  title: "함께하는 기관 및 기업들",
  description: "공공기관, 대기업부터 스타트업까지 다양한 파트너들과 함께합니다",
};