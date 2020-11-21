import React from 'react'
import styles from './Footer.module.css'
import insta from './img/instagram.png'
import '../../../node_modules/font-awesome/css/font-awesome.min.css'; 

const Footer = () => {
    return (
        
        <div className={styles.footer}>
<div className={styles.copyright}>

    <p className={styles.description}>2020 РОССЕТИ <br /> Все права защищены</p>
</div>
            <div className={styles.social_network}>
                <a href="#"> <i className="fa fa-instagram" aria-hidden="true"></i></a>
                <a href="#">  <i className="fa fa-vk" aria-hidden="true"></i></a>

                <a href="#">     <i className="fa fa-facebook" aria-hidden="true"></i></a>

             
               
            </div>
        </div>
     
    )
}

export default Footer