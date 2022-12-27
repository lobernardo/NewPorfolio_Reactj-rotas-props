import styles from './Project.module.css'
import Cardgit from '../CardGit/CardGit'
import Container from '../../Layouts/ContainerSection/Container'

function Project(props) {
    return(
        <Container>
     <div className={styles.project__section}>
  

        <div className={styles.card__section}>
        <Cardgit />
        </div>

     </div>
        </Container>
    )
}

export default Project