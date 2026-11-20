import React from 'react'

export interface HeaderProps {
  title: string
  onLogoClick?: () => void
  children?: React.ReactNode
}

export const Header: React.FC<HeaderProps> = ({ title, onLogoClick, children }) => {
  return (
    <header className="ui-header">
      <div
        className="ui-header__logo"
        onClick={onLogoClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && onLogoClick?.()}
      >
        <span className="ui-header__logo-icon">📷</span>
        <span className="ui-header__title">{title}</span>
      </div>
      <nav className="ui-header__nav">
        {children}
      </nav>
    </header>
  )
}