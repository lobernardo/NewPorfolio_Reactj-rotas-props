import {Link} from 'react-router-dom'
import logoleo from '../../assets/logoleo.png'
import { FaWhatsappSquare } from "react-icons/fa";
import Container from '../ContainerSection/Container'

import styles from './Navbar.module.css'

function Navbar() {
    return(
        

            <Container>
                <section className={styles.menu_section} id='menu'>
                  
                <Link to='/'><img className={styles.logo_leo} src={logoleo}/></Link>

                <nav className={styles.navbar}>
                    
                    <ul className={styles.list}>
                      
                        

                          <li className={styles.item}><Link to='/'>Home</Link></li>
                        
                          <li className={styles.item}><Link to='/about'>Sobre</Link></li>
                      
                          <li className={styles.item}><Link to='/skill'>Tecnologias</Link></li>
                      
                          <li className={styles.item}><Link to='/project'>Projetos</Link></li>

                          <li className={styles.item}><Link to='/contact'>Contato</Link></li>
                          

                          <li className={styles.item_wpp}><a href='https://wa.me/+5521991575613' target= '_blank'><FaWhatsappSquare alt="whatsapp" /></a></li>
                      

                    </ul>

             </nav>

             </section>

        </Container>
    )
}

export default Navbar




