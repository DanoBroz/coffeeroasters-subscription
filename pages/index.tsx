import type { NextPage } from 'next'
import { Button, Jumbotron } from '../components'
import { Collections, PageContainer } from '../containers'

const Home: NextPage = () => {
    return (
        <PageContainer>
            <div className='container'>
                <Jumbotron
                    bgUrl='home/desktop/image-hero-coffeepress.jpg'
                    className='mb-[262px]'
                >
                    <div className='max-w-[493px] py-[117px]'>
                        <div className='pb-14'>
                            <h1 className='pb-8'>Great coffee made simple.</h1>
                            <p className='pr-14 font-barlow text-[1rem] font-extralight leading-[26px]'>
                                Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from
                                our best roasters delivered directly to your door, at your schedule.
                            </p>
                        </div>
                        <Button>Create your plan</Button>
                    </div>
                </Jumbotron>
                <Collections />
            </div>
        </PageContainer>
    )
}

export default Home
