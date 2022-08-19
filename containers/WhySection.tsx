import { WhyItem } from '../components'

export const WhySection = () => {
    return (
        <section className='mb-[351px] rounded-[10px] bg-darkGreyBlue px-[85px] pt-[100px] text-center text-lightCream'>
            <div className='mx-auto w-[540px] pb-[86px]'>
                <h2 className='pb-8 font-bold'>Why choose us?</h2>
                <p className='font-barlow font-extralight'>
                    A large part of our role is choosing which particular coffees will be featured in our range. This means
                    working closely with the best coffee growers to give you a more impactful experience on every level.
                </p>
            </div>
            <div className='relative -bottom-[151px] -mt-[151px] flex justify-center gap-[30px]'>
                <WhyItem
                    whyImage='coffee-bean'
                    whyHeading='Best quality'
                    whyText='Discover an endless variety of the world’s best artisan coffee from each of our roasters.'
                />
                <WhyItem
                    whyImage='gift'
                    whyHeading='Exclusive benefits'
                    whyText='Special offers and swag when you subscribe, including 30% off your first shipment.'
                />
                <WhyItem
                    whyImage='truck'
                    whyHeading='Free shipping'
                    whyText='We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.'
                />
            </div>
        </section>
    )
}
