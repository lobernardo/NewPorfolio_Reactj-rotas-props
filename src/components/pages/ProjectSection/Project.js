import styles from './Project.module.css'
import Cardgit from '../CardGit/CardGit'
import Container from '../../Layouts/ContainerSection/Container'
import Title from '../../Layouts/TitleSection/Title'

function Project(props) {
    return(
        <Container>

        <section className={styles.project__container}>
  
            <Title 
            titulo="Projetos" />

            <div className={styles.capsula}>

            <Cardgit />
            
            </div>

        </section>

        </Container>
    )
}

export default Project