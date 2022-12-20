import ButtonSec from '../../Layouts/ButtonSection/ButtonSec'
import './style.css'
import leoperfilhome from '../../assets/leoperfilhome.png'
import React from 'react';





function Home() {
    return(
        <div className='container__geral' id='home'>

            <div className='home__content'>

                <div className='img__content' id='home-ft'>
                <img src={leoperfilhome}/>
                </div>

                <div className='home__txt' id='texto-home'>
                    <h1>Olá, sou o Leonardo</h1>
                    <h4 className='txt-home'>Desenvolvedor <span>Front-End</span></h4>

                </div>
                
                <div className='button_home'><ButtonSec /></div>

            </div>
         

        </div>
    )
}

export default Home