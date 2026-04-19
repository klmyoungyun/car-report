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
      {
        id: "eap",
        name: "Enhanced Autopilot (자동 차선 변경·자동 주차·Summon)",
        category: "ADAS",
        priceKRW: 4_522_000,
        description: "자동 차선 변경, 자동 주차, 소환(Summon) 기능",
      },
      {
        id: "fsd",
        name: "Full Self-Driving (감독형)",
        category: "ADAS",
        priceKRW: 9_043_000,
        description: "신호/정지표지판 인식 포함. 한국 규제상 기능 제한",
      },
      {
        id: "white-paint",
        name: "화이트 페인트",
        category: "외관",
        priceKRW: 0,
        description: "기본 색상",
      },
      {
        id: "premium-paint",
        name: "프리미엄 페인트 (미드나잇 실버/딥 블루 등)",
        category: "외관",
        priceKRW: 1_500_000,
      },
      {
        id: "white-interior",
        name: "화이트 인테리어",
        category: "실내",
        priceKRW: 1_500_000,
      },
    ],
    notes: "Tesla는 트림 단순화 전략으로 대부분 옵션이 기본 포함. 추가 옵션은 Autopilot 업그레이드와 색상/인테리어 위주.",
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
      { id: "color-premium", name: "프리미엄 외장 색상", category: "외관", priceKRW: 800_000 },
      { id: "20wheel", name: "20인치 휠 업그레이드", category: "외관", priceKRW: 1_200_000 },
      { id: "winter-package", name: "겨울 패키지 (열선 스티어링·워셔 노즐)", category: "편의", priceKRW: 500_000 },
    ],
    notes: "단일 트림 풀옵션 구성으로 대부분 옵션이 기본 탑재. 추가 옵션은 외관·편의 위주.",
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
      { id: "premium-paint", name: "프리미엄 컬러", category: "외관", priceKRW: 500_000 },
    ],
    notes: "Lexus는 트림별 기능이 묶여있어 개별 추가 옵션이 적음. 풀 기능이 필요하면 상위 트림(예산 초과)으로 이동해야 함.",
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
      { id: "color", name: "프리미엄 외장 색상", category: "외관", priceKRW: 800_000 },
      { id: "20wheel", name: "20인치 휠 업그레이드", category: "외관", priceKRW: 1_500_000 },
    ],
    notes: "Plus 트림 기본에 핵심 옵션 포함. 에어 서스펜션·B&W 사운드는 Ultra에서만 제공.",
  },
};
