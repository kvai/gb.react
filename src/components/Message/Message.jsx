import React from "react"
import styles from './styles.module.css'

export const Message = ({ data }) => {
    return (
        <React.Fragment>
            <div className={styles.textMessage} 
                style={{textAlign: "center"}}>
                {data.react}
            </div>
            <p className={styles.description}>{data.description}</p>
        </React.Fragment>
    )
}