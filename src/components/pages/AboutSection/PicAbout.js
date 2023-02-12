import styles from './PicAbout.module.css'
import homeh from '../../assets/homeh.png'






function PicAbout() {
    return(

                <div className={styles.pic_about}>

                <img className={styles.back_img} src={homeh}/>
                         
                </div>


    )
}

export default PicAbout