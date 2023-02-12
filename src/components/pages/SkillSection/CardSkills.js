import styles from './CardSkills.module.css'
import SkillsProp from './SkillsProp'

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

            <a href="https://www.devmedia.com.br/certificado/tecnologia/javascript/leonardo-de-oliveira-bernardo" target="_blank"><SkillsProp 
            imageskill={js}
            titulo="JavaScript"
            
            /></a>
            
        </div>


        <div className={styles.card_skills}>

        <a href="https://www.devmedia.com.br/certificado/tecnologia/javascript/leonardo-de-oliveira-bernardo" target="_blank"><SkillsProp 
            imageskill={typescript}
            titulo="TypeScript"
            
            /></a>
            
        </div>

        <div className={styles.card_skills}>

        <a href="https://www.devmedia.com.br/certificado/tecnologia/react/leonardo-de-oliveira-bernardo" target="_blank"><SkillsProp 
            imageskill={react}
            titulo="React JS"
            
            /></a>
            
        </div>

        <div className={styles.card_skills}>

            <a href="https://www.devmedia.com.br/certificado/tecnologia/java/leonardo-de-oliveira-bernardo" target="_blank"><SkillsProp 
            imageskill={java}
            titulo="JAVA"
    
            /></a>
    
        </div>

        <div className={styles.card_skills}>

            <a href="https://www.devmedia.com.br/certificado/tecnologia/css/leonardo-de-oliveira-bernardo" target="_blank"><SkillsProp 
            imageskill={csslogo}
            titulo="CSS 3"

            /></a>

        </div>

        <div className={styles.card_skills}>

            <a href="https://www.devmedia.com.br/certificado/tecnologia/html/leonardo-de-oliveira-bernardo" target="_blank"><SkillsProp 
            imageskill={html}
            titulo="HTML 5"

            /></a>

        </div>

        <div className={styles.card_skills}>

                <a href="https://www.devmedia.com.br/certificado/tecnologia/node-js/leonardo-de-oliveira-bernardo" target="_blank"><SkillsProp 
                imageskill={nodejs}
                titulo="Node JS"

                /></a>

        </div>


        <div className={styles.card_skills}>

                <a href="https://hermes.digitalinnovation.one/certificates/D3F3549C.pdf" target="_blank"><SkillsProp 
                imageskill={angular}
                titulo="Angular"

                /></a>

        </div>

        <div className={styles.card_skills}>

                <a href="https://hermes.digitalinnovation.one/certificates/D3F3549C.pdf" target="_blank"><SkillsProp 
                imageskill={git}
                titulo="Git e GitHub"

                /></a>

        </div>


    </div>


    )
}

export default CardSkills