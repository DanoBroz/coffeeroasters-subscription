import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Footer } from '../components'

function renderComponent() {
    render(<Footer />)
}

describe('Footer renders with all components', () => {
    test('renders footer container', () => {
        renderComponent()
        const footerContainer = screen.getByRole('contentinfo', {
            name: /footer/i,
        })
        expect(footerContainer).toBeInTheDocument()
    })
})
