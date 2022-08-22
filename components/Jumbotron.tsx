import classnames from 'classnames'
import { HTMLAttributes, PropsWithChildren } from 'react'

interface JumbotronConfig {
    bgUrl: string
}

type JumbotronProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>> & JumbotronConfig

export const Jumbotron = (props: JumbotronProps) => {
    const { bgUrl, children, className, ...elementProps } = props

    return (
        <div
            style={{ backgroundImage: `url('/assets/${bgUrl}')` }}
            className={classnames(
                `flex flex-col justify-center rounded-[10px] bg-cover bg-center bg-no-repeat pl-[85px] text-lightCream`,
                className
            )}
            {...elementProps}
        >
            {children}
        </div>
    )
}
