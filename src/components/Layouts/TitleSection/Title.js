import styles from './Title.module.css'

function Title(props) {
    return(
        <div className={styles.title__page}>
            <h3>{props.titulo}</h3>
            <p>{props.subtitle}</p>
        </div>
    )
}

export default Title