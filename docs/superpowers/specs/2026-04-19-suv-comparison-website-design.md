# SUV 비교 웹사이트 — 설계 문서

- **작성일**: 2026-04-19
- **작성자**: Claude (for eden.yg@kakaomobility.com)
- **배포 대상 저장소**: `github.com/klmyoungyun/report-car` (예정)
- **배포 플랫폼**: Vercel (기본 도메인 `*.vercel.app`)
- **1차 열람 대상**: 차량 구매 예정 고객(1-2인 가구, 성남시 정자동 거주)

---

## 1. 배경

구매 고객의 프로필:

| 항목 | 값 |
|------|-----|
| 가구 구성 | 1~2인 |
| 용도 | 출퇴근 왕복 3km, 주말 여행·본가 방문(편도 30-40km) |
| 거주지 | 경기도 성남시 정자동 |
| 충전 인프라 | 아파트 충전기 설치 완료 (EV 실사용 문제없음) |
| 연료 선호 | 하이브리드 = 전기 > 가솔린 > 디젤 |
| 예산 | **차량 가격 7천만원 이하** (취득세·등록세 별도) |
| 기피 브랜드 | BYD |
| 옵션 지식 | 첫차 구매자 → 대중적 옵션 패키지 자동 제안 필요 |
| 필수 옵션 | 서라운드 뷰, 후방 카메라, Apple CarPlay/Android Auto, ADAS |

## 2. 목표

10대의 SUV를 **필터·비교·실구매가 계산**으로 탐색할 수 있는 인터랙티브 웹사이트를 구축하여, 고객이 연료·브랜드·가격대를 기준으로 최적의 차량을 스스로 결정할 수 있도록 돕는다.

## 3. 후보 차량 10대

| # | 차종 | 분류 | 비고 |
|---|------|------|------|
| 1 | Tesla Model Y (RWD / Long Range) | 준중형 EV | 초기 후보 |
| 2 | Kia EV6 | 준중형 EV | E-GMP / 800V 초급속 |
| 3 | Hyundai IONIQ 5 | 준중형 EV | 실내공간 우수 |
| 4 | Genesis GV60 | 프리미엄 준중형 EV | 국산 프리미엄 |
| 5 | Volvo EX40 / XC40 Recharge | 프리미엄 소형 EV | **초기 후보** |
| 6 | Lexus NX350h / NX450h+ | 프리미엄 준중형 HEV/PHEV | 일본 프리미엄 |
| 7 | Kia Sportage HEV | 준중형 HEV | **초기 후보** |
| 8 | Hyundai Tucson HEV | 준중형 HEV | 인기 HEV |
| 9 | Kia Sorento HEV | 중형 HEV | **초기 후보** (주말 장거리 여유) |
| 10 | Volvo XC60 B5 (마일드 하이브리드) | 프리미엄 중형 | **초기 후보** |

**제외한 차량과 이유**: BYD(기피), BMW iX1/Mercedes EQB(7천만원 내 ADAS 풀옵 구성 어려움), KG Torres EVX(필수옵션 충족도 낮음).

## 4. 데이터 모델

각 차량은 다음 TypeScript 타입에 맞춰 `data/vehicles.ts`에 정의하고 `zod`로 검증한다.

```ts
type FuelType = 'EV' | 'HEV' | 'PHEV' | 'MHEV';
type Segment = 'SUBCOMPACT' | 'COMPACT' | 'MIDSIZE';

interface Vehicle {
  slug: string;
  name: string;
  brand: string;
  segment: Segment;
  fuelType: FuelType;
  origin: 'DOMESTIC' | 'IMPORT';

  images: {
    hero: string;       // 대표 이미지 (제조사 공식 URL)
    thumbnail?: string;
  };

  specs: {
    length_mm: number;
    width_mm: number;
    height_mm: number;
    wheelbase_mm: number;
    weight_kg: number;
    trunk_liters: number;
    seats: number;
    drivetrain: string;         // "RWD" | "AWD" | "FWD"
    powerHp: number;
    torqueNm: number;
    efficiency: string;         // "5.5km/kWh" or "15.6km/L"
    range_km?: number;          // EV/PHEV only
    battery_kwh?: number;       // EV/PHEV only
    charging?: string;          // "250kW DC" 등
  };

  pricing: {
    baseTrim: { name: string; priceKRW: number };
    recommendedTrim: {
      name: string;
      priceKRW: number;
      includedOptionPackages: string[];
    };
    fullOption: { priceKRW: number };
    essentials: {
      surroundView: '기본' | '옵션' | '없음';
      rearCamera: '기본' | '옵션' | '없음';
      carplayAndroidAuto: '기본' | '옵션' | '없음';
      adas: '기본' | '옵션' | '없음';
    };
  };

  // EV/PHEV 전용
  subsidy?: {
    nationalKRW: number;         // 2026년 환경부 국고보조금
    seongnamKRW: number;         // 성남시 지방보조금
    totalKRW: number;
    realPurchasePriceKRW: number;   // 추천 트림가 - 보조금
    note?: string;                  // "대당 상한 초과 시 차감" 등
  };

  taxes: {
    acquisitionTaxKRW: number;     // 2026 취득세 (EV는 감면 반영)
    estimatedRegistrationKRW: number;
    evExemptions?: string[];       // ["개소세 감면 최대 300만원", ...]
  };

  media: {
    youtube: Array<{ videoId: string; title: string; channel: string }>;
    blogs: Array<{ url: string; title: string; source: string }>;
    officialUrl: string;
  };

  pros: string[];    // 3-5개
  cons: string[];    // 2-3개

  dataAsOf: string;  // YYYY-MM-DD
}
```

