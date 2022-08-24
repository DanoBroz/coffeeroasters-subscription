import classnames from 'classnames'
import { Dispatch, SetStateAction, MouseEvent } from 'react'

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
    const handleOptionChange = (e: MouseEvent, value: string, setFunction: SetOption) => {
        e.preventDefault()
        setFunction(value)
    }

    return (
        <div className='grid grid-cols-3 gap-x-[23px]'>
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
    )
}
