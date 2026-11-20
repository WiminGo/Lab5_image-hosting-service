/// <reference types="jest" />
import { render, screen, fireEvent } from '@testing-library/react'
import { ImageCard } from './ImageCard'

describe('ImageCard', () => {
  it('renders image with alt text', () => {
    render(<ImageCard src="/test.jpg" alt="Test image" />)
    expect(screen.getByAltText('Test image')).toBeInTheDocument()
  })

  it('renders title and calls onClick', () => {
    const handleClick = jest.fn()
    render(<ImageCard src="/test.jpg" alt="Test" title="My Photo" onClick={handleClick} />)
    expect(screen.getByText('My Photo')).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('renders without title', () => {
    render(<ImageCard src="/test.jpg" alt="No title" />)
    expect(screen.queryByText(/.+/)).not.toBeInTheDocument()
  })
})