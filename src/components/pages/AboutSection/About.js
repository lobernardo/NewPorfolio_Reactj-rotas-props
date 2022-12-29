import styles from './About.module.css'
import lbernardo from '../../assets/lbernardo.png'
import Title from '../../Layouts/TitleSection/Title'
import Container from '../../Layouts/ContainerSection/Container'





function About() {
    return(
        <Container>

        <section className={styles.about__container}>

            <Title 
            className={styles.title__about}
            titulo="Sobre" />

        <div className={styles.capsula}>
         
                <div className={styles.card_u}>

                            <div className={styles.card_u_img}>
                                <img className={styles.back_img} src={lbernardo}/>
                            </div>

                </div>

                <div className={styles.card_u}>

                            <div className={styles.card_u_txt}>
                                <p>Me chamo Leonardo, tenho 33 anos e sou natural do Rio de janeiro. Apaixonado por tecnologia, viagens e futebol.</p>
                                <p>Tenho toda minha experiência profissional(12 anos), até então, no setor comercial com diversas qualificações. Experiências importantes que me possibilitaram o desenvolvimento das minhas Softskills, como comunicação eficaz(escrita e oral), organização, capacidade analítica, trabalho em equipe, orientação a resultados e empatia.</p> 
                                <p>Hoje curso Ciência da computação, e possuo diversos cursos extracurriculares com foco no desenvolvimento Front-End, além de conhecimento em outras tecnologias também.</p>      
                                <p><span>Me considero consistente, focado, orientado a resultados e ágil. Sempre com sede de novos conhecimentos e vontade de superar qualquer desafio.</span></p>
                            </div>

                </div>

        </div>

        </section>

        </Container>
    )
}

export default About