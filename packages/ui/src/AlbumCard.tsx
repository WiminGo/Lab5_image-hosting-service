import React from 'react'

export interface AlbumCardProps {
  title: string
  coverUrl: string
  imagesCount: number
  onClick?: () => void
}

export const AlbumCard: React.FC<AlbumCardProps> = ({
  title,
  coverUrl,
  imagesCount,
  onClick
}) => {
  return (
    <div
      className="ui-album-card"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick?.()}
    >
      <div className="ui-album-card__cover">
        <img src={coverUrl} alt={title} />
      </div>
      <div className="ui-album-card__info">
        <h3 className="ui-album-card__title">{title}</h3>
        <span className="ui-album-card__count">
          {imagesCount} {imagesCount === 1 ? 'изображение' : 'изображений'}
        </span>
      </div>
    </div>
  )
}