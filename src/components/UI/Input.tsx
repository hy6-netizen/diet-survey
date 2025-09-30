import React from 'react';

interface InputProps {
  type: 'text' | 'tel' | 'number';
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  maxLength?: number;
}

const Input: React.FC<InputProps> = ({
  type,
  value,
  onChange,
  placeholder,
  maxLength,
}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      maxLength={maxLength}
      className="w-full p-4 border border-gray-200 rounded-lg focus:border-point focus:ring-2 focus:ring-point/20 outline-none transition-all min-h-[44px] text-dark-brown"
    />
  );
};

export default Input;