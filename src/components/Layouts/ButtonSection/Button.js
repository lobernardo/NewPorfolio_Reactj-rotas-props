
import styles from './Button.module.css'



function Button(props) {

  return(
    
      <div className={styles.button__conteiner}>
        <a href={props.caminho} target='_blank'><button className={styles.button__geral}>{props.name}</button>
        </a>
      </div>
  )
}

export default Button



