/// <reference types="jest" />
import { render, screen, fireEvent } from '@testing-library/react'
import { FileUpload } from './FileUpload'

describe('FileUpload', () => {
  it('renders upload label and handles file selection', () => {
    const handleSelect = jest.fn()
    render(<FileUpload onFileSelect={handleSelect} />)

    expect(screen.getByText('Выберите изображение')).toBeInTheDocument()

    const label = screen.getByText('Выберите изображение').parentElement
    const input = label?.querySelector('input')

    const file = new File(['dummy content'], 'test.png', { type: 'image/png' })
    fireEvent.change(input!, { target: { files: [file] } })

    expect(handleSelect).toHaveBeenCalledWith(file)
    expect(screen.getByText('test.png')).toBeInTheDocument()
  })

  it('handles empty file selection (cancels dialog)', () => {
    const handleSelect = jest.fn()
    render(<FileUpload onFileSelect={handleSelect} />)

    const label = screen.getByText('Выберите изображение').parentElement
    const input = label?.querySelector('input')

    fireEvent.change(input!, { target: { files: [] } })

    expect(handleSelect).not.toHaveBeenCalled()
    expect(screen.getByText('Выберите изображение')).toBeInTheDocument()
  })
})