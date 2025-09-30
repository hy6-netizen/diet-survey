import React, { useState } from 'react';
import type { SurveyData } from '../../types/survey';
import { useSurveyValidation } from '../../hooks/useSurveyValidation';
import { useSurveySubmit } from '../../hooks/useSurveySubmit';
import { surveyQuestions } from '../../data/questions';
import ProgressBar from './ProgressBar';
import QuestionCard from './QuestionCard';
import SubmitModal from './SubmitModal';
import Button from '../UI/Button';

const SurveyContainer: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isShaking, setIsShaking] = useState(false);
  const [data, setData] = useState<SurveyData>({
    areas: [],
    best_experience: [],
    gender: '',
    name: '',
    birth_year: '',
    phone: '',
    consent: false,
  });

  const { errors, validateStep, clearError } = useSurveyValidation();
  const { isSubmitting, isSuccess, submitSurvey } = useSurveySubmit();

  const totalSteps = surveyQuestions.length;
  const currentQuestion = surveyQuestions[currentStep - 1];

  const handleInputChange = (field: keyof SurveyData, value: any) => {
    setData(prev => ({ ...prev, [field]: value }));
    clearError(field);
  };

  const handleNext = () => {
    if (validateStep(currentStep, data)) {
      if (currentStep < totalSteps) {
        setCurrentStep(prev => prev + 1);
      } else {
        handleSubmit();
      }
    } else {
      triggerShake();
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = async () => {
    const success = await submitSurvey(data);
    if (!success) {
      triggerShake();
    }
  };

  const triggerShake = () => {
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 500);
  };

  const getCurrentValue = () => {
    return data[currentQuestion.id];
  };

  const getCurrentError = () => {
    return errors[currentQuestion.id];
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />

      <QuestionCard
        question={currentQuestion}
        value={getCurrentValue()}
        onChange={(value) => handleInputChange(currentQuestion.id, value)}
        error={getCurrentError()}
      />

      <div className="mt-6 flex gap-3">
        {currentStep > 1 && (
          <Button
            variant="secondary"
            onClick={handlePrev}
            className="flex-1"
          >
            이전으로
          </Button>
        )}

        <Button
          onClick={handleNext}
          disabled={isSubmitting}
          className="flex-1"
          isShaking={isShaking}
        >
          {isSubmitting
            ? '제출 중...'
            : currentStep === totalSteps
            ? '제출하기'
            : '다음으로'}
        </Button>
      </div>

      <SubmitModal
        isOpen={isSuccess}
        onClose={() => {}}
      />
    </div>
  );
};

export default SurveyContainer;