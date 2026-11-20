import { useParams, useNavigate } from 'react-router-dom'
import { ImageCard } from '@image-host/ui'
import { getAlbumById } from '../data/mockData'

const AlbumPage = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const album = getAlbumById(id || '')

  if (!album) {
    return (
      <>
        <h1 className="page-title">Альбом не найден</h1>
        <p className="page-subtitle">Запрашиваемый альбом не существует</p>
      </>
    )
  }

  return (
    <>
      <h1 className="page-title">{album.title}</h1>
      <p className="page-subtitle">
        {album.images.length} {album.images.length === 1 ? 'изображение' : 'изображений'} в этом альбоме
      </p>
      <div className="images-grid">
        {album.images.map((image) => (
          <ImageCard
            key={image.id}
            src={image.src}
            alt={image.title}
            title={image.title}
            onClick={() => navigate(`/image/${image.id}`)}
          />
        ))}
      </div>
    </>
  )
}

export default AlbumPage