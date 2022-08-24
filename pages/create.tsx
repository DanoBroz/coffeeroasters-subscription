import { useState } from 'react'
import { Jumbotron } from '../components'
import { HowSection, PageContainer } from '../containers'

type Preferences = 'Capsule' | 'Filter' | 'Espresso' | undefined
type BeanType = 'Single Origin' | 'Decaf' | 'Blended' | undefined
type Quantity = '250g' | '500g' | '1000g' | undefined
type GrindOption = 'Wholebean' | 'Filter' | 'Cafetiére' | undefined
type Deliveries = 'Every week' | 'Every 2 weeks' | 'Every month' | undefined

function Create() {
    const [preferences, setPreferences] = useState<Preferences>()
    const [beanType, setBeanType] = useState<BeanType>()
    const [quantity, setQuantity] = useState<Quantity>()
    const [grindOption, setGrindOption] = useState<GrindOption>()
    const [deliveries, setDeliveries] = useState<Deliveries>()

    return (
        <PageContainer>
            <div className='container'>
                <Jumbotron
                    bgUrl='plan/desktop/image-hero-blackcup.jpg'
                    className='mb-[168px]'
                >
                    <div className='grid max-w-[486px] gap-8 py-[134px]'>
                        <h1>Create a plan</h1>
                        <p className='pr-[41px] font-barlow font-light'>
                            Build a subscription plan that best fits your needs. We offer an assortment of the best artisan
                            coffees from around the globe delivered fresh to your door.
                        </p>
                    </div>
                </Jumbotron>
                <HowSection
                    isDark
                    className='mb-[168px] py-[100px] px-[85px]'
                />
                <div className='grid grid-cols-[255px_minmax(328px,_1fr)] gap-x-[125px] px-[85px]'>
                    <div className='grid'>
                        {['Preferences', 'Bean Type', 'Quantity', 'Grind Option', 'Deliveries'].map((item, index) => (
                            <a
                                href={`#${item.toLowerCase().split(' ').join('-')}`}
                                key={`item-${index}`}
                                className='flex gap-[29px] border-b border-Grey py-6 font-fraunces text-2xl font-bold opacity-40 transition-opacity first:pt-0 last:border-b-0 hover:opacity-60 [&>span:first-child]:first:text-darkCyan'
                            >
                                <span className='text-Grey'>0{index + 1}</span>
                                <span className='text-darkGreyBlue'>{item}</span>
                            </a>
                        ))}
                    </div>
                    <div className='grid'>
                        <div className=''></div>
                    </div>
                </div>
            </div>
        </PageContainer>
    )
}

export default Create
