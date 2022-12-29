import styles from './Container.module.css'


function Container(props) {
    return(
        <div className={`${styles.container_section} ${styles[props.customClass]}`}>
            {props.children}
        </div>
    )
}

export default Container