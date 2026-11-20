/// <reference types="jest" />
import { render, screen, fireEvent } from '@testing-library/react'
import { AlbumCard } from './AlbumCard'

describe('AlbumCard', () => {
  it('renders album title and plural count', () => {
    const handleClick = jest.fn()
    render(
      <AlbumCard title="Vacation" coverUrl="/cover.jpg" imagesCount={10} onClick={handleClick} />
    )
    expect(screen.getByText('Vacation')).toBeInTheDocument()
    expect(screen.getByText(/изображений/)).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('renders singular count when imagesCount is 1', () => {
    render(<AlbumCard title="Solo" coverUrl="/solo.jpg" imagesCount={1} />)
    expect(screen.getByText(/изображение/)).toBeInTheDocument()
  })

  it('renders zero count correctly', () => {
    render(<AlbumCard title="Empty" coverUrl="/empty.jpg" imagesCount={0} />)
    expect(screen.getByText(/изображений/)).toBeInTheDocument()
  })

  it('works without onClick handler', () => {
    render(<AlbumCard title="NoClick" coverUrl="/noclick.jpg" imagesCount={5} />)
    const card = screen.getByRole('button')
    fireEvent.click(card)
    fireEvent.keyDown(card, { key: 'Enter' })
    // Просто проверяем, что не падает
    expect(card).toBeInTheDocument()
  })
})