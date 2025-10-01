# Diet Survey 프로젝트 지침

## 배포 워크플로우

### 중요: 배포 전 확인 필수
코드 수정 후 자동으로 배포하지 않습니다. 반드시 다음 순서를 따르세요:

1. **로컬에서 수정 작업 완료**
   - 파일 수정
   - `npm run dev`로 로컬 테스트 확인

2. **사용자에게 배포 여부 확인**
   - ⚠️ "수정이 완료되었습니다. 배포를 진행할까요?" 라고 **반드시 물어볼 것**
   - 사용자가 승인하기 전까지 git commit/push 하지 않음

3. **배포 진행** (사용자 승인 후)
   ```bash
   git add .
   git commit -m "descriptive message"
   git push
   ```

4. **배포 확인**
   - Vercel 자동 배포 대기 (1-2분)
   - 사용자에게 배포 완료 안내

## 프로젝트 구조

```
diet-survey/
├── src/
│   ├── pages/
│   │   ├── Home.tsx          # 홈 페이지 (/)
│   │   └── DietSurvey.tsx    # 설문 페이지 (/diet-survey)
│   ├── components/
│   │   ├── Layout/
│   │   │   ├── Header.tsx    # 공통 헤더
│   │   │   └── Banner.tsx    # 배너
│   │   ├── Survey/           # 설문 관련 컴포넌트
│   │   └── UI/               # 공통 UI 컴포넌트
│   ├── App.tsx               # 라우팅 설정
│   └── main.tsx              # 진입점
└── vercel.json               # Vercel SPA 라우팅 설정
```

## 라우팅 구조

- `/` → Home 페이지
- `/diet-survey` → 다이어트 설문 페이지

## 개발 명령어

- `npm run dev` - 로컬 개발 서버 실행
- `npm run build` - 프로덕션 빌드
- `npm run preview` - 빌드 미리보기

## 배포 환경

- **배포 플랫폼**: Vercel
- **자동 배포**: GitHub main 브랜치 push 시 자동 배포
- **배포 URL**: https://hanclinic.site
- **설문 페이지**: https://hanclinic.site/diet-survey

## UI/UX 수정 가이드

수정 가능한 주요 파일:
- `src/pages/Home.tsx` - 홈 페이지 레이아웃/디자인
- `src/pages/DietSurvey.tsx` - 설문 페이지 구조
- `src/components/Layout/Header.tsx` - 헤더 디자인
- `src/components/Layout/Banner.tsx` - 배너 문구/스타일
- Tailwind CSS 클래스로 스타일링

## 주의사항

1. ⚠️ **배포 전 반드시 사용자에게 확인 받을 것**
2. 로컬 테스트 후 배포할 것
3. 헤더는 모든 페이지에서 공통으로 사용됨
4. 에셋은 `/public` 폴더에 위치, 절대 경로로 참조
