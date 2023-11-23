import Link from 'next/link'
import Image from 'next/image'
import classnames from 'classnames'

interface ContainerProps {
    isLight?: boolean
}

export const NavigationItemsContainer = ({ isLight }: ContainerProps) => {
    return (
        <>
            <Link
                aria-label='coffeeroasters logo'
                href='/'
            >
                <a>
                    <Image
                        className='transition-opacity hover:opacity-80'
                        src={`/assets/shared/desktop/logo-${
                            isLight ? 'light' : 'dark'
                        }.svg`}
                        alt='coffeeroasters logo'
                        width='236px'
                        height='26px'
                    />
                </a>
            </Link>
            <div
                className={classnames(
                    'flex gap-8 font-barlow text-xs font-bold uppercase leading-[15px] tracking-[0.92px] text-Grey [&>*]:transition-colors',
                    {
                        'hover:[&>*]:text-darkGreyBlue': !isLight,
                        'hover:[&>*]:text-white': isLight,
                    }
                )}
            >
                <Link href='/'>home</Link>
                <Link href='/about'>about us</Link>
                <Link href='/create'>create your plan</Link>
            </div>
        </>
    )
}
