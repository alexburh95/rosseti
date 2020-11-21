import React from 'react'
import styles from './WhatsApp.module.css'

const WhatsApp = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.container__title}>Присоединитесь к нашему чату
WhatsApp</h2>

<button className={styles.whatsapp_button}>Присоедeниться &nbsp;<i className="fa fa-whatsapp" aria-hidden="true"></i></button>
        </div>
    )
}

export default WhatsApp