import {Link} from 'react-router-dom'
import new_logo_pf from '../../assets/new_logo_pf.png'
import Container from '../ContainerSection/Container'
import ButtonMobile from '../MenuMobile/ButtonMobile'
import styles from './Navbar.module.css'

function Navbar() {
    return(
        

            <Container>
                
                <section className={styles.menu_section} id='menu'>
                  
                <Link to='/'><img className={styles.logo_leo} src={new_logo_pf}/></Link>

                <nav className={styles.navbar}>
                    
                    <ul className={styles.list}>
                      
                        

                          <li className={styles.item}><Link to='/'>Home</Link></li>
                        
                          <li className={styles.item}><Link to='/about'>Sobre</Link></li>
                      
                          <li className={styles.item}><Link to='/skill'>Tecnologias</Link></li>
                      
                          <li className={styles.item}><Link to='/project'>Projetos</Link></li>

                          <li className={styles.item}><Link to='/contact'>Contato</Link></li>
                          
                      

                    </ul>

             </nav>

             <div className={styles.section__mobile__logo_menu}> <ButtonMobile /></div>

             </section>

        </Container>
    )
}

export default Navbar




