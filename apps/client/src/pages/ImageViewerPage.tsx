import { useParams, useNavigate } from 'react-router-dom'
import { Button } from '@image-host/ui'

const ImageViewerPage = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  return (
    <>
      <h1 className="page-title">Просмотр изображения #{id}</h1>
      <div className="image-viewer">
        <img
          src={`https://picsum.photos/seed/${id}/800/600`}
          alt={`Image ${id}`}
        />
        <div style={{ marginTop: '20px' }}>
          <Button label="Назад к альбому" onClick={() => navigate(-1)} />
        </div>
      </div>
    </>
  )
}

export default ImageViewerPage