import { useEffect, useState } from 'react'
import { Button, Jumbotron, OptionsSelect } from '../components'
import { HowSection, PageContainer } from '../containers'
import { OptionsData } from '../data'
import { useUIDSeed } from 'react-uid'
import classnames from 'classnames'

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

    const uid = useUIDSeed()

    useEffect(() => {
        console.log(preferences, beanType, quantity, grindOption, deliveries)
    }, [preferences, beanType, quantity, grindOption, deliveries])

    const placeholder = (changeText: Option) => <span className='text-darkCyan'>{changeText || '_______'}</span>

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
                    <div className='sticky top-14 flex h-max flex-col items-start [&>*]:w-full'>
                        {['Preferences', 'Bean Type', 'Quantity', 'Grind Option', 'Deliveries'].map((item, index) => (
                            <button
                                // href={`#${item.toLowerCase().split(' ').join('-')}`}
                                disabled={item === 'Grind Option' && preferences === 'Capsule'}
                                key={uid(item)}
                                className={classnames(
                                    'flex gap-[29px] border-b border-Grey py-6 font-fraunces text-2xl font-bold opacity-40 transition-opacity first:pt-0 last:border-b-0 hover:opacity-60 disabled:opacity-20 disabled:hover:cursor-not-allowed disabled:hover:opacity-20 [&>span:first-child]:first:text-darkCyan',
                                    {
                                        'opacity-100 hover:opacity-80':
                                            (item === 'Preferences' && !!preferences) ||
                                            (item === 'Bean Type' && !!beanType) ||
                                            (item === 'Quantity' && !!quantity) ||
                                            (item === 'Grind Option' && !!grindOption) ||
                                            (item === 'Deliveries' && !!deliveries),
                                    }
                                )}
                            >
                                <span className='text-Grey'>0{index + 1}</span>
                                <span className='text-darkGreyBlue'>{item}</span>
                            </button>
                        ))}
                    </div>
                    {/* TODO: add todo comment properly */}
                    <form className='grid justify-start gap-y-[88px]'>
                        <OptionsSelect
                            optionHeading='How do you drink your coffee'
                            data={OptionsData.preferences}
                            select={preferences}
                            setSelect={setPreferences}
                            initialOpen
                        />
                        <OptionsSelect
                            optionHeading='What type of coffee'
                            data={OptionsData.beanType}
                            select={beanType}
                            setSelect={setBeanType}
                            isOptionOpen={!!preferences}
                        />
                        <OptionsSelect
                            optionHeading='How much would you like'
                            data={OptionsData.quantity}
                            select={quantity}
                            setSelect={setQuantity}
                            isOptionOpen={!!beanType}
                        />
                        <OptionsSelect
                            optionHeading='Want us to grind them'
                            data={OptionsData.grindOption}
                            select={grindOption}
                            setSelect={setGrindOption}
                            isDisabled={preferences === 'Capsule'}
                            isOptionOpen={!!quantity && preferences !== 'Capsule'}
                        />
                        <OptionsSelect
                            optionHeading='How often should we deliver'
                            data={OptionsData.deliveries}
                            select={deliveries}
                            setSelect={setDeliveries}
                            isOptionOpen={!!grindOption || (preferences === 'Capsule' && !!quantity)}
                        />
                        <div className='grid gap-y-[40px]'>
                            <div className='rounded-[10px] bg-darkGreyBlue py-[47px] px-16'>
                                <span className='mb-2 inline-block font-fraunces text-2xl font-bold text-Grey'>How it works</span>
                                <p className='font-fraunces text-2xl font-bold leading-[40px] text-white'>
                                    “I drink my coffee using {placeholder(preferences)}, with a {placeholder(beanType)} type of
                                    bean. {placeholder(quantity)}
                                    {preferences !== 'Capsule' ? <span> ground ala {placeholder(grindOption)}</span> : null}, sent
                                    to me {placeholder(deliveries)}.”
                                </p>
                            </div>
                            <div className='text-right'>
                                <Button>Create my plan!</Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </PageContainer>
    )
}

export default Create
