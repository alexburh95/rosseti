import React from 'react'
import styles from './VoteBody.module.css'

const data = [
    {
        name: 'first',
        answer:
            'Отсутствие четких критериев и понятного перечня технологий "Цифровой РЭС"',
    },
]

const VoteItem = props => {
  
    return (
        <label>
            <input type='radio' value={props.number} name={props.name} />
            <span>{props.answer}</span>
        </label>
    )
}

const VoteBody = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.VoteBody_title}>
                Выбрать наиболее значимую проблему создания Цифровых РЭС:
            </h2>
            {data.map((item, index) => {
                return (
                    <VoteItem
                        answer={item.answer}
                        name={item.name}
                        number={index + 1}
                    />
                )
            })}
        </div>
    )
}

export default VoteBody
