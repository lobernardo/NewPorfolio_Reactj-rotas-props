import 'animate.css';

import styles from './PicHome.module.css'

import leo_home3 from '../../assets/leo_home3.png'


function PicHome() {
    return(

        <div className={styles.img_container}>
         <img className={styles.back_img} src={leo_home3}/>
        </div>
                    
        
    )
}

export default PicHome