import { MouseEvent, ReactNode } from 'react'
import { Button } from './Button'
import Link from 'next/link'

interface ModalProps {
    show: boolean
    onClose: () => void
    children: ReactNode
}

const SummaryModal = ({ show, onClose, children }: ModalProps) => {
    if (!show) {
        return null
    }

    return (
        <div
            className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'
            onClick={onClose}
        >
            <div
                className='relative max-w-[540px] overflow-hidden rounded bg-white shadow-lg'
                onClick={(e: MouseEvent) => e.stopPropagation()}
            >
                <h2 className='bg-darkGreyBlue px-14 pt-12 pb-10 capitalize text-white'>
                    order summary
                </h2>
                <div className='p-14 text-Grey'>
                    {children}
                    <p className='pb-12'>
                        Is this correct? You can proceed to checkout or go back
                        to plan selection if something is off. Subscription
                        discount codes can also be redeemed at the checkout.
                    </p>
                    <div className='flex items-center justify-between'>
                        <h3 className='text-darkGreyBlue'>$14.00/ mo</h3>
                        <Link href='/'>
                            <Button>Checkout</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SummaryModal
