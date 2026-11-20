import { useState } from 'react'
import { Button, Input, FileUpload, Select } from '@image-host/ui'
import { albums } from '../data/mockData'

const UploadPage = () => {
  const [title, setTitle] = useState('')
  const [selectedAlbumId, setSelectedAlbumId] = useState('')
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const albumOptions = albums.map((album) => ({
    value: album.id,
    label: album.title
  }))

  const handleUpload = () => {
    console.log('Uploading:', {
      title,
      albumId: selectedAlbumId,
      file: selectedFile?.name
    })
  }

  return (
    <>
      <h1 className="page-title">Загрузка изображения</h1>
      <p className="page-subtitle">
        Добавьте новое изображение в один из ваших альбомов
      </p>
      <div className="upload-form">
        <FileUpload onFileSelect={setSelectedFile} />
        <Input
          label="Название изображения"
          value={title}
          onChange={setTitle}
          placeholder="Например: Закат на море"
        />
        <Select
          label="Альбом"
          value={selectedAlbumId}
          onChange={setSelectedAlbumId}
          options={albumOptions}
          placeholder="Выберите альбом..."
        />
        <div className="upload-form__actions">
          <Button label="Загрузить" onClick={handleUpload} />
        </div>
      </div>
    </>
  )
}

export default UploadPage