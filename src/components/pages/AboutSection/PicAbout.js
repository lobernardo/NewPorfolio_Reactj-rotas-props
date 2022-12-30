import styles from './PicAbout.module.css'
import lbernardo from '../../assets/lbernardo.png'






function PicAbout() {
    return(

                <div className={styles.pic_about}>

                <img className={styles.back_img} src={lbernardo}/>
                         
                </div>


    )
}

export default PicAbout