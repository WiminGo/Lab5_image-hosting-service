import { render, screen, fireEvent } from '@testing-library/react'
import { Button } from './Button'

describe('Button Component', () => {
  it('renders correctly with label', () => {
    const handleClick = jest.fn()
    render(<Button label="Загрузить" onClick={handleClick} />)
    expect(screen.getByRole('button', { name: /загрузить/i })).toBeInTheDocument()
  })

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn()
    render(<Button label="Нажми" onClick={handleClick} />)
    fireEvent.click(screen.getByRole('button', { name: /нажми/i }))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('is disabled when disabled prop is true', () => {
    const handleClick = jest.fn()
    render(<Button label="Неактивна" onClick={handleClick} disabled={true} />)
    const buttonElement = screen.getByRole('button', { name: /неактивна/i })
    expect(buttonElement).toBeDisabled()
    fireEvent.click(buttonElement)
    expect(handleClick).not.toHaveBeenCalled()
  })
})