import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  className?: string;
  isShaking?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  disabled = false,
  className = '',
  isShaking = false,
}) => {
  const baseClasses = 'w-full py-3 px-4 rounded-lg font-bold text-base transition-all duration-200 min-h-[44px]';

  const variantClasses = {
    primary: 'bg-point text-white hover:bg-point-hover disabled:bg-gray-300 disabled:text-gray-500',
    secondary: 'bg-gray-200 text-dark-brown hover:bg-gray-300',
  };

  const shakeClass = isShaking ? 'animate-shake' : '';

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${shakeClass} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;