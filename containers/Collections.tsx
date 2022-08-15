import Image from 'next/image'
import { CollectionItem } from '../components'

export const Collections = () => {
    return (
        <section className='relative grid grid-cols-4 justify-items-center gap-[30px] px-[85px] pb-[200px]'>
            <span className='absolute -top-[100px] z-0 max-w-[1111px] bg-gradient-to-b from-[#DDDDDB] to-white bg-clip-text text-center font-fraunces text-[150px] font-black leading-none text-transparent'>
                our collection
            </span>
            <CollectionItem
                imageSrc='gran-espresso'
                alt='gran espresso image'
                itemHeading='gran espresso'
                itemText='Light and flavorful blend with cocoa and black pepper for an intense experience.'
            />
            <CollectionItem
                imageSrc='planalto'
                alt='planalto image'
                itemHeading='planalto'
                itemText='Brazilian dark roast with rich and velvety body, and hints of fruits and nuts.'
            />
            <CollectionItem
                imageSrc='piccollo'
                alt='piccollo image'
                itemHeading='piccollo'
                itemText='Mild and smooth blend featuring notes of toasted almond and dried cherry.'
            />
            <CollectionItem
                imageSrc='danche'
                alt='danche image'
                itemHeading='danche'
                itemText='Ethiopian hand-harvested blend densely packed with vibrant fruit notes.'
            />
        </section>
    )
}
