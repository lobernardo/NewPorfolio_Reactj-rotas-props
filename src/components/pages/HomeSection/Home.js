

import avatarhome from '../../assets/avatarhome.png'

import curric_dev from '../../assets/curric_dev.pdf'

import styles from './Home.module.css'

import 'animate.css';



function Home() {
    return(
        <section className={styles.home__section} id='home'>
        

            <div className={styles.text_container} >
                    <h1 className='txt_title'>Leo Bernardo</h1>
                    <h4 className='animated_txt'>Desenvolvedor <span>Front-End</span></h4>
                    <a className={styles.buttonSec} href={curric_dev}  target="_blank">Download CV</a>
            </div>
                    
            

            <div className={styles.img_container}>
                    <img src={avatarhome}/>
                

            </div>


        
         
        </section>
    )
}

export default Home