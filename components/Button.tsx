import classnames from 'classnames'
import { ButtonHTMLAttributes } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({ className, children, ...elementProps }: ButtonProps) => {
    return (
        <button
            className={classnames(
                'h-14 min-w-[217px] rounded-md bg-darkCyan px-4 font-fraunces text-lg font-black leading-[25px] text-lightCream transition-colors hover:bg-[#66D2CF] disabled:bg-[#E2DEDB] hover:disabled:bg-Grey',
                className
            )}
            {...elementProps}
        >
            {children}
        </button>
    )
}