## 5. 페이지 구성

### 5.1 `/` — 랜딩 (카탈로그)
- 히어로: 프로젝트 소개 + 요약 통계 (EV 5대 / HEV 5대 등)
- 필터 바:
  - 연료 (EV / HEV / PHEV / MHEV)
  - 세그먼트 (소형 / 준중형 / 중형)
  - 브랜드
  - 가격대 슬라이더 (0 ~ 7천만원)
- 정렬: 추천 가격 ↑↓, 주행거리, 브랜드명
- 차량 카드 그리드 (반응형 1/2/3열): 이미지, 이름, 배지(연료), 추천가, 보조금 표시
- 각 카드: "상세보기" + "비교에 추가" 버튼
- 플로팅 바: 선택된 차량 개수 + "비교하기" CTA (최대 3대)

### 5.2 `/vehicles/[slug]` — 상세 페이지
섹션 순서:
1. 히어로 이미지 + 이름 + 배지
2. 장점/단점 요약 (2열)
3. 제원 표
4. 파워트레인 표 (출력·효율·주행거리·충전)
5. **가격 테이블 (3단)**: 기본 / 추천옵션 / 풀옵션
6. EV/PHEV의 경우: 보조금 상세 + 실구매가 카드
7. 세제 혜택 및 취득세 참고
8. 필수 옵션 체크리스트 (기본/옵션/없음 표시)
9. 📺 참고 영상 (lite-youtube 임베드 2~3개)
10. 📝 후기 블로그 카드 2~3개 (제목·출처·링크)
11. 공식 홈페이지 링크

### 5.3 `/compare` — 3대 비교
- URL: `/compare?ids=tesla-model-y,ev6,xc40-recharge`
- 헤더: 선택된 3대 이미지 + 이름 (제거 버튼)
- 비교 섹션:
  - 가격 (기본/추천/풀옵션)
  - 보조금 & 실구매가 (해당 시)
  - 제원 (길이/너비/높이/트렁크)
  - 파워트레인 (출력/효율/주행거리)
  - 필수옵션 체크
  - 장단점 요약
- 값이 다른 셀은 강조 색상

### 5.4 `/calculator` — 보조금·세금 계산기
- 차량 선택 드롭다운 (EV만 필터링)
- 거주 지자체 선택 (기본: 성남) — 현재는 성남만 지원, 확장 가능하도록 설계
- 결과 카드:
  - 차량가
  - 국고보조금 / 지방보조금 / 합계
  - EV 개소세·교육세 감면
  - 취득세 감면
  - **실구매가** (차량가 - 보조금 + 취득세)

## 6. 컴포넌트 & 디렉토리

```
app/
  layout.tsx
  page.tsx                 # /
  vehicles/[slug]/page.tsx
  compare/page.tsx
  calculator/page.tsx
  globals.css
components/
  ui/                      # shadcn: button, card, table, badge, slider ...
  vehicle/
    VehicleCard.tsx
    VehicleHero.tsx
    SpecTable.tsx
    PriceTable.tsx
    EssentialsChecklist.tsx
    SubsidyCard.tsx
    YoutubeEmbed.tsx
    BlogLinkCard.tsx
    ProsConsList.tsx
  compare/
    CompareTable.tsx
    CompareSelector.tsx
  filters/
    FilterBar.tsx
    SortDropdown.tsx
  common/
    Footer.tsx
    Header.tsx
    CompareFloatingBar.tsx
data/
  vehicles.ts
  subsidies.ts
  schema.ts                # Zod
lib/
  format.ts                # 원화·만원 포맷 (5,000만원)
  calculations.ts          # 보조금·취득세 계산
  compareState.ts          # URL 쿼리 ↔ 상태
  constants.ts             # 2026 세율, 계수
docs/
  superpowers/specs/*.md
```

## 7. 주요 라이브러리

