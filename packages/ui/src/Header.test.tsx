/// <reference types="jest" />
import { render, screen, fireEvent } from '@testing-library/react'
import { Header } from './Header'

describe('Header', () => {
  it('renders title correctly', () => {
    render(<Header title="Image Hosting" />)
    expect(screen.getByText('Image Hosting')).toBeInTheDocument()
  })

  it('calls onLogoClick on click', () => {
    const handleClick = jest.fn()
    render(<Header title="Image Hosting" onLogoClick={handleClick} />)
    const logo = screen.getByRole('button', { name: /image hosting/i })

    fireEvent.click(logo)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('calls onLogoClick on Enter key', () => {
    const handleClick = jest.fn()
    render(<Header title="Image Hosting" onLogoClick={handleClick} />)
    const logo = screen.getByRole('button', { name: /image hosting/i })

    fireEvent.keyDown(logo, { key: 'Enter' })
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('does not call onLogoClick on other keys', () => {
    const handleClick = jest.fn()
    render(<Header title="Image Hosting" onLogoClick={handleClick} />)
    const logo = screen.getByRole('button', { name: /image hosting/i })

    fireEvent.keyDown(logo, { key: 'Tab' })
    expect(handleClick).not.toHaveBeenCalled()
  })
})