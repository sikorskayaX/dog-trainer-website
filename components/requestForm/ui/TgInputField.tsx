import { RegisterOptions, UseFormRegister } from "react-hook-form";
import React from "react";
import classNames from "classnames";

interface TgInputFieldProps {
  name: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<any>;
  rules?: RegisterOptions;
  disabled?: boolean;
}

export const TgInputField: React.FC<TgInputFieldProps> = ({
  name,
  placeholder,
  type = "text",
  required = false,
  register,
  rules,
  disabled = false,
}) => {
  const handleTelegramChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replace(/[^a-zA-Z0-9_]/g, ""); 
    event.target.value = value.startsWith("@") ? value : `@${value}`; 
  };

  return (
    <input
      type={type}
      placeholder={placeholder}
      {...register(name, { required, ...rules })}
      className={classNames(
        "w-full px-4 py-3 rounded-xl transition-colors text-sm",
        "bg-slate-800 border border-gray-600 text-white placeholder-gray-400",
        "focus:outline-none focus:border-amber-400",
        "disabled:bg-slate-600 disabled:placeholder-gray-200"
      )}
      disabled={disabled}
      onChange={handleTelegramChange}
    />
  );
};
