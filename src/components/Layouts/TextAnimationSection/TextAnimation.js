
import 'animate.css';

import styles from './TextAnimation.module.css'

import curric_dev from '../../assets/curric_dev.pdf'

function TextAnimation() {
    return(

            <div className={styles.text_container} >
                    <h1 className='txt_title'>Leo Bernardo</h1>
                    <h4 className='animated_txt'><span>Full Stack</span> Developer</h4>
                
            </div>
                    
        
    )
}

export default TextAnimation