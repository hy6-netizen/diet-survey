import React from 'react';

interface CheckboxGroupProps {
  options: string[];
  selectedValues: string[];
  onChange: (values: string[]) => void;
  name: string;
}

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  options,
  selectedValues,
  onChange,
  name,
}) => {
  const handleChange = (value: string, checked: boolean) => {
    if (checked) {
      onChange([...selectedValues, value]);
    } else {
      onChange(selectedValues.filter(v => v !== value));
    }
  };

  return (
    <div className="space-y-3">
      {options.map((option) => (
        <label
          key={option}
          className="flex items-center space-x-3 cursor-pointer p-3 rounded-lg border border-gray-200 hover:border-point transition-colors"
        >
          <input
            type="checkbox"
            name={name}
            value={option}
            checked={selectedValues.includes(option)}
            onChange={(e) => handleChange(option, e.target.checked)}
            className="w-5 h-5 text-point focus:ring-point border-gray-300 rounded"
          />
          <span className="text-dark-brown">{option}</span>
        </label>
      ))}
    </div>
  );
};

export default CheckboxGroup;