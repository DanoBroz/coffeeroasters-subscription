import classnames from 'classnames'
import { Dispatch, SetStateAction, MouseEvent, useRef } from 'react'
import { useOpen } from '../hooks'

type Option = string | undefined
type SetOption = Dispatch<SetStateAction<Option>>

interface OptionData {
    heading: string
    text: string
}

interface OptionsSelectProps {
    select: Option
    setSelect: SetOption
    data: OptionData[]
}

export function OptionsSelect({ select, setSelect, data }: OptionsSelectProps) {
    const { openState: optionsOpen, setOpenState: setOptionsOpen } = useOpen()

    const optionRef = useRef<HTMLDivElement>(null)
    const optionScrollHeight = `${optionRef.current?.scrollHeight}px`

    const handleOptionChange = (e: MouseEvent, value: string, setFunction: SetOption) => {
        e.preventDefault()
        setFunction(value)
    }

    const handleOptionView = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setOptionsOpen((prevState) => !prevState)
    }

    return (
        <div>
            <button
                onClick={handleOptionView}
                className='flex w-full items-center justify-between font-fraunces text-[2.5rem] font-bold leading-[3rem] text-Grey transition-colors hover:text-darkGreyBlue'
            >
                <span className='inline-block'>How do you drink your coffee?</span>
                <span
                    style={{ backgroundImage: `url('/assets/plan/desktop/icon-arrow.svg')` }}
                    className={classnames(
                        'inline-block h-[11.92px] w-[18.19px] bg-cover bg-center bg-no-repeat transition-transform',
                        {
                            'rotate-180': optionsOpen,
                        }
                    )}
                ></span>
            </button>
            <div
                ref={optionRef}
                className={classnames('accordion-options grid grid-cols-3 gap-x-[23px]', {
                    'max-h-0 overflow-hidden': !optionsOpen,
                    [`max-h-[${optionScrollHeight}]`]: optionsOpen,
                })}
            >
                {data.map((item, index) => (
                    <button
                        key={`${item.heading}-${index}`}
                        className={classnames('flex h-[250px] flex-col gap-6 rounded-lg px-7 py-8 text-left transition-colors', {
                            'bg-[#F4F1EB] text-darkGreyBlue hover:bg-paleOrange': select !== item.heading,
                            'bg-darkCyan text-lightCream': select === item.heading,
                        })}
                        onClick={(e) => handleOptionChange(e, item.heading, setSelect)}
                    >
                        <span className='block font-fraunces text-2xl font-bold'>{item.heading}</span>
                        <span className='font-ligth block font-barlow leading-[26px]'>{item.text}</span>
                    </button>
                ))}
            </div>
        </div>
    )
}
