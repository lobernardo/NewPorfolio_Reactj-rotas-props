import {Link} from 'react-router-dom'
import logoleo from '../../assets/logoleo.png'
import { FaWhatsappSquare } from "react-icons/fa";
import Container from '../ContainerSection/Container'

import styles from './Navbar.module.css'

function Navbar() {
    return(
        <nav className={styles.navbar}>

            <Container>

                 <Link to='/'><img className={styles.logo_leo} src={logoleo}/></Link>
                  
                  
                <ul className={styles.list}>

                  <li className={styles.item}><Link to='/'>Home</Link></li>
                 
                  <li className={styles.item}><Link to='/about'>Sobre</Link></li>
               
                  <li className={styles.item}><Link to='/skill'>Tecnologias</Link></li>
               
                  <li className={styles.item}><Link to='/project'>Projetos</Link></li>

                </ul>
                
                <div className={styles.wpp}>
                  <li><a href='https://wa.me/+5521991575613' target= '_blank'><FaWhatsappSquare alt="whatsapp" /></a></li>
                </div>

            </Container>

        </nav>

    )
}

export default Navbar




