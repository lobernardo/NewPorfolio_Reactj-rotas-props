
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


import styles from './Footer.module.css'
import Container from "../ContainerSection/Container";


function Footer(){
        return(
          <Container>

          <footer className={styles.footer}>

              <ul className={styles.social_list}>
                <li><a href='https://github.com/lobernardo' target= '_blank'><FaGithub /></a></li>
                <li><a href='https://www.instagram.com/lobernardo/' target= '_blank'><FaInstagram /></a></li>
                <li><a href='https://www.linkedin.com/in/leonardo-obernardo/' target= '_blank'><FaLinkedin /></a></li>
              </ul>
                <p className={styles.copy}><span>E-mail:</span><a>leo.olivbernardo@gmail.com</a></p>
                <p className={styles.copy}>
                  <span>Portfóio</span>  &copy;  feito em 2022</p>
          </footer>

          </Container>
        )
    }

export default Footer