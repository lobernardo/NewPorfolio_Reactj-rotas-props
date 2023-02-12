import styles from './SkillProp.module.css'


function SkillProp(props) {
    return(

        <div className={styles.skill__prop}>
            <img src={props.imageskill}></img>
            <h4>{props.titulo}</h4>
        </div>
    )
}

export default SkillProp