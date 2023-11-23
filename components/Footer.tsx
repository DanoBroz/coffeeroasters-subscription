import { NavigationItemsContainer } from '../containers'
import Image from 'next/image'

export const Footer = () => {
    const getIcon = (icon: string) => `/assets/shared/desktop/icon-${icon}.svg`

    return (
        <div
            role='contentinfo'
            aria-label='footer'
            className='container mb-[88px] flex items-center justify-between bg-darkGreyBlue px-[85px] py-[47px]'
        >
            <div className='flex items-center gap-[103px]'>
                <NavigationItemsContainer isLight />
            </div>
            <div className='flex gap-6'>
                {['facebook', 'twitter', 'instagram'].map((icon) => (
                    <Image
                        className='transition-opacity hover:cursor-pointer hover:opacity-80'
                        key={`icon-${icon}`}
                        src={getIcon(icon)}
                        width={24}
                        height={24}
                        alt={`${icon} icon`}
                    />
                ))}
            </div>
        </div>
    )
}