| 패키지 | 용도 |
|--------|------|
| `next` (15, App Router) | 프레임워크 |
| `react` (19) | 런타임 |
| `typescript` | 타입 안전 |
| `tailwindcss` (4) | 유틸리티 CSS |
| `shadcn/ui` | 재사용 컴포넌트 (copy-in) |
| `lucide-react` | 아이콘 |
| `zod` | 데이터 스키마 검증 |
| `clsx` / `tailwind-merge` | 조건부 className |

**포함하지 않음**: 상태관리 라이브러리(필요 없음, URL + React state), 분석 SDK, CMS, i18n.

## 8. 디자인

- 톤: 모던·미니멀 (shadcn 기본 스타일 + Pretendard 한글 폰트)
- 연료별 배지 색상:
  - EV: 녹색 계열
  - HEV: 파랑
  - PHEV: 청록
  - MHEV: 회색
- 가격은 "만원" 단위로 표기 (예: 5,490만원)
- 반응형: 모바일 우선 (공유 시 스마트폰에서 보는 경우 많음)
- 다크모드: 범위 외

## 9. 계산 로직

### 9.1 전기차 실구매가

```
실구매가 = 추천트림가
          - 국고보조금
          - 성남시 지방보조금
          + 취득세(감면 반영)
```

- 2026년 취득세율: 자동차 7% 기본
- 2026년 EV 취득세 감면: 최대 140만원까지 면제 → 조정된 취득세만 가산
- EV 개소세 감면: 최대 300만원 (이미 차량 가격에 반영된 것으로 처리)

### 9.2 HEV/ICE 실구매가 (참고)

```
실구매가 = 추천트림가 + 취득세 (7%)
```

(고객 예산 범위는 "차량가만"이므로 UI에서는 차량가 기준으로 비교하고, 취득세는 "+α"로 참고 표시)

## 10. 리서치 범위 (WebSearch)

**공통**:
- 2026년 환경부 전기차 국고보조금 차종별 표
- 2026년 성남시 전기차 지방보조금
- 2026년 EV 세제 혜택 (개소세·교육세·취득세 감면 한도)

**차종별 (10대 × 각 항목)**:
- 2026년 기준 공식 가격 (기본/추천/풀옵션)
- 트림 구성 & 옵션 패키지
- 필수 옵션 포함 여부
- 연비/전비·주행거리·제원
- YouTube 리뷰 2-3개 (가능하면 채널 다양하게)
- 블로그 후기 2-3개
- 제조사 미디어 키트 이미지 URL

## 11. 배포 프로세스

1. 로컬에서 개발 완료 및 빌드 성공 확인
2. 사용자가 `github.com/klmyoungyun/report-car` 빈 저장소 생성
3. 로컬 저장소와 연결 후 초기 커밋 푸시
4. Vercel에서 GitHub 리포 import → 자동 빌드·배포
5. 기본 도메인 `report-car.vercel.app` 등 사용

Git 설정(로컬만):
- `user.name`: klmyoungyun
- `user.email`: kyoungyun98@naver.com

## 12. 범위 외 (Out of Scope)

- 다크 모드
- 검색 / 즐겨찾기 / 영구 공유 링크(비교 URL은 제외 — 이건 포함)
- 영어/다국어
- 자동 테스트 (e2e/unit)
- 분석(GA 등) / 쿠키 배너
- 실시간 재고·가격 (수동 데이터 업데이트)
- CMS 연동

## 13. 리스크 & 완화

| 리스크 | 완화 |
|--------|------|
| 2026년 가격은 자주 변동 | `dataAsOf` 필드 + 푸터에 "업데이트 기준일" 명시 |
| EV 보조금은 연초 소진 이슈 | "참고용, 실제는 지자체 공고 확인" 안내 문구 |
| YouTube 임베드 차단 가능 | lite-youtube는 iframe만 클릭 시 로드 — 안전 |
| 제조사 이미지 직링크 | 공식 미디어 센터 URL만 사용, 실패 시 텍스트 플레이스홀더 |
| 트림/옵션 복잡성 | "추천" 패키지는 각 차량별로 가장 보편적 트림 기준, 예외는 노트로 기재 |

## 14. 완료 기준 (Definition of Done)

- [ ] `npm run build` 성공, `tsc --noEmit` 에러 0
- [ ] 10대 차량 데이터 모두 채워짐 (누락 필드는 `null` 허용 + UI에서 "정보 없음")
- [ ] 4개 페이지 (`/`, `/vehicles/[slug]`, `/compare`, `/calculator`) 모두 접근 가능
- [ ] 필터·정렬·비교 추가/제거 동작
- [ ] 보조금 계산기에서 숫자 정확히 계산
- [ ] 모바일 반응형 확인 (뷰포트 375px 기준)
- [ ] README에 로컬 실행 방법, Vercel 배포 가이드 포함
- [ ] 초기 커밋 생성
