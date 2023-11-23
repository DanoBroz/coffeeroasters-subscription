import { render, screen, within } from '@testing-library/react'
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

    test('Renders navigation items', () => {
        renderComponent()
        const navigationItems = screen.getByRole('navigation')
        expect(navigationItems).toBeInTheDocument()

        const links = within(navigationItems).getAllByRole('link')

        expect(links).toHaveLength(3)

        for (const link of links) {
            expect(link).toHaveAttribute('href')
        }
    })
})
