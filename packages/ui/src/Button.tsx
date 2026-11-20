import React from 'react'

export interface ButtonProps {
  label: string
  onClick: () => void
  disabled?: boolean
}

export const Button: React.FC<ButtonProps> = ({ label, onClick, disabled = false }) => {
  return (
    <button 
      type="button" 
      onClick={onClick} 
      disabled={disabled}
      className="ui-button"
    >
      {label}
    </button>
  )
}