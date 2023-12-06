import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { OptionsSelect } from '../components'

const renderComponent = () => {
    render(
        <OptionsSelect
            optionHeading='Preferences'
            select='Capsule'
            setSelect={jest.fn()}
            data={[
                {
                    heading: 'Capsule',
                    text: 'Compatible with Nespresso systems and similar brewers',
                },
                {
                    heading: 'Filter',
                    text: 'For pour over or drip methods like Aeropress, Chemex, and V60',
                },
                {
                    heading: 'Espresso',
                    text: 'Dense and finely ground beans for an intense, flavorful experience',
                },
            ]}
        />
    )
}

describe('OptionsSelect renders with all components', () => {
    test('renders option heading', () => {
        renderComponent()
        const optionHeading = screen.getByText(/preferences/i)

        expect(optionHeading).toBeInTheDocument()
    })

    test('renders option select', () => {
        renderComponent()
        const optionSelect = screen.getByText(/capsule/i)

        expect(optionSelect).toBeInTheDocument()
    })
})
