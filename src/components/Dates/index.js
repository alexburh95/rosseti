import React from 'react'
import styles from './Dates.module.css'

const Dates = () => {
    return (
        <div className={styles.container}>
            <button className={styles.grey}>23 Ноября</button>
            <button className={styles.grey}>24 Ноября</button>
        </div>
    )
}

export default Dates
