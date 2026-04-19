/**
 * 10C2 = 45쌍의 AI 비교 인사이트.
 * 키는 슬러그 두 개를 알파벳순으로 결합(`slugA|slugB`).
 * 실제 차량 데이터와 리서치 결과를 바탕으로 작성한 비교 분석.
 */

const PAIRS: Record<string, string> = {
  // ────── Tesla Model Y 기준 9쌍 ──────
  "kia-ev6|tesla-model-y":
    "주행거리·충전 인프라·가격 측면에서 Model Y RWD(4,999만원)가 EV6 Earth 롱레인지(5,640만원)보다 약 640만원 저렴하지만, EV6는 800V 초급속(10→80% 18분)으로 충전 속도가 우위. Tesla는 OTA·Autopilot·슈퍼차저 생태계가 강점이고, EV6는 CarPlay·SVM 등 '익숙한 UX'와 국내 A/S가 장점. 장거리 자주 타고 충전소 선택의 폭이 넓길 원하면 Model Y, 한국형 인포테인먼트·옵션 풍부를 원하면 EV6.",
  "hyundai-ioniq-5|tesla-model-y":
    "IONIQ 5는 3,000mm 휠베이스·V2L(실내/외)·831km 실내공간 같은 '실용성 플래그십'. Model Y는 500km 주행·Autopilot·15.4인치 UI 같은 '테크 플래그십'. 가격은 비슷하지만(Model Y RWD 4,999만 vs IONIQ 5 LR Exclusive 5,450만) IONIQ 5는 HDA2·SVM 옵션 추가로 최종 5,800만원대. 차박/캠핑·가족 짐 많음 → IONIQ 5, 장거리 고속도로·최신 기능 선호 → Model Y.",
  "genesis-gv60|tesla-model-y":
    "같은 플랫폼(E-GMP)이지만 포지셔닝이 다름. GV60은 Standard 2WD 6,490만원으로 Model Y RWD보다 1,500만원 비싸지만, 27인치 OLED·페이스 커넥트·e-ASD 정숙성 같은 프리미엄 감성을 제공. 반면 보조금은 GV60 287만원 vs Model Y RWD 170만원. 실구매가는 GV60이 여전히 약 1,400만원 높음. '돈 좀 더 써서 고급감' → GV60, '돈 아껴 테크' → Model Y.",
  "tesla-model-y|volvo-ex40":
    "EX40은 단일 트림 6,674만원에 360 카메라·파일럿 어시스트·하만카돈 모두 기본인 '옵션 고민 없는 차'. Model Y는 RWD 4,999만원으로 저렴하지만 Autopilot 업그레이드(EAP 452만·FSD 904만)는 별도. 주행거리는 Model Y 500km > EX40 434km. 안전·북유럽 감성·옵션 일괄 → EX40, 가격·주행거리·테크 → Model Y.",
  "lexus-nx|tesla-model-y":
    "연료 타입이 다른 근본적 선택. NX350h Premium(6,695만)은 하이브리드 정숙성·실연비 17km/L·렉서스 내구성이 강점이지만 충전 인프라·세제 혜택이 없음. Model Y는 500km·OTA·슈퍼차저·보조금 적용 시 4,000만원대 실구매 가능. 아파트 충전기 있으니 전기차의 이점이 훨씬 큼 → Model Y. 다만 장거리 자주·충전 스트레스 싫음 → NX.",
  "kia-sportage-hev|tesla-model-y":
    "'일반 SUV'와 '테크 SUV'의 대결. Sportage HEV Signature(4,200만원)는 16.3km/L 연비·637L 트렁크·국산 A/S로 생활 실용성 최강. Model Y RWD는 5,000만원이지만 보조금 적용 후 4,000만원대로 비슷. 운영비(전기 vs 가솔린)는 Model Y가 연 100만원+ 절약. 주말 장거리 여행·캠핑 잦음 → Model Y, 초보자 편하게·가솔린 안심 → Sportage HEV.",
  "hyundai-tucson-hev|tesla-model-y":
    "Tucson HEV H-Pick(3,611만원)은 Model Y RWD보다 1,400만원 저렴. 16.2km/L 연비·HDA 기본·무선 CarPlay·5년 A/S까지 '전통적 안심'. Model Y는 기술 선두+보조금으로 실구매가 4,000만원대. 비용 민감·첫차 안전 → Tucson HEV, OTA·충전소 인프라·주행거리 → Model Y. 아파트 충전기 있으므로 Model Y의 이점이 더 큼.",
  "kia-sorento-hev|tesla-model-y":
    "쏘렌토는 중형 7인승 파밀리카(4,280만원~), Model Y는 준중형 5인승. 1-2인 가구엔 쏘렌토가 확실히 오버스펙. 주말 본가 방문·장거리 여유 → Sorento, 도심 주차·빠른 가속·미래지향 → Model Y. 연비는 Sorento 15.7km/L vs Model Y 전비 5.4km/kWh (kWh당 300원 기준 약 1/3 비용). 용도 맞으면 Model Y가 경제적.",
  "tesla-model-y|volvo-xc60":
    "가격대는 비슷(Model Y LR 5,999만 vs XC60 Plus 6,570만)하지만 전기차 vs 마일드 하이브리드. XC60은 48V MHEV·에어 서스펜션(Ultra)·B&W 사운드 같은 '클래식 프리미엄'. Model Y는 500km 주행·Autopilot·보조금 적용 시 4,000만원대 실구매. 연 운영비 차이 상당(XC60 공인 10.7km/L). 아파트 충전 가능 → Model Y 압승, 수입 브랜드+고급 승차감 → XC60.",

  // ────── Kia EV6 기준 8쌍 ──────
  "hyundai-ioniq-5|kia-ev6":
    "형제차이지만 성격이 다름. IONIQ 5는 3,000mm 휠베이스·531L 트렁크·각진 레트로 스타일. EV6는 2,900mm·480L·쿠페형 스포티 스타일. 가격/보조금/주행거리 거의 동일. 실내 공간·V2L·가족형 → IONIQ 5. 디자인·핸들링·준스포티 → EV6. '투싼 사이즈에 파밀리'면 IONIQ 5, '스포츠카처럼' 타고 싶으면 EV6.",
  "genesis-gv60|kia-ev6":
    "동일 플랫폼에 1,000만원 프리미엄 가격차. GV60은 2025 페이스리프트로 27인치 OLED·페이스 커넥트·84kWh 배터리가 기본이지만 차량가가 50% 보조금 구간(5,300만원 초과)에 들어가 보조금 지급액이 크게 떨어짐(287만 vs 570만). 실구매가 차이는 약 1,300만원. 고급감 vs 실용성의 명확한 tradeoff. 주력 트림 5,640만원대에서 EV6가 가성비 우위.",
  "kia-ev6|volvo-ex40":
    "크기(준중형 vs 소형)부터 다름. EV6는 주행 494km·800V 충전·대용량 84kWh. EX40은 434km·200kW·77.8kWh. 가격은 EV6 Earth 5,640만 vs EX40 6,674만. EX40은 단일 트림 풀옵션이라 '옵션 고민 없이' 좋은 구성. EV6는 옵션 커스터마이징 가능하지만 HDA2(75만) 별도. 공간·주행거리·충전 → EV6, 안전·북유럽 감성·일괄 구성 → EX40.",
  "kia-ev6|lexus-nx":
    "EV6 Earth 롱레인지(5,640만)와 NX350h Premium(6,695만)은 1,000만원 차. EV6는 보조금 570만원 적용 시 실구매가 4,900만원대로 떨어져 사실상 1,700만원 이상 저렴. NX는 정숙성·렉서스 내구성·실연비 17km/L. 아파트 충전 있으니 EV6가 운영비도 압도적. EV6 선택이 거의 자명. NX는 '충전소 없음·가솔린이 편함'일 때만.",
  "kia-ev6|kia-sportage-hev":
    "같은 브랜드·비슷한 크기의 선택지. Sportage HEV Signature(4,200만)가 1,400만원 저렴. EV6는 보조금 570만원 적용 시 약 4,900만원으로 차이 700만원 축소. 연비/전비 기준 5년 후 EV6가 운영비 300만원+ 절약. 충전 가능한 환경이면 EV6의 총소유비용이 우위. Sportage는 여행·서비스 접근성·가솔린 안심감.",
  "hyundai-tucson-hev|kia-ev6":
    "엔트리 예산이라면 Tucson HEV H-Pick(3,611만)이 EV6 Earth(5,640만)보다 2,000만원 저렴. EV6는 보조금 적용 시 격차 1,400만원으로. Tucson은 16.2km/L 연비로 연료비 충분히 낮지만, EV6의 전기 운영비는 더 저렴(연간 100~150만원 차). 첫차 무난·예산 한정 → Tucson, 10년 장기 운영·테크 선호 → EV6.",
  "kia-ev6|kia-sorento-hev":
    "크기와 용도가 근본적으로 다름. Sorento HEV Noblesse(4,280만, 5/6/7인승)는 가족 차, EV6는 준중형 EV. 1-2인 가구엔 Sorento가 오버스펙이나 주말 장거리·캠핑엔 장점. 가격은 EV6가 1,300만원 비싸지만 보조금 적용 시 비슷. 1-2인+미래 가족 증가 시 → Sorento, 당장 실용+미래지향 → EV6.",
  "kia-ev6|volvo-xc60":
    "비슷한 가격대(EV6 5,640만·XC60 Plus 6,570만)지만 EV vs MHEV로 성격 다름. XC60은 파일럿 어시스트·360 카메라·Ultra 트림 에어서스펜션 같은 '오래 탈 프리미엄'. EV6는 대용량 배터리·800V·OTA 같은 '시대의 차'. 실구매가(보조금 반영)는 EV6가 약 1,600만원 저렴. 수입·정숙성·브랜드 → XC60, 가성비·전기차 이점 → EV6.",

  // ────── Hyundai IONIQ 5 기준 7쌍 ──────
  "genesis-gv60|hyundai-ioniq-5":
    "같은 E-GMP에 1,000만원 프리미엄. IONIQ 5는 실용 공간·가족형, GV60은 프리미엄 감성·디자인. IONIQ 5 LR Exclusive 5,450만원은 보조금 567만원 후 약 4,800만원, GV60 Standard 2WD 6,490만원은 보조금 287만원 후 약 6,200만원. 실구매가 1,400만원 차. 둘 다 V2L·HDA2 가능. '첫차/합리' → IONIQ 5, '만족감/고급' → GV60.",
  "hyundai-ioniq-5|volvo-ex40":
    "준중형 vs 소형의 차이. IONIQ 5는 531L 트렁크·3,000mm 휠베이스로 넉넉. EX40은 452L·2,702mm로 아담. 주행거리 485 vs 434km. 가격은 IONIQ 5 5,450만 vs EX40 6,674만 - IONIQ 5가 1,200만원 저렴. EX40의 360 카메라·파일럿 어시스트·하만카돈이 기본인 점은 강점. '실용 공간 극대' → IONIQ 5, '콤팩트·안전·일괄옵션' → EX40.",
  "hyundai-ioniq-5|lexus-nx":
    "IONIQ 5 LR Exclusive(5,450만, 보조금 반영 약 4,800만)는 NX350h Premium(6,695만) 대비 실구매 약 1,900만원 저렴. NX는 LSS+·무선 CarPlay·정숙성·잔존가치가 강점. 아파트 충전 + 단거리 출퇴근 + 주말 30-40km이면 IONIQ 5의 경제성이 압도적. 충전 걱정 없음·브랜드 선호면 NX.",
  "hyundai-ioniq-5|kia-sportage-hev":
    "IONIQ 5(5,450만, 보조금 후 4,800만)와 Sportage HEV Signature(4,200만)는 실구매가 500~600만원 차. Sportage는 16.3km/L·637L 트렁크·5년 A/S로 가성비 최고. IONIQ 5는 주행거리 485km·800V·V2L로 미래지향. 예산 민감·단거리 → Sportage, 장기 운영·확장성 → IONIQ 5.",
  "hyundai-ioniq-5|hyundai-tucson-hev":
    "같은 현대차 내 EV vs HEV 선택. Tucson HEV H-Pick(3,611만)이 1,800만원 저렴. IONIQ 5 LR Exclusive는 보조금 반영 시 약 4,800만원으로 격차 1,200만원. 연 운영비 IONIQ 5가 100만원+ 저렴. Tucson은 첫차 안전·출고 빠름. 아파트 충전 있고 장기 운영 → IONIQ 5, 초단거리·단순함 → Tucson.",
  "hyundai-ioniq-5|kia-sorento-hev":
    "1-2인엔 Sorento가 오버스펙이지만 주말 장거리·캠핑엔 7인승 활용 가능. Sorento HEV Noblesse(4,280만)가 IONIQ 5 LR Exclusive(5,450만)보다 1,200만원 저렴. 보조금 반영 시 실구매 차이 축소. 가족 이벤트 많음·큰 공간 → Sorento, 도심·효율 → IONIQ 5.",
  "hyundai-ioniq-5|volvo-xc60":
    "IONIQ 5 LR Exclusive(보조금 반영 4,800만)는 XC60 Plus(6,570만)보다 실구매 약 1,800만원 저렴. XC60은 MHEV 정숙성·에어서스(Ultra)·북유럽 안전 철학. IONIQ 5는 전기차 이점·V2L·미래 유지비. 수입·프리미엄 브랜드 → XC60, 경제성·확장성 → IONIQ 5.",

  // ────── Genesis GV60 기준 6쌍 ──────
  "genesis-gv60|volvo-ex40":
    "프리미엄 EV 대결. GV60 Standard 2WD(6,490만, 보조금 후 6,200만)와 EX40 단일 트림(6,674만). GV60은 27인치 OLED·페이스 커넥트·크리스털 스피어 같은 '혁신', EX40은 360 카메라·파일럿 어시스트·하만카돈이 모두 기본인 '일괄 구성'. 주행거리 GV60 481 > EX40 434km. 한국형 UX·A/S → GV60, 북유럽 안전 철학 → EX40.",
  "genesis-gv60|lexus-nx":
    "프리미엄 vs 프리미엄. GV60 Standard 2WD(6,490만)와 NX350h Premium(6,695만)은 가격 비슷. GV60은 전기차+보조금 287만원 → 실구매 6,200만. NX는 HEV로 세제혜택 없음. 장기 운영비 GV60이 유리. 다만 NX의 정숙성·잔존가치는 검증됨. 아파트 충전 有 → GV60이 압도적, 충전 걱정 + 잔존가치 중시 → NX.",
  "genesis-gv60|kia-sportage-hev":
    "가격대가 2,000만원 이상 차이(GV60 6,490만 vs Sportage 4,200만). 완전히 다른 체급. Sportage는 가성비·16.3km/L·5년 A/S. GV60은 프리미엄 감성·27인치 OLED·800V 충전. 첫차·예산 민감 → Sportage, 한 번쯤 고급 → GV60.",
  "genesis-gv60|hyundai-tucson-hev":
    "GV60(6,490만)과 Tucson HEV H-Pick(3,611만)의 가격 차 2,900만원은 '프리미엄 세금'. Tucson은 16.2km/L·5인 가족차로 충분. GV60은 혁신 UX·프리미엄 감성. 합리적 선택은 Tucson이지만, '1-2인 가구가 첫차로 정말 마음에 드는 차'를 원한다면 GV60도 합리적 이상주의.",
  "genesis-gv60|kia-sorento-hev":
    "Sorento HEV Noblesse(4,280만)와 GV60 Standard 2WD(6,490만)의 2,200만원 차. Sorento는 7인승·패밀리·연비. GV60은 5인승·프리미엄 EV. 1-2인엔 Sorento 오버스펙이지만 가격 매력. GV60은 첫차로는 과하지만 장기 선택. 미래 가족·사용 유연 → Sorento, 현재 만족 → GV60.",
  "genesis-gv60|volvo-xc60":
    "국산 프리미엄 vs 수입 프리미엄. GV60 Standard 2WD(6,490만, 보조금 반영 6,200만)와 XC60 Plus(6,570만)는 거의 같은 가격. GV60은 EV·27인치 OLED·국내 A/S, XC60은 MHEV·에어서스·B&W·스칸디 감성. 둘 다 '프리미엄이지만 방향이 다름'. 최신 테크·전기차 운영비 → GV60, 승차감·잔존가치·수입 브랜드 → XC60.",

  // ────── Volvo EX40 기준 5쌍 ──────
  "lexus-nx|volvo-ex40":
    "EX40(6,674만)과 NX350h Premium(6,695만)은 같은 가격. EX40은 전기차로 보조금 적용 시 실구매가 약 6,300만원으로 하락, NX는 동일 유지. 장기 운영비 차이 큼. EX40은 360 카메라·하만카돈 기본, NX는 서라운드 뷰·HUD 없음(Premium 기준). EX40이 여러모로 유리하지만 NX의 정숙성·신뢰성은 개인 가치.",
  "kia-sportage-hev|volvo-ex40":
    "EX40 6,674만원과 Sportage HEV Signature 4,200만원의 2,400만원 차. Sportage는 637L 트렁크·16.3km/L·국산 A/S. EX40은 북유럽 안전·400km+ 주행거리·단일 트림 풀옵션. 합리성은 Sportage, 브랜드/감성은 EX40. 예산 7천만원 내 수입 EV를 원한다면 EX40은 거의 유일 선택지.",
  "hyundai-tucson-hev|volvo-ex40":
    "EX40(6,674만) vs Tucson HEV H-Pick(3,611만): 3,000만원 차. Tucson은 가성비·16.2km/L·HDA 기본·5년 A/S. EX40은 소형 프리미엄 EV로 급이 다름. 예산 넉넉·프리미엄 EV 원함 → EX40, 실용·첫차 → Tucson. 둘 사이에 EV6/IONIQ 5가 '중간 지점'으로 더 합리적일 수 있음.",
  "kia-sorento-hev|volvo-ex40":
    "체급(중형 7인승 vs 소형 5인승)과 파워트레인(HEV vs EV)이 모두 다름. Sorento Noblesse 4,280만 vs EX40 6,674만. 가족 많음·장거리·가솔린 편함 → Sorento, 1-2인·도심·전기차 → EX40.",
  "volvo-ex40|volvo-xc60":
    "같은 볼보 형제차. EX40은 소형 EV(단일 트림 6,674만), XC60은 중형 MHEV(Plus 6,570만). 비슷한 가격에 크기는 XC60이 확실히 큼(트렁크 452 vs 483L, 휠베이스 2,702 vs 2,865mm). EX40은 전기차로 보조금·운영비 유리, XC60은 공간·승차감·에어서스(Ultra). 1-2인 도심 → EX40, 주말 여행 자주·여유 공간 → XC60.",

  // ────── Lexus NX 기준 4쌍 ──────
  "kia-sportage-hev|lexus-nx":
    "같은 하이브리드. NX350h Premium(6,695만)과 Sportage HEV Signature(4,200만)는 2,500만원 차이. Sportage가 연비(16.3 vs 14.0km/L)·공간(637 vs 520L)·가격 모두 우위. NX는 렉서스 정숙성·잔존가치·LSS+ 안전. 합리 → Sportage, 브랜드·장기 보유 → NX.",
  "hyundai-tucson-hev|lexus-nx":
    "Tucson HEV H-Pick(3,611만)과 NX350h Premium(6,695만)은 3,100만원 차이. Tucson이 연비(16.2 vs 14.0)·공간(622 vs 520L)·가격·5년 A/S 모두 우위. NX의 정숙성·프리미엄 감성·25년+ 잔존가치는 실용성 이상의 가치. 합리 → Tucson, 감성·장기 → NX.",
  "kia-sorento-hev|lexus-nx":
    "가족 차 vs 프리미엄 HEV. Sorento Noblesse(4,280만)는 7인승 가능·넉넉한 공간·국내 A/S. NX350h Premium(6,695만)은 5인승·정숙성·잔존가치. 가격 차 2,400만원. 7인승·가족 중시 → Sorento, 프리미엄·2인 데일리 → NX.",
  "lexus-nx|volvo-xc60":
    "수입 프리미엄 HEV/MHEV 대결. NX350h Premium(6,695만)과 XC60 Plus(6,570만)는 가격 비슷. NX는 AWD 기본·14.0km/L·렉서스 잔존가치. XC60은 MHEV·360 카메라·파일럿 어시스트·에어서스(Ultra 옵션). NX Premium은 서라운드 뷰 없음, XC60 Plus는 기본. 일본 정숙 → NX, 북유럽 안전 → XC60.",

  // ────── Kia Sportage 기준 3쌍 ──────
  "hyundai-tucson-hev|kia-sportage-hev":
    "자매 HEV로 플랫폼·파워트레인 공유. Sportage Signature(4,200만)가 Tucson H-Pick(3,611만)보다 600만원 비싸지만 트림 상위. 같은 트림 비교면 가격 거의 동일. Sportage는 더 각지고 대담한 디자인, Tucson은 파라메트릭 그릴·픽셀 램프로 개성. 연비 Sportage 16.3 > Tucson 16.2km/L 미세 차이. 디자인 취향+서비스 접근성으로 결정.",
  "kia-sorento-hev|kia-sportage-hev":
    "같은 기아 SUV지만 급이 다름. Sorento Noblesse(4,280만, 중형 5/6/7인승)와 Sportage Signature(4,200만, 준중형 5인승)는 가격 비슷. 공간은 Sorento가 확연히 크지만, 1-2인엔 Sportage가 적당. 연비 Sportage 16.3 > Sorento 15.7km/L. 1-2인 일상 → Sportage, 가족 확장 대비 → Sorento.",
  "kia-sportage-hev|volvo-xc60":
    "국산 HEV vs 수입 MHEV. Sportage Signature(4,200만)와 XC60 Plus(6,570만)는 2,400만원 차. Sportage는 연비(16.3 vs 10.7km/L)·가격·국내 A/S 압승. XC60은 수입 브랜드·안전 철학·승차감·잔존가치. 첫차 합리 → Sportage, 오래 탈 프리미엄 → XC60.",

  // ────── Hyundai Tucson 기준 2쌍 ──────
  "hyundai-tucson-hev|kia-sorento-hev":
    "같은 현대·기아 HEV지만 크기 다름. Tucson H-Pick(3,611만, 준중형)과 Sorento Noblesse(4,280만, 중형)는 600만원 차. 1-2인엔 Tucson이 적당, Sorento는 주말 장거리·본가 방문·가족 확장 대비. 연비 Tucson 16.2 > Sorento 15.7km/L. 예산+크기 둘 다 맞음 → Tucson, 여유 공간 원함 → Sorento.",
  "hyundai-tucson-hev|volvo-xc60":
    "Tucson H-Pick(3,611만)과 XC60 Plus(6,570만)의 3,000만원 차는 '국산 실용 vs 수입 프리미엄'의 전형. Tucson은 16.2km/L·HDA 기본·빠른 출고. XC60은 360 카메라·파일럿 어시스트·B&W(Ultra)·스칸디 감성. 첫차 합리 → Tucson, 승차감·브랜드 → XC60.",

  // ────── Kia Sorento 기준 1쌍 ──────
  "kia-sorento-hev|volvo-xc60":
    "중형급 비교. Sorento HEV Noblesse(4,280만, 2WD 5/6/7인승 선택)와 XC60 Plus(6,570만, 5인승 AWD). 가격 차 2,300만원. Sorento는 7인승 확장성·15.7km/L·국내 A/S. XC60은 360 카메라·파일럿 어시스트·에어서스(Ultra)·수입 프리미엄. 가족·확장 → Sorento, 프리미엄·승차감 → XC60.",
};

/**
 * 두 슬러그를 알파벳순으로 합쳐 키를 만듭니다.
 */
export function insightKey(a: string, b: string): string {
  return [a, b].sort().join("|");
}

export function getInsight(a: string, b: string): string | null {
  return PAIRS[insightKey(a, b)] ?? null;
}

export function getAllInsights(slugs: string[]): Array<{ pair: [string, string]; text: string }> {
  const out: Array<{ pair: [string, string]; text: string }> = [];
  for (let i = 0; i < slugs.length; i++) {
    for (let j = i + 1; j < slugs.length; j++) {
      const text = getInsight(slugs[i], slugs[j]);
      if (text) out.push({ pair: [slugs[i], slugs[j]], text });
    }
  }
  return out;
}
