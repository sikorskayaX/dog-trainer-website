import React from "react";
import { RegisterOptions, UseFormRegister } from "react-hook-form";

interface InputFieldProps {
  name: string;
  placeholder: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<any>; 
  rules?: RegisterOptions; 
}

export const InputField: React.FC<InputFieldProps> = ({
  name,
  placeholder,
  type = "text",
  required = true,
  register,
  rules,
}) => (
  <input
    type={type}
    placeholder={placeholder}
    {...register(name, { required, ...rules })}
    className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 transition-colors text-sm"
  />
);
