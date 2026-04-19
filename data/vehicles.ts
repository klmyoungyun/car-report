import type { Vehicle } from "./schema";

export const VEHICLES: Vehicle[] = [
  // =========================================================================
  // 1. Tesla Model Y
  // =========================================================================
  {
    slug: "tesla-model-y",
    name: "Tesla Model Y",
    brand: "Tesla",
    segment: "MIDSIZE",
    fuelType: "EV",
    origin: "IMPORT",
    images: {
      hero: "https://digitalassets.tesla.com/tesla-contents/image/upload/h_1400,w_2880,c_fit,f_auto,q_auto:best/Homepage-Model-Y-Desktop-Global",
    },
    specs: {
      length_mm: 4790,
      width_mm: 1921,
      height_mm: 1624,
      wheelbase_mm: 2890,
      weight_kg: 1992,
      trunk_liters: 854,
      seats: 5,
      drivetrain: "RWD / AWD",
      powerHp: 295,
      torqueNm: 410,
      efficiency: "5.4km/kWh",
      range_km: 500,
      battery_kwh: 81.6,
      charging: "250kW DC",
    },
    pricing: {
      baseTrim: { name: "RWD (프리미엄)", priceKRW: 49_990_000 },
      recommendedTrim: {
        name: "Long Range AWD",
        priceKRW: 59_990_000,
        includedOptionPackages: [
          "Autopilot 기본 (ACC·차선유지)",
          "듀얼 모터 AWD",
          "파노라마 글래스 루프",
          "15.4인치 센터 + 8인치 2열 디스플레이",
          "15스피커 프리미엄 오디오",
          "1열 통풍/열선 시트",
          "히트펌프",
        ],
      },
      fullOption: { priceKRW: 79_703_000 },
      essentials: {
        surroundView: "기본",
        rearCamera: "기본",
        carplayAndroidAuto: "없음",
        adas: "기본",
      },
    },
    subsidy: {
      nationalKRW: 2_100_000,
      seongnamKRW: 500_000,
      totalKRW: 2_600_000,
      realPurchasePriceKRW: 59_990_000 - 2_600_000,
      note: "Long Range AWD 기준. RWD(4,999만원)는 국고 170만원. 수입 EV는 국산 대비 보조금 제한적.",
    },
    taxes: {
      acquisitionTaxKRW: Math.max(0, 59_990_000 * 0.07 - 1_400_000),
      estimatedRegistrationKRW: 400_000,
      evExemptions: [
        "개별소비세 최대 300만원 감면 (가격에 이미 반영)",
        "교육세 최대 90만원 감면",
        "취득세 최대 140만원 감면",
      ],
    },
    media: {
      youtube: [
        { videoId: "bBrbaf9_qfM", title: "10분동안 테슬라 모델Y RWD 알아보기 | 4,999만원", channel: "차또바기" },
        { videoId: "gHFa8M7mHOg", title: "테슬라 모델 Y 26년형 최초 시승기!", channel: "국내 리뷰" },
        { videoId: "i41PuR17z5M", title: "테슬라 모델Y 기습 가격인하! 2026년 전기차 전쟁", channel: "국내 리뷰" },
      ],
      blogs: [
        { url: "https://www.motorgraph.com/news/articleView.html?idxno=27191", title: "[시승기] 테슬라 모델 Y 롱 레인지, '511km'의 안정감", source: "모터그래프" },
        { url: "https://www.hankyung.com/article/202504306344i", title: "테슬라 모델Y 주니퍼 가족과 타보니", source: "한국경제" },
        { url: "https://www.etnews.com/20251113000082", title: "[신차 드라이브] 테슬라 모델 Y 주니퍼", source: "전자신문" },
      ],
      officialUrl: "https://www.tesla.com/ko_kr/modely",
    },
    pros: [
      "동급 최상위 주행거리 500km + 슈퍼차저 250kW 초급속 충전",
      "Autopilot·15.4인치 센터 디스플레이·파노라마 루프 등 기본 풍부",
      "OTA 무선 업데이트로 기능 지속 추가",
      "국내 전기차 판매 1위(2025년 5만대+) → A/S·커뮤니티 안정",
      "2026년 가격 인하로 RWD 4,999만원, 보조금 적용 시 4,000만원대",
    ],
    cons: [
      "Apple CarPlay/Android Auto 미지원 (Tesla 자체 UI만)",
      "물리 버튼 대부분 삭제 → 주행 중 조작 불편",
      "초음파 센서 제거된 비전 전용 시스템의 거리감 오차",
    ],
    dataAsOf: "2026-04-19",
  },

  // =========================================================================
  // 2. Kia EV6
  // =========================================================================
  {
    slug: "kia-ev6",
    name: "Kia EV6",
    brand: "Kia",
    segment: "MIDSIZE",
    fuelType: "EV",
    origin: "DOMESTIC",
    images: {
      hero: "https://www.kia.com/content/dam/kwp/kr/ko/vehicles/ev6/myPage/2026/kv/ev6_mypage_kv_pc.jpg",
    },
    specs: {
      length_mm: 4695,
      width_mm: 1880,
      height_mm: 1550,
      wheelbase_mm: 2900,
      weight_kg: 2040,
      trunk_liters: 480,
      seats: 5,
      drivetrain: "RWD / AWD",
      powerHp: 229,
      torqueNm: 350,
      efficiency: "5.2km/kWh",
      range_km: 494,
      battery_kwh: 84,
      charging: "350kW DC (800V)",
    },
    pricing: {
      baseTrim: { name: "Light 스탠다드", priceKRW: 43_600_000 },
      recommendedTrim: {
        name: "Earth 롱레인지 2WD",
        priceKRW: 56_400_000,
        includedOptionPackages: [
          "서라운드 뷰 모니터 (SVM)",
          "후측방 모니터 (BVM)",
          "지능형 LED 헤드램프",
          "나파가죽 시트 + 통풍/열선",
          "스마트 파워 테일게이트",
          "12.3\"+12.3\" 파노라믹 커브드 디스플레이",
          "원격 스마트 주차 보조 2",
        ],
      },
      fullOption: { priceKRW: 67_090_000 },
      essentials: {
        surroundView: "기본",
        rearCamera: "기본",
        carplayAndroidAuto: "기본",
        adas: "옵션",
      },
    },
    subsidy: {
      nationalKRW: 5_700_000,
      seongnamKRW: 1_500_000,
      totalKRW: 7_200_000,
      realPurchasePriceKRW: 56_400_000 - 7_200_000,
      note: "성남시 보조금은 추정 상한 기준. 드라이브 와이즈(HDA2) 75만원 추가 시 풀 ADAS.",
    },
    taxes: {
      acquisitionTaxKRW: Math.max(0, 56_400_000 * 0.07 - 1_400_000),
      estimatedRegistrationKRW: 400_000,
      evExemptions: [
        "개별소비세 최대 300만원 감면",
        "교육세 최대 90만원 감면",
        "취득세 최대 140만원 감면",
      ],
    },
    media: {
      youtube: [
        { videoId: "peaUUPKa30A", title: "2026 기아 EV6 완전 공개", channel: "자동차 리뷰" },
        { videoId: "BIvxyMkV4-Q", title: "이 전기차, 그냥 탈 수 없어요… 2026 기아 EV6 리뷰", channel: "자동차 리뷰" },
        { videoId: "lbIRaYCyUdQ", title: "2026 기아 EV6 풀체인지 리뷰", channel: "자동차 리뷰" },
      ],
      blogs: [
        { url: "https://jasonryu.net/2025/07/01/new-car-kia-the-2026-ev6-and-ev6-gt/", title: "기아 The 2026 EV6·EV6 GT 정리", source: "jasonryu.net" },
        { url: "https://web.getcha.kr/articles/lease-kia-ev6-facelift-2026", title: "EV6 페이스리프트 2026 가격 인하 경쟁력", source: "겟차" },
        { url: "https://www.yuccapostkorea.com/news/articleView.html?idxno=1143", title: "2026년형 기아 EV6 연식 변경", source: "유카포스트" },
      ],
      officialUrl: "https://www.kia.com/kr/vehicles/ev6",
    },
    pros: [
      "84kWh 대용량 배터리 + 800V 초급속(10→80% 18분)",
      "E-GMP 기반 넉넉한 실내(축거 2,900mm)",
      "229ps(2WD)/325ps(AWD) 강력한 가속",
      "12.3\"+12.3\" 파노라믹 커브드 디스플레이",
      "디지털 키 2, V2L, OTA, Plug&Charge",
    ],
    cons: [
      "쿠페형 루프로 2열 헤드룸·후방 시야 제한",
      "트렁크 480L로 동급 대비 다소 작음",
      "드라이브 와이즈(HDA2)가 2026형 Earth 이상도 선택 옵션",
    ],
    dataAsOf: "2026-04-19",
  },

  // =========================================================================
  // 3. Hyundai IONIQ 5
  // =========================================================================
  {
    slug: "hyundai-ioniq-5",
    name: "Hyundai IONIQ 5",
    brand: "Hyundai",
    segment: "MIDSIZE",
    fuelType: "EV",
    origin: "DOMESTIC",
    images: {
      hero: "https://www.hyundai.com/static/images/model/ioniq5/ioniq5_exterior_main.png",
    },
    specs: {
      length_mm: 4655,
      width_mm: 1890,
      height_mm: 1605,
      wheelbase_mm: 3000,
      weight_kg: 2015,
      trunk_liters: 531,
      seats: 5,
      drivetrain: "RWD / AWD (HTRAC)",
      powerHp: 229,
      torqueNm: 350,
      efficiency: "5.2km/kWh",
      range_km: 485,
      battery_kwh: 84,
      charging: "350kW DC (800V)",
    },
    pricing: {
      baseTrim: { name: "Standard E-Value+", priceKRW: 47_400_000 },
      recommendedTrim: {
        name: "Long Range Exclusive",
        priceKRW: 54_500_000,
        includedOptionPackages: [
          "인조가죽 + 운전석/동승석 전동시트",
          "1열 통풍/열선 시트",
          "실외 V2L 커넥터",
          "12.3\" 내비게이션 + 폰 프로젝션",
          "후방 모니터",
          "스마트 파워 테일게이트",
          "히트펌프",
        ],
      },
      fullOption: { priceKRW: 59_150_000 },
      essentials: {
        surroundView: "옵션",
        rearCamera: "기본",
        carplayAndroidAuto: "기본",
        adas: "옵션",
      },
    },
    subsidy: {
      nationalKRW: 5_670_000,
      seongnamKRW: 1_500_000,
      totalKRW: 7_170_000,
      realPurchasePriceKRW: 54_500_000 - 7_170_000,
      note: "2WD 기준 국고 567만원. AWD는 610만원. 현대 스마트센스(HDA2) 110만원 + 파킹 어시스트(SVM) 150만원 추가 권장.",
    },
    taxes: {
      acquisitionTaxKRW: Math.max(0, 54_500_000 * 0.07 - 1_400_000),
      estimatedRegistrationKRW: 400_000,
      evExemptions: [
        "개별소비세 최대 300만원 감면",
        "교육세 최대 90만원 감면",
        "취득세 최대 140만원 감면",
      ],
    },
    media: {
      youtube: [
        { videoId: "C7atP40eUc4", title: "아이오닉5 페이스리프트 시승기 (롱레인지 2WD)", channel: "자동차 리뷰" },
        { videoId: "55fjDcljpbU", title: "신형 현대 아이오닉 5 시승기 - 배터리 늘리고 가격 동결", channel: "김한용의 MOCAR" },
        { videoId: "IIPLzAO7QNc", title: "승차감도 부분변경... 아이오닉5 페이스리프트 시승기", channel: "자동차 리뷰" },
      ],
      blogs: [
        { url: "https://www.evpost.co.kr/wp/%EC%95%84%EC%9D%B4%EC%98%A4%EB%8B%895-2%EC%A3%BC%EA%B0%84-%EC%8B%9C%EC%8A%B9%EA%B8%B0%EC%9E%A5%EC%A0%90-%EB%8B%A8%EC%A0%90-%EB%B9%84%EA%B5%90-%EC%9C%84%EC%A3%BC/", title: "아이오닉5 2주 시승기 장단점", source: "EVPOST" },
        { url: "https://web.getcha.kr/blog/ioniq-5-real-price-guide-2026-ev-subsidy-trim-comparison", title: "아이오닉 5 실구매가 완벽 분석 2026", source: "겟차" },
        { url: "https://www.clien.net/service/board/cm_car/19033168", title: "아이오닉5 2WD 롱레인지 7개월 운용기", source: "클리앙" },
      ],
      officialUrl: "https://www.hyundai.com/kr/ko/e/vehicles/ioniq5/intro",
    },
    pros: [
      "E-GMP 800V 초급속 10→80% 18분",
      "84kWh·복합 485km·실내 넉넉 (축거 3,000mm)",
      "V2L(3.6kW 실내/실외) 기본 - 차박/캠핑 탁월",
      "히트펌프 기본 - 겨울 주행거리 방어",
      "페이스리프트로 승차감 대폭 개선",
    ],
    cons: [
      "HDA2/서라운드뷰가 중상위 트림도 별도 옵션",
      "3,000mm 휠베이스로 회전반경 커서 좁은 주차장 부담",
      "실도로 주행거리가 인증치 대비 낮은 편 (실 400km 수준)",
    ],
    dataAsOf: "2026-04-19",
  },

  // =========================================================================
  // 4. Genesis GV60
  // =========================================================================
  {
    slug: "genesis-gv60",
    name: "Genesis GV60",
    brand: "Genesis",
    segment: "MIDSIZE",
    fuelType: "EV",
    origin: "DOMESTIC",
    images: {
      hero: "https://www.genesis.com/content/dam/genesis-p2/kr/admin/model-information/GV60/list-thumbnail/2026-03-17/13-33-39/genesis-kr-admin-model-list-thumbnail-gv60-27my-desktop-630x240.png",
    },
    specs: {
      length_mm: 4545,
      width_mm: 1890,
      height_mm: 1580,
      wheelbase_mm: 2900,
      weight_kg: 2020,
      trunk_liters: 432,
      seats: 5,
      drivetrain: "RWD / AWD",
      powerHp: 225,
      torqueNm: 350,
      efficiency: "5.1km/kWh",
      range_km: 481,
      battery_kwh: 84,
      charging: "350kW DC (800V)",
    },
    pricing: {
      baseTrim: { name: "Standard 2WD", priceKRW: 64_900_000 },
      recommendedTrim: {
        name: "Standard 2WD + 파퓰러 패키지",
        priceKRW: 69_550_000,
        includedOptionPackages: [
          "파퓰러 패키지 (HUD + 컨비니언스 + 하이테크 + Driving Assistance I)",
          "서라운드 뷰 모니터 (DA I)",
          "지능형 헤드램프 (MLA)",
          "후방 카메라 (전 트림 기본)",
          "헤드업 디스플레이 (HUD)",
          "27인치 통합 OLED 디스플레이 (전 트림 기본)",
          "빌트인 캠 2 / 디지털 센터 미러 (F/L 기본)",
          "Apple CarPlay / Android Auto (유선)",
        ],
      },
      fullOption: { priceKRW: 85_000_000 },
      essentials: {
        surroundView: "옵션",
        rearCamera: "기본",
        carplayAndroidAuto: "기본",
        adas: "옵션",
      },
    },
    subsidy: {
      nationalKRW: 2_870_000,
      seongnamKRW: 700_000,
      totalKRW: 3_570_000,
      realPurchasePriceKRW: 69_550_000 - 3_570_000,
      note: "6,490만원대로 50% 지급률 구간. HDA2 포함 Driving Assistance II(148만원) 선택 시 ADAS 풀 구성.",
    },
    taxes: {
      acquisitionTaxKRW: Math.max(0, 69_550_000 * 0.07 - 1_400_000),
      estimatedRegistrationKRW: 400_000,
      evExemptions: [
        "개별소비세 최대 300만원 감면",
        "교육세 최대 90만원 감면",
        "취득세 최대 140만원 감면",
      ],
    },
    media: {
      youtube: [
        { videoId: "AlAOxVq2Mzk", title: "제네시스 GV60 시승기 / 25년형 페이스리프트", channel: "자동차 리뷰" },
        { videoId: "6ikUOM73fog", title: "제네시스 GV60 AWD 퍼포먼스 시승기", channel: "자동차 리뷰" },
        { videoId: "RkxtePkXGME", title: "GV60 페이스리프트 리뷰 / 오토뷰 로드테스트", channel: "오토뷰" },
      ],
      blogs: [
        { url: "https://www.top-rider.com/article/view/trd202507030001", title: "[시승기] GV60 부분변경, 유일한 단점은 가격", source: "탑라이더" },
        { url: "https://www.sisajournal-e.com/news/articleView.html?idxno=411364", title: "'푹신한 승차감에 폭발적 가속'… GV60", source: "시사저널e" },
        { url: "https://www.dailycar.co.kr/content/news.html?type=view&autoId=43051", title: "[시승기] GV60 후륜구동 주행보조 주행거리", source: "데일리카" },
      ],
      officialUrl: "https://www.genesis.com/kr/ko/models/luxury-suv-genesis/gv60.html",
    },
    pros: [
      "84kWh 4세대 배터리 + 800V 초급속 18분(10→80%)",
      "27인치 통합 와이드 OLED + 페이스 커넥트 등 프리미엄 감성",
      "페이스리프트로 빌트인 캠 2·디지털 센터 미러·스마트 회생제동 3.0 기본",
      "액티브 사운드 디자인(e-ASD)으로 세단급 승차감·정숙성",
      "크리스털 스피어 변속기 등 차별화된 UX",
    ],
    cons: [
      "동급(아이오닉5, EV6) 대비 3,000만원 이상 가격 차이",
      "트렁크 432L·쿠페 루프로 2열 헤드룸 제한",
      "서라운드 뷰·HDA2가 기본 아님 - 패키지 추가 필요",
    ],
    dataAsOf: "2026-04-19",
  },

  // =========================================================================
  // 5. Volvo EX40 (XC40 Recharge)
  // =========================================================================
  {
    slug: "volvo-ex40",
    name: "Volvo EX40 (XC40 Recharge)",
    brand: "Volvo",
    segment: "COMPACT",
    fuelType: "EV",
    origin: "IMPORT",
    images: {
      hero: "https://www.volvocars.com/kr/cars/ex40-electric/",
    },
    specs: {
      length_mm: 4440,
      width_mm: 1873,
      height_mm: 1647,
      wheelbase_mm: 2702,
      weight_kg: 2060,
      trunk_liters: 452,
      seats: 5,
      drivetrain: "RWD (싱글 모터)",
      powerHp: 252,
      torqueNm: 420,
      efficiency: "4.9km/kWh",
      range_km: 434,
      battery_kwh: 78,
      charging: "200kW DC",
    },
    pricing: {
      baseTrim: { name: "Single Motor Extended Range Ultra", priceKRW: 66_740_000 },
      recommendedTrim: {
        name: "Single Motor Extended Range Ultra (단일 트림)",
        priceKRW: 66_740_000,
        includedOptionPackages: [
          "360° 서라운드 뷰 카메라",
          "파일럿 어시스트 (ADAS)",
          "무선 Apple CarPlay / Android Auto",
          "하만카돈 프리미엄 사운드",
          "파노라마 글라스 루프",
          "픽셀 LED 헤드램프",
          "T맵 내비게이션 (SKT 협업)",
          "히트펌프",
          "어드밴스드 공기청정 (PM2.5 95% 차단)",
        ],
      },
      fullOption: { priceKRW: 66_740_000 },
      essentials: {
        surroundView: "기본",
        rearCamera: "기본",
        carplayAndroidAuto: "기본",
        adas: "기본",
      },
    },
    subsidy: {
      nationalKRW: 2_540_000,
      seongnamKRW: 650_000,
      totalKRW: 3_190_000,
      realPurchasePriceKRW: 66_740_000 - 3_190_000,
      note: "2026년 공식 확정금액 미공개. 2025년 XC40 Recharge 기준 254만원 추정치 적용.",
    },
    taxes: {
      acquisitionTaxKRW: Math.max(0, 66_740_000 * 0.07 - 1_400_000),
      estimatedRegistrationKRW: 400_000,
      evExemptions: [
        "개별소비세 최대 300만원 감면",
        "교육세 최대 90만원 감면",
        "취득세 최대 140만원 감면",
      ],
    },
    media: {
      youtube: [
        { videoId: "YPpTXgT5als", title: "2026 볼보 EX40 최초 공개!", channel: "자동차 리뷰" },
        { videoId: "bCfiQRHAqJc", title: "2026 볼보 EX40 EV - 혁신적인 전기 SUV", channel: "자동차 리뷰" },
        { videoId: "2hh_nfES5lY", title: "볼보 C40 리차지 시승기 (플랫폼 공유)", channel: "자동차 리뷰" },
      ],
      blogs: [
        { url: "https://web.getcha.kr/articles/rent-volvo-ex40-launch", title: "볼보 EX40 출시! XC40 리차저와 달라진 점", source: "겟차" },
        { url: "https://www.top-rider.com/article/view/trd202506050004", title: "볼보 EX40 깜짝 출시, 6,674만원·주행거리 434km", source: "탑라이더" },
        { url: "https://www.sisajournal-e.com/news/articleView.html?idxno=409923", title: "EX40 인증… 볼보 '전기차 대중화' 포석", source: "시사저널e" },
      ],
      officialUrl: "https://www.volvocars.com/kr/cars/ex40-electric/",
    },
    pros: [
      "단일 트림 풀옵션: 하만카돈·360 카메라·파일럿 어시스트·파노라마 루프·히트펌프 모두 기본",
      "싱글 모터 RWD 전환으로 주행거리 +97km (337 → 434km)",
      "200kW 급속충전 (10→80% 약 28분)",
      "T맵 SKT 협업 국내 특화 인포테인먼트",
      "어드밴스드 공기청정 (PM2.5 95%)",
    ],
    cons: [
      "CMA 기반 비전용 EV 플랫폼 → 2열 센터 터널 높음 (실질 4인승)",
      "공차중량 2,060kg (동급 대비 무거움)",
      "복합전비 4.9km/kWh (국산 전용 EV 대비 열위)",
    ],
    dataAsOf: "2026-04-19",
  },

  // =========================================================================
  // 6. Lexus NX350h
  // =========================================================================
  {
    slug: "lexus-nx",
    name: "Lexus NX350h / NX450h+",
    brand: "Lexus",
    segment: "MIDSIZE",
    fuelType: "HEV",
    origin: "IMPORT",
    images: {
      hero: "https://www.lexus.co.kr/models/NX-350h/",
    },
    specs: {
      length_mm: 4660,
      width_mm: 1865,
      height_mm: 1640,
      wheelbase_mm: 2690,
      weight_kg: 1850,
      trunk_liters: 520,
      seats: 5,
      drivetrain: "AWD (E-Four)",
      powerHp: 242,
      torqueNm: 240,
      efficiency: "14.0km/L",
      range_km: null,
      battery_kwh: null,
      charging: null,
    },
    pricing: {
      baseTrim: { name: "NX350h Premium", priceKRW: 66_950_000 },
      recommendedTrim: {
        name: "NX350h Premium",
        priceKRW: 66_950_000,
        includedOptionPackages: [
          "14\" 터치 디스플레이",
          "Lexus Safety System+ (PCS·LTA·DRCC·BSM·AHB)",
          "1열 통풍/열선 시트",
          "스티어링 휠 열선",
          "무선 Apple CarPlay / Android Auto",
          "후방 카메라",
          "전 트림 AWD (E-Four)",
        ],
      },
      fullOption: { priceKRW: 82_310_000 },
      essentials: {
        surroundView: "옵션",
        rearCamera: "기본",
        carplayAndroidAuto: "기본",
        adas: "기본",
      },
    },
    taxes: {
      acquisitionTaxKRW: 66_950_000 * 0.07,
      estimatedRegistrationKRW: 400_000,
      evExemptions: ["HEV 개별소비세 최대 70만원 감면 (~2026.12.31)"],
    },
    media: {
      youtube: [
        { videoId: "hkrzqh4917w", title: "이런 차 사면 10년 간 후회... 2026 렉서스 NX350h / 오토뷰", channel: "오토뷰" },
        { videoId: "2Qe2-mbCBes", title: "2026 렉서스 NX 350h 리뷰 | 하이브리드 SUV의 완벽한 진화", channel: "자동차 리뷰" },
        { videoId: "CZVW8s_jK8E", title: "렉서스 NX350h 리뷰(NX450h+ 비교) / 차읽남TV", channel: "차읽남TV" },
      ],
      blogs: [
        { url: "https://blog.carlab.kr/2026/01/20/2026-%EB%A0%89%EC%84%9C%EC%8A%A4-nx2%EC%84%B8%EB%8C%80/", title: "2026 렉서스 NX 가격 확정! 옵션 비교 및 실구매가", source: "카랩" },
        { url: "https://www.autoview.co.kr/news/articleView.html?idxno=98687", title: "[시승기] 2026년형 렉서스 NX350h", source: "오토뷰" },
        { url: "https://www.carnoon.co.kr/newcar/vehicle/11086", title: "렉서스 New Generation NX 가격표·제원", source: "카눈" },
      ],
      officialUrl: "https://www.lexus.co.kr/models/NX-350h/",
    },
    pros: [
      "정숙성 우수 (2세대 풍절음 15% 감소)",
      "실연비 우수 (공인 14.0km/L, 실 17~20km/L)",
      "LSS+ 안전 사양 전 트림 기본",
      "무선 CarPlay / Android Auto 지원",
      "렉서스 특유의 높은 내구성 및 잔존가치",
    ],
    cons: [
      "Premium 트림은 서라운드 뷰·HUD 미포함 (Luxury는 7,613만원으로 예산 초과)",
      "뒷좌석 무릎 공간 다소 좁음",
      "F SPORT 풀옵션은 8천만원대",
    ],
    dataAsOf: "2026-04-19",
    researchNotes: "NX350h Luxury(7,613만원)와 NX450h+ 모든 트림(7,471만~8,231만원)은 예산 초과. 본 사이트 추천은 예산 내 Premium 트림 기준.",
  },

  // =========================================================================
  // 7. Kia Sportage HEV
  // =========================================================================
  {
    slug: "kia-sportage-hev",
    name: "Kia Sportage Hybrid",
    brand: "Kia",
    segment: "MIDSIZE",
    fuelType: "HEV",
    origin: "DOMESTIC",
    images: {
      hero: "https://www.kia.com/content/dam/kwcms/kr/ko/images/vehicles/nq5pe/highlights/kv/kv_pc.jpg",
    },
    specs: {
      length_mm: 4685,
      width_mm: 1865,
      height_mm: 1660,
      wheelbase_mm: 2755,
      weight_kg: 1660,
      trunk_liters: 637,
      seats: 5,
      drivetrain: "2WD / AWD",
      powerHp: 235,
      torqueNm: 350,
      efficiency: "16.3km/L",
      range_km: null,
      battery_kwh: null,
      charging: null,
    },
    pricing: {
      baseTrim: { name: "Prestige 2WD", priceKRW: 33_460_000 },
      recommendedTrim: {
        name: "Signature 2WD + 모니터링(SVM) + 드라이브 와이즈(HDA2)",
        priceKRW: 41_690_000,
        includedOptionPackages: [
          "12.3\" 파노라믹 커브드 디스플레이",
          "무선 Apple CarPlay / Android Auto",
          "서라운드 뷰 모니터 (SVM 패키지 114만원)",
          "HDA2 + 스마트 크루즈 (드라이브 와이즈 124만원)",
          "운전석·동반석 전동 허리지지대",
          "후방 카메라 (전 트림 기본)",
          "KRELL 프리미엄 사운드 (옵션)",
        ],
      },
      fullOption: { priceKRW: 49_210_000 },
      essentials: {
        surroundView: "옵션",
        rearCamera: "기본",
        carplayAndroidAuto: "기본",
        adas: "옵션",
      },
    },
    taxes: {
      acquisitionTaxKRW: 39_310_000 * 0.07,
      estimatedRegistrationKRW: 400_000,
      evExemptions: ["HEV 개별소비세 최대 70만원 감면 (~2026.12.31)"],
    },
    media: {
      youtube: [
        { videoId: "NoCtl8UmBXc", title: "스포티지 하이브리드 2026 시승기", channel: "자동차 리뷰" },
        { videoId: "8ba1KkVqU9A", title: "스포티지 적당한 가격은? 4610만원 2026년형 최고트림", channel: "자동차 리뷰" },
        { videoId: "q3o88txJzx0", title: "\"4,577만원\" 스포티지 하이브리드 리뷰 (페이스리프트)", channel: "자동차 리뷰" },
      ],
      blogs: [
        { url: "https://withkia.com/entry/2025-%EA%B8%B0%EC%95%84-%EC%8A%A4%ED%8F%AC%ED%8B%B0%EC%A7%80-%EC%99%84%EB%B2%BD-%EB%B6%84%EC%84%9D-%ED%8A%B8%EB%A6%BC%EB%B3%84-%EA%B0%80%EA%B2%A9%EB%B6%80%ED%84%B0-%ED%92%80%EC%98%B5%EC%85%98%EA%B9%8C%EC%A7%80-%EC%B4%9D%EC%A0%95%EB%A6%AC", title: "2025 기아 스포티지 완벽 분석", source: "위드 기아" },
        { url: "https://www.heydealer.com/blog/%EC%8A%A4%ED%8F%AC%ED%8B%B0%EC%A7%80-%ED%95%98%EC%9D%B4%EB%B8%8C%EB%A6%AC%EB%93%9C-%EB%8B%A8%EC%A0%90-%EC%B4%9D%EC%A0%95%EB%A6%AC-%EC%A4%91%EA%B3%A0%EC%B0%A8-%EA%B5%AC%EB%A7%A4-%EC%A0%84-%ED%95%84/", title: "스포티지 하이브리드 단점 총정리", source: "헤이딜러" },
        { url: "https://v.daum.net/v/tEFLE4YCWN", title: "2026 기아 스포티지 하이브리드 옵션별 견적", source: "카삼" },
      ],
      officialUrl: "https://www.kia.com/kr/vehicles/sportage",
    },
    pros: [
      "공인 복합연비 16.3km/L - 국산 HEV SUV 최상위",
      "시스템 출력 235ps - 여유 가속",
      "기본 637L 트렁크 + 2열 폴딩 1,923L",
      "12.3\" 파노라믹 커브드 디스플레이 + 무선 CarPlay",
      "2026년형 기본 사양 대폭 상향",
    ],
    cons: [
      "EV→엔진 전환 시 저속 울컥거림",
      "6단 AT (경쟁사 다단화 추세 대비 뒤처짐)",
      "풀옵션 시 4,900만원대 (가솔린 대비 약 670만원 프리미엄)",
    ],
    dataAsOf: "2026-04-19",
  },

  // =========================================================================
  // 8. Hyundai Tucson HEV
  // =========================================================================
  {
    slug: "hyundai-tucson-hev",
    name: "Hyundai Tucson Hybrid",
    brand: "Hyundai",
    segment: "MIDSIZE",
    fuelType: "HEV",
    origin: "DOMESTIC",
    images: {
      hero: "https://www.hyundai.com/kr/ko/e/vehicles/tucson-hybrid/intro",
    },
    specs: {
      length_mm: 4640,
      width_mm: 1865,
      height_mm: 1665,
      wheelbase_mm: 2755,
      weight_kg: 1625,
      trunk_liters: 622,
      seats: 5,
      drivetrain: "2WD / HTRAC (AWD)",
      powerHp: 245,
      torqueNm: 350,
      efficiency: "16.2km/L",
      range_km: null,
      battery_kwh: null,
      charging: null,
    },
    pricing: {
      baseTrim: { name: "모던 2WD", priceKRW: 32_790_000 },
      recommendedTrim: {
        name: "H-Pick 2WD",
        priceKRW: 36_110_000,
        includedOptionPackages: [
          "스마트 크루즈 + HDA (H-Pick부터 기본)",
          "전방 충돌방지 보조 (교차로/대향차)",
          "무선 Apple CarPlay / Android Auto",
          "운전석/동반석 전동 조절",
          "2열 좌석 열선",
          "후방 카메라",
          "어드밴스드 후석 승객 알림",
        ],
      },
      fullOption: { priceKRW: 44_750_000 },
      essentials: {
        surroundView: "옵션",
        rearCamera: "기본",
        carplayAndroidAuto: "기본",
        adas: "기본",
      },
    },
    taxes: {
      acquisitionTaxKRW: 36_110_000 * 0.07,
      estimatedRegistrationKRW: 400_000,
      evExemptions: ["HEV 개별소비세 최대 70만원 감면 (~2026.12.31)"],
    },
    media: {
      youtube: [
        { videoId: "fYT3CUOymWs", title: "2026 투싼 하이브리드, 2025년에 다시 시승", channel: "자동차 리뷰" },
        { videoId: "6OhiO4Yy-dY", title: "2026 Hyundai Tucson Hybrid Review", channel: "국제 리뷰" },
        { videoId: "33wvCaV81xI", title: "LIVING WITH THE 2026 Hyundai Tucson [Hybrid]", channel: "국제 리뷰" },
      ],
      blogs: [
        { url: "https://seorenn.github.io/article/tucson-hev-nx4-facelift-review.html", title: "투싼 하이브리드 개인적 평가 (NX4 F/L)", source: "seorenn" },
        { url: "https://jasonryu.net/2025/08/07/new-car-2026-hyundai-tucson/", title: "2026 현대 투싼 (H-Pick·블랙 익스테리어 추가)", source: "jasonryu.net" },
        { url: "https://web.getcha.kr/blog/tucson-new-car-price-complete-analysis-2026/", title: "투싼 신차가격 완벽 분석 2026", source: "겟차" },
      ],
      officialUrl: "https://www.hyundai.com/kr/ko/e/vehicles/tucson-hybrid/intro",
    },
    pros: [
      "국산 HEV SUV 최상위권 연비 (도심 21.9km/L)",
      "622L급 넉넉한 트렁크",
      "H-Pick 트림으로 ADAS 기본화 + 가격 경쟁력",
      "파라메트릭 듀얼 그릴·픽셀 리어램프 최신 디자인",
      "2026년형 기본 안전 사양 대폭 상향",
    ],
    cons: [
      "가솔린 대비 400만원+ 프리미엄 (손익분기 7년 2개월)",
      "뒷좌석 단일 유리 구조로 주행 소음 체감",
      "야간 서라운드 뷰 화질 제한적",
    ],
    dataAsOf: "2026-04-19",
  },

  // =========================================================================
  // 9. Kia Sorento HEV
  // =========================================================================
  {
    slug: "kia-sorento-hev",
    name: "Kia Sorento Hybrid",
    brand: "Kia",
    segment: "MIDSIZE",
    fuelType: "HEV",
    origin: "DOMESTIC",
    images: {
      hero: "https://www.kia.com/content/dam/kwp/kr/ko/vehicles/sorento/24pe/sorento_feature_bg_pc.jpg",
    },
    specs: {
      length_mm: 4815,
      width_mm: 1900,
      height_mm: 1695,
      wheelbase_mm: 2815,
      weight_kg: 1820,
      trunk_liters: 813,
      seats: 5,
      drivetrain: "2WD / AWD",
      powerHp: 235,
      torqueNm: 367,
      efficiency: "15.7km/L",
      range_km: null,
      battery_kwh: null,
      charging: null,
    },
    pricing: {
      baseTrim: { name: "Prestige 2WD", priceKRW: 39_580_000 },
      recommendedTrim: {
        name: "Noblesse 2WD (5인승)",
        priceKRW: 42_840_000,
        includedOptionPackages: [
          "서라운드 뷰 모니터 (SVM) - 기본",
          "원격 스마트 주차 보조",
          "12.3\" 파노라믹 커브드 디스플레이",
          "12.3\" 디지털 클러스터",
          "전자식 변속레버 (SBW)",
          "후측방 충돌방지 보조",
          "후방 카메라",
          "Apple CarPlay / Android Auto",
        ],
      },
      fullOption: { priceKRW: 49_570_000 },
      essentials: {
        surroundView: "기본",
        rearCamera: "기본",
        carplayAndroidAuto: "기본",
        adas: "옵션",
      },
    },
    taxes: {
      acquisitionTaxKRW: 42_840_000 * 0.07,
      estimatedRegistrationKRW: 400_000,
      evExemptions: ["HEV 개별소비세 최대 70만원 감면 (~2026.12.31)"],
    },
    media: {
      youtube: [
        { videoId: "ZbHKKsPaLqU", title: "쏘렌토 하이브리드 시승기, 2026 KIA Sorento Hybrid 2WD", channel: "자동차 리뷰" },
        { videoId: "ESiuarSl4wg", title: "쏘렌토 하이브리드 고속주행 연비리뷰", channel: "자동차 리뷰" },
        { videoId: "M10o6x91gBU", title: "2026 기아 쏘렌토 하이브리드 (EU Spec) / 오토뷰", channel: "오토뷰" },
      ],
      blogs: [
        { url: "https://web.getcha.kr/owners-review/%EA%B8%B0%EC%95%84/176/8742", title: "2026 쏘렌토 5인승 HEV 1.6 시그니처 1달 후기", source: "겟차 오너리뷰" },
        { url: "https://jagamlab.com/2026-%EC%8F%98%EB%A0%8C%ED%86%A0-%ED%95%98%EC%9D%B4%EB%B8%8C%EB%A6%AC%EB%93%9C-%EA%B8%B0%EB%B3%B8-%EC%82%AC%EC%96%91-%EA%B0%80%EA%B2%A9-%EC%A0%9C%EC%9B%90-%EC%97%B0%EB%B9%84-%EB%A6%AC/", title: "2026 쏘렌토 하이브리드 기본 사양·가격·연비", source: "자동차감성공학LAB" },
        { url: "https://www.heydealer.com/blog/2026-%EC%8F%98%EB%A0%8C%ED%86%A0-%EC%98%B5%EC%85%98-%EB%B3%80%ED%99%94-%EC%B4%9D%EC%A0%95%EB%A6%AC-%ED%8A%B8%EB%A6%BC%EB%B3%84-%ED%8A%B9%EC%A7%95%EA%B3%BC-%EA%B0%80%EA%B2%A9%ED%91%9C-%EB%B9%84/", title: "2026 쏘렌토 옵션 변화 총정리", source: "헤이딜러" },
      ],
      officialUrl: "https://www.kia.com/kr/vehicles/sorento",
    },
    pros: [
      "복합연비 15.7km/L (중형 SUV 최고 수준)",
      "시스템 출력 235ps - 장거리 여유",
      "10에어백 + HDA2 + SVM 풀 안전 패키지",
      "국내 판매 1위 SUV의 검증된 상품성",
      "5/6/7인승 + 2WD/AWD 다양한 구성",
    ],
    cons: [
      "1-2인엔 오버스펙 (중형 7인승 콘셉트)",
      "풀옵션 시 5,000만원 근접",
      "출발 직후 반응 지연 (HEV 특성)",
    ],
    dataAsOf: "2026-04-19",
  },

  // =========================================================================
  // 10. Volvo XC60 B5
  // =========================================================================
  {
    slug: "volvo-xc60",
    name: "Volvo XC60 B5",
    brand: "Volvo",
    segment: "MIDSIZE",
    fuelType: "MHEV",
    origin: "IMPORT",
    images: {
      hero: "https://www.volvocars.com/kr/cars/xc60/",
    },
    specs: {
      length_mm: 4708,
      width_mm: 1902,
      height_mm: 1651,
      wheelbase_mm: 2865,
      weight_kg: 1930,
      trunk_liters: 483,
      seats: 5,
      drivetrain: "AWD (B5 단일)",
      powerHp: 250,
      torqueNm: 350,
      efficiency: "10.7km/L",
      range_km: null,
      battery_kwh: null,
      charging: null,
    },
    pricing: {
      baseTrim: { name: "B5 AWD Plus Bright", priceKRW: 65_700_000 },
      recommendedTrim: {
        name: "B5 AWD Plus Bright",
        priceKRW: 65_700_000,
        includedOptionPackages: [
          "360° 서라운드 뷰 카메라",
          "파일럿 어시스트 (반자율 주행)",
          "무선 Apple CarPlay / Android Auto",
          "TMAP 한국 전용 인포테인먼트",
          "파노라마 선루프",
          "후방 카메라",
          "BLIS (사각지대 경보)",
          "11.2\" 세로형 디스플레이",
        ],
      },
      fullOption: { priceKRW: 73_300_000 },
      essentials: {
        surroundView: "기본",
        rearCamera: "기본",
        carplayAndroidAuto: "기본",
        adas: "기본",
      },
    },
    taxes: {
      acquisitionTaxKRW: 65_700_000 * 0.07,
      estimatedRegistrationKRW: 400_000,
      evExemptions: ["48V MHEV는 2026년 현재 별도 감면 없음"],
    },
    media: {
      youtube: [
        { videoId: "L3cJybQIbfU", title: "대안이 없다... 2024년형 볼보 XC60 B5 리뷰 / 오토뷰", channel: "오토뷰" },
        { videoId: "yNwQkT5ckzU", title: "[비교] 볼보 XC60 B5 & B6 시승기", channel: "오토뷰" },
        { videoId: "xjVkNw4Zj3Q", title: "2025 Volvo XC60 B5: Luxury Packaged for Less?", channel: "국제 리뷰" },
      ],
      blogs: [
        { url: "https://itreview.kr/2026-%EB%B3%BC%EB%B3%B4-xc60-%EA%B0%80%EA%B2%A9%C2%B7%EC%A0%9C%EC%9B%90%C2%B7%ED%95%A0%EC%9D%B8-%EC%A1%B0%EA%B1%B4-%EC%99%84%EB%B2%BD-%EC%A0%95%EB%A6%AC/", title: "2026 볼보 XC60 가격·제원·할인", source: "IT Review" },
        { url: "https://www.carnoon.co.kr/newcar/vehicle/11028", title: "볼보 The New XC60 가격표·제원", source: "카눈" },
        { url: "https://www.motorgraph.com/news/articleView.html?idxno=42464", title: "베스트셀러에는 이유가 있다! 볼보 XC60 리뷰", source: "모터그래프" },
      ],
      officialUrl: "https://www.volvocars.com/kr/cars/xc60/",
    },
    pros: [
      "48V MHEV 기반 부드러운 발진·정숙성",
      "6.9초 0→100km/h, 저회전 토크 1,800rpm",
      "파일럿 어시스트·360 카메라·BLIS 풀세트 ADAS 기본",
      "볼보 브랜드 고유 안전 철학",
      "TMAP + 무선 CarPlay/AA 병행",
    ],
    cons: [
      "Core 트림 부재로 진입가 6,570만원 다소 높음",
      "시내 실연비 7~8km/L (공인 10.7km/L 대비 하락)",
      "250마력으로 경쟁 대비 절대 출력은 평이",
    ],
    dataAsOf: "2026-04-19",
  },
];

export function getVehicleBySlug(slug: string): Vehicle | undefined {
  return VEHICLES.find((v) => v.slug === slug);
}
