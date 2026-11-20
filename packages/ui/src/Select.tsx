import React from 'react'

export interface SelectOption {
  value: string
  label: string
}

export interface SelectProps {
  label: string
  value: string
  onChange: (value: string) => void
  options: SelectOption[]
  placeholder?: string
}

export const Select: React.FC<SelectProps> = ({
  label,
  value,
  onChange,
  options,
  placeholder = 'Выберите...'
}) => {
  return (
    <div className="ui-select">
      <label className="ui-select__label">{label}</label>
      <select
        className="ui-select__field"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}