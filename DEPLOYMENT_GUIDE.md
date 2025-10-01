# React 라우팅 구조 변경 완료

## 변경 사항

### 1. 패키지 설치
- `react-router-dom` 설치 완료

### 2. 페이지 구조 생성
- `src/pages/Home.tsx`: 홈 페이지 (Hero 배너 + CTA 버튼)
- `src/pages/DietSurvey.tsx`: 기존 다이어트 설문 페이지

### 3. 라우팅 설정
- `src/App.tsx`: Routes 구성 추가
  - `/` → Home 페이지
  - `/diet-survey` → 다이어트 설문 페이지
- `src/main.tsx`: BrowserRouter 추가

### 4. Vercel SPA 라우팅 설정
- `vercel.json` 생성 (새로고침 시 404 방지)

### 5. 헤더 업데이트
- `src/components/Layout/Header.tsx`: 로고 클릭 시 홈으로 이동 (React Router Link 사용)

## 프로젝트 구조

```
diet-survey/
├── src/
│   ├── pages/
│   │   ├── Home.tsx          # 홈 페이지
│   │   └── DietSurvey.tsx    # 설문 페이지
│   ├── components/
│   │   ├── Layout/
│   │   │   ├── Header.tsx    # 헤더 (React Router Link로 업데이트)
│   │   │   └── Banner.tsx
│   │   ├── Survey/
│   │   └── UI/
│   ├── App.tsx               # 라우팅 설정
│   └── main.tsx              # BrowserRouter 설정
├── public/
│   └── logo.png              # 로고 이미지 (절대 경로 사용)
└── vercel.json               # Vercel SPA 라우팅 설정
```

## 배포 방법

### Vercel 배포
```bash
npm run build
vercel --prod
```

또는 GitHub 연동 시 자동 배포됩니다.

## 로컬 테스트
```bash
npm run dev
```

브라우저에서:
- http://localhost:5173/ → 홈 페이지
- http://localhost:5173/diet-survey → 설문 페이지

## 주요 기능

### 홈 페이지 (`/`)
- Hero 배너: 현우한의원 소개
- CTA 버튼: "다이어트 설문 바로가기" → `/diet-survey`로 이동
- 특징 소개 섹션
- 하단 CTA 섹션

### 설문 페이지 (`/diet-survey`)
- 기존 다이어트 설문 기능 유지
- 헤더의 로고 클릭 시 홈으로 이동 가능

## 에셋 경로
- 모든 이미지는 `/public` 폴더에 위치
- JSX에서 절대 경로(`/logo.png`) 사용
- Vite가 자동으로 빌드 시 처리

## 새로고침 처리
- `vercel.json`의 rewrite 설정으로 모든 경로를 `/index.html`로 라우팅
- React Router가 클라이언트 측에서 올바른 페이지 렌더링
