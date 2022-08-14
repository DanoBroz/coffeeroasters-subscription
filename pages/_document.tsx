/* eslint-disable @next/next/google-font-display */
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <meta
                    name='description'
                    content='Coffeeroaster Subscription App for FrontendMentor challenge'
                />
                <link
                    rel='icon'
                    type='image/png'
                    sizes='32x32'
                    href='/favicon.png'
                />
                <link
                    href='https://fonts.googleapis.com/css2?family=Fraunces'
                    rel='stylesheet'
                />
                <link
                    href='https://fonts.googleapis.com/css2?family=Barlow'
                    rel='stylesheet'
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
