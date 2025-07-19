import React from "react";
import { UseFormRegister } from "react-hook-form";

interface Option {
  value: string | number;
  label: string;
}

interface GroupedOption {
  label: string;
  options: Option[];
}

interface FormSelectProps {
  name: string;
  register: UseFormRegister<any>;
  options?: Option[];
  groupedOptions?: GroupedOption[];
  placeholder: string;
  rules?: any;
}

export const FormSelect: React.FC<FormSelectProps> = ({
  name,
  register,
  options = [],
  groupedOptions = [],
  placeholder,
  rules,
}) => (
  <div className="relative">
    <select
      {...register(name, rules)}
      required
      className="w-full px-4 py-3 pr-8 bg-slate-800 border border-gray-600 rounded-xl text-white focus:outline-none focus:border-amber-400 transition-colors text-sm appearance-none"
    >
      <option value="">{placeholder}</option>
      {groupedOptions.length > 0
        ? groupedOptions.map((group) => (
            <optgroup key={group.label} label={group.label}>
              {group.options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </optgroup>
          ))
        : options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
    </select>
    <i className="ri-arrow-down-s-line absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
  </div>
);
