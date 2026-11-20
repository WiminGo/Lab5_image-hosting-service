/// <reference types="jest" />
import { render, screen, fireEvent } from '@testing-library/react'
import { Input } from './Input'

describe('Input', () => {
  it('renders label, input field and calls onChange', () => {
    const handleChange = jest.fn()
    render(<Input label="Name" value="" onChange={handleChange} placeholder="Enter name" />)
    
    expect(screen.getByText('Name')).toBeInTheDocument()
    const input = screen.getByRole('textbox')
    expect(input).toBeInTheDocument()
    
    fireEvent.change(input, { target: { value: 'John' } })
    expect(handleChange).toHaveBeenCalledWith('John')
  })

  it('renders with empty placeholder if not provided', () => {
    const handleChange = jest.fn()
    render(<Input label="Name" value="" onChange={handleChange} />)
    const input = screen.getByRole('textbox')
    expect(input).toHaveAttribute('placeholder', '')
  })
})