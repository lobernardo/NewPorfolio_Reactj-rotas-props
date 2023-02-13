import styles from './Contact.module.css'
import Title from '../../Layouts/TitleSection/Title'
import FormContact from './FormContact'

import CardSocial from './CardSocial'


function Contact() {
    return(

        <section className={styles.contact_container}>

                


            <div className={styles.capsula}>        
            
            
                <div className={styles.pic_contact}>
                
                            <div className={styles.form_container}>

                               <FormContact />
                               <CardSocial />

                            </div>
            

                    
                </div>
                


            </div>


        </section>
    )
}


export default Contact