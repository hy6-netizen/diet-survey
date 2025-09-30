# 다이어트 설문조사

모바일 퍼스트 반응형 다이어트 설문 랜딩 페이지

## 기술 스택

- React 18 + TypeScript
- Vite (빌드 도구)
- Tailwind CSS (스타일링)
- Pretendard + Noto Sans KR (폰트)

## 주요 기능

- 7단계 설문 진행
- 실시간 유효성 검증
- 모바일 퍼스트 반응형 디자인
- Google Apps Script 연동으로 데이터 수집
- 애니메이션 (shake, fade-in-up)

## 개발 환경

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build

# 미리보기
npm run preview
```

## 설문 질문

1. 고민 부위 (복수 선택)
2. 다이어트 경험 (복수 선택)
3. 성별 (단일 선택)
4. 성함 입력
5. 생년 입력
6. 휴대폰 번호 입력
7. 개인정보 수집 동의

## 색상 팔레트

- 배경: #FFFAEE (아이보리)
- 카드: #FFFFFF (화이트)
- 텍스트: #2F2A26 (다크 브라운)
- 포인트: #C6BFAF (버튼 색상)
- 호버: #8B7E6A (버튼 호버)
- 에러: #DC2626 (에러 텍스트)

## 배포

Vercel을 통해 hanclinic.site 도메인으로 배포
