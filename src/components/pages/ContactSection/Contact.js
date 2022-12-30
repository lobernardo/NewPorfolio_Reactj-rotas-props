import styles from './Contact.module.css'
import Title from '../../Layouts/TitleSection/Title'
import Input from './Input'

import img_contact from '../../assets/img_contact.png'

function Contact() {
    return(

        <section className={styles.contact_container}>

                <Title 
                className={styles.title__about}
                titulo="Me envie uma mensagem!" />


            <div className={styles.capsula}>        
            
            
                    <div className={styles.pic_contact}>

                    <Input />

                    <img className={styles.contact_img} src={img_contact}/>
                    
                    </div>
                


            </div>


        </section>
    )
}


export default Contact