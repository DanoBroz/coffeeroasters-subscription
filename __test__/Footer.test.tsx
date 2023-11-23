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

    test('Renders logo with link to homepage', () => {
        renderComponent()
        const logo = screen.getByRole('link', { name: /coffeeroasters logo/i })
        expect(logo).toBeInTheDocument()
        expect(logo).toHaveAttribute('href', '/')
    })
})
