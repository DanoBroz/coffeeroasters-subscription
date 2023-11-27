import { render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'

import { CollectionItem } from '../components'

const renderComponent = () => {
    render(
        <CollectionItem
            imageSrc='gran-espresso'
            alt='Gran Espresso'
            itemHeading='Gran Espresso'
            itemText='Light and flavorful blend with cocoa and black pepper for an intense experience'
        />
    )
}

describe('CollectionItem renders with all components', () => {
    test('renders image', () => {
        renderComponent()
        const image = screen.getByRole('img', { name: /gran espresso/i })

        expect(image).toBeInTheDocument()
    })

    test('renders item heading', () => {
        renderComponent()
        const itemHeading = screen.getByRole('heading', {
            name: /collection heading/i,
        })

        expect(itemHeading).toBeInTheDocument()
    })

    test('renders item text', () => {
        renderComponent()
        const itemText = screen.getByRole('textbox', {
            name: /collection text/i,
        })

        expect(itemText).toBeInTheDocument()
    })
})
