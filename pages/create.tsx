import { RefObject, useRef, useState, MouseEvent } from 'react'
import { Button, Jumbotron, OptionsSelect } from '../components'
import { HowSection, PageContainer } from '../containers'
import { OptionsData } from '../data'
import { useUIDSeed } from 'react-uid'
import classnames from 'classnames'
import { useOpen } from '../hooks'
import SummaryModal from '../components/SummaryModal'

type Option = string | undefined

type Preferences = 'Capsule' | 'Filter' | 'Espresso' | Option
type BeanType = 'Single Origin' | 'Decaf' | 'Blended' | Option
type Quantity = '250g' | '500g' | '1000g' | Option
type GrindOption = 'Wholebean' | 'Filter' | 'Cafetiére' | Option
type Deliveries = 'Every week' | 'Every 2 weeks' | 'Every month' | Option

type Options = Preferences | BeanType | Quantity | GrindOption | Deliveries

export const handleScroll = (ref?: RefObject<HTMLDivElement>) => {
    if (ref?.current) ref.current.scrollIntoView({ behavior: 'smooth' })
    console.log('ref to scroll', ref?.current)
}

export default function Create() {
    const [preferences, setPreferences] = useState<Options>()
    const [beanType, setBeanType] = useState<Options>()
    const [quantity, setQuantity] = useState<Options>()
    const [grindOption, setGrindOption] = useState<Options>()
    const [deliveries, setDeliveries] = useState<Options>()

    const preferencesRef = useRef<HTMLDivElement>(null)
    const beanTypeRef = useRef<HTMLDivElement>(null)
    const quantityRef = useRef<HTMLDivElement>(null)
    const grindOptionRef = useRef<HTMLDivElement>(null)
    const deliveriesRef = useRef<HTMLDivElement>(null)
    const resultRef = useRef<HTMLDivElement>(null)

    const { openState, setOpenState } = useOpen()

    const uid = useUIDSeed()

    const placeholder = (changeText: Option) => (
        <span className='text-darkCyan'>{changeText || '_______'}</span>
    )

    const getRef = (item: string): RefObject<HTMLDivElement> => {
        switch (item) {
            default:
            case 'Preferences':
                return preferencesRef
            case 'Bean Type':
                return beanTypeRef
            case 'Quantity':
                return quantityRef
            case 'Grind Option':
                return grindOptionRef
            case 'Deliveries':
                return deliveriesRef
        }
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
                            Build a subscription plan that best fits your needs.
                            We offer an assortment of the best artisan coffees
                            from around the globe delivered fresh to your door.
                        </p>
                    </div>
                </Jumbotron>
                <HowSection
                    isDark
                    className='mb-[168px] px-[85px] py-[100px]'
                />
                <div className='mb-[168px] grid grid-cols-[255px_minmax(328px,_1fr)] gap-x-[125px] px-[85px]'>
                    <div className='sticky top-14 flex h-max flex-col items-start [&>*]:w-full'>
                        {[
                            'Preferences',
                            'Bean Type',
                            'Quantity',
                            'Grind Option',
                            'Deliveries',
                        ].map((item, index) => (
                            <button
                                onClick={() => handleScroll(getRef(item))}
                                disabled={
                                    item === 'Grind Option' &&
                                    preferences === 'Capsule'
                                }
                                key={uid(item)}
                                className={classnames(
                                    'flex gap-[29px] border-b border-Grey py-6 font-fraunces text-2xl font-bold opacity-40 transition-opacity first:pt-0 last:border-b-0 hover:opacity-60 disabled:opacity-20 disabled:hover:cursor-not-allowed disabled:hover:opacity-20 [&>span:first-child]:first:text-darkCyan',
                                    {
                                        'opacity-100 hover:opacity-80':
                                            (item === 'Preferences' &&
                                                !!preferences) ||
                                            (item === 'Bean Type' &&
                                                !!beanType) ||
                                            (item === 'Quantity' &&
                                                !!quantity) ||
                                            (item === 'Grind Option' &&
                                                !!grindOption) ||
                                            (item === 'Deliveries' &&
                                                !!deliveries),
                                    }
                                )}
                            >
                                <span className='text-Grey'>0{index + 1}</span>
                                <span className='text-darkGreyBlue'>
                                    {item}
                                </span>
                            </button>
                        ))}
                    </div>
                    <form className='grid justify-start gap-y-[88px]'>
                        <OptionsSelect
                            ref={preferencesRef}
                            nextRef={beanTypeRef}
                            optionHeading='How do you drink your coffee'
                            data={OptionsData.preferences}
                            select={preferences}
                            setSelect={setPreferences}
                            initialOpen
                        />
                        <OptionsSelect
                            ref={beanTypeRef}
                            nextRef={quantityRef}
                            optionHeading='What type of coffee'
                            data={OptionsData.beanType}
                            select={beanType}
                            setSelect={setBeanType}
                            isOptionOpen={!!preferences}
                        />
                        <OptionsSelect
                            ref={quantityRef}
                            nextRef={
                                preferences === 'Capsule'
                                    ? deliveriesRef
                                    : grindOptionRef
                            }
                            optionHeading='How much would you like'
                            data={OptionsData.quantity}
                            select={quantity}
                            setSelect={setQuantity}
                            isOptionOpen={!!beanType}
                        />
                        <OptionsSelect
                            ref={grindOptionRef}
                            nextRef={deliveriesRef}
                            optionHeading='Want us to grind them'
                            data={OptionsData.grindOption}
                            select={grindOption}
                            setSelect={setGrindOption}
                            isDisabled={preferences === 'Capsule'}
                            isOptionOpen={
                                !!quantity && preferences !== 'Capsule'
                            }
                        />
                        <OptionsSelect
                            ref={deliveriesRef}
                            nextRef={resultRef}
                            optionHeading='How often should we deliver'
                            data={OptionsData.deliveries}
                            select={deliveries}
                            setSelect={setDeliveries}
                            isOptionOpen={
                                !!grindOption ||
                                (preferences === 'Capsule' && !!quantity)
                            }
                        />
                        <div
                            ref={resultRef}
                            className='grid gap-y-[40px]'
                        >
                            <div className='rounded-[10px] bg-darkGreyBlue px-16 py-[47px]'>
                                <span className='mb-2 inline-block font-fraunces text-2xl font-bold text-Grey'>
                                    How it works
                                </span>
                                <p className='font-fraunces text-2xl font-bold leading-[40px] text-white'>
                                    “I drink my coffee using{' '}
                                    {placeholder(preferences)}, with a{' '}
                                    {placeholder(beanType)} type of bean.{' '}
                                    {placeholder(quantity)}
                                    {preferences !== 'Capsule' ? (
                                        <span>
                                            {' '}
                                            ground ala{' '}
                                            {placeholder(grindOption)}
                                        </span>
                                    ) : null}
                                    , sent to me {placeholder(deliveries)}.”
                                </p>
                            </div>
                            <div className='text-right'>
                                <Button
                                    onClick={(e: MouseEvent) => {
                                        e.preventDefault()
                                        setOpenState(true)
                                    }}
                                >
                                    Create my plan!
                                </Button>
                            </div>
                        </div>
                        <SummaryModal
                            show={openState}
                            onClose={() => setOpenState(false)}
                        >
                            <p className='mb-2 font-fraunces text-2xl font-bold leading-[40px]'>
                                “I drink my coffee using{' '}
                                {placeholder(preferences)}, with a{' '}
                                {placeholder(beanType)} type of bean.{' '}
                                {placeholder(quantity)}
                                {preferences !== 'Capsule' ? (
                                    <span>
                                        {' '}
                                        ground ala {placeholder(grindOption)}
                                    </span>
                                ) : null}
                                , sent to me {placeholder(deliveries)}.”
                            </p>
                        </SummaryModal>
                    </form>
                </div>
            </div>
        </PageContainer>
    )
}
