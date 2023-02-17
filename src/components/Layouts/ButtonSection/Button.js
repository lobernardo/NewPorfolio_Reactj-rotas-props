
import styles from './Button.module.css'



function Button(props) {

  return(
    
      <div className={styles.button__conteiner}>
        <button className={styles.button__geral}>{props.name}</button>
        <a>{props.caminho}</a>
      </div>
  )
}

export default Button



