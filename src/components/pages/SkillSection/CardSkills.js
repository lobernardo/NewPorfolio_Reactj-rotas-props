import styles from './CardSkills.module.css'

import js from '../../assets/js.png'
import typescript from '../../assets/typescript.png'
import react from '../../assets/react.png'
import csslogo from '../../assets/csslogo.png'
import html from '../../assets/html.png'
import nodejs from '../../assets/nodejs.png'
import angular from '../../assets/angular.png'
import git from '../../assets/git.png'
import java from '../../assets/java.png'




function CardSkills(props) {
    return(

        <div className={styles.cardskills_container}>

        <div className={styles.card_skills}>

            <img src={js}/>
                <div className={styles.txt_card}>
                    <h4>Javascript</h4>
                </div>
            <button className={styles.btn_skill}><a href="https://www.devmedia.com.br/certificado/tecnologia/javascript/leonardo-de-oliveira-bernardo"  
            target="_blank">Certificações</a></button>
                    
        </div>


        <div className={styles.card_skills}>

                <img src={typescript}/>
                    <div className={styles.txt_card}>
                        <h4>Typescript</h4>
                    </div>
                    <button className={styles.btn_skill}> <a href="https://www.devmedia.com.br/cursos/certificado/?id=149185"  
                    target="_blank">Certificações</a></button>
            
        </div>

        <div className={styles.card_skills}>
        <img src={react}/>
            <div className={styles.txt_card}>
                <h4>React JS</h4>
            </div>
            <button className={styles.btn_skill}><a href="https://www.devmedia.com.br/certificado/tecnologia/react/leonardo-de-oliveira-bernardo"  
            target="_blank">Certificações</a></button>
        </div>

        <div className={styles.card_skills}>
        <img src={csslogo}/>
            <div className={styles.txt_card}>
                <h4>CSS</h4>
            </div>
            <button className={styles.btn_skill}><a  href="https://www.devmedia.com.br/certificado/tecnologia/css/leonardo-de-oliveira-bernardo"  
            target="_blank"> Certificações</a> </button>

        </div>

        <div className={styles.card_skills}>
        <img src={html}/>
            <div className={styles.txt_card}>
                <h4>HTML</h4>
            </div>
            <button className={styles.btn_skill}><a href="https://www.devmedia.com.br/certificado/tecnologia/html/leonardo-de-oliveira-bernardo"  
            target="_blank">Certificações</a></button>
        </div>

        <div className={styles.card_skills}>
        <img src={angular}/>
            <div className={styles.txt_card}>
                <h4>Angular</h4>
            </div>
            <button className={styles.btn_skill}><a  href="https://hermes.digitalinnovation.one/certificates/D3F3549C.pdf"  
            target="_blank">Certificações</a></button>
        </div>

        <div className={styles.card_skills}>
        <img src={nodejs}/>
            <div className={styles.txt_card}>
                <h4>Node JS</h4>
            </div>
            <button className={styles.btn_skill}><a  href="https://www.devmedia.com.br/certificado/tecnologia/node-js/leonardo-de-oliveira-bernardo"  
            target="_blank">Certificações</a></button>
        </div>


        <div className={styles.card_skills}>
        <img src={java}/>
            <div className={styles.txt_card}>
                <h4>Java</h4>
            </div>
            <button className={styles.btn_skill}><a  href="https://www.devmedia.com.br/certificado/tecnologia/java/leonardo-de-oliveira-bernardo"  
            target="_blank">Certificações</a></button>
        </div>


        <div className={styles.card_skills}>
        <img src={git}/>
            <div className={styles.txt_card}>
                <h4>Git e Github</h4>
            </div>
        </div>

    </div>


    )
}

export default CardSkills