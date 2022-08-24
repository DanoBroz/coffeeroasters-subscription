import classnames from 'classnames'
import { Dispatch, MouseEvent, SetStateAction, useEffect, useState } from 'react'
import { Button, Jumbotron, OptionsSelect } from '../components'
import { HowSection, PageContainer } from '../containers'
import { OptionsData } from '../data'

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
                <div className='mb-[168px] grid grid-cols-[255px_minmax(328px,_1fr)] gap-x-[125px] px-[85px]'>
                    <div className='sticky top-14 flex h-max flex-col items-start [&>a]:w-full'>
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
                    <form className='grid justify-start gap-y-[88px]'>
                        <OptionsSelect
                            data={OptionsData.preferences}
                            select={preferences}
                            setSelect={setPreferences}
                        />
                        <OptionsSelect
                            data={OptionsData.beanType}
                            select={beanType}
                            setSelect={setBeanType}
                        />
                        <OptionsSelect
                            data={OptionsData.quantity}
                            select={quantity}
                            setSelect={setQuantity}
                        />
                        <OptionsSelect
                            data={OptionsData.grindOption}
                            select={grindOption}
                            setSelect={setGrindOption}
                        />
                        <OptionsSelect
                            data={OptionsData.deliveries}
                            select={deliveries}
                            setSelect={setDeliveries}
                        />
                        <div className='text-right'>
                            <Button>Create my plan!</Button>
                        </div>
                    </form>
                </div>
            </div>
        </PageContainer>
    )
}

export default Create
