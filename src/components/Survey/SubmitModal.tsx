import React from 'react';
import Button from '../UI/Button';

interface SubmitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SubmitModal: React.FC<SubmitModalProps> = ({ isOpen }) => {
  if (!isOpen) return null;

  const handleRedirect = () => {
    window.location.href = 'https://hanclinic.site';
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl p-6 max-w-sm w-full animate-fade-in-up">
        <div className="text-center">
          <div className="mb-4">
            <div className="w-16 h-16 bg-point rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>

          <h3 className="text-lg font-semibold text-dark-brown mb-4">
            소중한 정보 감사드립니다.
          </h3>

          <p className="text-dark-brown text-sm leading-relaxed mb-6">
            다이어트 상담원이 입력해주신 전화번호로 무료상담을 진행할 예정입니다.
          </p>

          <Button onClick={handleRedirect}>
            메인 홈페이지로 이동
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SubmitModal;