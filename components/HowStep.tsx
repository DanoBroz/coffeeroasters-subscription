interface HowStepProps {
    stepNumber: number
    headline: string
    content: string
}

export const HowStep = (props: HowStepProps) => {
    const { stepNumber, headline, content } = props
    return (
        <div className='max-w-[285px]'>
            <span className='inline-block pb-[38px] font-fraunces text-[72px] font-bold leading-none text-paleOrange'>
                {stepNumber}
            </span>
            <span className='inline-block pr-[30px] pb-[42px] font-fraunces text-[32px] font-bold leading-[36px] text-darkGreyBlue'>
                {headline}
            </span>
            <p className='font-barlow leading-[1.625rem]'>{content}</p>
        </div>
    )
}
