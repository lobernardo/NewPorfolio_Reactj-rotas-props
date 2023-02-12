import 'animate.css';

import styles from './PicHome.module.css'

import leoperfilhome from '../../assets/leoperfilhome.png'


function PicHome() {
    return(

        <div className={styles.img_container}>
         <img className={styles.back_img} src={leoperfilhome}/>
        </div>
                    
        
    )
}

export default PicHome