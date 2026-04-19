/**
 * 10C2 = 45쌍의 AI 비교 인사이트 (구조화 버전)
 * 각 쌍별로 헤드라인·A유리 시나리오·B유리 시나리오·사용자 맞춤 결론을 포함.
 * 키는 슬러그 두 개를 알파벳순으로 결합.
 */

export interface Insight {
  pair: [string, string];
  /** 가장 중요한 비교 포인트 한 줄 */
  headline: string;
  /** A 차량이 유리한 포인트 (2-3개) */
  whenA: string[];
  /** B 차량이 유리한 포인트 (2-3개) */
  whenB: string[];
  /** 성남 정자동 · 1-2인 · 아파트 충전 고객 기준 최종 추천 */
  verdict: string;
}

const PAIRS: Record<string, Omit<Insight, "pair">> = {
  // ────── Tesla Model Y 기준 9쌍 ──────
  "kia-ev6|tesla-model-y": {
    headline: "테크 플래그십 vs 한국형 편의",
    whenA: [
      "800V 초급속 (10→80% 18분) — 충전 속도 우위",
      "서라운드뷰·CarPlay 기본 — 국내 익숙한 UX",
      "국내 A/S망 촘촘",
    ],
    whenB: [
      "Model Y RWD 4,999만원 — EV6 Earth보다 약 640만 저렴",
      "주행거리 500km·슈퍼차저 전국망",
      "OTA 업데이트로 기능 지속 추가",
    ],
    verdict: "아파트 충전 있고 장거리 자주 → Model Y. 국산 A/S·익숙한 UX 선호 → EV6.",
  },
  "hyundai-ioniq-5|tesla-model-y": {
    headline: "실용 공간 vs 테크·장거리",
    whenA: [
      "3,000mm 휠베이스로 압도적 실내 공간",
      "V2L(실내/외) 기본 — 차박·캠핑 탁월",
      "531L 트렁크 + 히트펌프 기본",
    ],
    whenB: [
      "주행거리 500km로 장거리 여유",
      "Autopilot 기본 + 15.4\" 센터 UI",
      "보조금 적용 시 실구매 4,000만원대(RWD)",
    ],
    verdict: "주말 여행·본가 30-40km면 둘 다 충분. 실용 공간 → IONIQ 5, 최신 테크·빠른 충전소 → Model Y.",
  },
  "genesis-gv60|tesla-model-y": {
    headline: "프리미엄 감성 vs 가성비 테크",
    whenA: [
      "27인치 OLED + 페이스 커넥트 등 프리미엄 UX",
      "액티브 사운드(e-ASD) — 세단급 정숙성",
      "국산 프리미엄 A/S",
    ],
    whenB: [
      "실구매가 약 1,400만원 저렴",
      "Autopilot·OTA·슈퍼차저 생태계",
      "주행거리 500 > 481km",
    ],
    verdict: "여유 예산으로 고급감 → GV60. 합리적 실용주의 → Model Y.",
  },
  "tesla-model-y|volvo-ex40": {
    headline: "가성비 테크 vs 옵션 일괄 풀옵션",
    whenA: [
      "RWD 4,999만원 — EX40보다 약 1,670만 저렴",
      "주행거리 500 > 434km",
      "OTA·슈퍼차저·Autopilot",
    ],
    whenB: [
      "단일 트림에 360 카메라·파일럿 어시스트·하만카돈 모두 기본",
      "북유럽 안전 철학",
      "어드밴스드 공기청정 (PM2.5 95%)",
    ],
    verdict: "옵션 고민 싫고 '완성된 차' 원함 → EX40. 가성비·최신 테크 → Model Y.",
  },
  "lexus-nx|tesla-model-y": {
    headline: "하이브리드 안심 vs 전기차 경제성",
    whenA: [
      "정숙성·렉서스 내구성·잔존가치",
      "충전 인프라 걱정 無",
      "실연비 17km/L 수준",
    ],
    whenB: [
      "보조금 후 실구매 4,000만원대",
      "전기 운영비 — NX 대비 연 100만원+ 절약",
      "500km 주행·슈퍼차저",
    ],
    verdict: "아파트 충전 있으니 Model Y가 경제성 압도. NX는 '충전 스트레스 싫음·잔존가치 중시'일 때만.",
  },
  "kia-sportage-hev|tesla-model-y": {
    headline: "가솔린 실용 vs 전기 미래형",
    whenA: [
      "16.3km/L 연비·637L 트렁크",
      "출고 빠름·국산 A/S",
      "가솔린 운영 안심감",
    ],
    whenB: [
      "보조금 후 실구매 Sportage와 비슷한 4,000만원대",
      "연간 운영비 100만원+ 절약",
      "OTA·Autopilot",
    ],
    verdict: "아파트 충전 있으면 Model Y의 총소유비용이 앞섬. Sportage는 출고 즉시·가솔린 안심 원할 때.",
  },
  "hyundai-tucson-hev|tesla-model-y": {
    headline: "첫차 안심 vs 테크 생태계",
    whenA: [
      "H-Pick 3,611만원 — Model Y보다 1,400만 저렴",
      "HDA·무선 CarPlay 기본 (H-Pick+)",
      "국산 5년 A/S",
    ],
    whenB: [
      "보조금 후 실구매 4,000만원대로 격차 축소",
      "OTA·500km·슈퍼차저",
      "운영비 우위",
    ],
    verdict: "예산 민감·첫차 부담 최소 → Tucson. 아파트 충전 + 장기 운영 → Model Y.",
  },
  "kia-sorento-hev|tesla-model-y": {
    headline: "가족 여유 vs 1-2인 최적화",
    whenA: [
      "7인승 가능·813L 트렁크 (3열 폴딩)",
      "주말 장거리·본가 방문 여유",
      "국산 A/S",
    ],
    whenB: [
      "준중형으로 도심 주차 유리",
      "전기 운영비 (가솔린 대비 1/3)",
      "Autopilot·슈퍼차저",
    ],
    verdict: "1-2인엔 Sorento가 오버스펙. 미래 가족 확장 예정 아니라면 Model Y가 합리적.",
  },
  "tesla-model-y|volvo-xc60": {
    headline: "전기 미래형 vs 수입 프리미엄",
    whenA: [
      "보조금 후 실구매 4,000만원대 — XC60보다 약 2,500만 저렴",
      "500km·슈퍼차저·Autopilot",
      "OTA 업데이트",
    ],
    whenB: [
      "에어 서스펜션 (Ultra)·B&W 오디오",
      "파일럿 어시스트·360 카메라 기본",
      "수입 브랜드 잔존가치",
    ],
    verdict: "아파트 충전 있으니 경제성은 Model Y. XC60은 '오래 탈 프리미엄' 원할 때.",
  },

  // ────── Kia EV6 기준 8쌍 ──────
  "hyundai-ioniq-5|kia-ev6": {
    headline: "형제차의 성격 차이 — 실용 vs 스포티",
    whenA: [
      "3,000mm 휠베이스로 실내 공간 우위",
      "트렁크 531 > 480L",
      "각진 레트로 디자인",
    ],
    whenB: [
      "쿠페형 스포티 스타일",
      "핸들링 반응 준스포티",
      "전장 4,695mm로 좀 더 단단한 비율",
    ],
    verdict: "가족 짐 많음·실내공간 → IONIQ 5. 디자인·운전 재미 → EV6. 가격·보조금 거의 동일.",
  },
  "genesis-gv60|kia-ev6": {
    headline: "프리미엄 감성 vs 가성비 실용",
    whenA: [
      "27인치 OLED·페이스 커넥트",
      "스마트 회생제동 3.0·e-ASD",
      "프리미엄 A/S",
    ],
    whenB: [
      "실구매가 약 1,300만원 저렴",
      "보조금 570만원 > GV60 287만원 (50% 구간)",
      "동일 플랫폼·성능 유사",
    ],
    verdict: "합리적이면 EV6. GV60의 프리미엄 감성이 1,300만 가치라면 GV60.",
  },
  "kia-ev6|volvo-ex40": {
    headline: "준중형 실용 vs 소형 프리미엄",
    whenA: [
      "주행거리 494 > 434km",
      "800V 초급속 18분",
      "준중형 공간·84kWh 배터리",
    ],
    whenB: [
      "단일 트림 풀옵션 — HDA2·서라운드뷰 모두 기본",
      "북유럽 안전 철학",
      "1-2인 도심 주차 유리",
    ],
    verdict: "공간·주행거리 → EV6. 옵션 일괄·수입 브랜드 → EX40. 가격 약 1,000만 차.",
  },
  "kia-ev6|lexus-nx": {
    headline: "전기차 경제성 vs 하이브리드 정숙성",
    whenA: [
      "보조금 후 실구매 4,900만원대 — NX 대비 약 1,700만 저렴",
      "800V·OTA·V2L",
      "연간 운영비 우위",
    ],
    whenB: [
      "렉서스 정숙성·내구성",
      "실연비 17km/L",
      "충전 인프라 걱정 無",
    ],
    verdict: "아파트 충전 있으니 EV6가 거의 모든 면에서 유리. NX는 브랜드 애호 시에만.",
  },
  "kia-ev6|kia-sportage-hev": {
    headline: "EV 운영비 vs HEV 가격",
    whenA: [
      "보조금 후 격차 약 700만원으로 축소",
      "5년 후 운영비 300만원+ 절약",
      "800V·V2L·OTA",
    ],
    whenB: [
      "출고 즉시·가격 4,200만원",
      "637L 트렁크·16.3km/L 연비",
      "국산 A/S 접근성",
    ],
    verdict: "아파트 충전 있으면 EV6가 총소유비용 우위. 출고 급함·가솔린 안심 → Sportage.",
  },
  "hyundai-tucson-hev|kia-ev6": {
    headline: "엔트리 예산 vs 장기 운영",
    whenA: [
      "H-Pick 3,611만원 — 가격 우위",
      "16.2km/L 연비",
      "출고 빠름",
    ],
    whenB: [
      "보조금 후 격차 1,400만원으로 축소",
      "연 100-150만원 운영비 절약",
      "주행 484km·800V 초급속",
    ],
    verdict: "예산 한정 → Tucson. 10년 장기 운영·테크 선호 → EV6.",
  },
  "kia-ev6|kia-sorento-hev": {
    headline: "1-2인 최적 vs 가족 확장",
    whenA: [
      "준중형으로 도심 주차·일상 주행",
      "전기 운영비 우위",
      "OTA·V2L",
    ],
    whenB: [
      "5/6/7인승 선택·중형 공간",
      "주말 장거리·가족 이벤트",
      "가격 1,300만원 저렴(보조금 전)",
    ],
    verdict: "당장 실용 → EV6. 미래 가족 증가 대비 → Sorento. 1-2인 현재 용도엔 Sorento 오버스펙.",
  },
  "kia-ev6|volvo-xc60": {
    headline: "EV 미래형 vs MHEV 프리미엄",
    whenA: [
      "보조금 후 실구매 약 1,600만원 저렴",
      "800V 초급속·V2L·OTA",
      "주행 494km",
    ],
    whenB: [
      "에어 서스펜션 (Ultra)·B&W 오디오",
      "수입 브랜드 잔존가치",
      "파일럿 어시스트 기본",
    ],
    verdict: "경제성·테크 → EV6. 수입 프리미엄·승차감 → XC60.",
  },

  // ────── Hyundai IONIQ 5 기준 7쌍 ──────
  "genesis-gv60|hyundai-ioniq-5": {
    headline: "프리미엄 감성 vs 실용 공간",
    whenA: [
      "27인치 OLED·페이스 커넥트",
      "프리미엄 승차감·정숙성",
      "F/L 후 빌트인 캠 2·디지털 센터 미러 기본",
    ],
    whenB: [
      "실구매가 약 1,400만원 저렴",
      "3,000mm 휠베이스 실내 공간",
      "V2L 기본·531L 트렁크",
    ],
    verdict: "합리·공간 → IONIQ 5. 프리미엄 만족감 → GV60.",
  },
  "hyundai-ioniq-5|volvo-ex40": {
    headline: "준중형 실용 vs 소형 안전",
    whenA: [
      "준중형 공간·531L 트렁크",
      "V2L 기본·주행 485km",
      "약 1,200만원 저렴",
    ],
    whenB: [
      "단일 트림 풀옵션",
      "북유럽 안전 철학",
      "공기청정 시스템",
    ],
    verdict: "실용·가족 → IONIQ 5. 안전·수입 감성 → EX40.",
  },
  "hyundai-ioniq-5|lexus-nx": {
    headline: "경제성 대 압승",
    whenA: [
      "보조금 후 실구매 약 4,800만원 — NX 대비 1,900만 저렴",
      "V2L·800V·OTA",
      "장기 운영비 우위",
    ],
    whenB: [
      "렉서스 정숙성·잔존가치",
      "LSS+ 안전 풀세트",
      "충전 걱정 없음",
    ],
    verdict: "아파트 충전·단거리 출퇴근엔 IONIQ 5가 압도적. NX는 브랜드 충성층에만.",
  },
  "hyundai-ioniq-5|kia-sportage-hev": {
    headline: "장기 미래 vs 당장 가성비",
    whenA: [
      "주행거리 485km·V2L·OTA",
      "보조금 후 실구매 4,800만원대",
      "전기 운영비 우위",
    ],
    whenB: [
      "4,200만원 — 약 600만원 저렴",
      "16.3km/L 연비·637L 트렁크",
      "5년 A/S·출고 빠름",
    ],
    verdict: "예산 민감·단거리 → Sportage. 장기 운영·확장성 → IONIQ 5.",
  },
  "hyundai-ioniq-5|hyundai-tucson-hev": {
    headline: "같은 현대차 브랜드, 다른 방향",
    whenA: [
      "보조금 후 격차 1,200만원",
      "500km 전기 주행·V2L",
      "미래지향적 디자인",
    ],
    whenB: [
      "H-Pick 3,611만원 — 1,800만원 저렴",
      "16.2km/L 연비",
      "즉시 출고·가솔린 안심",
    ],
    verdict: "아파트 충전 있으니 장기엔 IONIQ 5 유리. 초단거리·가격 우선 → Tucson.",
  },
  "hyundai-ioniq-5|kia-sorento-hev": {
    headline: "1-2인 실용 vs 가족 확장",
    whenA: [
      "준중형 도심 주차",
      "V2L·800V·85km 주행",
      "전기 운영비",
    ],
    whenB: [
      "7인승 확장·813L 트렁크",
      "가격 약 1,200만원 저렴(보조금 전)",
      "주말 장거리 여유",
    ],
    verdict: "도심 1-2인 → IONIQ 5. 가족 이벤트 잦음 → Sorento.",
  },
  "hyundai-ioniq-5|volvo-xc60": {
    headline: "EV 미래 vs MHEV 프리미엄",
    whenA: [
      "보조금 후 실구매 약 1,800만원 저렴",
      "V2L·800V·OTA",
      "전기 운영비",
    ],
    whenB: [
      "에어 서스펜션 (Ultra)·B&W",
      "수입 프리미엄 승차감",
      "파일럿 어시스트·360 카메라 기본",
    ],
    verdict: "경제·기능 → IONIQ 5. 수입·잔존가치 → XC60.",
  },

  // ────── Genesis GV60 기준 6쌍 ──────
  "genesis-gv60|volvo-ex40": {
    headline: "국산 프리미엄 EV vs 수입 프리미엄 EV",
    whenA: [
      "27인치 OLED·페이스 커넥트",
      "주행 481 > 434km",
      "국산 A/S 신속",
    ],
    whenB: [
      "단일 트림 풀옵션 — 옵션 고민 無",
      "북유럽 안전 철학",
      "약 180만원 저렴",
    ],
    verdict: "한국형 UX·A/S → GV60. 수입·일괄 구성 → EX40.",
  },
  "genesis-gv60|lexus-nx": {
    headline: "전기 프리미엄 vs 하이브리드 프리미엄",
    whenA: [
      "보조금 287만원 적용 실구매 6,200만원대",
      "장기 운영비 유리",
      "빌트인 캠 2·디지털 센터 미러 기본",
    ],
    whenB: [
      "렉서스 정숙성·잔존가치",
      "실연비 17km/L",
      "충전 걱정 없음",
    ],
    verdict: "아파트 충전 있으니 GV60이 압도적. NX는 잔존가치만 본다면.",
  },
  "genesis-gv60|kia-sportage-hev": {
    headline: "체급·포지셔닝 차이 — 프리미엄 vs 가성비",
    whenA: [
      "프리미엄 감성·27인치 OLED",
      "800V·빌트인 캠 2",
      "전기 운영비",
    ],
    whenB: [
      "2,000만원+ 저렴",
      "637L·16.3km/L 실용",
      "출고 빠름",
    ],
    verdict: "첫차·합리 → Sportage. 한 번쯤 프리미엄 → GV60.",
  },
  "genesis-gv60|hyundai-tucson-hev": {
    headline: "프리미엄 세금 2,900만원",
    whenA: [
      "프리미엄 감성 UX",
      "800V·V2L·OTA",
      "1-2인 '즐거운 첫차'",
    ],
    whenB: [
      "3,611만원 — 대부분 실용 충족",
      "16.2km/L 연비",
      "5년 A/S",
    ],
    verdict: "합리 → Tucson. GV60은 '이상주의적 선택'이지만 장기 소유로는 합리적일 수도.",
  },
  "genesis-gv60|kia-sorento-hev": {
    headline: "EV 프리미엄 5인승 vs HEV 패밀리 7인승",
    whenA: [
      "800V·27인치 OLED·프리미엄",
      "전기 운영비",
      "도심 주차",
    ],
    whenB: [
      "가족 확장·813L·7인승",
      "가격 2,200만원 저렴",
      "주말 장거리",
    ],
    verdict: "1-2인 프리미엄 → GV60. 가족 유연성 → Sorento.",
  },
  "genesis-gv60|volvo-xc60": {
    headline: "국산 vs 수입 프리미엄 (비슷한 가격)",
    whenA: [
      "EV — 보조금·전기 운영비 우위",
      "27인치 OLED·페이스 커넥트",
      "국산 A/S 빠름",
    ],
    whenB: [
      "에어 서스펜션 (Ultra)·B&W",
      "스칸디 감성·잔존가치",
      "중형 공간·트렁크 483L",
    ],
    verdict: "가성비·테크 → GV60. 승차감·잔존가치 → XC60.",
  },

  // ────── Volvo EX40 기준 5쌍 ──────
  "lexus-nx|volvo-ex40": {
    headline: "하이브리드 정숙 vs 전기 프리미엄",
    whenA: [
      "렉서스 정숙성·잔존가치",
      "충전 인프라 무관",
      "서라운드뷰는 NX Premium에 없음(Luxury만)",
    ],
    whenB: [
      "보조금 후 실구매가 약 6,300만원",
      "360 카메라·하만카돈 기본",
      "장기 운영비",
    ],
    verdict: "아파트 충전 있으니 EX40이 경제·옵션 면에서 유리. NX는 브랜드 충성층에만.",
  },
  "kia-sportage-hev|volvo-ex40": {
    headline: "가성비 SUV vs 수입 프리미엄 EV",
    whenA: [
      "4,200만원 — 약 2,400만원 저렴",
      "637L·16.3km/L",
      "국산 A/S",
    ],
    whenB: [
      "수입 프리미엄·북유럽 감성",
      "단일 트림 풀옵션",
      "400km+ 주행",
    ],
    verdict: "합리 → Sportage. 예산 넉넉하고 수입 EV 원함 → EX40 (7천만 내 거의 유일).",
  },
  "hyundai-tucson-hev|volvo-ex40": {
    headline: "가격 3,000만원 차이 — 실용 vs 프리미엄",
    whenA: [
      "3,611만원 — 큰 가격 차이",
      "16.2km/L·HDA 기본",
      "5년 A/S",
    ],
    whenB: [
      "수입 EV 프리미엄 감성",
      "하만카돈·파노라마 기본",
      "전기 운영비",
    ],
    verdict: "합리 → Tucson. '중간 지점'인 EV6/IONIQ 5가 더 적합할 수도.",
  },
  "kia-sorento-hev|volvo-ex40": {
    headline: "중형 가족차 vs 소형 프리미엄 EV",
    whenA: [
      "7인승·813L",
      "주말 장거리·캠핑",
      "약 2,400만원 저렴",
    ],
    whenB: [
      "1-2인 도심 최적 사이즈",
      "전기 운영비",
      "수입 프리미엄",
    ],
    verdict: "가족 많음·장거리 → Sorento. 1-2인 도심·전기 → EX40.",
  },
  "volvo-ex40|volvo-xc60": {
    headline: "볼보 형제 — 소형 EV vs 중형 MHEV",
    whenA: [
      "전기차 — 보조금·운영비",
      "1-2인 도심 주차 유리",
      "360 카메라·하만카돈",
    ],
    whenB: [
      "중형 공간 여유 (트렁크 483L)",
      "에어 서스펜션 옵션 (Ultra)",
      "B&W 오디오 (Ultra)",
    ],
    verdict: "1-2인 도심 → EX40. 주말 여행 잦음·공간 원함 → XC60.",
  },

  // ────── Lexus NX 기준 4쌍 ──────
  "kia-sportage-hev|lexus-nx": {
    headline: "국산 가성비 HEV vs 수입 프리미엄 HEV",
    whenA: [
      "4,200만원 — 약 2,500만원 저렴",
      "16.3km/L·637L",
      "국산 A/S 접근성",
    ],
    whenB: [
      "렉서스 정숙성·잔존가치",
      "LSS+ 전 트림 기본",
      "무선 CarPlay/AA",
    ],
    verdict: "합리 → Sportage. 장기 보유·브랜드 선호 → NX.",
  },
  "hyundai-tucson-hev|lexus-nx": {
    headline: "압도적 가격 차 3,100만원",
    whenA: [
      "3,611만원 — 실용 충족",
      "16.2km/L·622L",
      "5년 A/S",
    ],
    whenB: [
      "렉서스 감성·잔존가치",
      "14.0km/L 복합 연비",
      "무선 CarPlay",
    ],
    verdict: "합리 → Tucson. 감성 → NX.",
  },
  "kia-sorento-hev|lexus-nx": {
    headline: "가족 다목적 vs 프리미엄 5인승",
    whenA: [
      "7인승·813L",
      "주말 장거리",
      "약 2,400만원 저렴",
    ],
    whenB: [
      "렉서스 정숙성",
      "14.0km/L + 잔존가치",
      "프리미엄 브랜드",
    ],
    verdict: "가족 중시 → Sorento. 2인 데일리·프리미엄 → NX.",
  },
  "lexus-nx|volvo-xc60": {
    headline: "일본 정숙 vs 북유럽 안전",
    whenA: [
      "렉서스 정숙성·잔존가치",
      "AWD 기본·14.0km/L",
      "무선 CarPlay/AA",
    ],
    whenB: [
      "360 카메라·파일럿 어시스트 기본 (Plus도 포함)",
      "에어 서스펜션 옵션 (Ultra)",
      "11.2\" 디스플레이",
    ],
    verdict: "정숙·잔존 → NX. 안전·승차감 → XC60. NX Premium은 서라운드 뷰 미포함 주의.",
  },

  // ────── Kia Sportage 기준 3쌍 ──────
  "hyundai-tucson-hev|kia-sportage-hev": {
    headline: "자매 차, 디자인·포지셔닝 차이",
    whenA: [
      "파라메트릭 그릴·픽셀 램프",
      "H-Pick 트림 가성비",
      "16.2km/L",
    ],
    whenB: [
      "더 각지고 대담한 디자인",
      "Signature 상위 트림",
      "16.3km/L 미세 우위",
    ],
    verdict: "플랫폼 동일. 디자인 취향·서비스 센터 접근성으로 결정.",
  },
  "kia-sorento-hev|kia-sportage-hev": {
    headline: "같은 기아 HEV, 급이 다름",
    whenA: [
      "중형·7인승 옵션",
      "주말 장거리 여유",
      "813L 트렁크",
    ],
    whenB: [
      "준중형 — 1-2인 적당",
      "16.3km/L 연비 우위",
      "도심 주차 유리",
    ],
    verdict: "1-2인 일상 → Sportage. 가족 확장 대비 → Sorento.",
  },
  "kia-sportage-hev|volvo-xc60": {
    headline: "국산 HEV vs 수입 MHEV",
    whenA: [
      "4,200만원 — 2,400만원 저렴",
      "16.3 vs 10.7km/L 연비",
      "637 vs 483L 트렁크",
    ],
    whenB: [
      "수입 브랜드 프리미엄",
      "파일럿 어시스트·360 카메라 기본",
      "잔존가치",
    ],
    verdict: "합리 → Sportage. 오래 탈 프리미엄 → XC60.",
  },

  // ────── Hyundai Tucson 기준 2쌍 ──────
  "hyundai-tucson-hev|kia-sorento-hev": {
    headline: "현대-기아 HEV, 크기 차이",
    whenA: [
      "준중형·3,611만원",
      "16.2km/L 연비",
      "1-2인 도심 적당",
    ],
    whenB: [
      "중형 7인승 가능",
      "813L 트렁크",
      "주말 장거리",
    ],
    verdict: "1-2인 일상 → Tucson. 가족 확장 대비·여유 공간 → Sorento.",
  },
  "hyundai-tucson-hev|volvo-xc60": {
    headline: "국산 실용 vs 수입 프리미엄",
    whenA: [
      "3,611만원 — 3,000만원 차",
      "16.2km/L·HDA 기본",
      "5년 A/S",
    ],
    whenB: [
      "360 카메라·파일럿 어시스트",
      "B&W 오디오 (Ultra)",
      "스칸디 감성·잔존가치",
    ],
    verdict: "합리·첫차 → Tucson. 승차감·브랜드 → XC60.",
  },

  // ────── BYD Atto 3 추가 쌍 (12) ──────
  "byd-atto-3|tesla-model-y": {
    headline: "가성비 극단 vs 테크 생태계",
    whenA: [
      "실구매 2천만원대 후반 — Model Y 대비 1,500만원+ 저렴",
      "12가지 ADAS·서라운드뷰·무선 CarPlay/AA 모두 기본",
      "LFP 블레이드 배터리 안전성·8년/16만km 보증",
    ],
    whenB: [
      "주행거리 500 > 321km",
      "슈퍼차저·OTA 생태계",
      "잔존가치 우위",
    ],
    verdict: "주행거리·브랜드 중시 → Model Y. 최저가 첫 EV·안전성 중시 → Atto 3.",
  },
  "byd-atto-3|kia-ev6": {
    headline: "엔트리 EV vs 준프리미엄 EV",
    whenA: [
      "가격 2,300만원 이상 저렴",
      "LFP 배터리 열안정성",
      "ADAS 풀세트 기본 + 파노라마 루프 기본",
    ],
    whenB: [
      "주행 494 > 321km",
      "800V 초급속 18분 vs 88kW DC (크게 느림)",
      "E-GMP 실내공간",
    ],
    verdict: "충전 속도·주행거리 중시 → EV6. 첫 EV·가격·안전성 → Atto 3.",
  },
  "byd-atto-3|hyundai-ioniq-5": {
    headline: "소형 엔트리 vs 준중형 실용",
    whenA: [
      "IONIQ 5 대비 2,000만원+ 저렴",
      "3D 서라운드 뷰·12가지 ADAS 기본",
      "파노라믹 선루프·V2L 기본",
    ],
    whenB: [
      "주행 485km + 3,000mm 휠베이스 실내",
      "800V 초급속·V2L 3.6kW",
      "국산 A/S·잔존가치",
    ],
    verdict: "공간·장기 보유 → IONIQ 5. 예산 최우선·가성비 EV → Atto 3.",
  },
  "byd-atto-3|genesis-gv60": {
    headline: "체급·가격 극단",
    whenA: [
      "GV60 대비 3천만원+ 저렴",
      "핵심 기능 기본 탑재",
      "보조금 후 실구매 2천만원대",
    ],
    whenB: [
      "프리미엄 감성·27\" OLED",
      "84kWh · 800V 초급속",
      "국산 프리미엄 잔존가치",
    ],
    verdict: "완전히 다른 세그먼트. 프리미엄 → GV60, 가성비 EV → Atto 3.",
  },
  "byd-atto-3|volvo-ex40": {
    headline: "중국 vs 스웨덴 소형 EV",
    whenA: [
      "EX40 대비 3,300만원+ 저렴",
      "3D 서라운드 뷰·12 ADAS 기본",
      "LFP 배터리 안전성",
    ],
    whenB: [
      "252마력·주행 434km > 321km",
      "북유럽 안전·하만카돈·파일럿 어시스트 기본",
      "수입 브랜드 잔존가치",
    ],
    verdict: "예산 최우선·첫 EV → Atto 3. 브랜드·승차감·주행거리 → EX40.",
  },
  "byd-atto-3|lexus-nx": {
    headline: "EV 가성비 vs HEV 프리미엄",
    whenA: [
      "실구매 2천만원대 후반 — NX 대비 3,500만원+ 저렴",
      "전기 운영비",
      "풀 ADAS 기본",
    ],
    whenB: [
      "렉서스 정숙성·잔존가치",
      "14.0km/L·LSS+ 안전",
      "충전 인프라 무관",
    ],
    verdict: "아파트 충전 有 + 예산 민감 → Atto 3. 브랜드·장기 소유 → NX.",
  },
  "byd-atto-3|kia-sportage-hev": {
    headline: "중국 EV vs 국산 HEV",
    whenA: [
      "실구매 2천만원대 후반 — Sportage 대비 1,600만원 저렴",
      "전기 운영비 연 100만원+ 절약",
      "ADAS 풀세트 기본",
    ],
    whenB: [
      "16.3km/L·637L·출고 즉시",
      "국산 A/S 접근성",
      "주행거리 걱정 無",
    ],
    verdict: "아파트 충전 + 단거리 → Atto 3. 출고 빠름·가솔린 안심 → Sportage.",
  },
  "byd-atto-3|hyundai-tucson-hev": {
    headline: "중국 EV vs 국산 HEV 엔트리",
    whenA: [
      "실구매 2천만원대 후반으로 Tucson H-Pick(3,611만)보다도 저렴",
      "전기 운영비",
      "풀 ADAS·서라운드 뷰 기본",
    ],
    whenB: [
      "16.2km/L·622L 트렁크",
      "5년 A/S·신속 출고",
      "장거리 충전 걱정 無",
    ],
    verdict: "아파트 충전·초단거리 → Atto 3. 가솔린 안심·A/S 신뢰 → Tucson.",
  },
  "byd-atto-3|kia-sorento-hev": {
    headline: "소형 EV vs 중형 HEV 7인승",
    whenA: [
      "1,200만원+ 저렴",
      "전기 운영비",
      "도심 주차 유리",
    ],
    whenB: [
      "7인승·813L 트렁크",
      "주말 장거리·가족 이벤트",
      "검증된 상품성",
    ],
    verdict: "체급 다름. 1-2인 도심 → Atto 3. 가족 확장 → Sorento.",
  },
  "byd-atto-3|volvo-xc60": {
    headline: "엔트리 EV vs 수입 프리미엄 MHEV",
    whenA: [
      "XC60 Plus(6,570만) 대비 3,200만원 저렴",
      "전기 운영비",
      "12 ADAS·서라운드뷰 기본",
    ],
    whenB: [
      "에어 서스펜션(Ultra)·B&W·스칸디 감성",
      "중형 공간",
      "수입 브랜드 잔존가치",
    ],
    verdict: "체급·가격차 큼. 합리·EV → Atto 3. 프리미엄·승차감 → XC60.",
  },
  "byd-atto-3|volvo-xc40": {
    headline: "중국 EV vs 수입 MHEV 컴팩트",
    whenA: [
      "실구매 2천만원대 후반 — XC40(5,190만) 대비 2,300만원+ 저렴",
      "전기 운영비",
      "보조금 대상",
    ],
    whenB: [
      "볼보 안전 철학·픽셀 LED·BLIS",
      "48V MHEV로 충전 걱정 無",
      "수입 브랜드",
    ],
    verdict: "예산·EV 선호 → Atto 3. 가솔린·브랜드 → XC40.",
  },
  "byd-atto-3|zeekr-7x": {
    headline: "중국 EV 두 극단 — 엔트리 vs 프리미엄",
    whenA: [
      "실구매 2천만원대 후반 — Zeekr 대비 2천만원+ 저렴",
      "단일 구성·검증된 LFP 블레이드",
      "BYD 한국 출시 1년+ 경과, A/S 네트워크 가동",
    ],
    whenB: [
      "준중형급 615km WLTP 주행",
      "800V 초급속 13분·36인치 AR-HUD",
      "SEA 플랫폼(볼보·폴스타 공유)",
    ],
    verdict: "같은 중국 EV지만 체급 다름. Atto 3는 '첫 EV 가성비', Zeekr 7X는 'GV70 대안 프리미엄'.",
  },

  // ────── Zeekr 7X 추가 쌍 (10) ──────
  "tesla-model-y|zeekr-7x": {
    headline: "테크 리더 vs 신흥 프리미엄",
    whenA: [
      "OTA·슈퍼차저·Autopilot 검증된 생태계",
      "2026 주니퍼 페이스리프트",
      "국내 판매 1위 EV, A/S 안정",
    ],
    whenB: [
      "100kWh·615km WLTP > Model Y 500km",
      "800V 480kW 초급속 vs 250kW",
      "36\" AR-HUD·16\" 3.5K OLED",
      "동급 대비 저렴(GV70 절반가)",
    ],
    verdict: "검증된 브랜드·충전소 → Model Y. 최신 기술·공간 → Zeekr 7X (보조금 확정 후 재평가).",
  },
  "kia-ev6|zeekr-7x": {
    headline: "국산 준중형 EV vs 중국 프리미엄 EV",
    whenA: [
      "800V 초급속·검증된 성능",
      "국내 A/S 촘촘",
      "보조금 570만원 확정",
    ],
    whenB: [
      "100kWh·615km (EV6 494km)",
      "프리미엄 인테리어·AR-HUD",
      "SEA 플랫폼(볼보 공유)",
    ],
    verdict: "안정성·A/S → EV6. 주행거리·신기술·공간 → Zeekr 7X. 가격 비슷(추정).",
  },
  "hyundai-ioniq-5|zeekr-7x": {
    headline: "E-GMP 실용 vs SEA 프리미엄",
    whenA: [
      "V2L·검증된 기술",
      "국산 A/S·보조금 567만원",
      "실내 공간 3,000mm",
    ],
    whenB: [
      "100kWh 배터리·615km",
      "나파 가죽·AR-HUD",
      "Zeekr Sound Pro 21스피커",
    ],
    verdict: "안정·검증 → IONIQ 5. 신기술·프리미엄 감성 → Zeekr 7X.",
  },
  "genesis-gv60|zeekr-7x": {
    headline: "국산 프리미엄 EV vs 중국 프리미엄 EV",
    whenA: [
      "27\" OLED·페이스 커넥트",
      "검증된 A/S·잔존가치",
      "보조금 확정",
    ],
    whenB: [
      "주행 615km > 481km",
      "16\" 3.5K OLED + 36\" AR-HUD",
      "637마력 퍼포먼스 옵션",
    ],
    verdict: "브랜드·A/S → GV60. 최신 하드웨어·가성비 프리미엄 → Zeekr 7X.",
  },
  "volvo-ex40|zeekr-7x": {
    headline: "Geely 형제 — 소형 vs 준중형",
    whenA: [
      "볼보 브랜드·검증된 A/S",
      "단일 트림 옵션 고민 無",
      "보조금·세제혜택 확정",
    ],
    whenB: [
      "같은 Geely 산하·SEA 플랫폼",
      "준중형 체급+615km",
      "프리미엄 인테리어·가성비",
    ],
    verdict: "소형·검증된 볼보 → EX40. 준중형·최신 기술 → Zeekr 7X.",
  },
  "lexus-nx|zeekr-7x": {
    headline: "일본 하이브리드 전통 vs 중국 EV 혁신",
    whenA: [
      "렉서스 정숙성·잔존가치",
      "충전 인프라 무관",
      "LSS+ 안전",
    ],
    whenB: [
      "전기 운영비",
      "주행 615km·800V 초급속",
      "AR-HUD·OLED 디스플레이",
    ],
    verdict: "아파트 충전 있으니 Zeekr 7X의 총소유비용이 우위. NX는 잔존가치 중시 시.",
  },
  "kia-sportage-hev|zeekr-7x": {
    headline: "가솔린 HEV vs 프리미엄 EV",
    whenA: [
      "Sportage 4,200만원 — 1,600만 저렴(추정)",
      "16.3km/L·출고 즉시",
      "국산 A/S",
    ],
    whenB: [
      "체급 한 단계 위(중형)",
      "전기 운영비·주행 615km",
      "프리미엄 인테리어",
    ],
    verdict: "가성비 HEV → Sportage. 한 체급 업그레이드·EV → Zeekr 7X.",
  },
  "hyundai-tucson-hev|zeekr-7x": {
    headline: "엔트리 HEV vs 프리미엄 EV",
    whenA: [
      "3,611만원 — 2,200만원 저렴",
      "16.2km/L·5년 A/S",
      "출고 즉시",
    ],
    whenB: [
      "체급 위(중형 프리미엄)",
      "전기 운영비·615km 주행",
      "최신 인포테인먼트",
    ],
    verdict: "예산 민감 → Tucson. 프리미엄 원함 → Zeekr 7X.",
  },
  "kia-sorento-hev|zeekr-7x": {
    headline: "가족 HEV vs 프리미엄 EV 중형",
    whenA: [
      "7인승·813L",
      "주말 장거리·검증된 상품성",
      "국산 A/S",
    ],
    whenB: [
      "EV 운영비·615km",
      "프리미엄 인테리어 + AR-HUD",
      "1-2인엔 오버스펙 대비 사이즈 적정",
    ],
    verdict: "가족 확장 → Sorento. 1-2인 프리미엄 EV → Zeekr 7X.",
  },
  "volvo-xc60|zeekr-7x": {
    headline: "스웨덴 MHEV vs 중국 EV (Geely 계열)",
    whenA: [
      "볼보 안전·잔존가치",
      "에어 서스펜션(Ultra)·B&W",
      "검증된 수입 브랜드 A/S",
    ],
    whenB: [
      "같은 Geely·SEA 플랫폼",
      "EV 운영비·주행 615km",
      "가격 추정 비슷(XC60 Plus 6,570만 vs Zeekr 추정 5,800만)",
    ],
    verdict: "같은 Geely 계열이지만 볼보는 검증·Zeekr는 최신. 수입 브랜드 신뢰 → XC60, 최신 EV 하드웨어 → Zeekr 7X.",
  },
  "volvo-xc40|zeekr-7x": {
    headline: "소형 수입 MHEV vs 중형 중국 EV",
    whenA: [
      "볼보 브랜드 + 검증된 A/S",
      "48V MHEV·충전 걱정 無",
      "Plus 5,190만원 진입",
    ],
    whenB: [
      "체급 위 (중형) + EV",
      "주행 615km",
      "가격 추정 5,800만원대",
    ],
    verdict: "브랜드·출고 즉시 → XC40. 체급 업 + EV → Zeekr 7X.",
  },

  // ────── Volvo XC40 MHEV 추가 쌍 (10) ──────
  "tesla-model-y|volvo-xc40": {
    headline: "전기 테크 vs 수입 컴팩트 MHEV",
    whenA: [
      "Model Y RWD 4,999만 — XC40 대비 200만원 저렴",
      "전기 운영비",
      "500km 주행·OTA",
    ],
    whenB: [
      "볼보 안전·픽셀 LED·BLIS 기본",
      "출고 즉시·충전 걱정 無",
      "프리미엄 컴팩트 감성",
    ],
    verdict: "전기·테크 → Model Y. 수입 브랜드·검증 → XC40.",
  },
  "kia-ev6|volvo-xc40": {
    headline: "국산 EV vs 수입 MHEV (컴팩트)",
    whenA: [
      "주행 494km·800V 초급속",
      "보조금 570만원 → 실구매 약 4,900만원대",
      "V2L·OTA",
    ],
    whenB: [
      "Plus 5,190만원 — EV6 보조금 반영가와 비슷",
      "파일럿 어시스트·360 카메라 기본",
      "충전 걱정 無",
    ],
    verdict: "보조금 반영 가격 비슷. 장기 운영비·EV → EV6. 브랜드·가솔린 → XC40.",
  },
  "hyundai-ioniq-5|volvo-xc40": {
    headline: "준중형 EV vs 소형 MHEV",
    whenA: [
      "보조금 후 실구매 약 4,800만원",
      "주행 485km·V2L",
      "실내 공간 (휠베이스 3,000mm)",
    ],
    whenB: [
      "Plus 5,190만원, 수입 프리미엄 감성",
      "BLIS·픽셀 LED 기본",
      "4,440mm 소형 도심 주차 유리",
    ],
    verdict: "공간·EV 운영 → IONIQ 5. 도심 컴팩트·브랜드 → XC40.",
  },
  "genesis-gv60|volvo-xc40": {
    headline: "국산 프리미엄 EV vs 수입 MHEV",
    whenA: [
      "EV 보조금·전기 운영비",
      "27\" OLED·프리미엄 UX",
      "800V 초급속",
    ],
    whenB: [
      "1,300만원 저렴(5,190만 vs 6,490만)",
      "출고 즉시·충전 걱정 無",
      "볼보 안전·감성",
    ],
    verdict: "예산·가솔린 → XC40. 전기·프리미엄 → GV60.",
  },
  "volvo-ex40|volvo-xc40": {
    headline: "같은 볼보 컴팩트 — EV vs MHEV",
    whenA: [
      "전기차 보조금·세제혜택",
      "전기 운영비 (XC40 대비 연 100만원+ 절약)",
      "주행 434km로 일상 충분",
    ],
    whenB: [
      "1,500만원+ 저렴 (5,190만 vs 6,670만)",
      "AWD + 8단 자동(즉각 가속)",
      "충전 걱정 無·출고 빠름",
    ],
    verdict: "아파트 충전 有 → EX40이 장기 우위. 가솔린 편의 + 예산 → XC40.",
  },
  "lexus-nx|volvo-xc40": {
    headline: "일본 HEV vs 스웨덴 MHEV",
    whenA: [
      "1,500만원 비쌈(6,695만 vs 5,190만)",
      "잔존가치 우위",
      "14.0km/L·LSS+",
    ],
    whenB: [
      "볼보 안전·BLIS·파일럿 어시스트",
      "360 카메라 Plus 기본 (NX는 Luxury 이상만)",
      "수입 프리미엄 컴팩트 감성",
    ],
    verdict: "서라운드 뷰 Plus부터 기본인 XC40이 예산 내 더 완성된 구성. NX는 잔존가치 중시 시.",
  },
  "kia-sportage-hev|volvo-xc40": {
    headline: "국산 HEV 가성비 vs 수입 MHEV 프리미엄",
    whenA: [
      "Sportage 4,200만원 — XC40 대비 990만원 저렴",
      "16.3 > 10.3km/L 연비",
      "637L 트렁크 > 452L",
    ],
    whenB: [
      "볼보 안전·BLIS·픽셀 LED",
      "파일럿 어시스트·360 카메라",
      "수입 프리미엄",
    ],
    verdict: "합리 → Sportage. 브랜드·수입 감성 → XC40.",
  },
  "hyundai-tucson-hev|volvo-xc40": {
    headline: "국산 HEV vs 수입 MHEV (엔트리)",
    whenA: [
      "Tucson H-Pick 3,611만 — XC40 대비 1,600만원 저렴",
      "16.2km/L > 10.3km/L",
      "622L 트렁크",
    ],
    whenB: [
      "볼보 안전 · 파일럿 어시스트",
      "BLIS·픽셀 LED",
      "수입 프리미엄",
    ],
    verdict: "가성비·연비 → Tucson. 브랜드·프리미엄 → XC40.",
  },
  "kia-sorento-hev|volvo-xc40": {
    headline: "중형 HEV 7인승 vs 소형 MHEV",
    whenA: [
      "7인승·813L 트렁크",
      "15.7km/L·국산 A/S",
      "Noblesse 4,280만원 — 910만원 저렴",
    ],
    whenB: [
      "컴팩트 도심 주차 유리",
      "볼보 안전·프리미엄 감성",
      "10.3km/L",
    ],
    verdict: "가족·공간 → Sorento. 1-2인 도심·브랜드 → XC40.",
  },
  "volvo-xc40|volvo-xc60": {
    headline: "볼보 컴팩트 MHEV vs 중형 MHEV",
    whenA: [
      "1,400만원 저렴(5,190만 vs 6,570만)",
      "도심 주차 유리(4,440 vs 4,708mm)",
      "같은 볼보 브랜드·안전",
    ],
    whenB: [
      "중형 공간(트렁크 483 vs 452L)",
      "8단 AT·6.9초 가속",
      "에어 서스펜션(Ultra) 옵션",
    ],
    verdict: "가격·도심 → XC40. 여유 공간·프리미엄 승차감 → XC60.",
  },

  // ────── Kia Sorento 기준 1쌍 ──────
  "kia-sorento-hev|volvo-xc60": {
    headline: "중형급 — 가족 다목적 vs 프리미엄",
    whenA: [
      "7인승 확장·813L",
      "15.7km/L",
      "국산 A/S",
    ],
    whenB: [
      "360 카메라·파일럿 어시스트",
      "에어 서스펜션 (Ultra)",
      "수입 프리미엄 감성",
    ],
    verdict: "가족·확장 → Sorento. 프리미엄·승차감 → XC60.",
  },
};

export function insightKey(a: string, b: string): string {
  return [a, b].sort().join("|");
}

export function getInsight(a: string, b: string): Insight | null {
  const key = insightKey(a, b);
  const data = PAIRS[key];
  if (!data) return null;
  const [pa, pb] = key.split("|");
  return { pair: [pa, pb], ...data };
}

export function getAllInsights(slugs: string[]): Insight[] {
  const out: Insight[] = [];
  for (let i = 0; i < slugs.length; i++) {
    for (let j = i + 1; j < slugs.length; j++) {
      const ins = getInsight(slugs[i], slugs[j]);
      if (ins) out.push(ins);
    }
  }
  return out;
}
