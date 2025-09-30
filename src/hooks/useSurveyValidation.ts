import { useState } from 'react';
import type { SurveyData, ValidationErrors } from '../types/survey';
import {
  validateName,
  validateBirthYear,
  validatePhone,
  validateArray,
  validateConsent,
} from '../utils/validation';

export const useSurveyValidation = () => {
  const [errors, setErrors] = useState<ValidationErrors>({});

  const validateStep = (step: number, data: SurveyData): boolean => {
    const newErrors: ValidationErrors = {};

    switch (step) {
      case 1: // 부위 선택
        if (!validateArray(data.areas)) {
          newErrors.areas = '선택을 해야 다음으로 넘어갑니다.';
        }
        break;

      case 2: // 다이어트 경험
        if (!validateArray(data.best_experience)) {
          newErrors.best_experience = '선택을 해야 다음으로 넘어갑니다.';
        }
        break;

      case 3: // 성별
        if (!data.gender) {
          newErrors.gender = '선택을 해야 다음으로 넘어갑니다.';
        }
        break;

      case 4: // 성함
        if (!validateName(data.name)) {
          newErrors.name = '성함을 정확히 입력해주세요. (한글/영문, 1~10자)';
        }
        break;

      case 5: // 생년
        if (!validateBirthYear(data.birth_year)) {
          newErrors.birth_year = '생년을 4자리로 입력해주세요. (예 : 1999)';
        }
        break;

      case 6: // 휴대폰
        if (!validatePhone(data.phone)) {
          newErrors.phone = '휴대폰 번호를 정확히 입력해주세요(- 없이 입력)';
        }
        break;

      case 7: // 동의
        if (!validateConsent(data.consent)) {
          newErrors.consent = '개인정보 수집 동의를 해주세요.';
        }
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const clearError = (field: keyof ValidationErrors) => {
    setErrors(prev => {
      const updated = { ...prev };
      delete updated[field];
      return updated;
    });
  };

  return {
    errors,
    validateStep,
    clearError,
  };
};