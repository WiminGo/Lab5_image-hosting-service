import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AlbumCard, Button, Input } from '@image-host/ui'
import { albums } from '../data/mockData'

const HomePage = () => {
  const navigate = useNavigate()
  const [showCreateForm, setShowCreateForm] = useState(false)
  const [newAlbumTitle, setNewAlbumTitle] = useState('')

  const handleCreateAlbum = () => {
    if (newAlbumTitle.trim()) {
      console.log('Creating album:', newAlbumTitle)
      setNewAlbumTitle('')
      setShowCreateForm(false)
    }
  }

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <h1 className="page-title" style={{ margin: 0 }}>Мои альбомы</h1>
        <Button
          label={showCreateForm ? 'Отмена' : '+ Создать альбом'}
          onClick={() => setShowCreateForm(!showCreateForm)}
        />
      </div>
      <p className="page-subtitle">
        Организуйте ваши изображения по коллекциям
      </p>

      {showCreateForm && (
        <div className="upload-form" style={{ marginBottom: '32px' }}>
          <Input
            label="Название нового альбома"
            value={newAlbumTitle}
            onChange={setNewAlbumTitle}
            placeholder="Например: Путешествие в горы"
          />
          <div className="upload-form__actions">
            <Button label="Создать" onClick={handleCreateAlbum} />
          </div>
        </div>
      )}

      <div className="albums-grid">
        {albums.map((album) => (
          <AlbumCard
            key={album.id}
            title={album.title}
            coverUrl={album.coverUrl}
            imagesCount={album.images.length}
            onClick={() => navigate(`/album/${album.id}`)}
          />
        ))}
      </div>
    </>
  )
}

export default HomePage