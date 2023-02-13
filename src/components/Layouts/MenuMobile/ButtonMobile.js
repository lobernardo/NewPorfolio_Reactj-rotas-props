import React, { useState } from 'react';
import MenuMobile from './MenuMobile';
import styles from './ButtonMobile.module.css'

import mobbco from '../../assets/mobbco.png'


const ButtonMobile = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <header>
      <button className={styles.mobile__btn} 
      onMouseOver={() => setOpen(!isOpen)}> <img className={styles.logo_menu_mobile} src={mobbco}/>
      </button>
       

     {isOpen && <MenuMobile />} 
     

    </header>
  );
};

export default ButtonMobile;