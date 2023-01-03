import styles from './Contact.module.css'
import Title from '../../Layouts/TitleSection/Title'
import Input from './Input'

import contact_pic2 from '../../assets/contact_pic2.png'

function Contact() {
    return(

        <section className={styles.contact_container}>

                <Title 
                className={styles.title__about}
                titulo="Fale comigo!" />


            <div className={styles.capsula}>        
            
            
                    <div className={styles.pic_contact}>

                    <Input />

                    <img className={styles.contact_img} src={contact_pic2}/>
                    
                    </div>
                


            </div>


        </section>
    )
}


export default Contact