import classnames from 'classnames'
import Image from 'next/image'
import { HTMLAttributes } from 'react'

interface CollectionItemConfig {
    imageSrc: string
    alt: string
    itemHeading: string
    itemText: string
}

type CollectionItemProps = HTMLAttributes<HTMLDivElement> & CollectionItemConfig

export const CollectionItem = (props: CollectionItemProps) => {
    const { imageSrc, alt, itemHeading, itemText, className, ...elementProps } =
        props

    return (
        <div
            className={classnames(
                'grid max-w-[255px] text-center text-darkGreyBlue',
                className
            )}
            {...elementProps}
        >
            <div className='pb-[71.5px]'>
                <Image
                    src={`/assets/home/desktop/image-${imageSrc}.png`}
                    alt={alt}
                    width={255}
                    height={193}
                    priority
                />
            </div>
            <h4
                aria-label='collection heading'
                className='pb-6 font-fraunces text-2xl font-black capitalize'
            >
                {itemHeading}
            </h4>
            <p
                role='textbox'
                aria-label='collection text'
                className='font-barlow leading-[26px]'
            >
                {itemText}
            </p>
        </div>
    )
}
