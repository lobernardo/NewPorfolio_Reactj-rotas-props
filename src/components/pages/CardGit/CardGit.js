
import styles from './Cardgit.module.css'
import {useEffect, useState} from 'react';
import Button from '../../Layouts/ButtonSection/Button'



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

                <div  className={styles.btn__cardgit__container}>

                    <Button 
                    name="Repositório"
                    caminho="" 
                     />   

                    <Button 
                    name="Prévia"  
                    caminho=""    
                    />
                    
                </div>
                                                        
                    </div>
            )
            })}

         </div>
    
                    
   
        
  );
}