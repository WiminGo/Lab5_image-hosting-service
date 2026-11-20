import React from 'react'

export interface ImageCardProps {
  src: string
  alt: string
  title?: string
  onClick?: () => void
}

export const ImageCard: React.FC<ImageCardProps> = ({ src, alt, title, onClick }) => {
  return (
    <div
      className="ui-image-card"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick?.()}
    >
      <img src={src} alt={alt} className="ui-image-card__image" />
      {title && <div className="ui-image-card__title">{title}</div>}
    </div>
  )
}