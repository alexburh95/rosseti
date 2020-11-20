import React from 'react'
import styles from './Header.module.css'
import logotip from './../../img/logotip.png'
import hamburger from './../../img/hamburger.svg'

const Header = () => {
    return (
        <div className={styles.header}>
           <img src={logotip} alt='logo' />
          <button className={styles.hamburger_button}>  <img src={hamburger} alt='hamburger' className={styles.hamburger} /></button>
        </div>
    )
}

export default Header