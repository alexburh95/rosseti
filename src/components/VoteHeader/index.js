import React from 'react'
import styles from './VoteHeader.module.css'

const VoteHeader = () => {
    return (
        <div className={styles.container}>
    <h2 className={styles.title}>Голосование</h2>
    <button className={styles.vote_button}>Перейти к голосованию</button>
        </div>
    )
}

export default VoteHeader