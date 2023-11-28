import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { HowStep } from '../components'

const renderComponent = () => {
    render(
        <HowStep
            stepNumber={1}
            headline='Pick your coffee'
            content='Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.'
        />
    )
}

describe('HowStep renders with all components', () => {
    test('renders step number', () => {
        renderComponent()
        const stepNumber = screen.getByText(/01/i)

        expect(stepNumber).toBeInTheDocument()
    })

    test('renders headline', () => {
        renderComponent()
        const headline = screen.getByText(/pick your coffee/i)

        expect(headline).toBeInTheDocument()
    })

    test('renders content', () => {
        renderComponent()
        const content = screen.getByText(
            /select from our evolving range of artisan coffees\. our beans are ethically sourced and we pay fair prices for them\. there are new coffees in all profiles every month for you to try out\./i
        )

        expect(content).toBeInTheDocument()
    })

    test('renders light cream text', () => {
        render(
            <HowStep
                stepNumber={1}
                headline='Pick your coffee'
                content='Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.'
                isDark={true}
            />
        )
        const lightCreamText = screen.getByText(/pick your coffee/i)

        expect(lightCreamText).toHaveClass('text-lightCream')
    })

    test('renders dark grey text', () => {
        render(
            <HowStep
                stepNumber={1}
                headline='Pick your coffee'
                content='Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.'
                isDark={false}
            />
        )
        const darkGreyText = screen.getByText(/pick your coffee/i)

        expect(darkGreyText).toHaveClass('text-darkGreyBlue')
    })
})
