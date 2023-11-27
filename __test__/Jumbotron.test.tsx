import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Jumbotron } from '../components'

test('Jumbotron renders with given background image', () => {
    render(
        <Jumbotron bgUrl='shared/desktop/bg-boost-mobile.svg'>
            <div>Test</div>
        </Jumbotron>
    )
    const jumbotron = screen.getByRole('img', { name: /background/i })
    expect(jumbotron).toBeInTheDocument()
    expect(jumbotron).toHaveStyle({
        backgroundImage: `url('/assets/shared/desktop/bg-boost-mobile.svg')`,
    })
})
