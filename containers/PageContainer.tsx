import { HTMLAttributes, PropsWithChildren } from 'react'
import { Navbar, Footer } from '../components'

type PageContainerProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>

export const PageContainer = ({ className, children, ...elementProps }: PageContainerProps) => {
    return (
        <div
            className={className}
            {...elementProps}
        >
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}
