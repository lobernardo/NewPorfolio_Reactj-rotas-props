import LinkButton from '../../Layouts/ButtonSection/LinkButton'

import leoperfilhome from '../../assets/leoperfilhome.png'



import styles from './Home.module.css'




function Home() {
    return(
        <section className={styles.home__section} id='home'>
        

            <div className={styles.text_container} >
                    <h1>Olá, sou o Leonardo</h1>
                    <h4 className='txt-home'>Desenvolvedor <span>Front-End</span></h4>
                    <LinkButton 
                    to="/contact"
                    text="Download CV" 
                    />
            </div>

            <div className={styles.img_container} >
                    <img src={leoperfilhome}/>
                

            </div>


        
         
        </section>
    )
}

export default Home