import './style.css';

import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";





export default function Footer() {

  return(
    <section>
    <footer>
    
      <p className="paragrafo" id='parag'>
        Disposto e ansioso para colaborar com sua empresa.
      </p>
      <div className="iconesRodape">
        <a href='https://www.instagram.com/lobernardo/' target= '_blank'><FaInstagram alt="instagram" /></a>
        <a href='https://www.linkedin.com/in/leonardo-obernardo/' target= '_blank'><FaLinkedin alt="linkedin"/></a>
        <a href='https://github.com/lobernardo' target= '_blank'><FaGithub alt="github"/></a>
      </div>
  
      <div>
        <p className="copyright">Feito em 2022 &copy; <span>Leonardo de Oliveira Bernardo</span></p>
      </div>

    </footer>
    </section>
  )
}