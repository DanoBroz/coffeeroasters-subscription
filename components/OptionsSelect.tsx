import classnames from 'classnames'
import {
    Dispatch,
    SetStateAction,
    MouseEvent,
    useRef,
    useEffect,
    RefObject,
    forwardRef,
} from 'react'
import { useOpen } from '../hooks'
import { handleScroll } from '../pages/create'

type Option = string | undefined
type SetStateType<SetType> = Dispatch<SetStateAction<SetType>>

interface OptionData {
    heading: string
    text: string
}

interface OptionsSelectProps {
    optionHeading: string
    select: Option
    setSelect: SetStateType<Option>
    isDisabled?: boolean
    initialOpen?: boolean
    isOptionOpen?: boolean
    data: OptionData[]
    nextRef?: RefObject<HTMLDivElement>
}

// eslint-disable-next-line react/display-name
export const OptionsSelect = forwardRef<HTMLDivElement, OptionsSelectProps>(
    (props, ref) => {
        const {
            select,
            setSelect,
            data,
            optionHeading,
            isDisabled,
            initialOpen,
            isOptionOpen,
            nextRef,
        } = props
        const { openState: optionsOpen, setOpenState: setOptionsOpen } =
            useOpen(initialOpen)

        const optionRef = useRef<HTMLDivElement>(null)
        const optionScrollHeight = `${optionRef.current?.scrollHeight}px`

        const handleOptionChange = (
            e: MouseEvent,
            value: string,
            setFunction: SetStateType<Option>
        ) => {
            e.preventDefault()
            setFunction(value)
        }

        const handleOptionView = (e: MouseEvent<HTMLButtonElement>) => {
            e.preventDefault()
            setOptionsOpen((prevState) => !prevState)
        }

        useEffect(() => {
            isOptionOpen && setOptionsOpen(true)
            !isOptionOpen && initialOpen === undefined && setOptionsOpen(false)
        }, [initialOpen, isOptionOpen, setOptionsOpen])

        return (
            <div ref={ref}>
                <button
                    disabled={isDisabled}
                    onClick={handleOptionView}
                    className={classnames(
                        'flex w-full items-center justify-between font-fraunces text-[2.5rem] font-bold leading-[3rem] text-Grey transition-colors hover:text-darkGreyBlue disabled:opacity-40 disabled:hover:cursor-not-allowed disabled:hover:text-Grey',
                        {
                            'mb-14': optionsOpen,
                        }
                    )}
                >
                    <span className='inline-block'>{optionHeading}?</span>
                    <span
                        style={{
                            backgroundImage: `url('/assets/plan/desktop/icon-arrow.svg')`,
                        }}
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
                    onClick={() => handleScroll(nextRef)}
                    className={classnames(
                        'accordion-options grid grid-cols-3 gap-x-[23px]',
                        {
                            'max-h-0 overflow-hidden': !optionsOpen,
                            [`max-h-[${optionScrollHeight}]`]: optionsOpen,
                        }
                    )}
                >
                    {data.map((item, index) => (
                        <button
                            key={`${item.heading}-${index}`}
                            className={classnames(
                                'flex h-[250px] flex-col gap-6 rounded-lg px-7 py-8 text-left transition-colors',
                                {
                                    'bg-[#F4F1EB] text-darkGreyBlue hover:bg-paleOrange':
                                        select !== item.heading,
                                    'bg-darkCyan text-lightCream':
                                        select === item.heading,
                                }
                            )}
                            onClick={(e) =>
                                handleOptionChange(e, item.heading, setSelect)
                            }
                        >
                            <span className='block font-fraunces text-2xl font-bold'>
                                {item.heading}
                            </span>
                            <span className='font-ligth block font-barlow leading-[26px]'>
                                {item.text}
                            </span>
                        </button>
                    ))}
                </div>
            </div>
        )
    }
)
