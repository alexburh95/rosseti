import React from 'react'
import styles from './SeminarSection.module.css'

const SeminarSection = () => {
    return (
        <div className={styles.container}>
           <h2 className={styles.container__title}>Семинар-совещание <br />
"Цифровая трансформация <br />

группы компаний "Россети"</h2>
<h3 className={styles.container__description}> Место проведения: г. Сургут</h3> 

<h3 className={`${styles.container__description} ${styles.container__description2}`}
> Дата проведения: <span>23-24 ноября 2020 года</span> </h3> 
<button className={styles.container__button}>Войти</button>
        </div>
    )
}

export default SeminarSection