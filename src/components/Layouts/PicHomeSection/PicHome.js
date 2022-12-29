import 'animate.css';

import styles from './PicHome.module.css'

import avatarhome from '../../assets/avatarhome.png'


function PicHome() {
    return(

        <div className={styles.img_container}>
        <img src={avatarhome}/>
        </div>
                    
        
    )
}

export default PicHome