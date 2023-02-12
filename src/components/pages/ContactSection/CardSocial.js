import styles from './CardSocial.module.css'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";

function CardSocial() {

    return(

        <div className={styles.cardsocial_container}>
            
                <div className={styles.cards_social}>
                    <h4>Redes sociais</h4>
                    <ul>
                        <li><a href='https://www.linkedin.com/in/leonardo-obernardo/' target= '_blank'><FaLinkedin /></a></li>
                        <li><a href='https://github.com/lobernardo' target= '_blank'><FaGithub /></a></li>
                        <li><a href='https://www.instagram.com/lobernardo/' target= '_blank'><FaInstagram /></a></li>
                    </ul>

                </div>

                <div className={styles.cards_social}>
                    <h4>Email</h4>
                    <ul>
                        <li>leo.olivbernardo@gmail.com</li>
                    </ul>

                </div>

                <div className={styles.cards_social}>
                    <h4>Telefone</h4>
                    <ul>
                    <li className={styles.wpp_contact}><a href='https://wa.me/5521991575613' target= '_blank'><FaWhatsappSquare /></a>21 99157-5613</li>
                    </ul>

                </div>


            
        </div>
    )
}


export default CardSocial