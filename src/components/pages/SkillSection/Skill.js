
import styles from './Skill.module.css'

import Title from '../../Layouts/TitleSection/Title'



import Container from '../../Layouts/ContainerSection/Container'
import CardSkills from './CardSkills'




function Skill() {
    return(
        <Container>    
        <section className={styles.skill_container}>

        <Title 
                titulo="Conhecimentos" 
                subtitle="Clique nos cards para ver as certificações" />
                


        <div className={styles.capsula}>

        <CardSkills />

        </div>


        </section>
        </Container>
    )
}

export default Skill