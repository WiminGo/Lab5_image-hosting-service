import React from 'react'

export interface InputProps {
  label: string
  value: string
  onChange: (value: string) => void
  placeholder?: string
  type?: string
}

export const Input: React.FC<InputProps> = ({
  label,
  value,
  onChange,
  placeholder = '',
  type = 'text'
}) => {
  return (
    <div className="ui-input">
      <label className="ui-input__label">{label}</label>
      <input
        type={type}
        className="ui-input__field"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  )
}