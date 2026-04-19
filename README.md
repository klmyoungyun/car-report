# SUV 구매 가이드 2026

> 1~2인 가구·성남시 정자동 거주·차량가 7천만원 예산에 맞춘 SUV 10대 비교 웹사이트

[![Next.js](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4)](https://tailwindcss.com/)

## 주요 기능

- **10대 SUV 카탈로그** — Tesla Model Y · Kia EV6 · Hyundai IONIQ 5 · Genesis GV60 · Volvo EX40 · Lexus NX · Kia Sportage HEV · Hyundai Tucson HEV · Kia Sorento HEV · Volvo XC60 B5
- **인터랙티브 필터** — 연료/세그먼트/브랜드/가격대로 좁히기 + 가격·주행거리·이름 순 정렬
- **3대 동시 비교** — 제원·가격·보조금·필수옵션을 나란히 비교. 다른 값 하이라이트
- **실구매가 계산기** — 경기도 성남시 기준 국고+지방보조금·개소세·교육세·취득세 감면 자동 반영
- **차량별 상세 페이지** — 가격 3단(기본/추천/풀옵션), 필수옵션 체크리스트, 참고 영상 · 후기 링크
- **첫차 구매자 맞춤 옵션** — 추천 트림에 서라운드뷰·ADAS·CarPlay·후방카메라 등 대중 옵션 자동 포함

## 기술 스택

| 분류 | 선택 |
|------|------|
| 프레임워크 | Next.js 16 (App Router, Turbopack) |
| 언어 | TypeScript strict |
| 스타일링 | Tailwind CSS 4 |
| 검증 | Zod |
| 폰트 | Pretendard Variable |
| 아이콘 | lucide-react |
| 배포 | Vercel |

## 로컬 실행

```bash
npm install
npm run dev    # http://localhost:3000
```

빌드:

```bash
npm run build
npm start
```

## 디렉토리 구조

```
app/                    # Next.js App Router 페이지
  page.tsx              # / (랜딩)
  vehicles/[slug]/      # 차량 상세
  compare/              # 비교 (URL 쿼리)
  calculator/           # 보조금 계산기
components/
  ui/                   # Button/Card/Badge/Table (shadcn 스타일)
  vehicle/              # 차량 전용 (PriceTable·SpecTable·Subsidy 등)
  compare/              # CompareProvider + 플로팅 바
  filters/              # FilterBar
  common/               # Header·Footer
data/
  vehicles.ts           # 10대 차량 정규화 데이터
  subsidies.ts          # 성남시 보조금 정보
  schema.ts             # Zod 스키마
lib/
  constants.ts          # 2026 세율·보조금 상수
  calculations.ts       # 실구매가 계산 로직
  format.ts             # 원화 포매팅
  utils.ts              # cn (className merge)
docs/
  superpowers/specs/    # 설계 문서
research/               # 차량별 원본 리서치 JSON
```

## Vercel 배포 가이드

### 1) GitHub에 푸시

GitHub에서 빈 저장소 `report-car`를 생성한 뒤 (`klmyoungyun/report-car`):

```bash
# 로컬에서 (이미 git init 되어 있음)
git remote add origin git@github.com:klmyoungyun/report-car.git
# 또는 HTTPS:
# git remote add origin https://github.com/klmyoungyun/report-car.git

git branch -M main
git push -u origin main
```

> 최초 푸시 시 인증이 필요합니다. `gh auth login` 또는 SSH 키 설정이 완료되어 있어야 합니다.

### 2) Vercel 연동

1. https://vercel.com 에서 GitHub 계정(`klmyoungyun`)으로 로그인
2. **Add New...** → **Project** → **Import Git Repository** → `report-car` 선택
3. 프레임워크 자동 감지(Next.js) → **Deploy** 클릭
4. 약 1~2분 후 `https://report-car-<hash>.vercel.app` 에 배포 완료

환경 변수는 필요 없습니다. 이후 `main` 브랜치에 푸시하면 자동 재배포됩니다.

### 3) 도메인 (선택)

기본 도메인(`*.vercel.app`)으로 공유 목적 충분. 커스텀 도메인이 필요하면 Vercel 대시보드 → Project → Settings → Domains 에서 추가.

## 데이터 출처 & 면책

- 모든 수치는 **2026-04-19 조사 기준**입니다 (`DATA_AS_OF` 상수).
- 가격은 제조사 공식 페이지, 차량 DB(카눈·다나와·getcha), 전문 매체 교차검증.
- EV 보조금: 환경부 저공해차 통합누리집(ev.or.kr), 성남시청 공고.
- **예산 소진·트림 변경·옵션 패키지 재편** 등으로 실제 구매 시점 값이 다를 수 있습니다. 구매 전 반드시 공식 홈페이지와 딜러에서 최종 확인하세요.

## 추천 트림 선정 원칙

첫차 구매자가 "뭘 골라야 할지 모를 때" 무리 없이 선택할 수 있도록:

1. **필수 옵션 포함 우선** — 서라운드뷰, 후방 카메라, CarPlay/Android Auto, ADAS(스마트 크루즈·차선유지·충돌방지)
2. **7천만원 예산 내** — 추천 트림은 차량가 기준 예산 이하로 맞춤
3. **대중적 구성** — 시장에서 가장 많이 팔리는 중상위 트림 중심
4. **예외 표기** — 예산 초과/옵션 미포함 케이스는 `researchNotes`에 명시

## 비교 차량 제외 이유

- **BYD** — 사용자 기피 브랜드
- **Sorento(가솔린)** — 용도 대비 오버스펙. HEV 버전만 포함
- **BMW iX1 / Mercedes EQB** — 7천만원 내 ADAS 풀옵 구성 타이트
- **KG Torres EVX** — 필수옵션 충족도 낮음

## 라이선스 & 용도

비상업적 개인 용도로 제작된 참고 자료입니다. 각 제조사 로고·이미지는 해당 권리자의 자산이며, 본 사이트는 공식 미디어 자산을 정보 제공 목적으로 직링크 하였습니다.
