import React from 'react'
import Image from 'next/image'
import styles from '../../styles/SmallCard.module.scss'

const SmallCard = (props) => {
    return(
        <div className={styles.container}>
            <div><Image src = {props.src} layout = "fill"/></div>
            {props.content}
        </div>
    );
}

export default SmallCard