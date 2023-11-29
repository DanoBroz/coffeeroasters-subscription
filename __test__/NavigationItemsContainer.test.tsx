import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { NavigationItemsContainer } from '../containers'

describe('checks for the NavigationItemsContainer component', () => {
    test('checks if the right logo is rendered', async () => {
        const { getByAltText } = await render(
            <NavigationItemsContainer isLight={false} />
        )

        const logo = getByAltText('coffeeroasters logo') as HTMLImageElement
        expect(logo).toBeInTheDocument()
    })
})
