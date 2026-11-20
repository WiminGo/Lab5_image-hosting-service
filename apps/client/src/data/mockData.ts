export interface Album {
  id: string
  title: string
  coverUrl: string
  images: Image[]
}

export interface Image {
  id: string
  src: string
  title: string
  albumId: string
}

export const albums: Album[] = [
  {
    id: '1',
    title: 'Летние каникулы',
    coverUrl: '',
    images: [
      { id: '1-1', src: '', title: 'Пляж', albumId: '1' },
      { id: '1-2', src: '', title: 'Закат', albumId: '1' },
      { id: '1-3', src: '', title: 'Море', albumId: '1' }
    ]
  },
  {
    id: '2',
    title: 'Природа',
    coverUrl: '',
    images: [
      { id: '2-1', src: '', title: 'Лес', albumId: '2' },
      { id: '2-2', src: '', title: 'Горы', albumId: '2' },
      { id: '2-3', src: '', title: 'Озеро', albumId: '2' },
      { id: '2-4', src: '', title: 'Река', albumId: '2' }
    ]
  }
]

export const getAlbumById = (id: string): Album | undefined => {
  return albums.find((album) => album.id === id)
}

export const getImagesByAlbumId = (albumId: string): Image[] => {
  return albums.find((album) => album.id === albumId)?.images || []
}