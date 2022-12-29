import PicHome from '../../Layouts/PicHomeSection/PicHome';

import styles from './Home.module.css'

import Container from '../../Layouts/ContainerSection/Container';

import 'animate.css';

import TextAnimation from '../../Layouts/TextAnimationSection/TextAnimation'



function Home() {
    return(

        <Container>

        <section className={styles.home__section} id='home'>

            <TextAnimation />    

            <PicHome />
            
        </section>
        
        </Container>
    )
}

export default Home