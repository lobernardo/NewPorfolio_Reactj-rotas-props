
import styles from './Project.module.css'

import './style.css'
import CardGit from '../CardGit/CardGit';

function Project() {



    return(
        <section className={styles.project__section}>
            <h3>Projetos</h3>

                    <CardGit />

                   
        </section>
    )
}

export default Project