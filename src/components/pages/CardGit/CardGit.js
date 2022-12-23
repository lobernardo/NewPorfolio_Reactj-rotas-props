import './style.css';
import {useEffect, useState} from 'react';

export default function CardGit(props) {

    const [repositories, setRepositories] = useState([])

    useEffect( () => {
        fetch('https://api.github.com/users/lobernardo/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))
    }, [])


  return(


                    <div className='container__project'>
                        
                    <div className='card__container'>
                        { repositories.map(repository => {
                            return(
                                
                                <div key={repository.id} className='card__projects'>

                               
                                    <h3>{repository.name}</h3>
                                    
                                    <p>{repository.description}</p>
                                    <button className='button__pjt'><a href= {repository.html_url} target='_blank'>Veja mais</a></button>
                                 
                               
                                
                                </div>
                            )
                        })}
                    </div>
                    
                    </div>
        
  );
}