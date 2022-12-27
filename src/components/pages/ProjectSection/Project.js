import styles from './Project.module.css'
import Cardgit from '../CardGit/CardGit'


function Project(props) {
    return(
     <div className={styles.project__section}>
  

        <div className={styles.card__section}>
        <Cardgit />
        </div>

     </div>
    )
}

export default Project