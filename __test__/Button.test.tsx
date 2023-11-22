import { render, screen } from '@testing-library/react'
import { Button } from '../components/Button'
import '@testing-library/jest-dom'

describe('Button', () => {
    it('renders a button', () => {
        render(<Button>Click me</Button>)
        expect(screen.getByRole('button')).toBeInTheDocument()
    })
})
