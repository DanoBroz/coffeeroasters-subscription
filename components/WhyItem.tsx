interface WhyItemProps {
    whyImage: string
    whyHeading: string
    whyText: string
}

export const WhyItem = (props: WhyItemProps) => {
    const { whyImage, whyHeading, whyText } = props

    return (
        <div className='flex flex-col items-center rounded-lg bg-darkCyan p-12 pt-[72px]'>
            <div
                style={{ backgroundImage: `url('/assets/home/desktop/icon-${whyImage}.svg')` }}
                className='mb-14 h-[72px] w-[72px] bg-contain bg-center bg-no-repeat'
            ></div>
            <div className='grid gap-6'>
                <span className='font-fraunces text-2xl font-bold'>{whyHeading}</span>
                <p className='font-barlow font-extralight'>{whyText}</p>
            </div>
        </div>
    )
}
