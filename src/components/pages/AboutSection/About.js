import styles from './About.module.css'
import Title from '../../Layouts/TitleSection/Title'
import Container from '../../Layouts/ContainerSection/Container'
import PicAbout from './PicAbout'
import TxtAbout from './TxtAbout'





function About() {
    return(
        <Container>

        <section className={styles.about__container}>

            <Title 
            className={styles.title__about}
            titulo="Sobre" />

            <div className={styles.capsula}>
            
                    <PicAbout />

                    <TxtAbout />

            </div>

        </section>

        </Container>
    )
}

export default About