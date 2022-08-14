import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Frontend Mentor | Coffeeroasters subscription site</title>
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
            </Head>
            <h1 className='text-blue-800 text-2xl'>Hello there</h1>
        </div>
    )
}

export default Home
