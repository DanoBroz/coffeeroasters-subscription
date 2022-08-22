import { Jumbotron } from '../components'
import { PageContainer } from '../containers'
import Image from 'next/image'

function About() {
    return (
        <PageContainer>
            <div className='container'>
                <Jumbotron
                    bgUrl='about/desktop/image-hero-whitecup.jpg'
                    className='mb-[168px] py-[137px]'
                >
                    <div className='grid max-w-[445px]'>
                        <h2 className='mb-6 capitalize'>about us</h2>
                        <p className='font-barlow leading-[26px]'>
                            Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from
                            around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every
                            shipment.
                        </p>
                    </div>
                </Jumbotron>
                <div className='mb-[168px] grid grid-cols-[445px_minmax(340px,_1fr)] items-center justify-start gap-x-[125px] px-[85px]'>
                    <div
                        style={{ backgroundImage: `url('/assets/about/desktop/image-commitment.jpg')` }}
                        className='h-[520px] w-[445px] rounded-lg bg-cover bg-center bg-no-repeat'
                    ></div>
                    <div>
                        <h2 className='pb-8'>Our commitment</h2>
                        <p className='font- font-barlow text-darkGreyBlue'>
                            We’re built on a simple mission and a commitment to doing good along the way. We want to make it easy
                            for you to discover and brew the world’s best coffee at home. It all starts at the source. To locate
                            the specific lots we want to purchase, we travel nearly 60 days a year trying to understand the
                            challenges and opportunities in each of these places. We collaborate with exceptional coffee growers
                            and empower a global community of farmers through with well above fair-trade benchmarks. We also offer
                            training, support farm community initiatives, and invest in coffee plant science. Curating only the
                            finest blends, we roast each lot to highlight tasting profiles distinctive to their native growing
                            region.
                        </p>
                    </div>
                </div>
                <div className='mb-[168px] grid grid-cols-[minmax(340px,_1fr)_445px] gap-x-[125px] rounded-[10px] bg-darkGreyBlue px-[85px] text-lightCream'>
                    <div className='pt-[88px]'>
                        <h2 className='pb-8'>Uncompromising quality</h2>
                        <p className='font- font-barlow'>
                            Although we work with growers who pay close attention to all stages of harvest and processing, we
                            employ, on our end, a rigorous quality control program to avoid over-roasting or baking the coffee
                            dry. Every bag of coffee is tagged with a roast date and batch number. Our goal is to roast
                            consistent, user-friendly coffee, so that brewing is easy and enjoyable.
                        </p>
                    </div>
                    <div
                        style={{ backgroundImage: `url('/assets/about/desktop/image-quality.jpg')` }}
                        className='relative -top-[88px] h-[474px] w-[445px] rounded-lg bg-cover bg-center bg-no-repeat'
                    ></div>
                </div>
            </div>
        </PageContainer>
    )
}

export default About
