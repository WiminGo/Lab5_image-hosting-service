/// <reference types="jest" />
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import HomePage from './pages/HomePage'

describe('App Pages', () => {
  it('renders HomePage with albums title', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <HomePage />
      </MemoryRouter>
    )
    expect(screen.getByText(/Мои альбомы/i)).toBeInTheDocument()
  })
})