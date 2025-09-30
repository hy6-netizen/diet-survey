import type { QuestionConfig } from '../types/survey';

export const surveyQuestions: QuestionConfig[] = [
  {
    id: 'areas',
    title: '어느 부위가 가장 고민이신가요? (복수 선택)',
    type: 'checkbox',
    options: ['전신', '팔뚝', '복부', '허벅지', '얼굴', '기타'],
    required: true,
    errorMessage: '선택을 해야 다음으로 넘어갑니다.',
  },
  {
    id: 'best_experience',
    title: '가장 좋았던 다이어트 경험은 무엇인가요? (복수 선택)',
    type: 'checkbox',
    options: ['없음', '한약', '양약', '보조제', 'PT', '식단', '기타'],
    required: true,
    errorMessage: '선택을 해야 다음으로 넘어갑니다.',
  },
  {
    id: 'gender',
    title: '성별을 선택해주세요.',
    type: 'radio',
    options: ['여자', '남자'],
    required: true,
    errorMessage: '선택을 해야 다음으로 넘어갑니다.',
  },
  {
    id: 'name',
    title: '성함을 입력해주세요 (한글/영문, 1~10자, 공백 불가)',
    type: 'text',
    required: true,
    errorMessage: '성함을 정확히 입력해주세요. (한글/영문, 1~10자)',
  },
  {
    id: 'birth_year',
    title: '생년을 입력해주세요 (예: 1999, 4자리 숫자)',
    type: 'year',
    required: true,
    errorMessage: '생년을 4자리로 입력해주세요. (예 : 1999)',
  },
  {
    id: 'phone',
    title: '휴대폰 번호를 입력해주세요 (-없이 입력, 11자리 숫자)',
    type: 'tel',
    required: true,
    errorMessage: '휴대폰 번호를 정확히 입력해주세요(- 없이 입력)',
  },
  {
    id: 'consent',
    title: '동의 시 다이어트 상담원이 전화로 무료상담을 진행할 예정입니다.',
    type: 'consent',
    required: true,
    errorMessage: '개인정보 수집 동의를 해주세요.',
  },
];