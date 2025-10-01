import { useState } from 'react';
import type { SurveyData } from '../types/survey';

export const useSurveySubmit = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const submitSurvey = async (data: SurveyData): Promise<boolean> => {
    setIsSubmitting(true);

    try {
      // 콘솔에 제출 데이터 출력
      console.log('🎯 설문조사 제출 데이터:', JSON.stringify(data, null, 2));

      // Google Apps Script Web App URL
      const GAS_WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbwGF5wMYUjTKBRXywnnlExKAPhhYzBuo7_f-5bMsfL3SXaCnIGYTfObHMu28Phs1N9eJA/exec';

      const response = await fetch(GAS_WEB_APP_URL, {
        method: 'POST',
        mode: 'no-cors', // Google Apps Script CORS 우회
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      // no-cors 모드에서는 response를 확인할 수 없으므로 성공으로 간주
      console.log('✅ 설문 제출 완료');

      setIsSuccess(true);
      return true;
    } catch (error) {
      console.error('Survey submission error:', error);
      alert('제출 중 오류가 발생했습니다');
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    isSubmitting,
    isSuccess,
    submitSurvey,
  };
};