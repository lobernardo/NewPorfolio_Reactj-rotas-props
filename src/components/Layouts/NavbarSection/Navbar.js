import {Link} from 'react-router-dom'
import logoleo from '../../assets/logoleo.png'
import './style.css'
import { FaWhatsappSquare } from "react-icons/fa";


function Navbar() {
    return(
        <header className='menu' id='menu_section'>
        
        <img src={logoleo}/>
        <i class="icon icon-menu" id="toggle"></i>  
        
      <ul className='nav' id='menu_tog'>
        <li><Link className='link' to="/">Home</Link></li>
        <li><Link className='link' to="/about">Sobre</Link></li>
        <li><Link className='link' to="/skill">Tecnologias</Link></li>
        <li><Link className='link' to="/project">Projetos</Link></li>
      </ul>
      
      <div className='wpp'>
      <li><a href='https://wa.me/+5521991575613' target= '_blank'><FaWhatsappSquare alt="whatsapp" /></a></li>
      </div>
      </header>
    )
}

export default Navbar