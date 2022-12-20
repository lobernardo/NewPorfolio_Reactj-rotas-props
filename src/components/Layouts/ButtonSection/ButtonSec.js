import './style.css';
import curric_dev from '../../assets/curric_dev.pdf'



export default function ButtonSec() {

  return(
    <section>
        <button className='button__all'><a href={curric_dev} target='_blank'>Download CV</a>
          
        </button>
    </section>
  )
}