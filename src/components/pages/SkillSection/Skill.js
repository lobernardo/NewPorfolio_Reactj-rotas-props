import './style.css'

import js from '../../assets/js.png'
import typescript from '../../assets/typescript.png'
import react from '../../assets/react.png'
import csslogo from '../../assets/csslogo.png'
import html from '../../assets/html.png'
import nodejs from '../../assets/nodejs.png'
import angular from '../../assets/angular.png'
import git from '../../assets/git.png'



function Skill() {
    return(
        <div className='container__skill'>
            <h1>Tecnologias e conhecimentos</h1>

            <div className='box__skills' id='cont__skill'>

                <div className='card-skills'>
                <img src={js}/>
                    <div className='txt-card'>
                        <h4>Javascript</h4>
                        <button><a href='https://www.devmedia.com.br/certificado/tecnologia/javascript/leonardo-de-oliveira-bernardo' target='_blank'>Certificações</a></button>
                    </div>
                </div>

                <div className='card-skills'>
                <img src={typescript}/>
                    <div className='txt-card'>
                        <h4>Typescript</h4>
                        <button><a href='https://www.devmedia.com.br/cursos/certificado/?id=149185' target='_blank'>Certificações</a></button>
                    </div>
                </div>

                <div className='card-skills'>
                <img src={react}/>
                    <div className='txt-card'>
                        <h4>React JS</h4>
                        <button><a href='https://www.devmedia.com.br/certificado/tecnologia/react/leonardo-de-oliveira-bernardo' target='_blank'>Certificações</a></button>
                    </div>
                </div>

                <div className='card-skills'>
                <img src={csslogo}/>
                    <div className='txt-card'>
                        <h4>CSS</h4>
                        <button><a href='https://www.devmedia.com.br/certificado/tecnologia/css/leonardo-de-oliveira-bernardo' target='_blank'>Certificações</a></button>
                    </div>
                </div>

                <div className='card-skills'>
                <img src={html}/>
                    <div className='txt-card'>
                        <h4>HTML</h4>
                        <button><a href='https://www.devmedia.com.br/certificado/tecnologia/html/leonardo-de-oliveira-bernardo' target='_blank'>Certificações</a></button>
                    </div>
                </div>

                <div className='card-skills'>
                <img src={angular}/>
                    <div className='txt-card'>
                        <h4>Angular</h4>
                        <button><a href='https://hermes.digitalinnovation.one/certificates/D3F3549C.pdf' target='_blank'>Certificações</a></button>
                    </div>
                </div>

                <div className='card-skills'>
                <img src={nodejs}/>
                    <div className='txt-card'>
                        <h4>Node JS</h4>
                        <button><a href='https://www.devmedia.com.br/certificado/tecnologia/node-js/leonardo-de-oliveira-bernardo' target='_blank'>Certificações</a></button>
                    </div>
                </div>

                <div className='card-skills'>
                <img src={git}/>
                    <div className='txt-card'>
                        <h4>Git e Github</h4>
                      
                    </div>
                </div>



            </div>
        </div>
    )
}

export default Skill