import './style.css';
import homeh from '../../assets/homeh.png'

function About() {
    return(
        <div className="container__geral">
            <h1>Sobre</h1>

            <div className='card__container'>

                <div className="card" id='foto-about'>
                <img src={homeh}/>
                </div>

                <div className="card" id='txt-about'>
                  
                    <p>Me chamo Leonardo, tenho 33 anos e natural do Rio de janeiro. Apaixonado por tecnologia, viagens e futebol.</p>
                    <p>Tenho toda minha experiência profissional, até então, no setor comercial com diversas qualificações. Experiências importantes que me possibilitaram o desenvolvimento das minhas Softskills, como comunicação eficaz(escrita e oral), organização, capacidade analítica, trabalho em equipe, orientação a resultados e empatia.</p> 
                    <p>Atualmente curso Ciência da computação na faculdade e possuo diversos cursos com foco no desenvolvimento Front-End.</p>      
                    <p>Me considero consistente, focado, orientado a resultados e ágil. Sempre com sede de novos conhecimentos e vontade de superar qualquer desafio.</p>
                
                </div>

            </div>
            
        </div>
    )
}

export default About