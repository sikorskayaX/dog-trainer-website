import React from 'react'
import { IMaskInput } from 'react-imask'
import classNames from "classnames";

interface PhoneInputProps {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  disabled?: boolean
}

export const PhoneInput: React.FC<PhoneInputProps> = ({
  value,
  onChange,
  placeholder = '+7 (000) 000-00-00',
  disabled = false,
}) => {
  return (
    <IMaskInput
      mask="+7 (000) 000-00-00"
      value={value}
      unmask={true} // Сохраняем только цифры в value
      onAccept={(val: string) => {
        // Сохраняем полный номер с кодом страны
        const fullNumber = '7' + val
        onChange({
          target: { value: fullNumber },
        } as React.ChangeEvent<HTMLInputElement>)
      }}
      placeholder={placeholder}
      className={classNames(
        "w-full px-4 py-3 rounded-xl transition-colors text-sm",
        "bg-slate-800 border border-gray-600 text-white placeholder-gray-400",
        "focus:outline-none focus:border-amber-400",
        " disabled:placeholder-gray-600 disabled:cursor-not-allowed disabled:text-gray-600 disabled:bg-gray-700"
      )}
      disabled={disabled}
      definitions={{
        '0': /[0-9]/,
      }}
      prepare={(str: string) => {
        // Если пользователь начинает вводить с 8, заменяем на +7
        if (str.startsWith('8')) {
          return str.replace('8', '+7')
        }
        return str
      }}
    />
  )
}
