
import 'animate.css';

import styles from './TextAnimation.module.css'

import curric_dev from '../../assets/curric_dev.pdf'

function TextAnimation() {
    return(

            <div className={styles.text_container} >
                    <h1 className='txt_title'>Leo Bernardo</h1>
                    <h4 className='animated_txt'>Desenvolvedor <span>Front-End</span></h4>
                    <button className={styles.btn_cv}><a href={curric_dev}  target="_blank">Download CV</a></button>
            </div>
                    
        
    )
}

export default TextAnimation