import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import { Header } from '@image-host/ui'
import HomePage from './pages/HomePage'
import AlbumPage from './pages/AlbumPage'
import UploadPage from './pages/UploadPage'
import ImageViewerPage from './pages/ImageViewerPage'

function App() {
  const navigate = useNavigate()

  return (
    <div className="app">
      <Header title="Image Hosting" onLogoClick={() => navigate('/')}>
        <Link to="/">Альбомы</Link>
        <Link to="/upload">Загрузить</Link>
      </Header>
      <main className="app__content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/album/:id" element={<AlbumPage />} />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/image/:id" element={<ImageViewerPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App