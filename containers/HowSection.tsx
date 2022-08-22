export const HowSection = () => {
    return (
        <section className='px-[85px]'>
            <span className='mb-[80px] inline-block font-fraunces text-2xl font-bold text-Grey'>How it works</span>
            <div className='bubble-container relative mb-[67px] flex max-w-[791px] items-center justify-between'>
                <span className='bubble'></span>
                <span className='bubble'></span>
                <span className='bubble'></span>
            </div>
            <div>
                <div className='max-w-[285px]'>
                    <span className='inline-block pb-[38px] font-fraunces text-[72px] font-bold leading-none text-paleOrange'>
                        01
                    </span>
                    <span className='inline-block pr-[30px] pb-[42px] font-fraunces text-[32px] font-bold leading-[36px] text-darkGreyBlue'>
                        Pick your coffee
                    </span>
                    <p className='font-barlow leading-[1.625rem]'>
                        Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices
                        for them. There are new coffees in all profiles every month for you to try out.
                    </p>
                </div>
            </div>
        </section>
    )
}
