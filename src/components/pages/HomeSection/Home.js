import ButtonSec from '../../Layouts/ButtonSection/ButtonSec'
import './style.css'
import leoperfilhome from '../../assets/leoperfilhome.png'

function Home() {
    return(
        <div className='container__geral'>

            <div className='home__content'>

                <div className='img__content' id='home-ft'>
                <img src={leoperfilhome}/>
                </div>

                <div className='home__txt'>
                    <h1>Olá, sou o Leonardo</h1>
                    <h4>Desenvolvedor Front-End</h4>
                </div>

                <div className='button_home'><ButtonSec /></div>

            </div>


        </div>
    )
}

export default Home