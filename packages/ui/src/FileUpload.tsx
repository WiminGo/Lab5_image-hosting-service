import React, { useState } from 'react'

export interface FileUploadProps {
  onFileSelect: (file: File) => void
  accept?: string
}

export const FileUpload: React.FC<FileUploadProps> = ({
  onFileSelect,
  accept = 'image/*'
}) => {
  const [fileName, setFileName] = useState<string>('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setFileName(file.name)
      onFileSelect(file)
    }
  }

  return (
    <div className="ui-file-upload">
      <label className="ui-file-upload__label">
        <input
          type="file"
          accept={accept}
          onChange={handleChange}
          className="ui-file-upload__input"
        />
        <span className="ui-file-upload__button">
          {fileName ? fileName : 'Выберите изображение'}
        </span>
      </label>
    </div>
  )
}