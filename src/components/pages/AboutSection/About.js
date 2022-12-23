import styles from './About.module.css'
import homeh from '../../assets/homeh.png'



function About() {
    return(
        <section className={styles.about__container}>

            <h3 className={styles.page__title}>Sobre</h3>
        
            <div className={styles.about__card}>

              
                        <div className={styles.card_u}>
                                <div className={styles.card_u_img}>
                                     <img className={styles.back_img} src={homeh}/>
                                </div>
                        </div>

                        <div className={styles.card_t}>

                            <div className={styles.card_u_txt}>
                            <p>Me chamo Leonardo, tenho 33 anos e natural do Rio de janeiro. Apaixonado por tecnologia, viagens e futebol.</p>
                            <p>Tenho toda minha experiência profissional, até então, no setor comercial com diversas qualificações. Experiências importantes que me possibilitaram o desenvolvimento das minhas Softskills, como comunicação eficaz(escrita e oral), organização, capacidade analítica, trabalho em equipe, orientação a resultados e empatia.</p> 
                            <p>Atualmente curso Ciência da computação na faculdade e possuo diversos cursos com foco no desenvolvimento Front-End.</p>      
                            <p>Me considero consistente, focado, orientado a resultados e ágil. Sempre com sede de novos conhecimentos e vontade de superar qualquer desafio.</p>
                            </div>
                        </div>

            </div>

         
            
        </section>
    )
}

export default About