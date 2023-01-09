
import styles from './Cardgit.module.css'
import {useEffect, useState} from 'react';



export default function CardGit(props) {

    const [repositories, setRepositories] = useState([])

    useEffect( () => {
        fetch('https://api.github.com/users/lobernardo/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))
    }, [])


  return(

    
    
        <div className={styles.card__container}>
            
            { repositories.map(repository => {
            return(
                                    
                    <div key={repository.id} className={styles.card__projects}>

                                
                        <h4>{repository.name}</h4>
                                        
                        <p>{repository.description}</p>

                    <div className='buttons_project'>        
                        <button className={styles.btn_pj}><a href= {repository.html_url} target='_blank'>Repositório</a></button>
                        
                    </div>             
                                                        
                    </div>
            )
            })}

         </div>
    
                    
   
        
  );
}