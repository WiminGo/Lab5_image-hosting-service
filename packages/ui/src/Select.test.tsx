import { render, screen, fireEvent } from '@testing-library/react'
import { Select } from './Select'

describe('Select', () => {
  it('renders label, options and calls onChange', () => {
    const handleChange = jest.fn()
    const options = [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' }
    ]
    render(<Select label="Choose" value="" onChange={handleChange} options={options} />)
    
    expect(screen.getByText('Choose')).toBeInTheDocument()
    const select = screen.getByRole('combobox')
    
    fireEvent.change(select, { target: { value: '1' } })
    expect(handleChange).toHaveBeenCalledWith('1')
  })
})