import { Jumbotron } from '../components'
import { PageContainer } from '../containers'

function About() {
    return (
        <PageContainer>
            <div className='container'>
                <Jumbotron
                    bgUrl='about/desktop/image-hero-whitecup.jpg'
                    className='mb-[168px] py-[137px]'
                >
                    <div className='grid max-w-[445px]'>
                        <h2 className='mb-6 capitalize'>about us</h2>
                        <p className='font-barlow leading-[26px]'>
                            Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from
                            around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every
                            shipment.
                        </p>
                    </div>
                </Jumbotron>
            </div>
        </PageContainer>
    )
}

export default About
