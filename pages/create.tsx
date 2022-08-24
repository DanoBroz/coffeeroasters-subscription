import classnames from 'classnames'
import { Dispatch, MouseEvent, SetStateAction, useEffect, useState } from 'react'
import { Jumbotron } from '../components'
import { HowSection, PageContainer } from '../containers'

type Option = string | undefined

type Preferences = 'Capsule' | 'Filter' | 'Espresso' | Option
type BeanType = 'Single Origin' | 'Decaf' | 'Blended' | Option
type Quantity = '250g' | '500g' | '1000g' | Option
type GrindOption = 'Wholebean' | 'Filter' | 'Cafetiére' | Option
type Deliveries = 'Every week' | 'Every 2 weeks' | 'Every month' | Option

type Options = Preferences | BeanType | Quantity | GrindOption | Deliveries

function Create() {
    const [preferences, setPreferences] = useState<Preferences | string>()
    const [beanType, setBeanType] = useState<string | undefined>()
    const [quantity, setQuantity] = useState<string | undefined>()
    const [grindOption, setGrindOption] = useState<string | undefined>()
    const [deliveries, setDeliveries] = useState<string | undefined>()

    useEffect(() => {
        console.log(preferences, beanType, quantity, grindOption, deliveries)
    }, [preferences, beanType, quantity, grindOption, deliveries])

    const handleOptionChange = (e: MouseEvent, value: string, setFunction: Dispatch<SetStateAction<Option>>) => {
        e.preventDefault()
        setFunction(value)
    }

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
                    <form className='grid'>
                        <div className='grid grid-cols-3 gap-x-[23px]'>
                            {[
                                { heading: 'Capsule', text: 'Compatible with Nespresso systems and similar brewers' },
                                { heading: 'Filter', text: 'For pour over or drip methods like Aeropress, Chemex, and V60' },
                                {
                                    heading: 'Espresso',
                                    text: 'Dense and finely ground beans for an intense, flavorful experience',
                                },
                            ].map((item, index) => (
                                <button
                                    key={`${item.heading}-${index}`}
                                    className={classnames(
                                        'flex h-[250px] flex-col gap-6 rounded-lg px-7 py-8 text-left transition-colors',
                                        {
                                            'bg-[#F4F1EB] text-darkGreyBlue hover:bg-paleOrange': preferences !== item.heading,
                                            'bg-darkCyan text-lightCream': preferences === item.heading,
                                        }
                                    )}
                                    onClick={(e) => handleOptionChange(e, item.heading, setPreferences)}
                                >
                                    <span className='block font-fraunces text-2xl font-bold'>{item.heading}</span>
                                    <span className='font-ligth block font-barlow leading-[26px]'>{item.text}</span>
                                </button>
                            ))}
                        </div>
                    </form>
                </div>
            </div>
        </PageContainer>
    )
}

export default Create
