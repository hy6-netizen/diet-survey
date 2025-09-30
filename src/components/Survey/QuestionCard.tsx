import React from 'react';
import type { QuestionConfig } from '../../types/survey';
import CheckboxGroup from '../UI/CheckboxGroup';
import RadioGroup from '../UI/RadioGroup';
import Input from '../UI/Input';

interface QuestionCardProps {
  question: QuestionConfig;
  value: any;
  onChange: (value: any) => void;
  error?: string;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  value,
  onChange,
  error,
}) => {
  const renderInput = () => {
    switch (question.type) {
      case 'checkbox':
        return (
          <CheckboxGroup
            options={question.options || []}
            selectedValues={value || []}
            onChange={onChange}
            name={question.id}
          />
        );

      case 'radio':
        return (
          <RadioGroup
            options={question.options || []}
            selectedValue={value || ''}
            onChange={onChange}
            name={question.id}
          />
        );

      case 'text':
        return (
          <Input
            type="text"
            value={value || ''}
            onChange={onChange}
            placeholder="성함을 입력해주세요"
            maxLength={10}
          />
        );

      case 'year':
        return (
          <Input
            type="number"
            value={value || ''}
            onChange={onChange}
            placeholder="1999"
            maxLength={4}
          />
        );

      case 'tel':
        return (
          <Input
            type="tel"
            value={value || ''}
            onChange={onChange}
            placeholder="01012345678"
            maxLength={11}
          />
        );

      case 'consent':
        return (
          <label className="flex items-start space-x-3 cursor-pointer p-4 rounded-lg border border-gray-200 hover:border-point transition-colors">
            <input
              type="checkbox"
              checked={value || false}
              onChange={(e) => onChange(e.target.checked)}
              className="w-5 h-5 text-point focus:ring-point border-gray-300 rounded mt-0.5"
            />
            <div className="flex-1">
              <span className="text-dark-brown">
                개인정보 수집 동의 (필수)
              </span>
              <a
                href="#"
                className="ml-2 text-point underline text-sm"
                onClick={(e) => e.preventDefault()}
              >
                자세히 보기
              </a>
            </div>
          </label>
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm animate-fade-in-up">
      <h2 className="text-lg font-semibold text-dark-brown mb-6 leading-relaxed">
        {question.title}
      </h2>

      {renderInput()}

      {error && (
        <p className="mt-3 text-error text-sm font-medium">
          {error}
        </p>
      )}
    </div>
  );
};

export default QuestionCard;