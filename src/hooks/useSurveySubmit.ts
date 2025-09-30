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

      // Google Apps Script Web App URL - 실제 배포 시 교체 필요
      // const GAS_WEB_APP_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';

      // const response = await fetch(GAS_WEB_APP_URL, {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(data),
      // });

      // if (!response.ok) {
      //   throw new Error('Network response was not ok');
      // }

      // 임시로 성공 처리 (개발용)
      await new Promise(resolve => setTimeout(resolve, 1000));

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