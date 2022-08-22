import { Button, HowStep } from '../components'

export const HowSection = () => {
    return (
        <section className='mb-[200px] px-[85px]'>
            <span className='mb-[80px] inline-block font-fraunces text-2xl font-bold text-Grey'>How it works</span>
            <div className='bubble-container relative mb-[67px] flex max-w-[791px] items-center justify-between'>
                <span className='bubble'></span>
                <span className='bubble'></span>
                <span className='bubble'></span>
            </div>
            <div className='mb-[64px] grid grid-cols-3'>
                <HowStep
                    stepNumber={1}
                    headline='Pick your coffee'
                    content='Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices
                        for them. There are new coffees in all profiles every month for you to try out.'
                />
                <HowStep
                    stepNumber={2}
                    headline='Choose the frequency'
                    content='Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.'
                />
                <HowStep
                    stepNumber={3}
                    headline='Receive and enjoy!'
                    content='We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.'
                />
            </div>
            <Button>Create your plan</Button>
        </section>
    )
}
