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
    const { imageSrc, alt, itemHeading, itemText, className, ...elementProps } = props

    return (
        <div
            className={classnames('flex max-w-[255px] flex-col text-center', className)}
            {...elementProps}
        >
            <div>
                <Image
                    src={`/assets/home/desktop/image-${imageSrc}.png`}
                    alt={alt}
                    width={255}
                    height={193}
                />
            </div>
            <span className='font-fraunces font-black uppercase'>{itemHeading}</span>
            <span className='font-barlow leading-[26px]'>{itemText}</span>
        </div>
    )
}
