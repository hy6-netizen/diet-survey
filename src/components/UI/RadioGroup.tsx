import React from 'react';

interface RadioGroupProps {
  options: string[];
  selectedValue: string;
  onChange: (value: string) => void;
  name: string;
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  options,
  selectedValue,
  onChange,
  name,
}) => {
  return (
    <div className="space-y-3">
      {options.map((option) => (
        <label
          key={option}
          className="flex items-center space-x-3 cursor-pointer p-3 rounded-lg border border-gray-200 hover:border-point transition-colors"
        >
          <input
            type="radio"
            name={name}
            value={option}
            checked={selectedValue === option}
            onChange={(e) => onChange(e.target.value)}
            className="w-5 h-5 text-point focus:ring-point border-gray-300"
          />
          <span className="text-dark-brown text-base">{option}</span>
        </label>
      ))}
    </div>
  );
};

export default RadioGroup;