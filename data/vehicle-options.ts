import type { Trim, AddOnOption } from "./schema";

export interface VehicleOptionsData {
  trims: Trim[];
  addOnOptions: AddOnOption[];
  notes?: string;
}

export const VEHICLE_OPTIONS: Record<string, VehicleOptionsData> = {
  // =========================================================================
  "tesla-model-y": {
    trims: [
      {
        name: "RWD (프리미엄)",
        priceKRW: 49_990_000,
        drivetrain: "RWD",
        keyFeatures: [
          "후륜구동",
          "Autopilot 기본",
          "15.4인치 센터 디스플레이",
          "파노라마 글래스 루프",
          "15스피커 프리미엄 오디오",
          "1회 충전 400km",
        ],
      },
      {
        name: "Long Range AWD",
        priceKRW: 59_990_000,
        drivetrain: "AWD",
        keyFeatures: [
          "듀얼 모터 AWD",
          "Autopilot 기본",
          "1회 충전 500km",
          "히트펌프",
          "0-100 4.3초",
        ],
      },
      {
        name: "Performance AWD",
        priceKRW: 70_660_000,
        drivetrain: "AWD",
        keyFeatures: [
          "618마력 고성능",
          "0-100 3.3초",
          "21인치 퍼포먼스 휠",
          "스포츠 서스펜션",
          "카본 스포일러",
        ],
      },
    ],
    addOnOptions: [
      { id: "pearl-white", name: "Pearl White Multi-Coat 페인트", category: "외관", priceKRW: 1_280_000, description: "기본은 Stealth Grey. 펄 화이트는 멀티 코트 페인트" },
      { id: "marine-blue", name: "Marine Blue (마린 블루)", category: "외관", priceKRW: 1_920_000, description: "메탈릭 페인트" },
      { id: "diamond-black", name: "Diamond Black (다이아몬드 블랙)", category: "외관", priceKRW: 1_920_000, description: "메탈릭 페인트" },
      { id: "glacier-blue", name: "Glacier Blue (글래시어 블루)", category: "외관", priceKRW: 1_920_000, description: "2026년형 신규 추가 컬러" },
      { id: "ultra-red", name: "Ultra Red (울트라 레드)", category: "외관", priceKRW: 2_750_000, description: "멀티 코트 페인트" },
      { id: "quicksilver", name: "Quicksilver (퀵실버)", category: "외관", priceKRW: 2_750_000, description: "2026년형 신규 프리미엄 컬러" },
      { id: "wheels-helix-20", name: '20" Helix 2.0 휠 (다크 그레이)', category: "외관", priceKRW: 2_500_000, description: "기본 19\" → 20\" 업그레이드. 주행거리 약 10% 감소" },
      { id: "interior-white", name: "화이트 & 블랙 프리미엄 인테리어", category: "실내", priceKRW: 1_500_000, description: "올블랙에서 화이트 2-tone 시트·패널로" },
      { id: "tow-package", name: "Tesla 토우 패키지 (1,600kg 견인)", category: "기타", priceKRW: 1_400_000, description: "2\" 히치 리시버 + 토우 소프트웨어" },
      { id: "eap", name: "Enhanced Autopilot (EAP)", category: "ADAS", priceKRW: 4_522_000, description: "자동 차선 변경 + Autopark + Summon + Navigate on Autopilot" },
      { id: "fsd", name: "Full Self-Driving 감독형 (FSD)", category: "ADAS", priceKRW: 9_043_000, description: "신호/정지표지 인식. 한국 규제로 기능 제한적", recommended: false },
      { id: "premium-connectivity", name: "프리미엄 커넥티비티 (연간 구독)", category: "편의", priceKRW: 118_800, description: "월 9,900원. 스트리밍·실시간 교통·위성 지도" },
    ],
    notes: "Tesla 공식 프로모션 적용 시 일부 색상 무상 가능. 가격은 2026년 4월 기준 teslab.kr·carnoon 교차검증치.",
  },

  // =========================================================================
  "kia-ev6": {
    trims: [
      { name: "Light 스탠다드", priceKRW: 43_600_000, drivetrain: "2WD", keyFeatures: ["63kWh 배터리", "주행 382km", "기본 ADAS(FCA/LKA)", "후방 카메라"] },
      { name: "Light 롱레인지", priceKRW: 47_600_000, drivetrain: "2WD", keyFeatures: ["84kWh 배터리", "주행 494km", "기본 편의"] },
      { name: "Air 스탠다드", priceKRW: 48_400_000, drivetrain: "2WD", keyFeatures: ["63kWh", "열선/통풍 시트", "스마트 크루즈"] },
      { name: "Air 롱레인지", priceKRW: 52_400_000, drivetrain: "2WD", keyFeatures: ["84kWh", "주행 494km", "스마트 크루즈"] },
      { name: "Earth 스탠다드", priceKRW: 52_400_000, drivetrain: "2WD" },
      {
        name: "Earth 롱레인지",
        priceKRW: 56_400_000,
        drivetrain: "2WD",
        keyFeatures: [
          "서라운드 뷰 모니터 (SVM)",
          "나파가죽 시트",
          "파노라믹 커브드 디스플레이",
          "스마트 파워 테일게이트",
          "지능형 LED 헤드램프",
        ],
      },
      {
        name: "GT-Line 롱레인지",
        priceKRW: 57_000_000,
        drivetrain: "2WD",
        keyFeatures: ["GT-Line 외장", "메리디안 사운드 옵션화", "20인치 휠"],
      },
      {
        name: "EV6 GT (고성능)",
        priceKRW: 71_990_000,
        drivetrain: "AWD",
        keyFeatures: ["609~650 마력", "0-100 3.5초", "별도 고성능 라인업"],
      },
    ],
    addOnOptions: [
      { id: "drive-wise", name: "드라이브 와이즈 (HDA2 + 원격 스마트 주차 보조 2)", category: "ADAS", priceKRW: 750_000, recommended: true },
      { id: "wide-sunroof", name: "와이드 선루프", category: "편의", priceKRW: 640_000 },
      { id: "meridian", name: "메리디안 프리미엄 사운드 (14스피커)", category: "오디오", priceKRW: 990_000 },
      { id: "4wd", name: "듀얼 모터 4WD 전환", category: "기타", priceKRW: 2_470_000 },
      { id: "smart-tailgate", name: "스마트 파워 테일게이트 (Light/Air)", category: "편의", priceKRW: 400_000 },
      { id: "convenience-2", name: "컨비니언스 II 패키지", category: "편의", priceKRW: 900_000 },
      { id: "snow-white", name: "스노우 화이트 펄 색상", category: "외관", priceKRW: 80_000 },
      { id: "matte-color", name: "무광 컬러 (문스케이프/아이보리)", category: "외관", priceKRW: 300_000 },
    ],
  },

  // =========================================================================
  "hyundai-ioniq-5": {
    trims: [
      { name: "Standard E-Value+", priceKRW: 47_400_000, drivetrain: "2WD", keyFeatures: ["63kWh", "주행 368km", "기본 편의"] },
      { name: "Standard Exclusive", priceKRW: 50_300_000, drivetrain: "2WD" },
      { name: "Long Range E-Lite", priceKRW: 50_640_000, drivetrain: "2WD", keyFeatures: ["84kWh", "주행 485km", "직물 시트", "실내/외 V2L 미적용"] },
      {
        name: "Long Range Exclusive",
        priceKRW: 54_500_000,
        drivetrain: "2WD",
        keyFeatures: [
          "인조가죽 + 전동시트",
          "열선/통풍",
          "실외 V2L 커넥터",
          "스마트 파워 테일게이트",
          "히트펌프",
        ],
      },
      { name: "Long Range N Line Exclusive", priceKRW: 56_500_000, drivetrain: "2WD", keyFeatures: ["N Line 디자인", "20인치 전용 휠"] },
      {
        name: "Long Range Prestige",
        priceKRW: 59_150_000,
        drivetrain: "2WD",
        keyFeatures: ["HDA2 기본", "BOSE 8스피커", "HUD", "디지털 키 2", "무선 충전", "천연가죽"],
      },
      { name: "Long Range N Line Prestige", priceKRW: 60_250_000, drivetrain: "2WD" },
      { name: "IONIQ 5 N (고성능)", priceKRW: 77_690_000, drivetrain: "AWD", keyFeatures: ["609~650 마력", "N 전용 서스펜션", "별도 라인업"] },
    ],
    addOnOptions: [
      { id: "htrac", name: "HTRAC (AWD) 전환", category: "기타", priceKRW: 2_470_000 },
      { id: "smart-sense", name: "현대 스마트 센스 (HDA2 + BSD)", category: "ADAS", priceKRW: 1_100_000, recommended: true },
      { id: "parking-assist", name: "파킹 어시스트 패키지 (서라운드 뷰 포함)", category: "ADAS", priceKRW: 1_500_000, recommended: true },
      { id: "parking-assist-lite", name: "파킹 어시스트 Lite", category: "ADAS", priceKRW: 800_000 },
      { id: "built-in-cam", name: "빌트인 캠 2 + AR 네비게이션", category: "편의", priceKRW: 450_000 },
      { id: "digital-mirror", name: "디지털 센터 미러", category: "편의", priceKRW: 500_000 },
      { id: "20-wheel", name: "20인치 휠 (미쉐린)", category: "외관", priceKRW: 490_000 },
      { id: "comfort", name: "컴포트 패키지", category: "편의", priceKRW: 750_000 },
      { id: "style", name: "스타일 패키지", category: "외관", priceKRW: 1_200_000 },
      { id: "vision-roof", name: "비전 루프 (고정형)", category: "편의", priceKRW: 740_000 },
      { id: "digital-side-mirror", name: "디지털 사이드 미러", category: "편의", priceKRW: 1_380_000 },
    ],
  },

  // =========================================================================
  "genesis-gv60": {
    trims: [
      { name: "Standard 2WD", priceKRW: 64_900_000, drivetrain: "2WD", keyFeatures: ["84kWh", "주행 481km", "228마력", "기본 편의"] },
      { name: "Standard AWD", priceKRW: 68_510_000, drivetrain: "AWD", keyFeatures: ["듀얼 모터", "318마력", "주행 437km"] },
      { name: "Performance AWD", priceKRW: 72_880_000, drivetrain: "AWD", keyFeatures: ["429마력 (부스트 490ps)", "0-100 4.0초", "주행 382km"] },
      { name: "GV60 Magma (고성능)", priceKRW: 96_570_000, drivetrain: "AWD", keyFeatures: ["641마력", "2026 뉴욕쇼 공개"] },
    ],
    addOnOptions: [
      {
        id: "popular",
        name: "파퓰러 패키지 (HUD + 컨비니언스 + 하이테크 + DA I)",
        category: "편의",
        priceKRW: 4_650_000,
        recommended: true,
        description: "서라운드 뷰·HUD·지능형 헤드램프 등 핵심 편의사양 번들",
      },
      { id: "da2", name: "드라이빙 어시스턴스 II (HDA2 + FCA2 + SCC)", category: "ADAS", priceKRW: 1_480_000, recommended: true },
      { id: "da1", name: "드라이빙 어시스턴스 I (서라운드 뷰 + LKA2)", category: "ADAS", priceKRW: 1_980_000 },
      { id: "convenience", name: "컨비니언스 패키지", category: "편의", priceKRW: 1_980_000 },
      { id: "high-tech", name: "하이테크 패키지 (MLA + 디지털 키 2)", category: "편의", priceKRW: 1_090_000 },
      { id: "signature-1", name: "시그니처 디자인 셀렉션 I", category: "실내", priceKRW: 1_500_000 },
      { id: "signature-2", name: "시그니처 디자인 셀렉션 II (나파가죽)", category: "실내", priceKRW: 2_700_000 },
      { id: "built-in-cam", name: "빌트인 캠 + 보조배터리", category: "편의", priceKRW: 700_000 },
      { id: "digital-side-mirror", name: "디지털 사이드 미러", category: "편의", priceKRW: 1_500_000 },
    ],
  },

  // =========================================================================
  "volvo-ex40": {
    trims: [
      {
        name: "Single Motor Extended Range Ultra (단일 트림)",
        priceKRW: 66_740_000,
        drivetrain: "RWD",
        keyFeatures: [
          "252마력 / 420Nm",
          "주행 434km",
          "200kW DC 급속",
          "360° 서라운드 뷰",
          "파일럿 어시스트",
          "무선 CarPlay",
          "하만카돈",
          "파노라마 글라스 루프",
          "히트펌프",
        ],
      },
    ],
    addOnOptions: [
      { id: "crystal-white", name: "Crystal White Pearl (크리스탈 화이트 펄)", category: "외관", priceKRW: 1_000_000, description: "펄 페인트 업차지" },
      { id: "onyx-black", name: "Onyx Black Metallic (오닉스 블랙)", category: "외관", priceKRW: 800_000, description: "메탈릭 컬러" },
      { id: "denim-blue", name: "Denim Blue Metallic (데님 블루)", category: "외관", priceKRW: 800_000 },
      { id: "vapour-grey", name: "Vapour Grey (베이퍼 그레이)", category: "외관", priceKRW: 800_000 },
      { id: "sand-dune", name: "Sand Dune (샌드 듄)", category: "외관", priceKRW: 1_000_000, description: "2026 신규 컬러" },
      { id: "cloud-blue", name: "Cloud Blue (클라우드 블루)", category: "외관", priceKRW: 800_000 },
      { id: "aurora-silver", name: "Aurora Silver Metallic (오로라 실버)", category: "외관", priceKRW: 800_000 },
      { id: "forest-lake", name: "Forest Lake (포레스트 레이크)", category: "외관", priceKRW: 800_000, description: "2026 신규 그린 계열" },
      { id: "wheels-20-black-diamond-cut", name: '20" 5-Y Spoke 블랙 다이아몬드 컷 휠', category: "외관", priceKRW: 1_500_000, description: "Ultra 휠 업그레이드" },
      { id: "black-edition-package", name: "Black Edition 패키지 (블랙 악센트·엠블럼·전용 휠)", category: "외관", priceKRW: 2_000_000 },
      { id: "interior-charcoal-premium", name: "프리미엄 인테리어 (노르디코 차콜/Connect 텍스타일)", category: "실내", priceKRW: 1_500_000, description: "친환경 바이오 기반 소재" },
      { id: "tow-bar-semi-electric", name: "세미 전동식 토우바 (1,500kg 견인)", category: "기타", priceKRW: 2_200_000 },
      { id: "roof-rails", name: "루프 레일/크로스바 패키지", category: "외관", priceKRW: 800_000, description: "딜러 순정 액세서리" },
      { id: "winter-mat-package", name: "윈터 러버 매트 + 트렁크 프로텍터", category: "기타", priceKRW: 450_000 },
    ],
    notes: "Single Motor Extended Range Ultra 단일 트림에 대부분 기본 포함. 추가 옵션은 색상·휠·액세서리 위주.",
  },

  // =========================================================================
  "lexus-nx": {
    trims: [
      {
        name: "NX350h Premium (HEV)",
        priceKRW: 66_950_000,
        drivetrain: "AWD",
        keyFeatures: [
          "14인치 터치 디스플레이",
          "LSS+ 안전",
          "1열 통풍/열선",
          "무선 CarPlay/AA",
          "후방 카메라",
          "서라운드 뷰 미포함",
        ],
      },
      {
        name: "NX350h Luxury (HEV, 예산 초과)",
        priceKRW: 76_130_000,
        drivetrain: "AWD",
        keyFeatures: [
          "트리플 빔 LED",
          "마크 레빈슨 17스피커",
          "파노라마 선루프",
          "디지털 리어뷰 미러",
          "HUD 10인치",
          "파노라믹 뷰 모니터 (서라운드 뷰)",
        ],
      },
      {
        name: "NX450h+ Premium (PHEV, 예산 초과)",
        priceKRW: 74_710_000,
        drivetrain: "AWD",
        keyFeatures: ["18.1kWh 배터리", "EV 주행 56km", "307마력", "0-100 6.0초"],
      },
      {
        name: "NX450h+ F SPORT (PHEV, 예산 초과)",
        priceKRW: 82_310_000,
        drivetrain: "AWD",
        keyFeatures: ["F SPORT 전용 외장", "AVS 가변 서스펜션", "퍼포먼스 댐퍼"],
      },
    ],
    addOnOptions: [
      { id: "sonic-iridium", name: "Sonic Iridium 프리미엄 페인트", category: "외관", priceKRW: 1_500_000 },
      { id: "sonic-titanium", name: "Sonic Titanium 프리미엄 페인트", category: "외관", priceKRW: 1_500_000 },
      { id: "sonic-chrome", name: "Sonic Chrome", category: "외관", priceKRW: 1_500_000 },
      { id: "ultrasonic-blue-mica", name: "Ultrasonic Blue Mica 2.0", category: "외관", priceKRW: 1_500_000, description: "F SPORT 시그니처" },
      { id: "infrared", name: "Infrared (인프라레드)", category: "외관", priceKRW: 1_800_000, description: "2026 신규" },
      { id: "ultra-white", name: "Ultra White", category: "외관", priceKRW: 1_200_000 },
      { id: "grecian-water", name: "Grecian Water", category: "외관", priceKRW: 1_500_000 },
      { id: "copper-crest", name: "Copper Crest", category: "외관", priceKRW: 1_500_000 },
      { id: "f-sport-handling-package", name: "F SPORT Handling 패키지", category: "외관", priceKRW: 5_500_000, description: "메쉬 그릴·블랙 20\" 휠·AVS·F SPORT 시트" },
      { id: "black-emblem-package", name: "아크릴 블랙 엠블럼 패키지", category: "외관", priceKRW: 350_000 },
      { id: "mark-levinson-audio", name: "Mark Levinson 17스피커", category: "오디오", priceKRW: 2_800_000 },
      { id: "panoramic-sunroof", name: "파노라마 글래스 선루프", category: "편의", priceKRW: 1_500_000 },
      { id: "head-up-display-10", name: '10" 헤드업 디스플레이', category: "편의", priceKRW: 1_200_000 },
      { id: "panoramic-view-monitor", name: "파노라믹 뷰 모니터 (360° 서라운드)", category: "안전", priceKRW: 1_200_000, recommended: true },
      { id: "digital-rear-mirror", name: "디지털 리어 뷰 미러", category: "편의", priceKRW: 700_000 },
      { id: "triple-beam-led", name: "트리플 빔 LED 헤드램프 (BladeScan)", category: "외관", priceKRW: 1_500_000 },
      { id: "wheels-20-black", name: '20" 블랙 알로이 휠 (F SPORT 전용)', category: "외관", priceKRW: 1_800_000 },
      { id: "interior-flare-red", name: "F SPORT 전용 Flare Red 인테리어", category: "실내", priceKRW: 800_000 },
      { id: "semi-aniline-leather", name: "세미 아닐린 가죽 시트", category: "실내", priceKRW: 1_500_000, description: "Black/Palomino/Ivory" },
      { id: "roof-rail-package", name: "루프 레일 & 크로스바", category: "외관", priceKRW: 600_000 },
      { id: "tow-hitch", name: "견인 히치 패키지 (907kg)", category: "기타", priceKRW: 900_000 },
    ],
    notes: "Lexus는 Premium → Luxury / F SPORT 업그레이드가 주된 구성. 본 목록은 각 옵션을 개별로 펼친 참고용.",
  },

  // =========================================================================
  "kia-sportage-hev": {
    trims: [
      { name: "Prestige 2WD", priceKRW: 33_460_000, drivetrain: "2WD", keyFeatures: ["HEV 진입", "레인센서", "공기청정", "2열 USB-C"] },
      { name: "Noblesse 2WD", priceKRW: 36_700_000, drivetrain: "2WD", keyFeatures: ["2열 차음 글라스", "세이프티 파워윈도우", "SVM/HDA2 선택 가능"] },
      {
        name: "Signature 2WD",
        priceKRW: 39_310_000,
        drivetrain: "2WD",
        keyFeatures: ["동승석 전동 허리지지대", "12.3인치 파노라믹 디스플레이", "10인치 HUD 선택"],
      },
      { name: "Signature X-Line 2WD", priceKRW: 39_950_000, drivetrain: "2WD", keyFeatures: ["블랙 휠/엠블럼", "스웨이드 헤드라이닝"] },
      { name: "Signature X-Line 4WD Premium", priceKRW: 49_210_000, drivetrain: "AWD", keyFeatures: ["풀옵션 최상위", "스노/머드/샌드 주행모드"] },
    ],
    addOnOptions: [
      { id: "svm", name: "모니터링 패키지 (서라운드 뷰 + 후방 주차 충돌방지)", category: "ADAS", priceKRW: 1_140_000, recommended: true },
      { id: "drive-wise", name: "드라이브 와이즈 (HDA2)", category: "ADAS", priceKRW: 1_240_000, recommended: true },
      { id: "sunroof", name: "파노라마 선루프", category: "편의", priceKRW: 1_090_000 },
      { id: "krell", name: "KRELL 프리미엄 사운드", category: "오디오", priceKRW: 590_000 },
      { id: "built-in-cam", name: "빌트인 캠", category: "편의", priceKRW: 450_000 },
      { id: "awd", name: "AWD 전환 (가능 트림)", category: "기타", priceKRW: 2_000_000 },
    ],
  },

  // =========================================================================
  "hyundai-tucson-hev": {
    trims: [
      { name: "모던 2WD", priceKRW: 32_790_000, drivetrain: "2WD", keyFeatures: ["후측방 충돌방지 기본", "안전 하차 경고"] },
      { name: "프리미엄 2WD", priceKRW: 35_270_000, drivetrain: "2WD", keyFeatures: ["열선 스티어링", "열선 시트"] },
      {
        name: "H-Pick 2WD",
        priceKRW: 36_110_000,
        drivetrain: "2WD",
        keyFeatures: [
          "스마트 크루즈 (스탑앤고)",
          "고속도로 주행 보조 (HDA)",
          "전방 충돌방지 (교차로/대향차)",
          "운전석/동반석 전동",
          "2열 좌석 열선",
        ],
      },
      {
        name: "인스퍼레이션 2WD",
        priceKRW: 38_790_000,
        drivetrain: "2WD",
        keyFeatures: [
          "파노라믹 커브드 디스플레이",
          "HUD",
          "디지털 키 2",
          "퀼팅 가죽 시트",
          "앰비언트 무드등",
        ],
      },
      { name: "인스퍼레이션 블랙 2WD", priceKRW: 39_240_000, drivetrain: "2WD" },
      { name: "N Line 인스퍼레이션 2WD", priceKRW: 39_440_000, drivetrain: "2WD" },
      { name: "N Line 인스퍼레이션 HTRAC", priceKRW: 41_670_000, drivetrain: "AWD" },
    ],
    addOnOptions: [
      { id: "smart-sense", name: "현대 스마트 센스 (모던/프리미엄용 ADAS)", category: "ADAS", priceKRW: 400_000 },
      { id: "panoramic-sunroof", name: "파노라마 선루프", category: "편의", priceKRW: 1_160_000 },
      { id: "built-in-cam", name: "빌트인 캠 2 + AR 내비게이션", category: "편의", priceKRW: 450_000 },
      { id: "parking-assist-2", name: "파킹 어시스트 II (서라운드 뷰 포함)", category: "ADAS", priceKRW: 1_530_000, recommended: true },
      { id: "bose", name: "BOSE 프리미엄 사운드", category: "오디오", priceKRW: 590_000 },
      { id: "htrac", name: "HTRAC (AWD) 전환", category: "기타", priceKRW: 2_230_000 },
    ],
  },

  // =========================================================================
  "kia-sorento-hev": {
    trims: [
      { name: "Prestige 2WD", priceKRW: 39_580_000, drivetrain: "2WD", keyFeatures: ["HEV 진입 트림"] },
      {
        name: "Noblesse 2WD",
        priceKRW: 42_840_000,
        drivetrain: "2WD",
        keyFeatures: [
          "12.3인치 파노라믹 커브드 디스플레이",
          "서라운드 뷰 모니터 (SVM)",
          "원격 스마트 주차 보조",
          "12.3인치 디지털 클러스터",
          "전자식 변속레버 (SBW)",
          "LED 리어콤비램프",
        ],
      },
      {
        name: "Signature 2WD",
        priceKRW: 45_370_000,
        drivetrain: "2WD",
        keyFeatures: [
          "후석 승객 알림",
          "10인치 HUD",
          "보스 프리미엄 사운드",
          "스웨이드 내장재",
          "지문 인증",
          "디지털 센터 미러",
        ],
      },
      { name: "Signature X-Line 2WD", priceKRW: 46_310_000, drivetrain: "2WD", keyFeatures: ["풀옵션 최상위 트림"] },
      { name: "Signature X-Line AWD 7인승", priceKRW: 49_570_000, drivetrain: "AWD", keyFeatures: ["7인승 + AWD 풀옵션"] },
    ],
    addOnOptions: [
      { id: "drive-wise", name: "드라이브 와이즈 (HDA2 + 차로변경 보조)", category: "ADAS", priceKRW: 1_290_000, recommended: true },
      { id: "sunroof", name: "파노라마 선루프", category: "편의", priceKRW: 1_090_000 },
      { id: "built-in-cam", name: "빌트인 캠", category: "편의", priceKRW: 450_000 },
      { id: "awd", name: "AWD 전환", category: "기타", priceKRW: 1_670_000 },
      { id: "seat-6", name: "6인승 (2열 독립)", category: "실내", priceKRW: 840_000 },
      { id: "seat-7", name: "7인승", category: "실내", priceKRW: 690_000 },
    ],
  },

  // =========================================================================
  "volvo-xc60": {
    trims: [
      {
        name: "B5 AWD Plus Bright",
        priceKRW: 65_700_000,
        drivetrain: "AWD",
        keyFeatures: [
          "360° 서라운드 뷰",
          "파일럿 어시스트",
          "무선 CarPlay/AA",
          "TMAP 인포테인먼트",
          "파노라마 선루프",
          "BLIS 사각지대",
          "11.2인치 디스플레이",
        ],
      },
      {
        name: "B5 AWD Ultra Bright",
        priceKRW: 73_300_000,
        drivetrain: "AWD",
        keyFeatures: [
          "에어 서스펜션",
          "Bowers & Wilkins 17스피커",
          "헤드업 디스플레이",
          "마사지 시트",
          "4존 공조",
        ],
      },
      { name: "B5 AWD Ultra Dark", priceKRW: 73_300_000, drivetrain: "AWD", keyFeatures: ["Ultra + 다크 테마"] },
      { name: "T8 AWD Ultra (PHEV, 참고)", priceKRW: 91_200_000, drivetrain: "AWD", keyFeatures: ["PHEV 318+마력"] },
    ],
    addOnOptions: [
      { id: "crystal-white", name: "Crystal White Pearl (크리스탈 화이트)", category: "외관", priceKRW: 1_200_000, description: "펄 페인트 업차지" },
      { id: "onyx-black", name: "Onyx Black Metallic (오닉스 블랙)", category: "외관", priceKRW: 1_000_000 },
      { id: "denim-blue", name: "Denim Blue (데님 블루)", category: "외관", priceKRW: 1_000_000 },
      { id: "vapour-grey", name: "Vapour Grey (베이퍼 그레이)", category: "외관", priceKRW: 1_000_000 },
      { id: "mulberry-red", name: "Mulberry Red (멀베리 레드)", category: "외관", priceKRW: 1_500_000, description: "신형 XC60 시그니처 레드" },
      { id: "aurora-silver", name: "Aurora Silver (오로라 실버)", category: "외관", priceKRW: 1_000_000 },
      { id: "forest-lake", name: "Forest Lake (포레스트 레이크)", category: "외관", priceKRW: 1_200_000, description: "2026 신규 딥 그린" },
      { id: "wheels-20-5-double-spoke", name: '20" 5-더블스포크 다이아몬드 컷 휠', category: "외관", priceKRW: 1_800_000, description: "Plus 19\" → 20\" 업그레이드" },
      { id: "air-suspension", name: "에어 서스펜션 (Active Four-C Chassis)", category: "편의", priceKRW: 2_565_000, description: "Plus 옵션 구성 시. Ultra는 기본" },
      { id: "bowers-wilkins-audio", name: "Bowers & Wilkins 프리미엄 오디오 (1,410W, 15스피커)", category: "오디오", priceKRW: 3_500_000, description: "Plus 옵션 추가. Ultra 기본" },
      { id: "head-up-display", name: "헤드업 디스플레이 (HUD)", category: "편의", priceKRW: 1_200_000, description: "Plus → Ultra 차이" },
      { id: "massage-ventilated-seats", name: "앞좌석 마사지·통풍·전동 사이드 서포트", category: "실내", priceKRW: 2_200_000, description: "Ultra 기본" },
      { id: "four-zone-climate", name: "4존 독립 공조", category: "편의", priceKRW: 800_000, description: "Ultra 기본" },
      { id: "dark-theme", name: "Dark 테마 (외관 다크 트림·검은 루프)", category: "외관", priceKRW: 0, description: "Ultra에서 무상 선택" },
      { id: "nappa-leather", name: "나파 가죽 시트 업그레이드", category: "실내", priceKRW: 2_800_000, description: "Charcoal/Cardamom/Blonde 3색" },
      { id: "tow-bar-electric", name: "전동 접이식 토우바 (2,250kg)", category: "기타", priceKRW: 2_500_000 },
    ],
    notes: "Plus ↔ Ultra 차이의 대부분을 개별 옵션으로 쪼개 나열. 실제 구매는 트림 업그레이드가 경제적.",
  },

  "byd-atto-3": {
    trims: [
      { name: "ATTO 3 (기본형)", priceKRW: 31_500_000, drivetrain: "FWD", keyFeatures: ["60.48kWh LFP 블레이드", "주행 321km", "3D 서라운드 뷰", "12가지 ADAS 기본", "V2L 2.2kW"] },
      { name: "ATTO 3 Plus", priceKRW: 33_500_000, drivetrain: "FWD", keyFeatures: ["통풍 시트", "전동 테일게이트", "Dirac 8스피커", "PM 2.5 공기정화", "멀티컬러 앰비언트"] },
    ],
    addOnOptions: [
      { id: "exterior-color-time-gray", name: "Time Gray 색상", category: "외관", priceKRW: 0, description: "5종 중 선택, 무상" },
      { id: "exterior-color-surf-blue", name: "Surf Blue 색상", category: "외관", priceKRW: 0 },
      { id: "exterior-color-atlantis-gray", name: "Atlantis Gray 색상", category: "외관", priceKRW: 0 },
      { id: "exterior-color-cosmos-black", name: "Cosmos Black 색상", category: "외관", priceKRW: 0 },
      { id: "interior-blue-grey", name: "내장 Blue-Grey", category: "실내", priceKRW: 0, description: "블랙/블루그레이 2종" },
    ],
    notes: "단일 구성·단일 옵션 차량. 모든 핵심 기능이 기본형부터 기본 탑재이며 유상 옵션 없음.",
  },

  "zeekr-7x": {
    trims: [
      { name: "Core RWD (75kWh LFP)", priceKRW: 46_000_000, drivetrain: "RWD", keyFeatures: ["416마력", "주행 480km (WLTP)", "800V 급속", "나파 가죽"], note: "추정가" },
      { name: "Long Range RWD (100kWh NCM)", priceKRW: 58_000_000, drivetrain: "RWD", keyFeatures: ["416마력", "주행 615km (WLTP)", "CATL Qilin 배터리", "16\" 3.5K OLED", "AR-HUD"], note: "추정가, 추천" },
      { name: "Privilege AWD (100kWh Performance)", priceKRW: 68_000_000, drivetrain: "AWD", keyFeatures: ["637마력", "0-100 3.8초", "에어 서스펜션", "21스피커 Zeekr Sound Pro"], note: "추정가" },
    ],
    addOnOptions: [
      { id: "zeekr-sound-pro", name: "Zeekr Sound Pro 21스피커 (2,160W)", category: "오디오", priceKRW: 2_000_000, description: "상위 트림 기본" },
      { id: "air-suspension", name: "에어 서스펜션 + 어댑티브 댐퍼", category: "편의", priceKRW: 3_500_000, description: "Privilege AWD 전용" },
      { id: "cooler-warmer-box", name: "냉온장 스토리지 (-6℃ ~ +50℃)", category: "편의", priceKRW: 1_200_000 },
      { id: "massage-seats", name: "전좌석 통풍/열선/마사지", category: "실내", priceKRW: 2_500_000, description: "상위 트림 기본" },
      { id: "automatic-doors", name: "전좌석 자동문", category: "편의", priceKRW: 2_000_000, description: "동급 최초" },
      { id: "color-premium", name: "프리미엄 외장 색상", category: "외관", priceKRW: 1_000_000 },
      { id: "wheels-21", name: '21" 스포츠 휠 (Privilege 기본)', category: "외관", priceKRW: 2_500_000 },
    ],
    notes: "한국 가격은 2026년 5~6월 출시 후 공식 발표. 현재 수치는 업계 추정치. 배터리 환경성 계수로 보조금 대상 지정 불확실.",
  },

  "volvo-xc40": {
    trims: [
      { name: "B4 AWD Plus Bright", priceKRW: 51_900_000, drivetrain: "AWD", keyFeatures: ["360° 서라운드 뷰", "파일럿 어시스트", "무선 CarPlay·AA", "파노라마 선루프", "픽셀 LED", "19인치 휠"] },
      { name: "B4 AWD Ultra Bright", priceKRW: 54_900_000, drivetrain: "AWD", keyFeatures: ["하만카돈 사운드", "드리프트 우드 인테리어", "오레포스 크리스탈 기어노브", "어드밴스드 공기청정", "20인치 휠"] },
      { name: "B4 AWD Ultra Dark", priceKRW: 55_200_000, drivetrain: "AWD", keyFeatures: ["Ultra Bright 사양", "블랙 하이글로시 디테일", "20\" 블랙 다이아몬드 컷 휠"] },
    ],
    addOnOptions: [
      { id: "aurora-silver", name: "오로라 실버", category: "외관", priceKRW: 1_000_000, description: "2026 신규 컬러" },
      { id: "crystal-white", name: "Crystal White Pearl", category: "외관", priceKRW: 1_000_000 },
      { id: "onyx-black", name: "Onyx Black", category: "외관", priceKRW: 800_000 },
      { id: "denim-blue", name: "Denim Blue", category: "외관", priceKRW: 800_000 },
      { id: "cloud-blue", name: "Cloud Blue", category: "외관", priceKRW: 800_000 },
      { id: "vapour-grey", name: "Vapour Grey", category: "외관", priceKRW: 800_000 },
      { id: "harman-kardon-audio", name: "하만카돈 프리미엄 사운드", category: "오디오", priceKRW: 1_500_000, description: "Ultra 기본" },
      { id: "drift-wood-interior", name: "드리프트 우드 인테리어", category: "실내", priceKRW: 800_000, description: "Ultra 기본" },
      { id: "orrefors-crystal", name: "오레포스 크리스탈 기어노브", category: "실내", priceKRW: 500_000, description: "Ultra 기본" },
      { id: "advanced-air-cleaner", name: "어드밴스드 공기청정 시스템", category: "편의", priceKRW: 700_000, description: "Ultra 기본" },
      { id: "roof-rails", name: "루프 레일/크로스바", category: "외관", priceKRW: 800_000, description: "딜러 순정" },
    ],
    notes: "국내는 AWD 단일 파워트레인. Plus ↔ Ultra 차액 300~330만원은 대부분 감성 옵션. HUD는 미탑재.",
  },
};
